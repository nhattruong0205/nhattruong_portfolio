import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Dashboard from './components/Dashboard/Dashboard';
import Education from './components/Education/Education';
import WorkTeaching from './components/WorkTeaching/WorkTeaching';
import Research from './components/Research/Research';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/Projects/ProjectDetail';
import ResearchDetail from './components/Research/ResearchDetail';
import AboutMe from './components/AboutMe/AboutMe';
import ScrollSpy from './components/ScrollSpy/ScrollSpy';
import Checklist from './components/Checklist/Checklist';
import News from './components/News/News';
import { sections } from './data/sections';

const sectionClassName = 'mx-auto max-w-4xl px-6 py-16';

function HomePage() {
  return (
    <div className="app-container">
      <NavigationBar />
      <ScrollSpy sections={sections} />
      <section id="dashboard" className="pt-16">
        <Dashboard />
      </section>
      <section id="news" className={sectionClassName}>
        <News />
      </section>
      <section id="education" className={sectionClassName}>
        <Education />
      </section>
      <section id="research" className={sectionClassName}>
        <Research />
      </section>
      <section id="projects" className={sectionClassName}>
        <Projects />
      </section>
      <section id="work" className={sectionClassName}>
        <WorkTeaching />
      </section>
      <section id="aboutme" className="mt-12">
        <AboutMe />
      </section>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checklist" element={<Checklist />} />
      <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
      <Route path="/research/:researchSlug" element={<ResearchDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
