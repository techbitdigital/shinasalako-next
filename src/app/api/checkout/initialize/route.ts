import { NextResponse } from "next/server";
import { getProduct } from "@/lib/registry";
import { rateLimit, getIP } from "@/lib/rate-limit";
import { randomUUID } from "crypto";

/**
 * POST /api/checkout/initialize
 * 
 * Creates a Paystack transaction server-side.
 * The client sends only: { productId, email, name, metadata? }
 * The server looks up the price from the registry — never trusts client amount.
 * Returns: { accessCode, reference, amount } for the Paystack popup.
 */
export async function POST(req: Request) {
  // Rate limit
  const { allowed } = rateLimit(getIP(req), "payment");
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  try {
    const { productId, email, name, metadata = {} } = await req.json();

    // Validate inputs
    if (!productId || !email || !name) {
      return NextResponse.json(
        { error: "Missing required fields: productId, email, name" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Look up product — price comes from server, never client
    const product = getProduct(productId);
    if (!product) {
      return NextResponse.json(
        { error: "Invalid product" },
        { status: 400 }
      );
    }

    // Generate a unique reference
    const reference = `SS-${productId.toUpperCase()}-${randomUUID().split("-")[0].toUpperCase()}-${Date.now()}`;

    // Initialize transaction with Paystack API
    const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: product.amountNaira * 100, // convert to kobo
        reference,
        currency: "NGN",
        metadata: {
          name,
          product: product.name,
          productId: product.id,
          ...metadata,
        },
      }),
    });

    if (!paystackRes.ok) {
      const error = await paystackRes.json();
      console.error("Paystack initialize error:", error);
      return NextResponse.json(
        { error: "Failed to initialize payment" },
        { status: 502 }
      );
    }

    const { data } = await paystackRes.json();

    return NextResponse.json({
      accessCode: data.access_code,
      reference: data.reference,
      amount: product.amountNaira,
      productName: product.name,
    });

  } catch (error) {
    console.error("Checkout initialize error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
