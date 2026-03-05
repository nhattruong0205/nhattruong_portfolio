import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

function Projects() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Projects & Hackathons</h2>
        <p className="text-gray-600">Selected builds, research demos, and competitions.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            aria-label={`View details for ${project.name}`}
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <span className="text-sm text-gray-500">
                {project.category} • {project.year}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
                Built a wearable health data analysis system using simulated sensor data. 
                Used Google’s TimesFM for forecasting and trained detection models to diagnose current conditions 
                and enable early disease detection.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-blue-700 transition-transform group-hover:translate-x-0.5">
                View details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
