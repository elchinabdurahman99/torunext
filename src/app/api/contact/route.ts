import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    // ──────────────────────────────────────────────────────────────
    // TODO: connect a real email provider here.
    // Example with Resend (npm i resend) — set RESEND_API_KEY in .env.local:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Torupro <info@torupro.ee>",
    //   to: "info@torupro.ee",
    //   replyTo: email,
    //   subject: `Uus päring: ${name}`,
    //   text: `${name} (${email}, ${body.phone ?? "-"})\n\n${message}`,
    // });
    // ──────────────────────────────────────────────────────────────

    // For now we just log the submission server-side.
    console.log("[contact] new submission:", { name, email, phone: body.phone, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
