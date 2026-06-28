"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BriefcaseBusiness, Code2, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks, profile } from "@/constants/portfolio";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-white/10 bg-slate-950/78 shadow-2xl shadow-black/20 backdrop-blur-2xl"
          : "border-transparent bg-slate-950/20 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-[0_0_35px_rgba(6,182,212,0.22)]">
            MA
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            {profile.name}
            <span className="text-cyan-300">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <IconLink href={profile.github} label="GitHub">
            <Code2 className="size-4" />
          </IconLink>
          <IconLink href={profile.linkedin} label="LinkedIn">
            <BriefcaseBusiness className="size-4" />
          </IconLink>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
          >
            <Moon className="hidden size-4 dark:block" />
            <Sun className="size-4 dark:hidden" />
          </button>
          <Button href={profile.resume} className="h-10 px-4">
            Resume
          </Button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-50 bg-slate-950/95 px-5 py-5 backdrop-blur-2xl lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid size-11 place-items-center rounded-lg border border-white/10 text-white"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="mt-10 grid gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 text-lg font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
            <Button href={profile.resume} className="mt-4">
              Download Resume
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
    >
      {children}
    </Link>
  );
}
