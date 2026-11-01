import { work } from '../../data/work';
import SectionHeading from '../SectionHeading/SectionHeading';

function WorkTeaching() {
  return (
    <section className="space-y-8">
      <SectionHeading eyebrow="Experience" title="Work & Teaching" description="Internships and teaching roles." />

      <div className="space-y-4">
        {work.map((job) => (
          <article
            key={`${job.role}-${job.period}`}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{job.role}</h3>
                <p className="text-sm font-medium text-blue-700">{job.organization}</p>
              </div>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                {job.period}
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-600">{job.summary}</p>
            {job.highlights.length > 0 ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
            {job.tools.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default WorkTeaching;
