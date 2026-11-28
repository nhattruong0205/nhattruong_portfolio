import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../../data/projects';
import AwardBadge from '../AwardBadge/AwardBadge';

function toEmbedUrl(url) {
  if (!url) {
    return '';
  }

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      const videoId = parsed.pathname.replace('/', '');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (parsed.pathname.startsWith('/embed/')) {
        return url;
      }

      if (parsed.pathname === '/watch') {
        const videoId = parsed.searchParams.get('v');
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
      }

      if (parsed.pathname.startsWith('/shorts/')) {
        const videoId = parsed.pathname.split('/')[2];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
      }
    }

    return url;
  } catch (error) {
    return url;
  }
}

function ProjectGallery({ images }) {
  const [index, setIndex] = useState(0);
  const image = images[index];

  if (!image) {
    return null;
  }

  function show(offset) {
    setIndex((current) => (current + offset + images.length) % images.length);
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-slate-950 shadow-sm">
      <div className="relative">
        <img src={image.src} alt={image.alt} className="aspect-video w-full object-contain" />
        {images.length > 1 ? (
          <>
            <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() => show(-1)}
              className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-lg text-white transition hover:bg-black/70"
              aria-label="Show previous image"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => show(1)}
              className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-lg text-white transition hover:bg-black/70"
              aria-label="Show next image"
            >
              →
            </button>
          </>
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className="flex items-center justify-center gap-2 border-t border-white/10 px-4 py-3">
          {images.map((galleryImage, imageIndex) => (
            <button
              key={`${galleryImage.src}-${imageIndex}`}
              type="button"
              onClick={() => setIndex(imageIndex)}
              className={`h-2.5 rounded-full transition ${
                imageIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/65'
              }`}
              aria-label={`Show image ${imageIndex + 1}`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return (
      <main className="px-6 py-20 max-w-4xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="text-gray-600">The project page you requested does not exist.</p>
        <Link
          to="/#projects"
          className="inline-flex rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white"
        >
          Back to Projects
        </Link>
      </main>
    );
  }

  const videoSrc = toEmbedUrl(project.videoEmbedUrl);

  return (
    <main className="px-6 py-20 max-w-4xl mx-auto space-y-8">
      <div className="space-y-3">
        <Link to="/#projects" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          ← Back to Projects
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {project.category} • {project.year}
          </span>
          {project.award ? <AwardBadge award={project.award} className="px-3 py-1 text-sm" /> : null}
        </div>
        <p className="text-gray-600">{project.summary}</p>
      </div>

      <ProjectGallery images={project.coverImages ?? []} />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-700">{project.description}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Detail</h2>
        {project.detail.split('\n\n').map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-gray-700">{paragraph}</p>
        ))}
      </section>

      {videoSrc ? (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Demo Video</h2>
          <div className="aspect-video overflow-hidden rounded-xl border border-gray-200 bg-black">
            <iframe
              src={videoSrc}
              title={`${project.name} demo video`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>
      ) : null}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((techItem) => (
            <li
              key={techItem}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
            >
              {techItem}
            </li>
          ))}
        </ul>
      </section>

      {project.demoUrl ? (
        <div>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Try the demo
          </a>
        </div>
      ) : null}

      {project.devpostUrl ? (
        <div>
          <a
            href={project.devpostUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          >
            View on Devpost
          </a>
        </div>
      ) : null}
    </main>
  );
}

export default ProjectDetail;
