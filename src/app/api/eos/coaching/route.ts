import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, business, challenge, type } = await req.json();
    if (!name || !email) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    await resend.emails.send({
      from: "Shina Salako <hello@shinasalako.com>",
      to: [email],
      subject: "We have received your coaching application",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for applying. We have received your application for <strong>${type}</strong> and will respond within two business days.</p>
        <p>In the meantime, if you have not taken the 12-minute Founder Diagnostic, it will give us both a clear starting point.</p>
        <p><a href="https://shinasalako.com/entrepreneur-os/diagnostic">Take the diagnostic</a></p>
        <p>— Shina Salako</p>
      `,
    });

    await resend.emails.send({
      from: "Shina Salako Website <hello@shinasalako.com>",
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New coaching application — ${name} — ${type}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Challenge:</strong> ${challenge}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
