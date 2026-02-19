export default function Projects({ items }) {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Projects</h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {items.map((project, i) => (
            <li
              key={i}
              className="p-4 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-medium text-slate-700 hover:text-slate-900 underline focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded"
                >
                  {project.linkLabel || 'Link'}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
