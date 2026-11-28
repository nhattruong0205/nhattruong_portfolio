function SectionTabs({ tabs, activeId, onChange, label }) {
  if (tabs.length <= 1) {
    return null;
  }

  return (
    <div className="inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm" role="tablist" aria-label={label}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              isActive ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
            <span className={`ml-1.5 text-xs ${isActive ? 'text-gray-300' : 'text-gray-400'}`}>{tab.count}</span>
          </button>
        );
      })}
    </div>
  );
}

export default SectionTabs;
