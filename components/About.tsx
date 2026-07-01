import { GraduationCap } from "lucide-react";
import { education, profile, strengths } from "@/constants/portfolio";
import { Reveal } from "@/components/Motion";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A full-stack and AI-focused engineer building practical products."
      description={profile.summary}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
          <h3 className="text-2xl font-semibold text-white">Current focus</h3>
          <p className="mt-5 text-base leading-8 text-slate-400">
            Alfaz is seeking Software Engineering and AI Engineering internships by pairing core CS fundamentals with shipped full-stack projects. His work spans academic platforms, REST API design, AI integrations, relational databases, and graph-based optimization.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {strengths.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-slate-950/45 p-4">
                <item.icon className="size-6 text-cyan-300" />
                <h4 className="mt-4 text-sm font-semibold text-white">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-white/10 bg-slate-900/45 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="size-6 text-violet-300" />
            <h3 className="text-2xl font-semibold text-white">Education</h3>
          </div>
          <div className="mt-8 space-y-6">
            {education.map((item) => (
              <div key={item.degree} className="relative border-l border-cyan-300/30 pl-6">
                <span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-cyan-300" />
                <p className="text-sm font-medium text-cyan-200">{item.period}</p>
                <h4 className="mt-2 text-lg font-semibold text-white">{item.degree}</h4>
                <p className="mt-1 text-sm text-slate-400">{item.school}</p>
                <p className="mt-3 text-sm font-medium text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
