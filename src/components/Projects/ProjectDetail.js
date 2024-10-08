import React from 'react';
import { format } from 'date-fns';
import userData from '../../data/userData.json';

function ProjectDetail({ project }) {
  const startDate = new Date(project.start_date);
  const endDate = project.end_date ? new Date(project.end_date) : 'Present';

  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <p className="text-gray-600 mb-4">
        {format(startDate, 'MMM yyyy')} -{' '}
        {endDate === 'Present' ? 'Present' : format(endDate, 'MMM yyyy')}
      </p>
      <p className="mb-4">{project.description}</p>
      <div className="mt-4">
        <h4 className="font-semibold">Impacts Made:</h4>
        <ul className="list-disc list-inside mt-2">
          {project.impacts_made.map((impactId) => {
            const impact = userData.impacts.find((i) => i.id === impactId);
            return (
              <li key={impactId}>
                {impact ? impact.description : 'Unknown Impact'}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold">Skills Utilized:</h4>
        <ul className="flex space-x-2 mt-2">
          {project.skills_utilized.map((skillId) => {
            const skill = userData.skills.find((s) => s.id === skillId);
            return (
              <li key={skillId} className="px-2 py-1 bg-gray-200 rounded">
                {skill ? skill.name : 'Unknown Skill'}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDetail;
