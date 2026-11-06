import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects and uses information submitted through this website.`,
  alternates: { canonical: "/privacy" },
};

// DRAFT: review with a qualified lawyer before launch, and confirm the
// retention period, company details, and processors listed below are accurate.
const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Who we are",
    body: (
      <p>
        {siteConfig.name} (“we”, “us”) operates this website. You can contact us about this policy
        at <a className="text-cyan hover:underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    ),
  },
  {
    title: "What we collect",
    body: (
      <>
        <p>When you send a project inquiry, we collect the details you type into the form:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>your name and email address</li>
          <li>the type of project you are interested in</li>
          <li>the message you write</li>
        </ul>
        <p className="mt-3">
          To protect the form from abuse, we also store a one-way hashed version of your IP address
          (we do not store the IP address itself) and your browser’s user-agent string.
        </p>
      </>
    ),
  },
  {
    title: "How we use it",
    body: (
      <p>
        We use this information to read and respond to your inquiry, to discuss a possible project
        with you, and to keep the contact form secure. We do not sell your information and we do not
        use it for advertising.
      </p>
    ),
  },
  {
    title: "Who processes it for us",
    body: (
      <>
        <p>We use trusted service providers to operate the site. They process data only on our behalf:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Neon: database hosting for stored inquiries</li>
          <li>Resend: delivery of inquiry notification emails to our team</li>
          <li>Cloudflare Turnstile: bot protection on the contact form</li>
          <li>Our website hosting provider</li>
        </ul>
      </>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        We keep inquiries for as long as needed to respond and follow up, and then delete them. Ask
        us if you would like your inquiry deleted sooner.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <p>
        You can ask us to access, correct, or delete the personal information we hold about you, or
        to stop contacting you. Email us at the address above and we will respond within a
        reasonable time.
      </p>
    ),
  },
  {
    title: "Cookies",
    body: (
      <p>
        We do not use advertising or tracking cookies. The bot-protection service on the contact
        form may set technical cookies to verify that you are a person.
      </p>
    ),
  },
  {
    title: "Changes",
    body: <p>We may update this policy as the site evolves. The date below shows the latest revision.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-[65px] md:py-[88px]">
      <div className="container-x max-w-[760px]">
        <p className="eyebrow">Legal</p>
        <h1 className="my-3.5 font-display text-[38px] font-semibold leading-[1.1] tracking-[-1.6px] md:text-[49px]">
          Privacy Policy
        </h1>
        <p className="mb-10 text-[13px] text-muted">Last updated: November 2026</p>
        <div className="space-y-9">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="mb-2 font-display text-xl font-semibold">{s.title}</h2>
              <div className="text-[13px] leading-[1.8] text-muted">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
