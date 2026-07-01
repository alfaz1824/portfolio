import Link from "next/link";
import { Code2 } from "lucide-react";
import { navLinks, profile, socialLinks } from "@/constants/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="#home" className="text-xl font-semibold text-white">
            Mohammad Alfaz<span className="text-cyan-300"></span>
          </Link>
          <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <Code2 className="size-4" />
            Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, Lenis, and care.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-cyan-200">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          {socialLinks.slice(0, 3).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              aria-label={item.label}
              className="grid size-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
            >
              <item.icon className="size-4" />
            </Link>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-slate-600">
        Copyright 2026 {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
