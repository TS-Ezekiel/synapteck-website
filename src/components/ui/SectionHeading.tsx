import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  index?: string;
  title: React.ReactNode;
  description: string;
};

export default function SectionHeading({ eyebrow, index, title, description }: Props) {
  return (
    <Reveal className="mb-10 flex flex-col items-start gap-[15px] md:flex-row md:items-end md:justify-between md:gap-[45px]">
      <div className="flex-1">
        <p className="eyebrow">
          {eyebrow} {index && <small className="ml-2 text-[#667991]">/ {index}</small>}
        </p>
        <h2 className="mt-3.5 font-display text-[35px] font-semibold leading-[1.13] tracking-[-1.6px] md:text-[clamp(33px,4vw,49px)]">
          {title}
        </h2>
      </div>
      <p className="mb-[5px] max-w-[650px] text-[13px] text-muted md:max-w-[380px]">{description}</p>
    </Reveal>
  );
}
