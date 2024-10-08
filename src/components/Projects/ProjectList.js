import React, { useState, useEffect } from 'react';
import ProjectDetail from './ProjectDetail';
import userData from '../../data/userData.json';
import { useLocation } from 'react-router-dom';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const skillId = params.get('skill');

    let filteredProjects = userData.projects;

    if (skillId) {
      filteredProjects = filteredProjects.filter((project) =>
        project.skills_utilized.includes(skillId)
      );
    }

    setProjects(filteredProjects);
  }, [location.search]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectDetail key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
