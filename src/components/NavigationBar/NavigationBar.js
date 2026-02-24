// src/components/NavigationBar.js
import React from 'react';

function NavigationBar() {
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
          href="#aboutme"
          className="text-sm font-semibold uppercase tracking-wide text-gray-600 transition hover:text-gray-900"
        >
          About Me
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
