import { ArrowUpRight, BookOpen, Code2 } from "lucide-react";
import { projects } from "@/constants/portfolio";
import { Reveal } from "@/components/Motion";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Case-study style projects with problem, architecture, and learning signal."
      description="Each project is framed the way a recruiter or engineering interviewer actually evaluates work: the problem, the technical decision, and what changed after building it."
      className="bg-slate-950/40"
    >
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/72 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Project</p>
                  <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.subtitle}</p>
                </div>
                <div className="flex max-w-xl flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-7">
                <p className="text-base leading-8 text-slate-300">{project.overview}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <InfoBlock title="Problem" text={project.problem} />
                  <InfoBlock title="Solution" text={project.solution} />
                  <InfoBlock title="Architecture" text={project.architecture} />
                  <InfoBlock title="Lessons" text={project.lessons} />
                </div>

                <div className="mt-7">
                  <p className="text-sm font-semibold text-white">Features</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="rounded-md bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-100">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="https://github.com/alfaz1824" variant="secondary">
                    <Code2 className="size-4" />
                    GitHub
                  </Button>
                  <Button href="#contact" variant="secondary">
                    <ArrowUpRight className="size-4" />
                    Live Demo
                  </Button>
                  <Button href="#contact" variant="ghost">
                    <BookOpen className="size-4" />
                    Case Study
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-950/45 p-4">
      <p className="text-sm font-semibold text-cyan-200">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}
