import { sections } from '../../data/sections';

function NavigationBar() {
  const links = sections.filter((section) => section.id !== 'dashboard');

  return (
    <nav className="fixed inset-x-0 top-0 z-30 border-b border-gray-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-3">
        <a href="#dashboard" className="shrink-0 text-base font-bold tracking-tight text-gray-900">
          Nhat Truong<span className="text-blue-600">.</span>
        </a>
        <div className="-mr-2 flex items-center gap-1 overflow-x-auto">
          {links.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
