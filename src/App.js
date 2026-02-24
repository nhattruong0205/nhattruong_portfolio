import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Dashboard from './components/Dashboard/Dashboard';
import Education from './components/Education/Education';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <section id="dashboard">
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
