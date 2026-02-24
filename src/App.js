import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Dashboard from './components/Dashboard/Dashboard';
import Education from './components/Education/Education';
import AboutMe from './components/AboutMe/AboutMe';
import ScrollSpy from './components/ScrollSpy/ScrollSpy';

const sections = [
  { id: 'dashboard', label: 'Home' },
  { id: 'education', label: 'Education' },
];

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <ScrollSpy sections={sections} />
      <section id="dashboard" className="pt-20">
        <Dashboard />
      </section>
      <section className="px-6 py-12 space-y-6 max-w-4xl mx-auto" id="education">
        <Education/>
      </section>
      <section id="aboutme">
        <AboutMe/>
        </section>
    </div>
  );
}

export default App;
