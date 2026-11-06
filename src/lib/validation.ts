export const projectTypes = [
  "Website or web application",
  "Business software / digital product",
  "System integration",
  "AI or automation",
  "Partnership / collaboration",
  "Something else",
] as const;

export type ContactInput = {
  name: string;
  email: string;
  interest: (typeof projectTypes)[number];
  message: string;
  website?: string; // honeypot: real people leave this empty
};

export type ValidationResult =
  | { ok: true; value: ContactInput }
  | { ok: false; errors: Record<string, string> };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: unknown): ValidationResult {
  const d = (typeof input === "object" && input !== null ? input : {}) as Record<string, unknown>;
  const str = (k: string) => (typeof d[k] === "string" ? (d[k] as string).trim() : "");

  const name = str("name");
  const email = str("email");
  const interest = str("interest");
  const message = str("message");
  const website = str("website");

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 100) errors.name = "Enter your name (2–100 characters).";
  if (!emailRe.test(email) || email.length > 254) errors.email = "Enter a valid email address.";
  if (!(projectTypes as readonly string[]).includes(interest)) errors.interest = "Select a project type.";
  if (message.length < 10 || message.length > 2000) errors.message = "Tell us a little more (10–2000 characters).";

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, value: { name, email, interest: interest as ContactInput["interest"], message, website } };
}
