import { experiences } from "@/constants/portfolio";
import { Reveal } from "@/components/Motion";
import { Section } from "@/components/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Internships and competitive builds with real execution pressure."
      description="A concise track record of Java development, full-stack practice, and hackathon leadership."
    >
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent md:block" />
        <div className="space-y-5">
          {experiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <article className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:ml-16">
                <div className="absolute -left-[4.6rem] top-6 hidden size-10 place-items-center rounded-lg border border-cyan-300/30 bg-slate-950 text-cyan-200 md:grid">
                  <item.icon className="size-5" />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-cyan-200">{item.company}</p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-400">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
