import React from 'react';
import SkillIcon from '../Common/SkillIcon';

function SkillDetail({ skill }) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col">
      <div className="flex items-center mb-4">
        <SkillIcon skillId={skill.id} showName={false} />
        <h3 className="text-xl font-semibold ml-2">{skill.name}</h3>
      </div>
      <p>
        <strong>Experience:</strong> {skill.experience.years} years
      </p>
      <p>
        <strong>Proficiency:</strong> {skill.proficiency}
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={`/impacts?skill=${skill.id}`}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          Related Impacts
        </a>
        <a
          href={`/projects?skill=${skill.id}`}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          Related Projects
        </a>
      </div>
    </div>
  );
}

export default SkillDetail;
