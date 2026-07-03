import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="container-tight">
        <p className="section-label reveal">// featured projects</p>
        <h2 className="reveal mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Explore My Work</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const primary = project.links?.[0];
            const Wrapper = primary ? "a" : "div";
            return (
              <Wrapper
                key={project.name}
                {...(primary
                  ? { href: primary.href, target: "_blank", rel: "noreferrer" }
                  : {})}
                className={`card group flex flex-col p-6 ${
                  primary ? "cursor-pointer hover:border-accent/60 hover:shadow-glow" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    {project.category}
                  </span>
                  {primary && (
                    <ArrowUpRight
                      size={18}
                      className="text-subtle transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  )}
                </div>

                <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-subtle">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border/50 bg-muted/60 px-2 py-0.5 font-mono text-xs text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
