// src/components/Common/Header.js
import React from 'react';

function Header() {
    return (
        <header className="bg-blue-500 text-white p-4">
            <h1 className="text-xl">Skill Visualizer</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/skills" className="hover:text-gray-200">Skills</a></li>
                    <li><a href="/experience" className="hover:text-gray-200">Experience</a></li>
                    <li><a href="/impacts" className="hover:text-gray-200">Impacts</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
