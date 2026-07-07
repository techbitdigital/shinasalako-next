import { Resend } from "resend";
import { rateLimit, getIP } from "@/lib/rate-limit";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { allowed } = rateLimit(getIP(req));
  if (!allowed) {
    return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });
  }

  try {
    const { name, email } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    await resend.emails.send({
      from: "Shina Salako <hello@shinasalako.com>",
      to: [email],
      subject: "Your First Look — Telematics & Fleet Management",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for requesting the First Look. Here is what is included in your PDF:</p>
        <ul>
          <li>Foreword + introduction + the operating credo</li>
          <li>Chapter 1 in full — Fleet Management & Telematics Foundations</li>
          <li>Opening of the Guinness Nigeria case study (first 1,000 words)</li>
          <li>The maturity-model framework as a one-page diagnostic</li>
        </ul>
        <p><strong><a href="https://shinasalako.com/assets/downloads/first-look.pdf">Download the First Look PDF</a></strong></p>
        <p>You are now on the quarterly practitioner note list — one substantive piece per quarter. Unsubscribe anytime.</p>
        <p>— Shina Salako</p>
      `,
    });
    await resend.emails.send({
      from: "Shina Salako Website <hello@shinasalako.com>",
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New First Look request — ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
