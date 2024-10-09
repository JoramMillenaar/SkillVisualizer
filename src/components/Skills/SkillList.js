import React, { useState, useEffect } from 'react';
import SkillDetail from './SkillDetail';
import userData from '../../data/userData.json';
import { useLocation } from 'react-router-dom';

function SkillList() {
  const [skills, setSkills] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [skillType, setSkillType] = useState('all'); // 'all', 'soft', 'hard'
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const skillId = params.get('skill');

    let filteredSkills = userData.skills;

    if (skillId) {
      filteredSkills = filteredSkills.filter((skill) => skill.id === skillId);
    }

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filteredSkills = filteredSkills.filter((skill) =>
        skill.name.toLowerCase().includes(lowerCaseQuery)
      );
    }

    if (skillType !== 'all') {
      filteredSkills = filteredSkills.filter((skill) => skill.type === skillType);
    }

    setSkills(filteredSkills);
  }, [location, searchQuery, skillType]);


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search skills..."
            className="border rounded p-2 w-full md:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center">
          <label className="mr-4 font-semibold">Filter by:</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="skillType"
                value="all"
                checked={skillType === 'all'}
                onChange={(e) => setSkillType(e.target.value)}
                className="mr-2"
              />
              All
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="skillType"
                value="hard"
                checked={skillType === 'hard'}
                onChange={(e) => setSkillType(e.target.value)}
                className="mr-2"
              />
              Hard Skills
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="skillType"
                value="soft"
                checked={skillType === 'soft'}
                onChange={(e) => setSkillType(e.target.value)}
                className="mr-2"
              />
              Soft Skills
            </label>
          </div>
        </div>
      </div>

      {skills.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillDetail key={skill.id} skill={skill} />
          ))}
        </div>
      ) : (
        <p>No skills found.</p>
      )}
    </div>
  );
}

export default SkillList;
