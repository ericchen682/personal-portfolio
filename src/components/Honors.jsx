export default function Honors({ items }) {
  return (
    <section id="honors" className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900 mb-6">honors & awards</h2>
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="p-4 rounded-lg border border-slate-200 bg-white">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-semibold text-slate-900">{item.name}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-600">{item.issuer}</span>
              </div>
              <p className="text-sm text-slate-500 mt-0.5">{item.date}</p>
              {item.note && <p className="mt-1 text-sm text-slate-600">{item.note}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
