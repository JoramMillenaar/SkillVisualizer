import React from 'react';
import userData from '../../data/userData.json';


function ImpactDetail({ impact }) {
    return (
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <p className="text-lg mb-4">{impact.description}</p>
            <div className="mt-4">
                <h4 className="font-semibold">Skills Involved:</h4>
                <ul className="flex space-x-2 mt-2">
                    {impact.skills_involved.map((skillId) => {
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

export default ImpactDetail;
