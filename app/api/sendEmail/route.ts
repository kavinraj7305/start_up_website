import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name, idea, year } = await req.json();

    if (!email || !name || !idea || !year) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Thank You for Your Idea Submission!",
      text: `Hello ${name},\n\nThank you for submitting your idea: "${idea}".\n\nWe appreciate your input and will review it soon.\n\nBest Regards,\nYour Team`,
    });

    return NextResponse.json({ message: "Email sent successfully!", data }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
