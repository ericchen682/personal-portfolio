const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'honors', label: 'Honors & Awards' },
  { id: 'extracurriculars', label: 'Extracurriculars' },
  { id: 'contact', label: 'Contact' },
];


export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-10 bg-slate-50/95 backdrop-blur border-b border-slate-200"
      aria-label="Main navigation"
    >
      <div className="max-w-3xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-slate-600 hover:text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded px-2 py-1"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
