import { useEffect, useState } from 'react';

function ScrollSpy({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {sections.map((section) => {
        const isActive = activeId === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3"
            aria-label={section.label}
          >
            <span
              className={`h-3 w-3 rounded-full border transition ${
                isActive
                  ? 'border-blue-600 bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.5)]'
                  : 'border-gray-300 bg-white group-hover:border-gray-400'
              }`}
            />
            <span
              className={`text-xs font-semibold uppercase tracking-[0.2em] transition ${
                isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
              }`}
            >
              {section.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default ScrollSpy;
