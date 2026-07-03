import { useState } from 'react';
import { Link } from 'react-router-dom';
import { research } from '../../data/research';
import { researchGroups } from '../../data/researchGroups';

function Research() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeResearch = research[activeIndex];

  function showPreviousResearch() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + research.length) % research.length);
  }

  function showNextResearch() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % research.length);
  }

  return (
    <section className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Research</h2>
        <p className="text-gray-600">Research roles and publications.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Research Groups</h3>
        <div className="space-y-4">
          {researchGroups.map((group) => (
            <div key={group.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-lg font-semibold">{group.name}</h4>
                <span className="text-sm text-gray-500">
                  {group.year}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{group.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Research Papers</h3>
          {research.length > 1 ? (
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                {activeIndex + 1} / {research.length}
              </span>
              <button
                type="button"
                onClick={showPreviousResearch}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
                aria-label="Show previous research paper"
              >
                ←
              </button>
              <button
                type="button"
                onClick={showNextResearch}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
                aria-label="Show next research paper"
              >
                →
              </button>
            </div>
          ) : null}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
            {activeResearch.coverImage ? (
              <div className="mb-5 overflow-hidden rounded-2xl border border-gray-200 bg-gray-950">
                <img
                  src={activeResearch.coverImage.src}
                  alt={activeResearch.coverImage.alt}
                  className="aspect-video w-full object-contain bg-slate-950 transition duration-500 group-hover:scale-[1.01]"
                />
              </div>
            ) : null}
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  {activeResearch.category}
                </p>
                <h4 className="mt-1 text-2xl font-semibold text-gray-900">{activeResearch.name}</h4>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                {activeResearch.year}
              </span>
            </div>
            <p className="mt-4 text-base text-gray-700">{activeResearch.summary}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {research.length > 1 ? 'Use the arrows to browse papers' : ''}
              </span>
              <Link
                to={`/research/${activeResearch.slug}`}
                className="text-sm font-semibold text-blue-700 transition hover:translate-x-0.5"
              >
                View details →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">All papers</p>
            <div className="mt-4 space-y-3">
              {research.map((entry, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={entry.slug}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                      isActive
                        ? 'border-blue-300 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-blue-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-gray-900">{entry.name}</p>
                        <p className="mt-1 text-sm text-gray-600">{entry.category}</p>
                      </div>
                      <span className="text-sm text-gray-500">{entry.year}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
