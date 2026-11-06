import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  variant?: "primary" | "outline" | "link";
  className?: string;
  children: React.ReactNode;
};

const styles = {
  primary:
    "rounded-[5px] border border-[#2f8aff] bg-gradient-to-br from-blue to-[#218cd9] px-[18px] py-3 text-xs font-bold text-white shadow-[0_6px_25px_rgba(23,107,255,.13)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(23,107,255,.27)]",
  outline:
    "rounded-[5px] border border-cyan/35 bg-cyan/5 px-[18px] py-3 text-xs font-bold hover:border-cyan/70",
  link: "text-xs text-[#AAB8CB] hover:text-cyan",
} as const;

export default function Button({ href, variant = "primary", className, children }: Props) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center justify-center transition", styles[variant], className)}
    >
      {children}
    </Link>
  );
}
