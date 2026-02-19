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
          className="font-medium text-slate-800 underline hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 rounded"
        >
          {linkParts[i]}
        </a>
      );
    } else {
      const boldParts = linkParts[i].split(/\*\*(.*?)\*\*/g);
      boldParts.forEach((p, j) => {
        if (j % 2 === 1) out.push(<strong key={`b-${key++}`} className="font-semibold text-slate-800">{p}</strong>);
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
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{name}</h1>
          <p className="text-slate-600 font-medium mt-1">{headline}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-6 sm:gap-8 mt-4">
            <div className="flex-1 min-w-0">
              <p className="text-slate-700 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                {parseBio(bio)}
              </p>
            </div>
            {image && (
              <div className="flex sm:min-h-0">
                <img
                  src={image}
                  alt=""
                  className="w-32 h-32 sm:w-56 sm:h-full sm:min-h-0 rounded-lg object-cover shrink-0"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
