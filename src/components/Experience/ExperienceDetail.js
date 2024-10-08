import React from 'react';
import { format } from 'date-fns';
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
      <ul className="list-disc list-inside mb-4">
        {experience.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="mt-4">
        <h4 className="font-semibold">Skills Used:</h4>
        <ul className="flex space-x-2 mt-2">
          {experience.skills_used.map((skillId) => {
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

export default ExperienceDetail;
