import React, { useState, useEffect } from 'react';
import ImpactDetail from './ImpactDetail';
import userData from '../../data/userData.json';
import { useLocation } from 'react-router-dom';

function ImpactList() {
  const [impacts, setImpacts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Parse query parameters
    const params = new URLSearchParams(location.search);
    const skillId = params.get('skill');

    if (skillId) {
      // Filter impacts related to the specific skill
      const filteredImpacts = userData.impacts.filter((impact) =>
        impact.skills_involved.includes(skillId)
      );
      setImpacts(filteredImpacts);
    } else {
      // Show all impacts
      setImpacts(userData.impacts);
    }
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
