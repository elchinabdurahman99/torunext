import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, message } = body ?? {};

    if (!name || !message || !rating) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    const ratingNum = Number(rating);
    if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json({ ok: false, error: "Invalid rating" }, { status: 400 });
    }

    // For now we just log the submission server-side.
    console.log("[review] new submission:", { name, rating: ratingNum, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
