import React from 'react';
import { format } from 'date-fns';
import SkillIcon from '../Common/SkillIcon';
import userData from '../../data/userData.json';



function ExperienceDetail({ experience }) {
  const startDate = new Date(experience.start_date);
  const endDate = experience.end_date ? new Date(experience.end_date) : 'Present';

  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">
        {experience.role} at {experience.company}
      </h3>
      <p className="text-gray-600 mb-4">
        {format(startDate, 'MMM yyyy')} -{' '}
        {endDate === 'Present' ? 'Present' : format(endDate, 'MMM yyyy')}
      </p>
      <h4 className='font-bold'>Responsibilities</h4>
      <ul className="list-disc list-inside mb-4">
        {experience.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {experience.impacts && experience.impacts.length > 0 && (
        <>
          <h4 className='font-bold'>Impact</h4>
          <ul className="list-disc list-inside mb-4">
            {experience.impacts.map((item, index) => {
              const impact = userData.impacts.find((i) => i.id === item);
              return (
                <li key={index}>{impact ? impact.description : 'Unknown Impact'}</li>
              );
            })}
          </ul>
        </>
      )}
      <div className="mt-4">
        <h4 className="font-semibold">Skills Used:</h4>
        <ul className="flex space-x-4 mt-2">
          {experience.skills.map((skillId) => (
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
      {experience.projects && experience.projects.length > 0 && (
        <>
          <div className="mt-4">
            <h4 className="font-semibold">Projects:</h4>
            <ul className="flex space-x-2 mt-2">
              {experience.projects.map((projectId) => {
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
        </>
      )}
    </div>
  );
}

export default ExperienceDetail;
