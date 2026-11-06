import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services, type ServiceVisual } from "@/content/services";

function Visual({ kind }: { kind: ServiceVisual }) {
  const box = "relative mt-[15px] h-[75px] overflow-hidden rounded-[5px] border border-cyan/10 bg-ink";
  if (kind === "code")
    return (
      <div aria-hidden className={`${box} flex items-center gap-3 pl-6`}>
        <b className="font-display text-[25px] font-semibold text-cyan">&lt;/&gt;</b>
        <i className="h-[3px] w-[30px] bg-[#1b4778]" />
        <i className="h-[3px] w-[22px] bg-cyan/35" />
      </div>
    );
  if (kind === "network")
    return (
      <div aria-hidden className={box}>
        <span className="absolute left-[18%] top-[28%] h-[48%] w-[65%] -skew-y-[17deg] border border-blue/40" />
        {["left-[18%] top-[20%]", "left-[49%] top-[55%]", "right-[18%] top-[20%]", "right-[30%] bottom-[10%]"].map((pos) => (
          <i key={pos} className={`absolute h-[7px] w-[7px] rounded-full bg-cyan shadow-[0_0_12px_rgba(66,214,255,.35)] ${pos}`} />
        ))}
      </div>
    );
  return (
    <div aria-hidden className={`${box} grid place-items-center font-display text-2xl font-bold text-cyan`}>
      AI
      <i className="absolute h-[60px] w-[60px] rounded-full border border-blue/35" />
      <i className="absolute h-[115px] w-[115px] rounded-full border border-blue/35" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-[65px] md:py-[88px]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our expertise"
          index="01"
          title={<>Technology that<br /><em className="not-italic text-[#7f91a9]">solves real problems.</em></>}
          description="We bring strategy, design, and engineering together to create technology that works in the real world."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08} className="h-full">
              <article className="relative min-h-[315px] rounded-[9px] border border-line bg-gradient-to-br from-panel to-navy p-6 transition hover:-translate-y-1 hover:border-cyan/35 md:min-h-[330px] h-full">
                <div className="flex items-center justify-between">
                  <small className="text-[10px] tracking-[1px] text-[#71839b]">{s.tag}</small>
                  <span aria-hidden className="grid h-8 w-8 place-items-center rounded-md border border-cyan/20 text-cyan">{s.glyph}</span>
                </div>
                <Visual kind={s.visual} />
                <h3 className="mb-2 mt-[17px] font-display text-xl font-semibold">{s.title}</h3>
                <p className="text-xs leading-[1.8] text-muted">{s.text}</p>
                <Link href="/#contact" className="absolute bottom-[22px] left-6 text-[11px] text-[#dce7f4] hover:text-cyan">
                  {s.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
