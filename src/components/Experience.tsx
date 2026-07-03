import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24">
      <div className="container-tight">
        <p className="section-label reveal">// experience</p>
        <h2 className="reveal mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Where I've Worked</h2>

        <div className="mt-12 space-y-4">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="reveal card p-6 hover:border-accent/40"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {item.role} <span className="text-accent">@ {item.company}</span>
                </h3>
                <p className="shrink-0 font-mono text-xs text-subtle">{item.period}</p>
              </div>
              <p className="mt-0.5 font-mono text-xs text-subtle">{item.location}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
