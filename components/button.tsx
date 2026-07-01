import Link from "next/link";
import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost-dark" | "ghost-light";
  className?: string;
};

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-gold-light to-gold text-ink shadow-[0_10px_30px_rgba(183,136,60,0.35)] hover:shadow-[0_14px_38px_rgba(183,136,60,0.5)] hover:-translate-y-0.5",
  "ghost-dark":
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/40",
  "ghost-light":
    "border border-ink/15 text-ink hover:bg-ink/5 hover:border-ink/30",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
  target,
}: CommonProps & { href: string; target?: string }) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
