import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Honors from './components/Honors'
import Extracurriculars from './components/Extracurriculars'
import Contact from './components/Contact'
import { about, experience, projects, honors, extracurriculars, contact } from './data/portfolio'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <About data={about} />
        <Experience items={experience} />
        <Projects items={projects} />
        <Honors items={honors} />
        <Extracurriculars items={extracurriculars} />
        <Contact items={contact} />
      </main>
    </div>
  )
}
