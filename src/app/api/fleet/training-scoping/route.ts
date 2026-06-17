import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, organisation, team_size, programme } = await req.json();
    if (!name || !email) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    await resend.emails.send({
      from: "Shina Salako <hello@shinasalako.com>",
      to: [email],
      subject: "Scoping call request received",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for requesting a scoping call for the <strong>${programme}</strong> programme.</p>
        <p>We will be in touch within one business day to schedule a convenient time.</p>
        <p>In the meantime, the book covers the full curriculum in detail.</p>
        <p><a href="https://shinasalako.com/fleet/firstlook">Get the First Look free</a></p>
        <p>— Shina Salako & the SALCOMMS team</p>
      `,
    });

    await resend.emails.send({
      from: "Shina Salako Website <hello@shinasalako.com>",
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New scoping call — ${name} — ${programme}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organisation:</strong> ${organisation}</p>
        <p><strong>Team size:</strong> ${team_size}</p>
        <p><strong>Programme:</strong> ${programme}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
