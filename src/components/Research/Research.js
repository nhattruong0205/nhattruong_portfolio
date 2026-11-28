import { useState } from 'react';
import { Link } from 'react-router-dom';
import { research } from '../../data/research';
import { researchGroups } from '../../data/researchGroups';
import SectionHeading from '../SectionHeading/SectionHeading';
import SectionTabs from '../SectionTabs/SectionTabs';
import Pagination, { getPageCount, getPageItems } from '../Pagination/Pagination';

const tabs = [
  { id: 'papers', label: 'Papers', items: research },
  { id: 'groups', label: 'Research Groups', items: researchGroups },
];

function PaperCard({ paper }) {
  return (
    <Link
      to={`/research/${paper.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
    >
      <div className="relative aspect-video overflow-hidden border-b border-gray-200 bg-slate-950">
        {paper.coverImage ? (
          <img
            src={paper.coverImage.src}
            alt={paper.coverImage.alt}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-800 p-6 text-center">
            <span className="text-lg font-semibold text-white">{paper.category}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
          <span className="uppercase tracking-wide text-blue-600">{paper.category}</span>
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-blue-700">{paper.year}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-gray-900">{paper.name}</h3>
        <p className="mt-2 flex-1 text-sm text-gray-600">{paper.summary}</p>
        <span className="mt-4 text-sm font-semibold text-blue-700 transition group-hover:translate-x-0.5">
          View details →
        </span>
      </div>
    </Link>
  );
}

function GroupCard({ group }) {
  return (
    <div className="rounded-2xl border border-gray-200 border-l-4 border-l-blue-500 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{group.name}</h3>
        <span className="text-sm text-gray-500">{group.year}</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{group.description}</p>
    </div>
  );
}

function Research() {
  const visibleTabs = tabs
    .map((tab) => ({ ...tab, count: tab.items.length }))
    .filter((tab) => tab.count > 0);
  const [activeTab, setActiveTab] = useState(visibleTabs[0]?.id);
  const [page, setPage] = useState(0);
  const tabItems = visibleTabs.find((tab) => tab.id === activeTab)?.items ?? [];
  const pageItems = getPageItems(tabItems, page);

  function changeTab(tabId) {
    setActiveTab(tabId);
    setPage(0);
  }

  return (
    <section className="space-y-8">
      <SectionHeading eyebrow="Publications" title="Research" description="Research groups and published papers.">
        <SectionTabs tabs={visibleTabs} activeId={activeTab} onChange={changeTab} label="Research type" />
      </SectionHeading>

      {activeTab === 'papers' ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {pageItems.map((paper) => (
            <PaperCard key={paper.slug} paper={paper} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {pageItems.map((group) => (
            <GroupCard key={group.name} group={group} />
          ))}
        </div>
      )}

      <Pagination page={page} pageCount={getPageCount(tabItems)} onChange={setPage} label="Research" />
    </section>
  );
}

export default Research;
