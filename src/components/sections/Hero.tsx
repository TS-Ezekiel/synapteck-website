import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_78%_25%,rgba(23,107,255,.15),transparent_36%),linear-gradient(130deg,#080D17,#0B1220_55%,#07101D)] pb-6 pt-[58px] md:pt-[85px]"
    >
      <div className="grid-bg absolute inset-0 opacity-45" aria-hidden />

      <div className="container-x relative grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-[45px]">
        <Reveal>
          <p className="eyebrow">Software · Systems · Innovation</p>
          <h1 className="my-[22px] font-display text-[44px] font-semibold leading-[1.07] tracking-[-2px] sm:text-[56px] lg:text-[clamp(52px,5.5vw,73px)] lg:tracking-[-3px]">
            Connecting vision.
            <br />
            <span className="text-gradient">Engineering reality.</span>
          </h1>
          <p className="max-w-[560px] text-[15px] text-[#AAB8CB] md:text-[17px]">
            We build thoughtful software and intelligent digital solutions that help ambitious
            businesses move forward—with clarity, confidence, and room to grow.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-[23px]">
            <Button href="/#contact">Let’s build something ↗</Button>
            <Button href="/#services" variant="link">Explore what we do ↓</Button>
          </div>
          <div className="mt-11 flex max-w-[340px] items-center gap-3 border-t border-line pt-5">
            <strong className="border border-cyan/25 px-[9px] py-1.5 font-display text-xl font-bold text-cyan">
              ST<span className="text-white">.</span>
            </strong>
            <div>
              <b className="block text-[11px]">Built with purpose.</b>
              <small className="block text-[10px] text-[#71839b]">Designed around real business needs.</small>
            </div>
          </div>
        </Reveal>

        <Reveal className="relative grid h-[275px] place-items-center sm:h-[330px] lg:h-[430px]" delay={0.15}>
          <div aria-hidden className="absolute h-[125px] w-[275px] -rotate-[28deg] rounded-full border border-cyan/20 sm:h-[155px] sm:w-[350px]" />
          <div aria-hidden className="absolute h-[170px] w-[320px] rotate-[50deg] rounded-full border border-blue/25 sm:h-[220px] sm:w-[420px]" />
          <div aria-hidden className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-cyan/10 sm:h-[280px] sm:w-[280px]" />

          <div className="grid h-[115px] w-[115px] rotate-45 place-items-center rounded-[25px] border border-cyan/25 bg-gradient-to-br from-[#142239]/70 to-ink shadow-[0_0_75px_rgba(23,107,255,.13)] sm:h-[145px] sm:w-[145px]">
            <Image src="/mark.svg" alt="Synapteck emblem" width={108} height={108} className="-rotate-45 w-[88px] sm:w-[108px]" />
          </div>

          <span className="absolute left-[10%] top-[13%] text-[8px] tracking-[1px] text-[#8ca3be] sm:text-[9px]"><i className="not-italic text-cyan">●</i> IDEAS</span>
          <span className="absolute right-0 top-[49%] text-[8px] tracking-[1px] text-[#8ca3be] sm:text-[9px]"><i className="not-italic text-cyan">●</i> SYSTEMS</span>
          <span className="absolute bottom-[10%] left-[15%] text-[8px] tracking-[1px] text-[#8ca3be] sm:text-[9px]"><i className="not-italic text-cyan">●</i> INTELLIGENCE</span>
          <small className="absolute bottom-2.5 right-0 text-[9px] tracking-[2px] text-[#5e7897]">CONNECTED BY DESIGN</small>
        </Reveal>
      </div>

      <div className="container-x relative mt-5 hidden justify-between border-t border-white/5 pt-[18px] text-[9px] tracking-[1px] text-[#71839b] sm:flex">
        <span>Technology should move business forward.</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
