import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  if (!body.name?.trim()) {
    return NextResponse.json({ message: "Name is required." }, { status: 400 });
  }
  if (!body.email?.trim() || !validateEmail(body.email)) {
    return NextResponse.json(
      { message: "A valid email address is required." },
      { status: 400 },
    );
  }
  if (!body.message?.trim()) {
    return NextResponse.json(
      { message: "Message is required." },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Resolve Advisory <contact@resolveadvisory.com.my>",
    to: ["azril@resolveadvisory.com.my"],
    replyTo: body.email.trim(),
    subject: `New enquiry from ${body.name.trim()}`,
    html: `
      <p><strong>Name:</strong> ${body.name.trim()}</p>
      <p><strong>Email:</strong> ${body.email.trim()}</p>
      <p><strong>Company:</strong> ${body.company?.trim() || "—"}</p>
      <p><strong>Service Interest:</strong> ${body.serviceInterest?.trim() || "—"}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${body.message.trim().replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    return NextResponse.json(
      { message: "Unable to send your message. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: "Your enquiry has been received." });
}
