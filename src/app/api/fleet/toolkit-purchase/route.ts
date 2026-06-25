import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, reference, product, amount } = await req.json();
    if (!name || !email || !reference) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: `Shina Salako <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [email],
      subject: `Your order confirmed \u2014 ${product}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for purchasing <strong>${product}</strong>.</p>
        <p><strong>Payment reference:</strong> ${reference}</p>
        <p><strong>Amount paid:</strong> \u20a6${Number(amount).toLocaleString()}</p>
        <p>Your download link and cloud folder access will be emailed to this address shortly.</p>
        <p>\u2014 Shina Salako & the SALCOMMS team</p>
      `,
    });

    await resend.emails.send({
      from: `Shina Salako Website <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [process.env.RESEND_TO_EMAIL || "enquiries@salcomms.com"],
      subject: `New toolkit purchase \u2014 ${name} \u2014 ${product}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Amount:</strong> \u20a6${Number(amount).toLocaleString()}</p>
        <p><strong>Reference:</strong> ${reference}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
