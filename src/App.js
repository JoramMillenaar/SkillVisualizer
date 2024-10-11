import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import SkillList from './components/Skills/SkillList';
import ExperienceList from './components/Experience/ExperienceList';
import ImpactList from './components/Impacts/ImpactList';
import ProjectList from './components/Projects/ProjectList';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/skills" element={<SkillList />} />
            <Route path="/experience" element={<ExperienceList />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/impacts" element={<ImpactList />} />
            <Route path="/" element={<SkillList />} /> {/* Default route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
