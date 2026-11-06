"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="grid min-h-[60vh] place-items-center py-20 text-center">
      <div className="container-x">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="my-4 font-display text-[40px] font-semibold leading-[1.1] tracking-[-2px] md:text-[56px]">
          We hit a <span className="text-gradient">snag.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-[440px] text-sm text-muted">
          An unexpected error occurred. Please try again, and if it keeps happening, contact us.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-[5px] border border-[#2f8aff] bg-gradient-to-br from-blue to-[#218cd9] px-[18px] py-3 text-xs font-bold text-white"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
