export default function Extracurriculars({ items }) {
  return (
    <section id="extracurriculars" className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">extracurriculars</h2>
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-semibold text-slate-900 dark:text-slate-100">{item.role}</span>
                <span className="text-slate-500 dark:text-slate-400">·</span>
                <span className="text-slate-600 dark:text-slate-300">{item.org}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{item.period}</p>
              {item.note && <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.note}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
