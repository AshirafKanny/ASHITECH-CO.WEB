import { NextResponse } from "next/server";
import { FORMSPREE_ENDPOINT } from "@/lib/formspree";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const contentType = response.headers.get("content-type") ?? "";
    const payload = contentType.includes("application/json")
      ? await response.json().catch(() => null)
      : null;

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            payload?.errors?.map((error: { message?: string }) => error.message).filter(Boolean).join(" ") ||
            "Form submission failed",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Form submission failed" }, { status: 500 });
  }
}