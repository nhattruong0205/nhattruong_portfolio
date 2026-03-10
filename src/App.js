import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Dashboard from './components/Dashboard/Dashboard';
import Education from './components/Education/Education';
import WorkTeaching from './components/WorkTeaching/WorkTeaching';
import Research from './components/Research/Research';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/Projects/ProjectDetail';
import AboutMe from './components/AboutMe/AboutMe';
import ScrollSpy from './components/ScrollSpy/ScrollSpy';
import CourseNotesDetail from './components/Education/CourseNotesDetail';

const sections = [
  { id: 'dashboard', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'work', label: 'Work' },
  { id: 'aboutme', label: 'About' },
];

function HomePage() {
  return (
    <div className="app-container">
      <NavigationBar />
      <ScrollSpy sections={sections} />
      <section id="dashboard" className="pt-20">
        <Dashboard />
      </section>
      <section id="education">
        <Education/>
      </section>
      <section id="research" className="px-6 py-12 max-w-4xl mx-auto">
        <Research />
      </section>
      <section id="projects" className="px-6 py-12 max-w-4xl mx-auto">
        <Projects />
      </section>
      <section id="work" className="px-6 py-12 max-w-4xl mx-auto">
        <WorkTeaching />
      </section>
      <section id="aboutme">
        <AboutMe/>
        </section>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
      <Route path="/courses/:courseSlug" element={<CourseNotesDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
