import { Resend } from "resend";
import { NextResponse } from "next/server";
import { founderDiagnoses, founderSystemTags } from "@/lib/data/founder-diagnostic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, weakestOS, strongestOS, allScores } = await req.json();
    if (!email || !weakestOS) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const diag = founderDiagnoses[weakestOS];

    await resend.emails.send({
      from: `Shina Salako <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [email],
      subject: `Your Founder Diagnostic — the leak is in your ${weakestOS}`,
      html: `
        <p>Hi ${name},</p>
        <h2>Your diagnostic result: ${weakestOS} (${founderSystemTags[weakestOS]})</h2>
        <p>${diag ? diag.body : ""}</p>
        <p>${diag ? diag.action : ""}</p>
        <h3>Your strongest system</h3>
        <p>${strongestOS} — keep doing what you're doing here.</p>
        <h3>Your next step</h3>
        <p>
          <a href="https://shinasalako.com/entrepreneur-os/workshop">See the workshop — 18 August, Lagos</a> |
          <a href="https://shinasalako.com/entrepreneur-os/book">Pre-order the book</a>
        </p>
        <p>Over the next five days, you'll receive one short email per operating system — starting with your weakest.</p>
        <p>— Shina Salako</p>
      `,
    });

    await resend.emails.send({
      from: `Shina Salako Website <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New diagnostic — ${name} — ${weakestOS}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Weakest OS:</strong> ${weakestOS}</p>
        <p><strong>Strongest OS:</strong> ${strongestOS}</p>
        <p><strong>All scores:</strong> ${JSON.stringify(allScores)}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
