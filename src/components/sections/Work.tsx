import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { workItems } from "@/content/about";

function Art({ kind }: { kind: "squares" | "lines" }) {
  if (kind === "squares")
    return (
      <div aria-hidden className="absolute left-1/2 top-[45%] h-[130px] w-[150px] -translate-x-1/2 -translate-y-1/2">
        <i className="absolute left-[35px] top-[25px] h-20 w-20 rotate-45 border border-cyan/55" />
        <i className="absolute left-[35px] top-[25px] h-20 w-20 border border-blue" style={{ transform: "rotate(45deg) translate(17px,-17px)" }} />
        <i className="absolute left-[35px] top-[25px] h-20 w-20 border border-cyan/25" style={{ transform: "rotate(45deg) translate(-17px,17px)" }} />
      </div>
    );
  return (
    <div aria-hidden className="absolute inset-0 flex items-center justify-center gap-[13px]">
      {[100, 140, 100, 140].map((h, k) => (
        <i
          key={k}
          style={{ height: h }}
          className={`w-[30px] -skew-x-[20deg] rounded-[20px] border ${k % 2 ? "border-blue" : "border-cyan/40"}`}
        />
      ))}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-y border-line bg-navy py-[65px] md:py-[88px]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          index="04"
          title={<>Ideas in motion.<br /><em className="not-italic text-[#7f91a9]">Proof through practice.</em></>}
          description="We’re building our portfolio through focused projects, experiments, and products. This space will grow as work is completed."
        />
        <div className="grid gap-[17px] md:grid-cols-2">
          {workItems.map((w, i) => (
            <Reveal key={w.id} delay={i * 0.08}>
              <article className="overflow-hidden rounded-lg border border-line bg-ink">
                <div className="relative h-[215px] overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(23,107,255,.15),transparent_60%),#0b1220]">
                  <Art kind={w.art} />
                  <small className="absolute bottom-3.5 left-[17px] text-[9px] tracking-[1px] text-[#8ba1ba]">{w.tag}</small>
                </div>
                <div className="flex items-center justify-between p-[18px]">
                  <div>
                    <small className="text-[9px] tracking-[1px] text-[#71839b]">{w.kicker}</small>
                    <h3 className="my-[5px] font-display text-[17px] font-semibold">{w.title}</h3>
                  </div>
                  <b aria-hidden className="text-cyan">↗</b>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-[11px] text-[#8193aa]">
          <span className="text-cyan">●</span> Portfolio case studies will be published as projects are completed.
        </p>
      </div>
    </section>
  );
}
