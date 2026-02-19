function parseBio(text) {
  if (typeof text !== 'string') return text;
  const out = [];
  let key = 0;
  // [[link text]] → anchor to #contact
  const linkParts = text.split(/\[\[(.*?)\]\]/g);
  for (let i = 0; i < linkParts.length; i++) {
    if (i % 2 === 1) {
      out.push(
        <a
          key={`link-${key++}`}
          href="#contact"
          className="font-medium text-slate-800 dark:text-slate-200 underline hover:text-slate-900 dark:hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:ring-offset-1 dark:focus:ring-offset-slate-900 rounded"
        >
          {linkParts[i]}
        </a>
      );
    } else {
      const boldParts = linkParts[i].split(/\*\*(.*?)\*\*/g);
      boldParts.forEach((p, j) => {
        if (j % 2 === 1) out.push(<strong key={`b-${key++}`} className="font-semibold text-slate-800 dark:text-slate-200">{p}</strong>);
        else if (p) out.push(p);
      });
    }
  }
  return out;
}

export default function About({ data }) {
  const { name, headline, bio, image } = data;
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div>
          <div className="flex items-start gap-4 sm:block">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">{name}</h1>
              <p className="text-slate-600 dark:text-slate-400 font-medium mt-1">{headline}</p>
            </div>
            {image && (
              <div className="w-28 shrink-0 sm:hidden">
                <img
                  src={image}
                  alt=""
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-6 sm:gap-8 mt-4">
            <div className="flex-1 min-w-0">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                {parseBio(bio)}
              </p>
            </div>
            {image && (
              <div className="hidden sm:flex sm:min-h-0">
                <img
                  src={image}
                  alt=""
                  className="sm:w-56 sm:h-full sm:min-h-0 rounded-lg object-cover shrink-0"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
