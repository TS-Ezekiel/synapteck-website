"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col gap-[5px] p-2.5"
      >
        <span className={`h-0.5 w-[22px] bg-mist transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`h-0.5 w-[22px] bg-mist transition ${open ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-[22px] bg-mist transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute left-0 right-0 top-full flex flex-col gap-4 border-b border-line bg-navy p-[22px] text-sm text-[#B7C4D5]"
        >
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={close} className="py-1 hover:text-cyan">
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.cta.href}
            onClick={close}
            className="rounded-[5px] border border-cyan/35 px-3.5 py-2.5 text-center"
          >
            {siteConfig.cta.label} ↗
          </Link>
        </nav>
      )}
    </div>
  );
}
