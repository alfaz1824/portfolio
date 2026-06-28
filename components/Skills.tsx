import { skillGroups } from "@/constants/portfolio";
import { Reveal } from "@/components/Motion";
import { Section } from "@/components/Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A technical toolkit built for products, data, and fast prototypes."
      description="The resume shows breadth across programming fundamentals, full-stack development, AI tooling, analytics, and the engineering practices needed to keep work reliable."
      className="bg-slate-950/40"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.03}>
            <article className="group h-full rounded-2xl border border-white/10 bg-[#111827]/75 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_18px_55px_rgba(6,182,212,0.12)]">
              <group.icon className="size-6 text-cyan-300 transition group-hover:scale-110" />
              <h3 className="mt-5 text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
