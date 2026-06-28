import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variants = {
  primary:
    "bg-cyan-400 text-slate-950 shadow-[0_0_40px_rgba(6,182,212,0.35)] hover:bg-cyan-300",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:border-cyan-300/70 hover:bg-cyan-400/10",
  ghost: "text-slate-300 hover:text-white hover:bg-white/[0.06]",
};

export function Button({
  className,
  href,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
