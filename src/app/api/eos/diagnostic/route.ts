import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const osDesc: Record<string, string> = {
  "Founder OS": "Your leak is in YOU — vision, mindset, discipline, and decision-making. Build the founder before you build the business. Chapter 3 of the book starts here.",
  "Market OS": "Your leak is in your CUSTOMER understanding — demand validation, the real problem, the gap. If this leaks, marketing burns money. Chapter 8 addresses this directly.",
  "Model OS": "Your leak is in your BUSINESS MODEL — pricing, packaging, how you make money. The engine needs a redesign. Chapter 13 walks through this.",
  "Management OS": "Your leak is in STRUCTURE — roles, workflows, delegation, cash flow. Growth is breaking the business because the skeleton is not strong enough. Chapter 18.",
  "Momentum OS": "Your leak is in GROWTH — sales, marketing, retention. The business is not becoming visible, trusted, chosen. Chapter 22 addresses the momentum system.",
};

export async function POST(req: Request) {
  try {
    const { name, email, answers, weakestOS } = await req.json();
    if (!email || !weakestOS) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    await resend.emails.send({
      from: "Shina Salako <hello@shinasalako.com>",
      to: [email],
      subject: `Your Founder Diagnostic Result — the leak is in your ${weakestOS}`,
      html: `
        <p>Hi ${name},</p>
        <h2>Your diagnostic result: ${weakestOS}</h2>
        <p>${osDesc[weakestOS] || "Your result has been recorded."}</p>
        <h3>Your next step</h3>
        <p>The book covers all five operating systems in detail. Start with the chapters that address your weakest system.</p>
        <p>
          <a href="https://shinasalako.com/entrepreneur-os/book">Get the book</a> |
          <a href="https://shinasalako.com/entrepreneur-os/workshop">Join the workshop — 18 August Lagos</a>
        </p>
        <p>— Shina Salako</p>
      `,
    });

    await resend.emails.send({
      from: "Shina Salako Website <hello@shinasalako.com>",
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New diagnostic — ${name} — ${weakestOS}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Weakest OS:</strong> ${weakestOS}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
