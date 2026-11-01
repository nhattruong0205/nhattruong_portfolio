import { useState } from 'react';
import DynamicWords from '../DynamicWords/DynamicWords';
import headshot from '../../Images/Headshots.jpeg';

const highlights = [
  { value: 'Ph.D.', label: 'CS @ UT Dallas' },
];

function Dashboard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const researchCvUrl = `${process.env.PUBLIC_URL}/nhat_truong_cv.pdf`;
  const workCvUrl = `${process.env.PUBLIC_URL}/1-Page%20Resume.pdf`;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl motion-safe:animate-pulse" />
      <div className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl motion-safe:animate-pulse" />

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
        <div className="space-y-7">
          <a
            href="#news"
            className="group inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 py-1 pl-1 pr-3 text-sm text-gray-700 shadow-sm transition hover:border-blue-200"
          >
            <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">Latest</span>
            <span className="text-blue-600 transition group-hover:translate-x-0.5">→</span>
          </a>

          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Nhat Truong
            </h1>
            <p className="text-2xl font-semibold text-gray-700">
              I'm a <DynamicWords className="text-blue-600" />
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Medical Imaging · Computational Complexity · Data Science
            </p>
            <p className="max-w-xl text-base leading-relaxed text-gray-600">
              I am a Computer Science Ph.D. student specializing in machine learning,
              predictive health analytics, and intelligent systems. My focus is
              building practical AI solutions for real-world healthcare and
              decision-making problems.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={researchCvUrl}
              download
              className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Research CV
            </a>
            <a
              href={workCvUrl}
              download
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:border-gray-400 hover:text-gray-900"
            >
              Work CV
            </a>
            <a
              href="#aboutme"
              className="inline-flex items-center rounded-full border border-transparent bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-800"
            >
              Contact
            </a>
          </div>

          <dl className="grid max-w-md grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm">
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-2xl font-bold text-gray-900">{item.value}</dd>
                <dd className="text-xs text-gray-500">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-blue-100 via-white to-amber-100 opacity-70 blur-xl" />
          <button
            type="button"
            onClick={() => setIsFlipped((prev) => !prev)}
            className="flip-card relative h-[380px] w-full rounded-[24px] border border-gray-200 bg-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            aria-pressed={isFlipped}
            aria-label="Flip headshot card"
          >
            <div className={`flip-inner ${isFlipped ? 'flip-rotated' : ''}`}>
              <div className="flip-face flip-front">
                <img
                  src={headshot}
                  alt="Nhat Truong headshot"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flip-face flip-back">
                <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                    About Me
                  </p>
                  <p className="text-base text-gray-700">
                    Beside research, I enjoy trying new foods and traveling. I'm also a part-time stock trader.
                  </p>
                </div>
              </div>
            </div>
          </button>
          <p className="relative mt-3 text-center text-xs text-gray-500">Click the photo to flip.</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
