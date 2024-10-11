import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="border-t-2 border-solid p-4 mt-4">
            <div className="flex items-center justify-between mx-12">
                <ul className="flex space-x-4">
                    <li>
                        <a href='https://github.com/JoramMillenaar/SkillVisualizer' target='_blank' rel="noreferrer">
                            <FaGithub size="1.5rem" />
                        </a>
                    </li>
                </ul>
                <span className="text-sm">Developed by Joram Millenaar</span>
            </div>
        </footer>
    );
}

export default Footer;
