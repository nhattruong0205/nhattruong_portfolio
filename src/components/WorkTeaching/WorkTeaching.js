function WorkTeaching() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Work & Teaching</h2>
        <p className="text-gray-600">Internships and teaching roles.</p>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">Data Science - Contract</h3>
            <span className="text-sm text-gray-500">Paid Intern • Spring 2024</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Built 2 analytics solutions using statistical models and visualizations. 
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
            <li>Healthcare project: Identified key socioeconomic and accessibility drivers of food insecurity by applying correlation analysis, 
              similarity metrics, and decision tree modeling to patient survey data, supporting data-driven funding allocation and stakeholder strategy decisions. </li>
            <li>Finance project: Improved customer segmentation accuracy by 15% by analyzing 100K+ financial transactions and 
              developing a predictability scoring framework based on transaction cadence and behavioral consistency, 
              enabling 30/60/90-day budgeting forecasts.</li>
            <li>Tools: Python(Pandas, NumPy, Scikit-learn), SQL, Matplotlib/Seaborn, Jupyter Notebook</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold">University of Texas at Dallas</h3>
            <span className="text-sm text-gray-500">Teaching Assistant • Fall 2024-Present</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Assisted with coursework, student support, and grading.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
            <li> Fall 2024-Spring 2025: Teaching Assistant for Discrete Mathematics for Computing I(CS2305)</li>
            <li> Fall 2025: Teaching Assistant for Web Programming Languages(CS6314)</li>
            <li> Spring 2026: Teaching Assistant for Programming Languages Paradigm(CS4337)</li>
            <li> Tool: HTML, CSS, JavaScript, SQL, MariaDB, Prolog, Lisp, Scheme, Racket</li>

          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkTeaching;
