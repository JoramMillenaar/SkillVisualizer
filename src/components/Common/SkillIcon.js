import React, { Suspense } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Link } from 'react-router-dom';
import userData from '../../data/userData.json';

function getIconComponent(iconName) {
    return React.lazy(() =>
        import(`react-icons/fa`)
        .then(module => {
            if (module[iconName]) {
                return { default: module[iconName] };
            } else {
                return import(`react-icons/si`)
                .then(siModule => ({
                    default: siModule[iconName] || module.FaQuestionCircle
                }))
                .catch(error => {
                    console.error(`Error loading icon from si for ${iconName}:`, error);
                    return { default: module.FaQuestionCircle };
                });
            }
        })
        .catch(error => {
            console.error(`Error loading icon from fa for ${iconName}:`, error);
            return import(`react-icons/fa`).then(module => ({ default: module.FaQuestionCircle }));
        })
    );
}
function SkillIcon({ skillId, showName = false, size = '2em', isClickable = false }) {
    const skill = userData.skills.find((s) => s.id === skillId);

    if (!skill) {
        return (
            <span className="px-2 py-1 bg-red-200 rounded">
                Unknown Skill
            </span>
        );
    }

    const IconComponent = getIconComponent(skill.icon || 'FaQuestionCircle');

    const iconElement = (
        <div data-tooltip-id={`tooltip-${skillId}`} className="inline-block">
            <Suspense fallback={<div>Loading...</div>}>
                <IconComponent size={size} />
            </Suspense>
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
