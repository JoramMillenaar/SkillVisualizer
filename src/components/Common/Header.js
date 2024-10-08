import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Skill Visualizer</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/skills" className="hover:text-gray-200">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/experience" className="hover:text-gray-200">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/impacts" className="hover:text-gray-200">
                Impacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
