export default function Projects({ items }) {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">projects</h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {items.map((project, i) => (
            <li
              key={i}
              className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md dark:shadow-slate-900/50 dark:hover:shadow-slate-900 transition-shadow"
            >
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(() => {
                const links = project.links || (project.link ? [{ url: project.link, label: project.linkLabel || 'Link' }] : []);
                return links.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-4">
                    {links.map((link, k) => (
                      <a
                        key={k}
                        href={link.url || link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 underline focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded"
                      >
                        {link.label || link}
                      </a>
                    ))}
                  </div>
                ) : null;
              })()}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
