import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const maturityDesc: Record<string, string> = {
  "Tracking": "Your operation has basic GPS visibility but limited structured discipline. Focus on Layer 1 — ensuring device uptime and data quality before building anything on top.",
  "Monitoring": "You are collecting data but not yet acting on it systematically. Focus on Layer 2 — building operational disciplines around driver behaviour, fuel, and maintenance.",
  "Discipline": "You have consistent processes in place. Focus on Layer 3 — naming KPI owners and building a regular performance review rhythm.",
  "Optimisation": "Your operation is well-run. Focus on Layer 4 and 5 — economics (cost-per-km) and technology integration to unlock the next level.",
  "Strategic Asset": "Your fleet is a genuine competitive advantage. Focus on Layer 6 and 7 — governance, audit readiness, and long-term strategic positioning.",
};

export async function POST(req: Request) {
  try {
    const { name, email, answers, score, stage } = await req.json();
    if (!email || !stage) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    await resend.emails.send({
      from: "Shina Salako <hello@shinasalako.com>",
      to: [email],
      subject: `Your Fleet Maturity Assessment Result — ${stage}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for completing the Fleet Operating System Maturity Assessment.</p>
        <h2>Your Result: ${stage}</h2>
        <p>Score: ${score} / 90</p>
        <p>${maturityDesc[stage]}</p>
        <h3>Your next step</h3>
        <p>The book covers every layer of the Fleet Operating System in detail — and the chapters that match your weakest layer are exactly where to start.</p>
        <p><a href="https://shinasalako.com/fleet/book">Get the book</a> | <a href="https://shinasalako.com/fleet/firstlook">Get the First Look free</a></p>
        <p>If you would like a facilitated two-hour session to interpret your result against your real operation, <a href="https://shinasalako.com/fleet/contact">contact us here</a>.</p>
        <p>— Shina Salako</p>
      `,
    });
    await resend.emails.send({
      from: "Shina Salako Website <hello@shinasalako.com>",
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New assessment result — ${name} — ${stage}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Stage:</strong> ${stage}</p>
        <p><strong>Score:</strong> ${score}/90</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
