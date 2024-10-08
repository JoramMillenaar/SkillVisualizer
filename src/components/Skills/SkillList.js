import React, { useState, useEffect } from 'react';
import SkillDetail from './SkillDetail';
import userData from '../../data/userData.json';

function SkillList() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch skills from userData.json
    setSkills(userData.skills);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <SkillDetail key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillList;
