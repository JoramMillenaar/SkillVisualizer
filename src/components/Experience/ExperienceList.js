import React, { useState, useEffect } from 'react';
import ExperienceDetail from './ExperienceDetail';
import userData from '../../data/userData.json';

function ExperienceList() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Fetch experience from userData.json
    setExperiences(userData.experience);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <ExperienceDetail key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceList;
