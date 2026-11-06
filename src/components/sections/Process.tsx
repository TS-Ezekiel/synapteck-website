import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/about";

export default function Process() {
  return (
    <section id="process" className="py-[65px] md:py-[88px]">
      <div className="container-x">
        <SectionHeading
          eyebrow="How we work"
          index="05"
          title={<>From the first question<br />to the finished solution.</>}
          description="Clear communication. Intentional engineering. A collaborative process."
        />
        <ol className="grid gap-[18px] md:grid-cols-3">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <li className="h-full border-t border-cyan/35 bg-gradient-to-b from-panel/35 to-transparent p-[22px]">
                <small className="font-display text-[11px] text-cyan">{s.n}</small>
                <h3 className="mb-1.5 mt-[13px] font-display text-xl font-semibold">{s.title}</h3>
                <p className="text-xs text-muted">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
