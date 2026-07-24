import { NextResponse } from "next/server";
import { sanityWriteClient } from "@/lib/sanityWrite";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, message, location, locale } = body ?? {};

    if (!name || !message || !rating) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    const ratingNum = Number(rating);
    if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json({ ok: false, error: "Invalid rating" }, { status: 400 });
    }

    // No "drafts." prefix on the id → Sanity creates the document already published.
    await sanityWriteClient.create({
      _type: "testimonial",
      name: String(name).slice(0, 200),
      location: location ? String(location).slice(0, 200) : undefined,
      rating: ratingNum,
      message: String(message).slice(0, 2000),
      locale: ["et", "en", "ru"].includes(locale) ? locale : "et",
      approved: true,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[review] failed to save submission:", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
