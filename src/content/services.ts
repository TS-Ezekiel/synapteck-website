export type ServiceVisual = "code" | "network" | "ai";

export const services: {
  id: string;
  tag: string;
  glyph: string;
  visual: ServiceVisual;
  title: string;
  text: string;
  cta: string;
}[] = [
  {
    id: "software",
    tag: "01 / SOFTWARE",
    glyph: "↗",
    visual: "code",
    title: "Software Engineering",
    text: "Custom websites, web applications, and digital platforms built around your users and business workflows.",
    cta: "Discuss a software project ↗",
  },
  {
    id: "systems",
    tag: "02 / CONNECTIVITY",
    glyph: "⌘",
    visual: "network",
    title: "Digital Systems & Integration",
    text: "Connect tools, data, and processes to reduce friction and help your business operate smoothly.",
    cta: "Connect your systems ↗",
  },
  {
    id: "ai",
    tag: "03 / INTELLIGENCE",
    glyph: "✳",
    visual: "ai",
    title: "AI & Automation",
    text: "Practical AI-assisted workflows and automation that reduce repetitive work and unlock new possibilities.",
    cta: "Explore automation ↗",
  },
];
