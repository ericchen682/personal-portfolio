const sections = [
  { id: 'about', label: 'about' },
  { id: 'education', label: 'education' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'honors', label: 'honors & awards', compactLabel: 'honors' },
  { id: 'extracurriculars', label: 'extracurriculars', compactLabel: 'activities' },
  { id: 'contact', label: 'contact' },
];

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-10 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-700"
      aria-label="Main navigation"
    >
      <div className="max-w-3xl mx-auto px-4 py-3 flex flex-nowrap items-center justify-between gap-1 sm:gap-2 md:gap-3 whitespace-nowrap min-w-0">
        {sections.map(({ id, label, compactLabel }) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded px-0 py-1 shrink-0"
          >
            {compactLabel ? (
              <>
                <span className="sm:hidden">{compactLabel}</span>
                <span className="hidden sm:inline">{label}</span>
              </>
            ) : (
              label
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
