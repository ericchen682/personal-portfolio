import ThemeToggle from './ThemeToggle'

const sections = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'honors', label: 'honors & awards' },
  { id: 'extracurriculars', label: 'extracurriculars' },
  { id: 'contact', label: 'contact' },
];

export default function Nav({ isDark, toggleTheme }) {
  return (
    <nav
      className="sticky top-0 z-10 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-700"
      aria-label="Main navigation"
    >
      <div className="max-w-3xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-4 sm:gap-6 relative">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 font-medium focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded px-2 py-1"
          >
            {label}
          </a>
        ))}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {/* <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} /> */}
        </div>
      </div>
    </nav>
  );
}
