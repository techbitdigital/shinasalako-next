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
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Missing email" }, { status: 400 });

    await resend.emails.send({
      from: `Shina Salako <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [email],
      subject: "You are on the list — The Joseph Protocol Quiz",
      html: `
        <p>Thank you for signing up.</p>
        <p>We will notify you the moment the <strong>Find Your Phase</strong> quiz goes live on The Joseph Protocol.</p>
        <p>In the meantime, you might find the other two books useful:</p>
        <ul>
          <li><a href="https://shinasalako.com/entrepreneur-os">The Entrepreneur Operating System</a> — for the founder who has become the bottleneck</li>
          <li><a href="https://shinasalako.com/fleet">Fleet & Telematics</a> — for fleet leaders in emerging markets</li>
        </ul>
        <p>— Shina Salako</p>
      `,
    });

    await resend.emails.send({
      from: `Shina Salako Website <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New Joseph Protocol waitlist signup — ${email}`,
      html: `<p><strong>Email:</strong> ${email}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
