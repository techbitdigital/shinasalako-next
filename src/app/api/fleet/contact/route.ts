import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, organisation, email, phone, type, message } = await req.json();
    if (!name || !email || !type || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    await resend.emails.send({
      from: "Shina Salako Website <hello@shinasalako.com>",
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      replyTo: email,
      subject: `New enquiry: ${type} — ${name}`,
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organisation:</strong> ${organisation}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    await resend.emails.send({
      from: "Shina Salako <hello@shinasalako.com>",
      to: [email],
      subject: "We have received your enquiry",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for getting in touch. We have received your enquiry and will respond within one business day.</p>
        <p>In the meantime, you might find the First Look PDF useful — it is the opening 40 pages of the book, free.</p>
        <p><a href="https://shinasalako.com/fleet/firstlook">Get the First Look</a></p>
        <p>— Shina Salako & the SALCOMMS team</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
