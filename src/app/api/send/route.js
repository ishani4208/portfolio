import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [fromEmail],
      reply_to: email,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    console.log("Resend Success:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Catch Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}