import { bio } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="container-tight">
        <p className="section-label reveal">// about me</p>
        <h2 className="reveal mt-3 text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
        <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-subtle">{bio}</p>
      </div>
    </section>
  );
}
