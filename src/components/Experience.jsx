export default function Experience({ items }) {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Experience</h2>
        <ul className="space-y-8">
          {items.map((job, i) => (
            <li key={i} className="border-l-2 border-slate-200 pl-5 sm:pl-6">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-semibold text-slate-900">{job.title}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-600">{job.company}</span>
              </div>
              <p className="text-sm text-slate-500 mt-0.5">{job.dates}</p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-slate-700 text-sm sm:text-base">
                {job.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
