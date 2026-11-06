import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";
import { db } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";
import { clientIp, hashIp } from "@/lib/ip";
import { turnstileEnabled, verifyTurnstile } from "@/lib/turnstile";
import { emailEnabled, sendInquiryNotification } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = validateContact(body);
  if (!result.ok) return NextResponse.json({ errors: result.errors }, { status: 422 });

  // Honeypot filled in: pretend success, store nothing.
  if (result.value.website) return NextResponse.json({ ok: true });

  const ip = clientIp(req);
  const ipHash = hashIp(ip);

  if (turnstileEnabled) {
    const token = (body as Record<string, unknown>).turnstileToken;
    const human = typeof token === "string" && token.length > 0 && (await verifyTurnstile(token, ip));
    if (!human) {
      return NextResponse.json(
        { error: "Verification failed. Please refresh the page and try again." },
        { status: 400 },
      );
    }
  }

  if (!(await rateLimit(ipHash))) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  const { name, email, interest, message } = result.value;
  let stored = false;
  let emailed = false;
  let inquiryId: string | undefined;

  if (db) {
    try {
      const row = await db.inquiry.create({
        data: {
          name,
          email,
          interest,
          message,
          ipHash,
          userAgent: req.headers.get("user-agent")?.slice(0, 300) ?? null,
        },
      });
      stored = true;
      inquiryId = row.id;
    } catch (err) {
      console.error("[contact] database save failed:", err);
    }
  }

  if (emailEnabled) {
    try {
      await sendInquiryNotification({ name, email, interest, message });
      emailed = true;
      if (db && inquiryId) {
        await db.inquiry
          .update({ where: { id: inquiryId }, data: { emailSent: true } })
          .catch(() => undefined);
      }
    } catch (err) {
      console.error("[contact] email failed:", err);
    }
  }

  // Something is configured but nothing worked: tell the visitor honestly.
  if ((db || emailEnabled) && !stored && !emailed) {
    return NextResponse.json(
      { error: "We couldn’t send your inquiry right now. Please try again shortly." },
      { status: 500 },
    );
  }

  // Nothing configured (local dev): log it so the flow can still be tested.
  if (!db && !emailEnabled) {
    console.log("[contact] new inquiry (no database/email configured):", { name, email, interest, message });
  }

  return NextResponse.json({ ok: true });
}
