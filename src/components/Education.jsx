function parseBold(text) {
  if (typeof text !== 'string') return text;
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-800 dark:text-slate-200">{p}</strong> : p
  );
}

export default function Education({ items }) {
  return (
    <section id="education" className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">education</h2>
        <ul className="space-y-8 list-none">
          {items.map((item, i) => (
            <li key={i} className="border-l-2 border-slate-200 dark:border-slate-700 pl-5 sm:pl-6">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-semibold text-slate-900 dark:text-slate-100">{parseBold(item.school)}</span>
                <span className="text-slate-500 dark:text-slate-400">·</span>
                <span className="text-slate-600 dark:text-slate-300">{parseBold(item.degree)}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{parseBold(item.dates)}</p>
              {Array.isArray(item.details) && item.details.length > 0 && (
                <ul className="mt-2 space-y-1 list-none text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                  {item.details.map((detail, j) => (
                    <li key={j}>{parseBold(detail)}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
