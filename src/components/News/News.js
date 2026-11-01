import { useState } from 'react';
import { news } from '../../data/news';
import SectionHeading from '../SectionHeading/SectionHeading';

const INITIAL_COUNT = 5;
const NEW_BADGE_DAYS = 45;

const typeStyles = {
  paper: { label: 'Paper', dot: 'bg-blue-500', chip: 'bg-blue-50 text-blue-700' },
  award: { label: 'Award', dot: 'bg-amber-500', chip: 'bg-amber-50 text-amber-700' },
  teaching: { label: 'Teaching', dot: 'bg-emerald-500', chip: 'bg-emerald-50 text-emerald-700' },
  competition: { label: 'Competition', dot: 'bg-violet-500', chip: 'bg-violet-50 text-violet-700' },
  talk: { label: 'Talk', dot: 'bg-rose-500', chip: 'bg-rose-50 text-rose-700' },
  milestone: { label: 'Milestone', dot: 'bg-gray-700', chip: 'bg-gray-100 text-gray-700' },
};

function parseNewsDate(dateString) {
  const [year, month = 1, day = 1] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatNewsDate(dateString, endDateString) {
  const hasDay = dateString.split('-').length === 3;
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: hasDay ? 'numeric' : undefined,
    year: 'numeric',
  });

  if (endDateString) {
    return formatter.formatRange(parseNewsDate(dateString), parseNewsDate(endDateString));
  }
  return formatter.format(parseNewsDate(dateString));
}

function isRecent(dateString) {
  const ageInDays = (Date.now() - parseNewsDate(dateString).getTime()) / (1000 * 60 * 60 * 24);
  return ageInDays >= 0 && ageInDays <= NEW_BADGE_DAYS;
}

function sortNews(items) {
  return [...items].sort((a, b) => {
    if (Boolean(a.pinned) !== Boolean(b.pinned)) {
      return a.pinned ? -1 : 1;
    }
    return parseNewsDate(b.date) - parseNewsDate(a.date);
  });
}

function News() {
  const [showAll, setShowAll] = useState(false);
  const sortedNews = sortNews(news);
  const visibleNews = showAll ? sortedNews : sortedNews.slice(0, INITIAL_COUNT);

  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Latest"
        title="News & Updates"
        description="Papers, competitions, teaching, and milestones."
      />

      <ol className="relative space-y-6 border-l-2 border-gray-200 pl-8">
        {visibleNews.map((item) => {
          const style = typeStyles[item.type] ?? typeStyles.milestone;

          return (
            <li key={`${item.date}-${item.title}`} className="relative">
              <span
                className={`absolute -left-[41px] top-5 h-4 w-4 rounded-full border-4 border-white ${style.dot} shadow`}
                aria-hidden="true"
              />
              <article className="rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <time dateTime={item.date} className="uppercase tracking-wide text-gray-500">
                    {formatNewsDate(item.date, item.endDate)}
                  </time>
                  <span className={`rounded-full px-2.5 py-0.5 ${style.chip}`}>{style.label}</span>
                  {item.venue ? (
                    <span className="rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-red-700">{item.venue}</span>
                  ) : null}
                  {item.status ? (
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-amber-700">{item.status}</span>
                  ) : null}
                  {isRecent(item.date) ? (
                    <span className="rounded-full bg-red-500 px-2.5 py-0.5 text-white">New</span>
                  ) : null}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                {item.text ? <p className="mt-1 text-sm text-gray-600">{item.text}</p> : null}
              </article>
            </li>
          );
        })}
      </ol>

      {sortedNews.length > INITIAL_COUNT ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-400 hover:text-gray-900"
          >
            {showAll ? 'Show less' : `Show all ${sortedNews.length} updates`}
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default News;
