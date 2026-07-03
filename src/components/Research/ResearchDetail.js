import { Link, useParams } from 'react-router-dom';
import { getResearchBySlug } from '../../data/research';

function ResearchDetail() {
  const { researchSlug } = useParams();
  const entry = getResearchBySlug(researchSlug);

  if (!entry) {
    return (
      <main className="px-6 py-20 max-w-4xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Research not found</h1>
        <p className="text-gray-600">The research page you requested does not exist.</p>
        <Link
          to="/#research"
          className="inline-flex rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white"
        >
          Back to Research
        </Link>
      </main>
    );
  }

  return (
    <main className="px-6 py-20 max-w-4xl mx-auto space-y-8">
      <div className="space-y-3">
        <Link to="/#research" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          ← Back to Research
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold">{entry.name}</h1>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {entry.category} • {entry.year}
          </span>
        </div>
        <p className="text-gray-600">{entry.summary}</p>
      </div>

      {entry.coverImage ? (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-950">
          <img
            src={entry.coverImage.src}
            alt={entry.coverImage.alt}
            className="aspect-video w-full object-contain bg-slate-950"
          />
        </div>
      ) : null}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-700">{entry.description}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Detail</h2>
        <p className="whitespace-pre-line text-gray-700">{entry.detail}</p>
      </section>

      {entry.tech.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Tools & Methods</h2>
          <ul className="flex flex-wrap gap-2">
            {entry.tech.map((techItem) => (
              <li
                key={techItem}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
              >
                {techItem}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {entry.paperUrl ? (
        <div>
          <a
            href={entry.paperUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          >
            View Paper
          </a>
        </div>
      ) : null}
    </main>
  );
}

export default ResearchDetail;
