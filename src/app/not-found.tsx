import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center py-20 text-center">
      <div className="container-x">
        <p className="eyebrow">Error 404</p>
        <h1 className="my-4 font-display text-[44px] font-semibold leading-[1.1] tracking-[-2px] md:text-[64px]">
          This page <span className="text-gradient">isn’t connected.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-[440px] text-sm text-muted">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
        </p>
        <Button href="/">Back to home ↗</Button>
      </div>
    </section>
  );
}
