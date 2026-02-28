function Research() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Research</h2>
        <p className="text-gray-600">Research roles and publications.</p>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">Lab / Group Name</h3>
            <span className="text-sm text-gray-500">Research Assistant • 2024–Present</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Short description of your research focus and outcomes.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
            <li>Problem area, model, or system you worked on.</li>
            <li>Results or impact (metrics if possible).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Research;
