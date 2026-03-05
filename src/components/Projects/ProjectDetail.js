import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../../data/projects';

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
        </div>
        <p className="text-gray-600">{project.summary}</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-700">{project.description}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Detail</h2>
        <p className="text-gray-700">{project.detail}</p>
      </section>

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
    </main>
  );
}

export default ProjectDetail;
