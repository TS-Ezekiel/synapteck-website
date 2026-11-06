import Reveal from "@/components/ui/Reveal";
import { pillars } from "@/content/about";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[radial-gradient(ellipse_at_10%_50%,rgba(23,107,255,.05),transparent_40%),#080d17] py-[65px] md:py-[88px]"
    >
      <div className="container-x grid items-center gap-[35px] lg:grid-cols-[.9fr_1.1fr] lg:gap-[75px]">
        <Reveal>
          <p className="eyebrow">The Synapteck perspective <small className="ml-2 text-[#667991]">/ 03</small></p>
          <h2 className="my-[23px] font-display text-[43px] font-semibold leading-[1.1] tracking-[-2px] md:text-[clamp(38px,4.5vw,57px)]">
            Good technology<br />isn’t just built.<br />
            <span className="text-gradient">It’s connected.</span>
          </h2>
          <p className="max-w-[450px] text-[13px] text-muted">
            Inspired by the synapse—the connection through which information moves—we believe
            technology creates its greatest value when people, systems, and ideas work together.
          </p>
          <b className="mt-[35px] block font-display text-[13px] font-bold tracking-[3px]">
            SYNAPTECK <small className="ml-[7px] text-[9px] tracking-[4px] text-[#71839b]">TECHNOLOGIES</small>
          </b>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {pillars.map((p, i) => (
              <article
                key={p.n}
                className={`grid grid-cols-[30px_1fr_18px] gap-3.5 border-b border-line py-[22px] ${i === 0 ? "border-t" : ""}`}
              >
                <small className="pt-[3px] font-display text-[11px] text-cyan">{p.n}</small>
                <div>
                  <h3 className="mb-[5px] font-display text-[17px] font-semibold">{p.title}</h3>
                  <p className="text-xs text-muted">{p.text}</p>
                </div>
                <b aria-hidden className="font-normal text-[#5c7899]">↗</b>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
