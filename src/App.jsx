import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LeetCode from './components/Leetcode';
import SocialMedia from './components/SocialMedia';
import './index.css';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/leetcode" element={<LeetCode />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;