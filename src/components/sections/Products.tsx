import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const bars = [30, 65, 45, 85, 55, 95, 70];

function DashboardMock() {
  return (
    <div aria-hidden className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[7px] border border-[#33435b] bg-ink shadow-[0_20px_50px_rgba(0,0,0,.27)]">
      <div className="flex h-8 items-center gap-[5px] bg-[#142239] px-3">
        <i className="h-[5px] w-[5px] rounded-full bg-[#49617c]" />
        <i className="h-[5px] w-[5px] rounded-full bg-[#49617c]" />
        <i className="h-[5px] w-[5px] rounded-full bg-[#49617c]" />
        <span className="ml-[9px] text-[8px] text-[#71839b]">Synapteck / Product Studio</span>
      </div>
      <div className="flex min-h-[185px] sm:min-h-[220px]">
        <aside className="w-[45px] border-r border-[#17263a] bg-navy px-[11px] py-[17px]">
          <b className="mb-[15px] block h-[5px] rounded-sm bg-blue" />
          {[0, 1, 2].map((k) => <i key={k} className="mb-[15px] block h-[5px] rounded-sm bg-[#21344b]" />)}
        </aside>
        <div className="flex-1 p-[17px]">
          <b className="mb-[15px] block h-2 w-[45%] rounded-sm bg-[#a6bbd2]" />
          <div className="flex gap-2">
            {[0, 1, 2].map((k) => <i key={k} className="h-10 flex-1 rounded border border-[#263a55] bg-[#142239]" />)}
          </div>
          <div className="flex h-[75px] items-end gap-2 border-b border-[#26364b] px-1.5 py-3">
            {bars.map((h, k) => (
              <i key={k} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-b from-cyan to-blue opacity-70" />
            ))}
          </div>
          <div>
            <i className="my-2 block h-1 bg-[#1b2c42]" />
            <i className="my-2 block h-1 w-3/4 bg-[#1b2c42]" />
            <i className="my-2 block h-1 bg-[#1b2c42]" />
          </div>
        </div>
      </div>
      <small className="block p-3 text-[9px] tracking-[1px] text-[#71839b]">
        PRODUCT STUDIO · <span className="text-cyan">IN DEVELOPMENT</span>
      </small>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="border-y border-line bg-navy py-[65px] md:py-[88px]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our products"
          index="02"
          title={<>We don’t just build<br /><em className="not-italic text-[#7f91a9]">for today.</em></>}
          description="We’re developing digital products designed to address everyday business challenges and create lasting value."
        />
        <Reveal className="grid items-center gap-[30px] rounded-[11px] border border-line bg-gradient-to-br from-panel to-navy p-[17px] md:p-7 lg:grid-cols-[1.05fr_.95fr] lg:gap-[55px]">
          <DashboardMock />
          <div>
            <p className="eyebrow">Built by Synapteck</p>
            <h3 className="my-3 font-display text-[29px] font-semibold leading-[1.2] md:text-[33px]">
              Useful software.<br />Meaningful impact.
            </h3>
            <p className="text-[13px] text-muted">
              Our product studio explores tools that make business operations simpler, smarter, and
              more connected. We’re starting with practical solutions for businesses and growing from
              real user needs.
            </p>
            <div className="my-5 flex items-center gap-2.5 border-y border-line py-4">
              <i className="h-[7px] w-[7px] rounded-full bg-[#e5b85c]" />
              <div>
                <b className="block text-[11px]">Early-stage product development</b>
                <small className="block text-[10px] text-[#71839b]">Product details will be shared as we build.</small>
              </div>
            </div>
            <Button href="/#contact" variant="outline">Discuss a product idea ↗</Button>
          </div>
        </Reveal>
        <p className="mt-[13px] text-[10px] text-[#71839b]">
          Product names and public launch details will be added as concepts are validated.
        </p>
      </div>
    </section>
  );
}
