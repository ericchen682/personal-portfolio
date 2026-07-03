import { marqueeLanguages, marqueeTags, skillGroups } from "../data/portfolio";

function MarqueeRow({
  items,
  reverse,
  render,
}: {
  items: string[];
  reverse?: boolean;
  render: (item: string) => string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden py-3">
      <div
        className={`flex shrink-0 gap-6 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="font-mono text-xl font-medium text-subtle sm:text-2xl"
          >
            {render(item)}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section aria-label="Skills" className="border-y border-border/30 bg-surface/30 py-12">
      <div className="space-y-2">
        <MarqueeRow items={marqueeLanguages} render={(i) => `<${i}>`} />
        <MarqueeRow items={marqueeTags} reverse render={(i) => `[${i}]`} />
      </div>

      <div className="container-tight mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="card p-5">
            <h3 className="font-mono text-sm uppercase tracking-widest text-accent">{group.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border/50 bg-muted/60 px-2.5 py-1 text-xs text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
