// path: src/components/Projects.tsx
import React from 'react';

const projects = [
  {
    title: "CryptoGene",
    date: "Mar 2020 - Dec 2020",
    description: "DApp/Web3JS app converting DNA data from Ancestry.com into NFTs.",
    technologies: ["React", "Web3.js", "Solidity", "GLSL", "Firebase"],
    link: "https://chromagenetic.firebaseapp.com"
  },
  // Add more projects similarly
];

const Projects: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-900">Projects</h2>
      {projects.map((project) => (
        <div key={project.title} className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.date}</p>
          <p className="text-gray-700">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">
                {tech}
              </span>
            ))}
          </div>
          {project.link && (
            <a href={project.link} className="text-blue-600 hover:underline mt-2 block">Live Preview</a>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;
