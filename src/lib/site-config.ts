export const siteConfig = {
  name: "Synapteck Technologies",
  shortName: "Synapteck",
  tagline: "Connecting Vision. Engineering Reality.",
  description:
    "Synapteck Technologies builds software and intelligent digital solutions for ambitious businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // TODO before launch: replace with the company's confirmed inbox.
  email: "hello@synapteck.com",
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Products", href: "/#products" },
    { label: "About", href: "/#about" },
    { label: "Our work", href: "/#work" },
  ],
  cta: { label: "Start a project", href: "/#contact" },
} as const;
