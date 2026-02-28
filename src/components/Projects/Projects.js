function Projects() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Projects & Hackathons</h2>
        <p className="text-gray-600">Selected builds, research demos, and competitions.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">Project Title</h3>
            <span className="text-sm text-gray-500">2024</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            One-line summary of the project and its outcome.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Tech: Python, React, Flask
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">Hackathon Project</h3>
            <span className="text-sm text-gray-500">Hackathon • 2023</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            What you built, problem solved, or award received.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Tech: TensorFlow, Firebase
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
