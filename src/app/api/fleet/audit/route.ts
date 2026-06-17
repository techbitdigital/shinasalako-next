import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, organisation, fleet_size } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    await resend.emails.send({
      from: "Shina Salako <hello@shinasalako.com>",
      to: [email],
      subject: "Your 15-Minute Fleet Reporting Audit",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for requesting the fleet reporting audit. We have received your details and will send your personalised audit results within one business day.</p>
        <p>Organisation: ${organisation} | Fleet size: ${fleet_size}</p>
        <p>In the meantime, the First Look PDF gives you the opening chapters of the book — including the section on reporting disciplines.</p>
        <p><a href="https://shinasalako.com/fleet/firstlook">Get the First Look</a></p>
        <p>— Shina Salako & the SALCOMMS team</p>
      `,
    });
    await resend.emails.send({
      from: "Shina Salako Website <hello@shinasalako.com>",
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New audit request — ${name} — ${organisation}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organisation:</strong> ${organisation}</p>
        <p><strong>Fleet size:</strong> ${fleet_size}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
