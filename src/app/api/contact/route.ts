import { NextResponse } from "next/server";
import { getTransporter, CONTACT_TO_EMAIL } from "@/lib/mailer";

const MAX_FILES = 6;
const MAX_FILE_SIZE = 12 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const address = String(formData.get("address") ?? "");
    const message = String(formData.get("message") ?? "");
    const files = formData.getAll("files").filter((f): f is File => f instanceof File);

    if (!email || !phone || !address || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    if (files.length > MAX_FILES) {
      return NextResponse.json({ ok: false, error: "Too many files" }, { status: 400 });
    }
    if (files.some((f) => f.size > MAX_FILE_SIZE)) {
      return NextResponse.json({ ok: false, error: "File too large" }, { status: 400 });
    }

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || undefined,
      }))
    );

    const transporter = getTransporter();
    await transporter.sendMail({
      from: `Torupro kodulehe vorm <${process.env.SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Uus päring kodulehelt${name ? ` – ${name}` : ""}`,
      text: `Nimi: ${name || "-"}\nE-post: ${email}\nTelefon: ${phone}\nAadress: ${address}\n\n${message}`,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] failed to send email:", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
