import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isContactIntent } from "@/content/contact";

export const runtime = "nodejs";

const inbox = process.env.CONTACT_INBOX;
const resendKey = process.env.RESEND_API_KEY;
const fromAddress =
  process.env.CONTACT_FROM ?? "LifeSynthesis <onboarding@resend.dev>";

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  message?: string;
  intent?: string;
};

function clean(value: unknown, max = 2000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  if (!inbox || !resendKey) {
    return NextResponse.json(
      { error: "Contact inbox is not configured yet." },
      { status: 503 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const organization = clean(body.organization, 200);
  const message = clean(body.message, 5000);
  const intent = clean(body.intent, 40);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  if (intent && !isContactIntent(intent)) {
    return NextResponse.json({ error: "Invalid path." }, { status: 400 });
  }

  const resend = new Resend(resendKey);
  const subject = `LifeSynthesis contact${intent ? ` · ${intent}` : ""} — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    organization ? `Organization: ${organization}` : null,
    intent ? `Path: ${intent}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: [inbox],
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    console.error("contact email failed", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
