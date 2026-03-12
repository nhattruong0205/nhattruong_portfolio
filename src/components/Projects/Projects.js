import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

function getProjectCoverImages(project) {
  if (Array.isArray(project.coverImages) && project.coverImages.length > 0) {
    return project.coverImages;
  }

  if (project.coverImageUrl) {
    return [
      {
        src: project.coverImageUrl,
        alt: project.coverAlt ?? `${project.name} cover`,
      },
    ];
  }

  if (!project.videoEmbedUrl) {
    return [];
  }

  try {
    const parsed = new URL(project.videoEmbedUrl);
    const host = parsed.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      const videoId = parsed.pathname.replace('/', '');
      return videoId
        ? [{ src: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, alt: project.coverAlt ?? `${project.name} cover` }]
        : [];
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (parsed.pathname.startsWith('/embed/')) {
        const videoId = parsed.pathname.split('/')[2];
        return videoId
          ? [{ src: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, alt: project.coverAlt ?? `${project.name} cover` }]
          : [];
      }

      if (parsed.pathname === '/watch') {
        const videoId = parsed.searchParams.get('v');
        return videoId
          ? [{ src: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, alt: project.coverAlt ?? `${project.name} cover` }]
          : [];
      }
    }
  } catch (error) {
    return [];
  }

  return [];
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCoverIndex, setActiveCoverIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const activeProjectCoverImages = getProjectCoverImages(activeProject);
  const activeProjectCover = activeProjectCoverImages[activeCoverIndex] ?? null;

  useEffect(() => {
    setActiveCoverIndex(0);
  }, [activeIndex]);

  function showPreviousProject() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + projects.length) % projects.length);
  }

  function showNextProject() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length);
  }

  function showPreviousCover() {
    setActiveCoverIndex((currentIndex) => (
      currentIndex - 1 + activeProjectCoverImages.length
    ) % activeProjectCoverImages.length);
  }

  function showNextCover() {
    setActiveCoverIndex((currentIndex) => (currentIndex + 1) % activeProjectCoverImages.length);
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Projects & Hackathons</h2>
          <p className="text-gray-600">Selected builds, research demos, and competitions.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
            {activeIndex + 1} / {projects.length}
          </span>
          <button
            type="button"
            onClick={showPreviousProject}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
            aria-label="Show previous project"
          >
            ←
          </button>
          <button
            type="button"
            onClick={showNextProject}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
            aria-label="Show next project"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
          {activeProjectCover ? (
            <div className="mb-5 overflow-hidden rounded-2xl border border-gray-200 bg-gray-950">
              <div className="relative">
                <img
                  src={activeProjectCover.src}
                  alt={activeProjectCover.alt}
                  className="aspect-video w-full object-contain bg-slate-950 transition duration-500 group-hover:scale-[1.01]"
                />
                {activeProjectCoverImages.length > 1 ? (
                  <>
                    <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-3">
                      <span className="rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white">
                        Preview {activeCoverIndex + 1} / {activeProjectCoverImages.length}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
                      <button
                        type="button"
                        onClick={showPreviousCover}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-lg text-white transition hover:bg-black/70"
                        aria-label="Show previous project preview"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={showNextCover}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-lg text-white transition hover:bg-black/70"
                        aria-label="Show next project preview"
                      >
                        →
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
              {activeProjectCoverImages.length > 1 ? (
                <div className="flex items-center justify-center gap-2 border-t border-white/10 bg-slate-950/90 px-4 py-3">
                  {activeProjectCoverImages.map((coverImage, index) => {
                    const isActive = index === activeCoverIndex;

                    return (
                      <button
                        key={`${coverImage.src}-${index}`}
                        type="button"
                        onClick={() => setActiveCoverIndex(index)}
                        className={`h-2.5 rounded-full transition ${
                          isActive ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/65'
                        }`}
                        aria-label={`Show preview ${index + 1}`}
                      />
                    );
                  })}
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {activeProject.category}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-gray-900">{activeProject.name}</h3>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              {activeProject.year}
            </span>
          </div>
          <p className="mt-4 text-base text-gray-700">{activeProject.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-gray-500">Use the arrows to browse covers and projects</span>
            <Link
              to={`/projects/${activeProject.slug}`}
              className="text-sm font-semibold text-blue-700 transition hover:translate-x-0.5"
            >
              View details →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">All projects</p>
          <div className="mt-4 space-y-3">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={project.slug}
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
                      <p className="font-semibold text-gray-900">{project.name}</p>
                      <p className="mt-1 text-sm text-gray-600">{project.category}</p>
                    </div>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
