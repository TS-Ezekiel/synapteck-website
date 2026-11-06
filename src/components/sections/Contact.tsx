import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line bg-[radial-gradient(ellipse_at_20%_20%,rgba(23,107,255,.09),transparent_45%),#0b1220] py-[62px] md:py-[85px]"
    >
      <div className="container-x grid items-start gap-[30px] lg:grid-cols-[.9fr_1.1fr] lg:gap-[75px]">
        <Reveal>
          <p className="eyebrow">Have an idea in motion? <small className="ml-2 text-[#667991]">/ 06</small></p>
          <h2 className="my-[22px] font-display text-[40px] font-semibold leading-[1.1] tracking-[-2px] md:text-[clamp(40px,4.5vw,57px)]">
            Let’s engineer<br /><span className="text-gradient">what comes next.</span>
          </h2>
          <p className="max-w-[430px] text-[13px] text-muted">
            Tell us about your business, your challenge, or the product you have in mind. Let’s
            explore what technology can make possible.
          </p>
          <small className="mt-7 block text-[10px] text-[#8295ad]">
            <span className="text-cyan">●</span> Open to project conversations and collaborations
          </small>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
