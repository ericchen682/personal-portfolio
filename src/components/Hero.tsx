import { ArrowDown, FileCode2 } from "lucide-react";
import type { ReactNode } from "react";
import { aboutMe } from "../data/portfolio";

export default function Hero() {
  const codeLines: ReactNode[] = [
    <span className="italic text-subtle/60">// developer profile</span>,
    <span className="text-subtle">{"{"}</span>,
    <>
      {"  "}
      <span className="text-accent">"name"</span>
      <span className="text-subtle">: </span>
      <span className="text-foreground">"{aboutMe.name}"</span>
      <span className="text-subtle">,</span>
    </>,
    <>
      {"  "}
      <span className="text-accent">"role"</span>
      <span className="text-subtle">: </span>
      <span className="text-foreground">"{aboutMe.role}"</span>
      <span className="text-subtle">,</span>
    </>,
    <>
      {"  "}
      <span className="text-accent">"focus"</span>
      <span className="text-subtle">: </span>
      <span className="text-foreground">"{aboutMe.focus}"</span>
    </>,
    <span className="text-subtle">{"}"}</span>,
  ];

  return (
    <section id="top" className="relative flex min-h-[92vh] items-center pt-16">
      <div className="container-tight grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <div className="animate-fade-up">
          <p className="section-label mb-4">Hello!</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            I'm {aboutMe.name}
          </h1>
          <p className="mt-4 max-w-md font-mono text-lg text-accent glow-text">Studying {aboutMe.role}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="cursor-pointer rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-bg shadow-glow transition-transform duration-200 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="cursor-pointer rounded-lg border border-border px-5 py-2.5 font-mono text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="w-full animate-fade-up">
          <div
            data-testid="code-card"
            className="w-full overflow-hidden rounded-xl border border-border/60 bg-[#0B1120] shadow-glow ring-1 ring-black/40"
          >
            <div className="flex items-center border-b border-border/50 bg-surface/50 px-4 py-3">
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </span>
              <span className="ml-4 flex items-center gap-1.5 rounded-md bg-muted/70 px-2.5 py-1 font-mono text-xs text-foreground/80">
                <FileCode2 size={13} className="text-accent" />
                about_me.json
              </span>
            </div>

            <div className="overflow-x-auto py-7 pl-4 font-mono text-[13px] leading-8 sm:text-sm">
              {codeLines.map((line, i) => (
                <div key={i} className="flex">
                  <span
                    aria-hidden="true"
                    className="mr-4 w-6 shrink-0 select-none border-r border-border/40 pr-3 text-right text-subtle/40"
                  >
                    {i + 1}
                  </span>
                  <span className="flex-1 whitespace-pre pr-6">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute inset-x-0 bottom-8 mx-auto flex w-fit animate-bounce-slow cursor-pointer text-subtle transition-colors hover:text-accent"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
