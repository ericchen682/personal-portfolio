import { bio, quote, timeline } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="container-tight">
        <p className="section-label reveal">// about me</p>
        <h2 className="reveal mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          CODE.EAT.SLEEP.REPEAT
        </h2>
        <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-subtle">{bio}</p>

        <ol className="mt-14 space-y-10 border-l border-border/60 pl-6 sm:pl-8">
          {timeline.map((entry) => (
            <li key={entry.period} className="reveal relative">
              <span className="absolute -left-[calc(1.5rem+7px)] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg sm:-left-[calc(2rem+7px)]" />
              <p className="font-mono text-sm text-accent">{entry.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{entry.title}</h3>
              <p className="mt-1 text-subtle">{entry.summary}</p>
              <ul className="mt-4 space-y-2">
                {entry.highlights.map((h) => (
                  <li key={h} className="text-sm leading-relaxed text-foreground/90">
                    {h}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <blockquote className="reveal mt-16 border-l-2 border-accent pl-6 font-mono text-lg italic text-foreground/90">
          {quote}
        </blockquote>
      </div>
    </section>
  );
}
