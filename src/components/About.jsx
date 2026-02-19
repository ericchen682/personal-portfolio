export default function About({ data }) {
  const { name, headline, bio, image } = data;
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
          {image && (
            <img
              src={image}
              alt=""
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shrink-0"
            />
          )}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{name}</h1>
            <p className="text-slate-600 font-medium mt-1">{headline}</p>
            <p className="mt-4 text-slate-700 leading-relaxed">{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
