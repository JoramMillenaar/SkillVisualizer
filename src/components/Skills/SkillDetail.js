import React from 'react';

function SkillDetail({ skill }) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
      <p className="mb-2">
        <strong>Experience:</strong> {skill.experience.years} years
      </p>
      <p className="mb-2">
        <strong>Proficiency:</strong> {skill.proficiency}
      </p>
      <div className="mt-4 space-x-4">
        <a
          href={`/impacts?skill=${skill.id}`}
          className="text-blue-500 hover:underline"
        >
          View Related Impacts
        </a>
        <a
          href={`/projects?skill=${skill.id}`}
          className="text-blue-500 hover:underline"
        >
          View Related Projects
        </a>
      </div>
    </div>
  );
}

export default SkillDetail;
