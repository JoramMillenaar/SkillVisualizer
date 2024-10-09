import React from 'react';
import SkillIcon from '../Common/SkillIcon';
import userData from '../../data/userData.json';


function ImpactDetail({ impact }) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <p className="text-lg mb-4">{impact.description}</p>
      <div className="mt-4">
        <h4 className="font-semibold">Skills Involved:</h4>
        <ul className="flex space-x-4 mt-2">
          {impact.skills_involved.map((skillId) => (
            <li key={skillId}>
              <SkillIcon
                skillId={skillId}
                showName={false}
                size="1.5em"
                isClickable={true}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold">Projects Involved:</h4>
        <ul className="flex space-x-2 mt-2">
          {impact.projects_involved.map((projectId) => {
            const project = userData.projects.find((p) => p.id === projectId);
            return (
              <li key={projectId} className="px-2 py-1 bg-gray-200 rounded">
                <a
                  href={`/projects?project=${project.id}`}
                >
                  {project ? project.name : 'Unknown Project'}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ImpactDetail;
