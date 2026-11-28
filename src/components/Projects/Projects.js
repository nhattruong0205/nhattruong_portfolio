import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjectCoverImages, projects } from '../../data/projects';
import SectionHeading from '../SectionHeading/SectionHeading';
import AwardBadge from '../AwardBadge/AwardBadge';
import SectionTabs from '../SectionTabs/SectionTabs';
import Pagination, { getPageCount, getPageItems } from '../Pagination/Pagination';

const tabs = [
  { id: 'hackathon', label: 'Hackathons' },
  { id: 'project', label: 'Projects' },
];

// Projects default to the Hackathons tab; set `kind: 'project'` in data/projects.js
// to list one under Projects. A tab only appears once it has something in it.
function getProjectKind(project) {
  return project.kind ?? 'hackathon';
}

// Prize winners first, then the order in data/projects.js.
function sortProjects(items) {
  return [...items].sort((a, b) => Boolean(b.award) - Boolean(a.award));
}

function ProjectCard({ project }) {
  const cover = getProjectCoverImages(project)[0];

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
    >
      <div className="relative aspect-video overflow-hidden border-b border-gray-200 bg-slate-950">
        {cover ? (
          <img
            src={cover.src}
            alt={cover.alt}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-6 text-center">
            <span className="text-2xl font-bold tracking-tight text-white">{project.name}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
          <span className="uppercase tracking-wide text-blue-600">{project.category}</span>
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-blue-700">{project.year}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{project.name}</h3>
        {project.award ? <AwardBadge award={project.award} className="mt-2 self-start" /> : null}
        <p className="mt-2 flex-1 text-sm text-gray-600">{project.summary}</p>
        <span className="mt-4 text-sm font-semibold text-blue-700 transition group-hover:translate-x-0.5">
          View details →
        </span>
      </div>
    </Link>
  );
}

function Projects() {
  const visibleTabs = tabs
    .map((tab) => ({ ...tab, count: projects.filter((project) => getProjectKind(project) === tab.id).length }))
    .filter((tab) => tab.count > 0);
  const [activeTab, setActiveTab] = useState(visibleTabs[0]?.id);
  const [page, setPage] = useState(0);
  const tabProjects = sortProjects(projects.filter((project) => getProjectKind(project) === activeTab));
  const pageCount = getPageCount(tabProjects);

  function changeTab(tabId) {
    setActiveTab(tabId);
    setPage(0);
  }

  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Builds"
        title="Projects & Hackathons"
        description="Selected builds, research demos, and competitions."
      >
        <SectionTabs tabs={visibleTabs} activeId={activeTab} onChange={changeTab} label="Project type" />
      </SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2">
        {getPageItems(tabProjects, page).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <Pagination page={page} pageCount={pageCount} onChange={setPage} label="Projects" />
    </section>
  );
}

export default Projects;
