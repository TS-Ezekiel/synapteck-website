export default function Intro() {
  return (
    <section className="border-y border-line bg-[#0d1726]">
      <div className="container-x grid items-center gap-2 py-[22px] md:grid-cols-[150px_1fr] md:gap-[30px] md:py-[26px]">
        <p className="eyebrow">Who we are</p>
        <p className="max-w-[850px] text-[13px] text-muted md:text-sm">
          Synapteck is an independent technology company turning{" "}
          <strong className="text-[#e8eff8]">ambitious ideas</strong> into practical digital
          products, connected systems, and business solutions.
        </p>
      </div>
    </section>
  );
}
