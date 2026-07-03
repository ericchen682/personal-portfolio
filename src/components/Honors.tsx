import { Trophy } from "lucide-react";
import { honors } from "../data/portfolio";

export default function Honors() {
  return (
    <section id="honors" className="scroll-mt-20 py-24">
      <div className="container-tight">
        <p className="section-label reveal">// honors &amp; awards</p>
        <h2 className="reveal mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Recognition</h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {honors.map((honor) => (
            <div key={honor.title} className="reveal card flex items-start gap-4 p-5">
              <span className="mt-0.5 rounded-lg border border-accent/30 bg-accent/10 p-2 text-accent">
                <Trophy size={18} />
              </span>
              <div>
                <h3 className="font-semibold">{honor.title}</h3>
                <p className="mt-0.5 text-sm text-subtle">{honor.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
