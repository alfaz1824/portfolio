"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { profile, socialLinks, stats } from "@/constants/portfolio";
import { Button } from "@/components/ui/Button";

const words = ["Full-Stack Developer", "AI Engineering Intern", "Hackathon Winner", "Graph Algorithm Builder"];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
      <div className="aurora absolute inset-0" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[110px]" />
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-violet-600/20 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_35px_rgba(6,182,212,0.12)]">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
            {profile.availability}
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            {profile.role}
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Mohammad Alfaz
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
              builds AI-ready software.
            </span>
          </h1>

          <div className="mt-6 flex min-h-8 flex-wrap items-center gap-3 text-lg font-medium text-slate-300">
            <Sparkles className="size-5 text-cyan-300" />
            <Typewriter />
          </div>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            {profile.headline}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={profile.resume}>
              <Download className="size-4" />
              Download Resume
            </Button>
            <Button href="#projects" variant="secondary">
              View Projects
              <ArrowRight className="size-4" />
            </Button>
            <Button href={`mailto:${profile.email}`} variant="ghost">
              <Mail className="size-4" />
              Contact
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {socialLinks.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                aria-label={item.label}
                className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:text-white"
              >
                <item.icon className="size-5" />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/55 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-900">
              <Image
                src="/images/Profile.png"
                alt="Mohammad Alfaz"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
                <p className="text-sm font-semibold text-white">Currently focused on</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Full-stack web apps, REST APIs, AI integrations, and graph-based route optimization.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -left-5 top-12 hidden rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl sm:block">
            <p className="text-2xl font-bold text-white">4x</p>
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Award winner</p>
          </div>
          <div className="absolute -right-6 top-1/2 hidden max-w-[150px] rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl sm:block lg:-right-10">
            <p className="text-2xl font-bold text-white">AI</p>
            <p className="text-xs uppercase tracking-[0.22em] text-violet-200">Engineering focus</p>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.08 }}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
          >
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <Link
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-400 transition hover:text-cyan-200 md:block"
      >
        <ArrowDown className="size-6 animate-bounce" />
      </Link>
    </section>
  );
}

function Typewriter() {
  return (
    <span className="relative h-8 overflow-hidden text-cyan-100">
      {words.map((word, index) => (
        <span
          key={word}
          className="typewriter-word absolute left-0 top-0 whitespace-nowrap"
          style={{ animationDelay: `${index * 2.2}s` }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
