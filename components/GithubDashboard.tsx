import { Code2, GitBranch, Star, TerminalSquare } from "lucide-react";
import { profile, projects, skillGroups } from "@/constants/portfolio";
import { Reveal } from "@/components/Motion";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";

const weeks = Array.from({ length: 42 }, (_, index) => {
  const pattern = [0, 1, 2, 4, 1, 3, 0, 2, 5, 1, 4, 2];
  return pattern[index % pattern.length];
});

export function GithubDashboard() {
  const topLanguages = ["Python", "JavaScript", "TypeScript", "Java", "SQL"];

  return (
    <Section
      id="github"
      eyebrow="GitHub dashboard"
      title="A snapshot of the engineering profile behind the portfolio."
      description="This section is designed as a recruiter-friendly dashboard. It links to GitHub and highlights the languages, repositories, and technical focus areas reflected in the resume."
      className="bg-slate-950/40"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-2xl border border-white/10 bg-[#111827]/72 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-cyan-200">github.com/alfaz1824</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Pinned build system</h3>
            </div>
            <Code2 className="size-8 text-slate-300" />
          </div>

          <div className="mt-7 grid gap-3">
            {projects.map((project) => (
              <div key={project.title} className="rounded-xl border border-white/10 bg-slate-950/45 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">{project.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{project.subtitle}</p>
                  </div>
                  <Star className="size-4 shrink-0 text-cyan-200" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((item) => (
                    <span key={item} className="rounded-md bg-white/[0.05] px-2 py-1 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Button href={profile.github} variant="secondary" className="mt-6">
            <Code2 className="size-4" />
            Open GitHub
          </Button>
        </Reveal>

        <Reveal delay={0.08} className="grid gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <GitBranch className="size-5 text-violet-300" />
              <h3 className="text-xl font-semibold text-white">Contribution signal</h3>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-2 md:grid-cols-[repeat(14,minmax(0,1fr))]">
              {weeks.map((level, index) => (
                <span
                  key={index}
                  className="aspect-square rounded-[4px] border border-white/5"
                  style={{
                    background:
                      level === 0
                        ? "rgba(255,255,255,0.04)"
                        : `rgba(6,182,212,${0.16 + level * 0.13})`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <TerminalSquare className="size-5 text-cyan-300" />
              <h3 className="mt-4 text-xl font-semibold text-white">Languages</h3>
              <div className="mt-5 space-y-3">
                {topLanguages.map((item, index) => (
                  <div key={item}>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{item}</span>
                      <span className="text-slate-500">{92 - index * 11}%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${92 - index * 11}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">Recent focus</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroups.flatMap((group) => group.skills).slice(0, 15).map((skill) => (
                  <span key={skill} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-xs text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
