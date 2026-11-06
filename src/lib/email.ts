const apiKey = process.env.RESEND_API_KEY;
const to = process.env.CONTACT_TO_EMAIL;
const from = process.env.CONTACT_FROM_EMAIL ?? "Synapteck Website <onboarding@resend.dev>";

export const emailEnabled = Boolean(apiKey && to);

// Strip line breaks so visitor input can never inject extra email headers.
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").slice(0, 120);

type Inquiry = { name: string; email: string; interest: string; message: string };

export async function sendInquiryNotification(i: Inquiry): Promise<void> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: (to ?? "").split(",").map((s) => s.trim()).filter(Boolean),
      reply_to: i.email,
      subject: `New inquiry: ${oneLine(i.name)} (${oneLine(i.interest)})`,
      // Plain text only: no HTML means no HTML injection from visitor input.
      text: [
        `Name: ${oneLine(i.name)}`,
        `Email: ${i.email}`,
        `Project type: ${i.interest}`,
        "",
        "Message:",
        i.message,
        "",
        "Reply to this email to answer the visitor directly.",
      ].join("\n"),
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}
