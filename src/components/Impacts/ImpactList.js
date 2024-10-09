import React, { useState, useEffect } from 'react';
import ImpactDetail from './ImpactDetail';
import userData from '../../data/userData.json';
import { useLocation } from 'react-router-dom';

function ImpactList() {
  const [impacts, setImpacts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const skillId = params.get('skill');
    const projectId = params.get('project');

    let filteredImpacts = userData.impacts;

    if (skillId) {
      filteredImpacts = filteredImpacts.filter((impact) =>
        impact.skills.includes(skillId)
      );
    }

    if (projectId) {
      filteredImpacts = filteredImpacts.filter((impact) =>
        impact.projects_involved.includes(projectId)
      );
    }

    setImpacts(filteredImpacts);
  }, [location.search]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Impacts</h2>
      <div className="space-y-6">
        {impacts.map((impact) => (
          <ImpactDetail key={impact.id} impact={impact} />
        ))}
      </div>
    </div>
  );
}

export default ImpactList;
