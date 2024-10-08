import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import SkillList from './components/Skills/SkillList';
import ExperienceList from './components/Experience/ExperienceList';
import ImpactList from './components/Impacts/ImpactList';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/skills" element={<SkillList />} />
                    <Route path="/experience" element={<ExperienceList />} />
                    <Route path="/impacts" element={<ImpactList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
