import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-y border-border/30 bg-surface/30 py-24">
      <div className="container-tight">
        <p className="section-label reveal">// education</p>
        <h2 className="reveal mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>

        <article className="reveal card mt-12 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 rounded-lg border border-accent/30 bg-accent/10 p-2 text-accent">
                <GraduationCap size={20} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{education.school}</h3>
                <p className="mt-0.5 text-subtle">{education.degree}</p>
              </div>
            </div>
            <div className="shrink-0 font-mono text-xs text-subtle sm:text-right">
              <p>{education.period}</p>
              <p className="mt-1">GPA {education.gpa}</p>
              <p className="mt-1">{education.deansList}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-accent">Coursework</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <li
                    key={c}
                    className="rounded-md border border-border/50 bg-muted/60 px-2.5 py-1 text-xs text-foreground/90"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-accent">Activities</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {education.activities.map((a) => (
                  <li
                    key={a}
                    className="rounded-md border border-border/50 bg-muted/60 px-2.5 py-1 text-xs text-foreground/90"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
