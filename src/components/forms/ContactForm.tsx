"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { projectTypes, validateContact } from "@/lib/validation";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

type Status = "idle" | "submitting" | "success" | "error";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const field =
  "w-full rounded-[5px] border border-[#26364b] bg-navy p-[11px] text-xs text-mist outline-none transition placeholder:text-[#5f7189] focus:border-cyan/50";
const label = "mb-1.5 mt-[13px] block text-[11px] text-[#b7c4d5]";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const result = validateContact(data);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("idle");
      setFeedback("");
      return;
    }

    const turnstileToken = data["cf-turnstile-response"];
    if (siteKey && !turnstileToken) {
      setErrors({});
      setStatus("idle");
      setFeedback("Please complete the verification check first.");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.value, turnstileToken }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors(json.errors ?? {});
        setStatus("error");
        setFeedback(json.error ?? "We couldn’t send your inquiry. Please check the form and try again.");
        return;
      }
      form.reset();
      setStatus("success");
      setFeedback("Thank you. Your inquiry has been received and we’ll reply by email.");
    } catch {
      setStatus("error");
      setFeedback("Network problem. Check your connection and try again.");
    } finally {
      // Turnstile tokens are single-use.
      window.turnstile?.reset();
    }
  }

  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1 text-[10px] text-[#ff8a8a]">{errors[k]}</p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="relative rounded-lg border border-line bg-ink p-5 md:p-[27px]">
      <div className="mb-5 flex justify-between text-[9px] tracking-[1.5px]">
        <span className="text-cyan">PROJECT INQUIRY</span>
      </div>

      <label htmlFor="name" className={label}>Your name</label>
      <input id="name" name="name" placeholder="Name" autoComplete="name" className={field}
        aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
      {err("name")}

      <label htmlFor="email" className={label}>Business email</label>
      <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" className={field}
        aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
      {err("email")}

      <label htmlFor="interest" className={label}>What are you looking to build?</label>
      <select id="interest" name="interest" defaultValue="" className={field}
        aria-invalid={!!errors.interest} aria-describedby={errors.interest ? "interest-error" : undefined}>
        <option value="" disabled>Select a project type</option>
        {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
      </select>
      {err("interest")}

      <label htmlFor="message" className={label}>A little about your idea</label>
      <textarea id="message" name="message" rows={4} placeholder="What challenge are you looking to solve?" className={`${field} resize-y`}
        aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
      {err("message")}

      {/* Honeypot: hidden from people, bots tend to fill it */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />

      {siteKey && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
          <div className="cf-turnstile mt-4" data-sitekey={siteKey} data-theme="dark" />
        </>
      )}

      <p className="mt-4 text-[10px] text-[#71839b]">
        By sending this inquiry you agree to our{" "}
        <Link href="/privacy" className="text-cyan hover:underline">Privacy Policy</Link>.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-3 inline-flex w-full items-center justify-center rounded-[5px] border border-[#2f8aff] bg-gradient-to-br from-blue to-[#218cd9] px-[18px] py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry ↗"}
      </button>

      <p aria-live="polite" className={`mt-[11px] text-[11px] ${status === "success" ? "text-cyan" : status === "error" ? "text-[#ff8a8a]" : "text-[#71839b]"}`}>
        {feedback}
      </p>
    </form>
  );
}
