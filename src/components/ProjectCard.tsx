// src/components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    date: string;
    description: string;
    technologies: string[];
    microlink: string;
    link: string;
    previewType: 'microlink' | 'image';
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const truncatedDescription = project.description.length > 150 
    ? project.description.slice(0, 150) + '...'
    : project.description;

  return (
    <a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
        ${isExpanded ? 'col-span-full w-[85%] mx-auto bg-white relative z-10' : 'relative z-0'}`}
      style={{
        order: isExpanded ? -1 : 0
      }}
    >
      <div>
        <div className={`relative transition-all duration-300 ease-in-out
          ${isExpanded ? 'h-[400px] p-4' : 'h-48 p-2'}`}
        >
          {project.previewType === 'microlink' ? (
            <img
              src={`https://api.microlink.io?url=${encodeURIComponent(project.microlink)}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={project.title}
              className={`w-full h-full object-contain transition-all duration-300`}
              loading="lazy"
            />
          ) : (
            <img
              src={project.microlink}
              alt={project.title}
              className={`w-full h-full object-contain transition-all duration-300`}
              loading="lazy"
            />
          )}
        </div>
        
        <div className={`p-4 ${isExpanded ? 'max-w-4xl mx-auto' : ''}`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`font-bold transition-all duration-300 ${isExpanded ? 'text-2xl' : 'text-lg'}`}>
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">{project.date}</p>
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
              className="text-[#B8336A] hover:text-[#8D2751] transition-colors"
            >
              {isExpanded ? '▲ Close' : '▼ Expand'}
            </button>
          </div>
          <div className={`mt-4 transition-all duration-300 ease-in-out
            ${isExpanded ? 'max-h-[800px]' : 'max-h-[100px] overflow-hidden'}`}>
            <p className={`leading-relaxed ${isExpanded ? 'text-lg' : ''}`}>
              {isExpanded ? project.description : truncatedDescription}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className={`px-2 py-1 bg-gray-100 rounded-full transition-all duration-300
                ${isExpanded ? 'text-base' : 'text-sm'}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
