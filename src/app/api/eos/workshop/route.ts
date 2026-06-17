import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, organisation, reference, amount, instalment } = await req.json();
    if (!name || !email || !reference) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    await resend.emails.send({
      from: "Shina Salako <hello@shinasalako.com>",
      to: [email],
      subject: "You are booked — EOS Workshop, 18 August 2026",
      html: `
        <p>Hi ${name},</p>
        <p>Your seat is confirmed for the <strong>Entrepreneur OS Half-Day Workshop — 18 August 2026, Lagos</strong>.</p>
        <p><strong>Payment reference:</strong> ${reference}</p>
        <p><strong>Amount paid:</strong> ₦${amount.toLocaleString()}</p>
        ${instalment === "instalment" ? "<p><strong>Note:</strong> This is your first instalment. The second instalment of ₦97,500 is due 14 days before the event.</p>" : ""}
        <p>You will receive venue details and a pre-workshop preparation guide one week before the event.</p>
        <p>If you have not taken the 12-minute Founder Diagnostic yet, please do before the workshop — it will be your starting point on the day.</p>
        <p><a href="https://shinasalako.com/entrepreneur-os/diagnostic">Take the diagnostic</a></p>
        <p>— Shina Salako</p>
      `,
    });

    await resend.emails.send({
      from: "Shina Salako Website <hello@shinasalako.com>",
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New workshop booking — ${name} — ₦${amount.toLocaleString()}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organisation:</strong> ${organisation}</p>
        <p><strong>Reference:</strong> ${reference}</p>
        <p><strong>Amount:</strong> ₦${amount.toLocaleString()}</p>
        <p><strong>Payment type:</strong> ${instalment}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
