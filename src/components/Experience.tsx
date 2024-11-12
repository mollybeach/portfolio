// path: src/components/Experience.tsx
import React from 'react';

interface Project {
  title: string;
  description: string[];
  technologies: string[];
}

interface ExperienceItem {
  company: string;
  logo: string;
  roles: {
    title: string;
    date: string;
    location: string;
    details: string[];
    projects: Project[];
    skills: string[];
  }[];
}

const experiences: ExperienceItem[] = [
  {
    company: "PARADES",
    logo: "/images/paradessquare.png",
    roles: [
      {
        title: "SOFTWARE ENGINEER",
        date: "JAN 2020 - PRESENT",
        location: "REMOTE",
        details: [
          "Lead development of scalable services across mobile and backend platforms",
          "Architect and implement RESTful APIs and third-party service integrations",
          "Drive technical decisions and ensure seamless cross-platform integration"
        ],
        projects: [
          {
            title: "Financial Services iOS Mobile App",
            description: [
              "Developed and enhanced a financial services app, enabling users to access cash, build credit, and manage debt",
              "Created key iOS features using Swift, focusing on intuitive UI/UX, scalability, and performance",
              "Collaborated with teams to ensure seamless integration and consistent design across app features"
            ],
            technologies: ["Swift", "iOS Development", "UI/UX Design", "REST APIs", "Performance Optimization"]
          },
          {
            title: "Backend Services - Spectra",
            description: [
              "Developed and maintained scalable backend services using Scala",
              "Built RESTful APIs and integrated third-party services",
              "Collaborated on cloud-based deployments using AWS and GCP"
            ],
            technologies: ["Scala", "Functional Programming", "RESTful APIs", "AWS", "GCP", "PostgreSQL"]
          }
        ],
        skills: ["Swift", "Scala", "iOS Development", "RESTful APIs", "AWS", "GCP", "PostgreSQL"]
      }
    ]
  },
  {
    company: "ACCENTURE",
    logo: "/images/accenture.png",
    roles: [
      {
        title: "BLOCKCHAIN METAVERSE REACT SOFTWARE ENGINEER",
        date: "OCT 2022 - DEC 2023",
        location: "REMOTE",
        details: [
          "Incubated new business value in Blockchain and Metaverse"
        ],
        projects: [
          {
            title: "GEN AI 3D GRAPHICS BOT CHAT APPLICATION",
            description: [
              "Developed a web application combining AI chat and advanced graphics using React and Three.js",
              "Implemented WebGL for 3D rendering, scene management, and custom shaders"
            ],
            technologies: ["Microsoft Azure", "Astro", "Three.js", "Tailwind", "Blender", "TypeScript"]
          },
          {
            title: "AI PROMPTS BLOCKCHAIN BOT",
            description: [
              "Developed an AI-powered bot to streamline purchase orders for logistics and accounting",
              "Integrated blockchain for secure, transparent transactions"
            ],
            technologies: ["React", "Azure", "Power Automate", "Swagger", "Ethereum"]
          }
        ],
        skills: ["React", "Three.js", "Blockchain", "WebGL", "TypeScript", "Solidity"]
      }
    ]
  }
];

const Experience: React.FC = () => {
  const [expandedRoles, setExpandedRoles] = React.useState<{[key: string]: boolean}>({});

  const toggleRole = (companyIndex: number, roleIndex: number) => {
    const key = `${companyIndex}-${roleIndex}`;
    setExpandedRoles(prev => ({...prev, [key]: !prev[key]}));
  };

  return (
    <div className="space-y-8">
      {experiences.map((exp, companyIndex) => (
        <div key={companyIndex} className="border rounded-lg p-4">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={exp.logo} 
              alt={`${exp.company} logo`} 
              className="w-12 h-12 object-contain"
            />
            <h3 className="font-bold text-xl">{exp.company}</h3>
          </div>
          
          <div className="space-y-6">
            {exp.roles.map((role, roleIndex) => {
              const isExpanded = expandedRoles[`${companyIndex}-${roleIndex}`];
              return (
                <div key={roleIndex} className="ml-16">
                  <button 
                    onClick={() => toggleRole(companyIndex, roleIndex)}
                    className="flex items-center gap-2 text-left w-full"
                  >
                    <svg 
                      className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                      viewBox="0 0 24 24"
                    >
                      <path 
                        fill="currentColor" 
                        d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-lg">{role.title}</p>
                      <p className="text-sm text-gray-500">{role.date} • {role.location}</p>
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="mt-4 ml-6">
                      <ul className="list-disc list-inside mb-4">
                        {role.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-700">{detail}</li>
                        ))}
                      </ul>
                      
                      {role.projects.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Projects</h4>
                          {role.projects.map((project, idx) => (
                            <div key={idx} className="mb-4 bg-gray-50 p-4 rounded">
                              <h5 className="font-medium mb-2">{project.title}</h5>
                              <ul className="list-disc list-inside mb-2">
                                {project.description.map((desc, descIdx) => (
                                  <li key={descIdx} className="text-gray-600 text-sm">{desc}</li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIdx) => (
                                  <span key={techIdx} className="px-2 py-1 bg-gray-200 rounded-full text-xs">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
