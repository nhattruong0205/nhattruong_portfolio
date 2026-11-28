export const PAGE_SIZE = 4;

export function getPageItems(items, page) {
  return items.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
}

export function getPageCount(items) {
  return Math.max(1, Math.ceil(items.length / PAGE_SIZE));
}

const arrowClassName =
  'inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-700';

function Pagination({ page, pageCount, onChange, label }) {
  if (pageCount <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center justify-center gap-2" aria-label={`${label} pages`}>
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 0}
        className={arrowClassName}
        aria-label="Previous page"
      >
        ‹
      </button>
      {Array.from({ length: pageCount }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onChange(index)}
          aria-current={index === page ? 'page' : undefined}
          className={`inline-flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-sm font-semibold transition ${
            index === page
              ? 'bg-blue-600 text-white shadow-sm'
              : 'border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-700'
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === pageCount - 1}
        className={arrowClassName}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}

export default Pagination;
