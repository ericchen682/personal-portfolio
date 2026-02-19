import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Honors from './components/Honors'
import Extracurriculars from './components/Extracurriculars'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import { about, experience, projects, honors, extracurriculars, contact } from './data/portfolio'

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true // default to dark
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Nav isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
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
