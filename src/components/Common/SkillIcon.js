import React from 'react';
import {
    FaJsSquare,
    FaReact,
    FaUsers,
    FaDatabase,
    FaPython,
    FaGitAlt,
    FaDocker,
    FaVuejs,
    FaQuestionCircle,
} from 'react-icons/fa';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Link } from 'react-router-dom';
import userData from '../../data/userData.json';


const iconMap = {
    'JavaScript': FaJsSquare,
    'React': FaReact,
    'Team Leadership': FaUsers,
    'Database Optimization': FaDatabase,
    'Python': FaPython,
    'Git': FaGitAlt,
    'Docker': FaDocker,
    'Vue.js': FaVuejs,
};


function SkillIcon({ skillId, showName = false, size = '2em', isClickable = false }) {
    const skill = userData.skills.find((s) => s.id === skillId);

    if (!skill) {
        return (
            <span className="px-2 py-1 bg-red-200 rounded">
                Unknown Skill
            </span>
        );
    }

    const IconComponent = iconMap[skill.name] || FaQuestionCircle; // Default icon if not found

    const iconElement = (
        <div data-tooltip-id={`tooltip-${skillId}`} className="inline-block">
            <IconComponent size={size} />
            <ReactTooltip id={`tooltip-${skillId}`} place="top" effect="solid">
                {skill.name}
            </ReactTooltip>
        </div>
    );

    if (isClickable) {
        return (
            <Link to={`/skills?skill=${skill.id}`}>
                {iconElement}
            </Link>
        );
    } else {
        return iconElement;
    }
}

export default SkillIcon;
