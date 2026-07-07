import { NextResponse } from "next/server";
import { rateLimit, getIP } from "@/lib/rate-limit";
import { createHmac } from "crypto";
import { Resend } from "resend";
import { generateDownloadUrl } from "@/lib/r2";
import { PRODUCT_FILE_MAP, requiresDigitalDelivery } from "@/lib/products";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Paystack Webhook Handler
 *
 * Security model:
 * 1. Verify HMAC-SHA512 signature using PAYSTACK_WEBHOOK_SECRET
 * 2. Only process "charge.success" events
 * 3. Generate a pre-signed R2 download URL (48hr expiry)
 * 4. Send delivery email with the signed URL
 *
 * This is the ONLY place digital delivery is triggered.
 * The client-side book-purchase routes only send notification
 * emails to the team — they do NOT trigger delivery.
 */
export async function POST(req: Request) {
  const { allowed } = rateLimit(getIP(req), "payment");
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-paystack-signature");

    // 1. Verify webhook signature
    if (!signature || !process.env.PAYSTACK_SECRET_KEY) {
      console.error("Webhook: missing signature or secret");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const expectedSignature = createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
      .update(rawBody)
      .digest("hex");

    if (signature !== expectedSignature) {
      console.error("Webhook: signature mismatch");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    // 2. Parse event
    const event = JSON.parse(rawBody);

    if (event.event !== "charge.success") {
      // Acknowledge non-delivery events without processing
      return NextResponse.json({ received: true });
    }

    const data = event.data;
    const email = data.customer?.email;
    const name = data.metadata?.name || data.customer?.email;
    const product = data.metadata?.product || data.metadata?.custom_fields?.[0]?.value || "";
    const reference = data.reference;
    const amountKobo = data.amount;
    const amountNaira = amountKobo / 100;

    if (!email || !product) {
      console.error("Webhook: missing email or product in metadata", { email, product });
      return NextResponse.json({ received: true });
    }

    console.log(`Webhook: charge.success for ${product} — ${email} — ref ${reference}`);

    // 3. Generate download URL if digital product
    let downloadUrl: string | null = null;
    const fileKey = PRODUCT_FILE_MAP[product];

    if (requiresDigitalDelivery(product) && fileKey) {
      try {
        downloadUrl = await generateDownloadUrl(fileKey);
      } catch (err) {
        console.error("Webhook: failed to generate download URL", err);
        // Still send email but without download link — team will follow up manually
      }
    }

    // 4. Send delivery email
    const isPhysical = !requiresDigitalDelivery(product) || !fileKey;

    await resend.emails.send({
      from: `Shina Salako <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [email],
      subject: `Your order confirmed — ${product}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <p>Hi ${name},</p>

          <p>Thank you for your purchase of <strong>${product}</strong>.</p>

          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; color: #666;">Payment reference</td>
              <td style="padding: 8px; border: 1px solid #eee;">${reference}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; color: #666;">Amount paid</td>
              <td style="padding: 8px; border: 1px solid #eee;">&#8358;${amountNaira.toLocaleString()}</td>
            </tr>
          </table>

          ${downloadUrl ? `
          <div style="background: #1A3C6E; padding: 24px; border-radius: 8px; text-align: center; margin: 24px 0;">
            <p style="color: #fff; margin: 0 0 16px; font-size: 16px;">Your download is ready.</p>
            <a href="${downloadUrl}"
               style="display: inline-block; background: #FF6B00; color: #fff; padding: 14px 28px;
                      border-radius: 999px; text-decoration: none; font-weight: bold; font-size: 15px;">
              Download ${product}
            </a>
            <p style="color: rgba(235,243,251,0.7); margin: 16px 0 0; font-size: 12px;">
              This link expires in 48 hours. Download and save your file now.
            </p>
          </div>
          ` : ""}

          ${isPhysical ? `
          <p>Your physical order will be dispatched within 1&ndash;2 business days.
             We will send a tracking update when it ships.</p>
          ` : ""}

          ${!downloadUrl && !isPhysical ? `
          <p>Your digital download will be sent to this email shortly.
             If it does not arrive within the hour, please contact us at
             <a href="mailto:enquiries@salcomms.com">enquiries@salcomms.com</a>
             with your payment reference.</p>
          ` : ""}

          <p style="margin-top: 24px;">
            &mdash; Shina Salako &amp; the SALCOMMS team
          </p>
        </div>
      `,
    });

    // 5. Notify team
    await resend.emails.send({
      from: `Shina Salako Website <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New purchase — ${product} — ${name}`,
      html: `
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Customer:</strong> ${name} (${email})</p>
        <p><strong>Amount:</strong> &#8358;${amountNaira.toLocaleString()}</p>
        <p><strong>Reference:</strong> ${reference}</p>
        <p><strong>Digital delivery:</strong> ${downloadUrl ? "Sent automatically" : isPhysical ? "Physical — manual dispatch needed" : "FAILED — follow up manually"}</p>
      `,
    });

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error("Webhook error:", error);
    // Return 200 to prevent Paystack retrying on our bug
    return NextResponse.json({ received: true });
  }
}
