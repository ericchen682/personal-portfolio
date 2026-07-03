import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Honors from "./components/Honors";
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
        <Skills />
        <Projects />
        <Experience />
        <Honors />
      </main>
      <Contact />
    </div>
  );
}
