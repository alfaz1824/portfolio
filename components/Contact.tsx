"use client";

import type { ElementType } from "react";
import { BriefcaseBusiness, Code2, Download, Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/constants/portfolio";
import { Reveal } from "@/components/Motion";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Recruiters, collaborators, and builders can reach Alfaz here."
      description="Open to internship conversations across software engineering, full-stack development, AI tooling, and data science."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
          <div className="space-y-5">
            <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow icon={BriefcaseBusiness} label="LinkedIn" value="linkedin.com/in/alfaz1824" href={profile.linkedin} />
            <ContactRow icon={Code2} label="GitHub" value="github.com/alfaz1824" href={profile.github} />
            <ContactRow icon={MapPin} label="Location" value={profile.location} href="#" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${profile.email}`}>
              <Mail className="size-4" />
              Email Alfaz
            </Button>
            <Button href={profile.resume} variant="secondary">
              <Download className="size-4" />
              Resume
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-white/10 bg-[#111827]/72 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" placeholder="you@company.com" type="email" />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" placeholder="Internship opportunity" />
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-medium text-slate-300">Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me what you are building or hiring for."
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
              />
            </label>
            <Button className="mt-6" type="submit">
              <Send className="size-4" />
              Send Message
            </Button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
      />
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: ElementType;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/45 p-4 transition hover:border-cyan-300/50"
    >
      <span className="grid size-11 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-[0.22em] text-slate-500">{label}</span>
        <span className="mt-1 block text-sm font-medium text-white">{value}</span>
      </span>
    </a>
  );
}
