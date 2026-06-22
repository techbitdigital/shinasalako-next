import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, reference, product, amount } = await req.json();
    if (!email || !reference) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    await resend.emails.send({
      from: `Shina Salako <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [email],
      subject: `Your order confirmed — ${product}`,
      html: `
        <p>Thank you for your purchase.</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Reference:</strong> ${reference}</p>
        <p><strong>Amount:</strong> ₦${Number(amount).toLocaleString()}</p>
        <p>Your materials will be delivered to this email shortly.</p>
        <p>— Shina Salako</p>
      `,
    });

    await resend.emails.send({
      from: `Shina Salako Website <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New Joseph Protocol purchase — ${product}`,
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Product:</strong> ${product}</p><p><strong>Reference:</strong> ${reference}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
