import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#070B13]">
      <div className="container-x flex flex-wrap items-center justify-between gap-5 py-7">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <Image src="/logo.svg" alt={siteConfig.name} width={215} height={48} className="w-[185px] md:w-[215px]" />
        </Link>
        <p className="order-3 w-full text-[11px] text-[#a2b1c4] md:order-none md:w-auto">
          Connecting Vision. <span className="text-cyan">Engineering Reality.</span>
        </p>
        <Link href="/#home" className="text-[11px] text-[#8fa2ba] hover:text-cyan">
          Back to top ↑
        </Link>
      </div>
      <div className="container-x flex flex-col justify-between gap-2 border-t border-white/5 pb-6 pt-4 text-[9px] text-[#5f7189] md:flex-row">
        <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/privacy" className="hover:text-cyan">Privacy Policy</Link>
          <span>Designed with purpose. Engineered with intent.</span>
        </span>
      </div>
    </footer>
  );
}
