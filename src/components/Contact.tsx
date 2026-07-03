import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { aboutMe, socials } from "../data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border/40 py-24">
      <div className="container-tight text-center">
        <p className="section-label reveal">// contact</p>
        <h2 className="reveal mx-auto mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Let's build something.
        </h2>
        <p className="reveal mx-auto mt-4 max-w-md text-subtle">
          Open to internships, research, and collaboration. The fastest way to reach me is below.
        </p>

        <div className="reveal mt-10 flex flex-wrap justify-center gap-4">
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            const external = social.href.startsWith("http");
            return (
              <a
                key={social.label}
                href={social.href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex cursor-pointer items-center gap-2 rounded-lg border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <Icon size={18} className="text-subtle transition-colors group-hover:text-accent" />
                {social.label}
              </a>
            );
          })}
        </div>

        <p className="mt-16 font-mono text-xs text-subtle">
          &copy; {year} {aboutMe.name}. Built with React, TypeScript &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}
