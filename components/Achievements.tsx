import { achievements, certifications } from "@/constants/portfolio";
import { Reveal } from "@/components/Motion";
import { Section } from "@/components/Section";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Four awards that prove speed, clarity, and product judgment."
      description="The awards are not just badges. They show a repeated ability to scope, build, present, and win in constrained environments."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-300/50">
              <div className="flex items-start justify-between gap-4">
                <div className="grid size-12 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  <item.icon className="size-6" />
                </div>
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
                  {item.year}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-cyan-200">{item.event}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 rounded-2xl border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-white">Certifications</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {certifications.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
