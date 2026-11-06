import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-[18px]">
      <div className="container-x relative flex h-[68px] items-center justify-between md:h-[78px]">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <Image src="/logo.svg" alt={siteConfig.name} width={235} height={52} priority className="block w-[190px] md:w-[235px]" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-[26px] text-xs text-[#B7C4D5] md:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-cyan">
              {item.label}
            </Link>
          ))}
          <Link href={siteConfig.cta.href} className="rounded-[5px] border border-cyan/35 px-3.5 py-2.5 transition hover:border-cyan/70">
            {siteConfig.cta.label} ↗
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
