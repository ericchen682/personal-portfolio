import { ArrowDown } from "lucide-react";
import { aboutMe } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center pt-16">
      <div className="container-tight grid items-center gap-12 md:grid-cols-2">
        <div className="animate-fade-up">
          <p className="section-label mb-4">Hello!</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {aboutMe.name}
          </h1>
          <p className="mt-4 max-w-md font-mono text-lg text-accent glow-text">{aboutMe.role}</p>
          <p className="mt-4 max-w-md text-subtle">
            {aboutMe.status} &middot; {aboutMe.location}
          </p>

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

        <div className="animate-fade-up md:justify-self-end">
          <pre className="card w-full max-w-md overflow-x-auto p-5 font-mono text-sm leading-relaxed shadow-glow">
            <code>
              <span className="text-subtle">{"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-accent">"about_me"</span>
              <span className="text-subtle">: {"{"}</span>
              {"\n"}
              {"    "}
              <span className="text-accent">"name"</span>
              <span className="text-subtle">: </span>
              <span className="text-foreground">"{aboutMe.name}"</span>
              <span className="text-subtle">,</span>
              {"\n"}
              {"    "}
              <span className="text-accent">"role"</span>
              <span className="text-subtle">: </span>
              <span className="text-foreground">"{aboutMe.role}"</span>
              <span className="text-subtle">,</span>
              {"\n"}
              {"    "}
              <span className="text-accent">"focus"</span>
              <span className="text-subtle">: </span>
              <span className="text-foreground">"{aboutMe.focus}"</span>
              <span className="text-subtle">,</span>
              {"\n"}
              {"    "}
              <span className="text-accent">"status"</span>
              <span className="text-subtle">: </span>
              <span className="text-foreground">"{aboutMe.status}"</span>
              {"\n"}
              {"  "}
              <span className="text-subtle">{"}"}</span>
              {"\n"}
              <span className="text-subtle">{"}"}</span>
            </code>
          </pre>
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
