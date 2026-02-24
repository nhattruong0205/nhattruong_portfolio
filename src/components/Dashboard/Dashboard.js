import { useState } from 'react';
import DynamicWords from '../DynamicWords/DynamicWords';
import headshot from '../../Images/Headshots.jpeg';

function Dashboard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl motion-safe:animate-pulse" />
      <div className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl motion-safe:animate-pulse" />

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              Portfolio
            </p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Nhat Truong
            </h1>
            <p className="text-lg font-semibold text-gray-700">
              AI & Data Science | Health Predictive Modeling | Machine Learning Research
            </p>
            <p className="max-w-xl text-base text-gray-600">
              I am a Computer Science student specializing in machine learning,
              predictive health analytics, and intelligent systems. My focus is
              building practical AI solutions for real-world healthcare and
              decision-making problems.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <DynamicWords />
            <p className="mt-2 text-sm text-gray-500">
              Building practical, research-driven systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/nhat_truong_cv.pdf"
              download
              className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Research CV
            </a>
            <a
              href="/nhat_truong_cv.pdf"
              download
              className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:-translate-y-0.5 hover:border-gray-400 hover:text-gray-900"
            >
              Work CV
            </a>
            <a
              href="#aboutme"
              className="inline-flex items-center rounded-full border border-transparent bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-800"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-blue-100 via-white to-amber-100 opacity-70 blur-xl" />
          <button
            type="button"
            onClick={() => setIsFlipped((prev) => !prev)}
            className="flip-card relative h-[360px] w-full rounded-[24px] border border-gray-200 bg-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
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
                    I enjoy building AI systems that are reliable, explainable, and
                    useful in healthcare settings.
                  </p>
                </div>
              </div>
            </div>
          </button>
          <p className="mt-3 text-center text-xs text-gray-500">Click the photo to flip.</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
