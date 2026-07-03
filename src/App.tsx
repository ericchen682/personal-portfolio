import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Honors from "./components/Honors";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="min-h-dvh">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Honors />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}
