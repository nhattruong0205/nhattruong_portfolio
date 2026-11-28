import { FaTrophy } from 'react-icons/fa';

function AwardBadge({ award, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-2.5 py-0.5 text-xs font-semibold text-amber-950 shadow-sm ${className}`}
    >
      <FaTrophy className="h-3 w-3" aria-hidden="true" />
      Winner · {award}
    </span>
  );
}

export default AwardBadge;
