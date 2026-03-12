import { useEffect, useState } from 'react';

function NavigationBar() {
  const [visitCount, setVisitCount] = useState(null);
  const [displayCount, setDisplayCount] = useState(0);
  const [visitStatus, setVisitStatus] = useState('loading');

  useEffect(() => {
    const sessionRecordedKey = 'portfolioVisitRecorded';
    const sessionCountKey = 'portfolioVisitCount';

    if (window.sessionStorage.getItem(sessionRecordedKey) === 'true') {
      const storedCount = Number.parseInt(window.sessionStorage.getItem(sessionCountKey) ?? '', 10);

      if (!Number.isNaN(storedCount)) {
        setVisitCount(storedCount);
        setVisitStatus('ready');
      }

      return undefined;
    }

    const controller = new AbortController();
    const apiBaseUrl = (process.env.REACT_APP_API_BASE_URL ?? '').trim().replace(/\/$/, '');

    if (!apiBaseUrl) {
      setVisitStatus('error');
      return undefined;
    }

    const endpoint = `${apiBaseUrl}/api/visits`;

    async function recordVisit() {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Visit counter request failed with ${response.status}`);
        }

        const data = await response.json();

        if (typeof data.count !== 'number') {
          throw new Error('Visit counter response did not include a numeric count');
        }

        window.sessionStorage.setItem(sessionRecordedKey, 'true');
        window.sessionStorage.setItem(sessionCountKey, String(data.count));
        setVisitCount(data.count);
        setVisitStatus('ready');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setVisitStatus('error');
        }
      }
    }

    recordVisit();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (visitCount === null) {
      return undefined;
    }

    const animationDurationMs = 900;
    const startTime = performance.now();
    let frameId = 0;

    const animate = (now) => {
      const progress = Math.min((now - startTime) / animationDurationMs, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      setDisplayCount(Math.round(visitCount * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [visitCount]);

  const visitLabel =
    visitStatus === 'ready'
      ? new Intl.NumberFormat('en-US').format(displayCount)
      : visitStatus === 'error'
        ? '--'
        : '...';

  return (
    <nav className="fixed inset-x-0 top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-6 px-6 py-4">
        <a
          href="#dashboard"
          className="text-sm font-semibold uppercase tracking-wide text-gray-600 transition hover:text-gray-900"
        >
          Dashboard
        </a>
        <a
          href="#education"
          className="text-sm font-semibold uppercase tracking-wide text-gray-600 transition hover:text-gray-900"
        >
          Education
        </a>
        <a
          href="#research"
          className="text-sm font-semibold uppercase tracking-wide text-gray-600 transition hover:text-gray-900"
        >
          Research
        </a>
        <a
          href="#work"
          className="text-sm font-semibold uppercase tracking-wide text-gray-600 transition hover:text-gray-900"
        >
          Work & Teaching
        </a>
        <a
          href="#projects"
          className="text-sm font-semibold uppercase tracking-wide text-gray-600 transition hover:text-gray-900"
        >
          Projects
        </a>
        <a
          href="#aboutme"
          className="text-sm font-semibold uppercase tracking-wide text-gray-600 transition hover:text-gray-900"
        >
          About Me
        </a>
        <div
          className="visit-nav-badge ml-auto inline-flex items-center gap-3 rounded-full border border-sky-100 bg-white/80 px-3 py-2 text-sm text-slate-700 shadow-sm"
          aria-label={visitStatus === 'error' ? 'Visit count unavailable' : `Visit count ${visitLabel}`}
          title={visitStatus === 'error' ? 'Visit API unavailable' : 'Number of visits'}
        >
          <span className="visit-nav-dot h-2.5 w-2.5 rounded-full bg-sky-500" aria-hidden="true" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Visits
          </span>
          <span className="visit-nav-number min-w-[2ch] text-base font-bold text-slate-900">
            {visitLabel}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
