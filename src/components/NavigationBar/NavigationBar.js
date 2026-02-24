// src/components/NavigationBar.js
import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="navbar">
      <a href="#dashboard" className="nav-tab">Dashboard</a>
      <a href="#education" className="nav-tab">Education</a>
      <a href="#aboutme" className="nav-tab">About Me</a>
    </nav>
  );
}

export default NavigationBar;
