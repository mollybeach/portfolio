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
    logo: `${process.env.PUBLIC_URL}/images/paradessquare.png`,
    roles: [
      {
        title: "SOFTWARE ENGINEER",
        date: "JAN 2024 - PRESENT",
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
    logo: `${process.env.PUBLIC_URL}/images/accenture.png`,
    roles: [
      {
        title: "BLOCKCHAIN METAVERSE REACT SOFTWARE ENGINEER",
        date: "OCT 2022 - DEC 2023",
        location: "REMOTE",
        details: [
          "Incubated new business value in Blockchain and Metaverse, focusing on innovative technologies, multiparty systems, and extended reality"
        ],
        projects: [
          {
            title: "GEN AI 3D GRAPHICS BOT CHAT APPLICATION",
            description: [
              "Developed a web application combining AI chat and advanced graphics using React and Three.js",
              "Implemented WebGL for 3D rendering, scene management, and custom shaders for graphical effects"
            ],
            technologies: ["Microsoft Azure", "Astro", "Three.js", "Tailwind", "Blender", "TypeScript", "JavaScript", "Nanostores", "Canvas API"]
          },
          {
            title: "AI PROMPTS BLOCKCHAIN BOT",
            description: [
              "Developed an AI-powered bot to streamline purchase orders for logistics and accounting, integrating blockchain for secure, transparent transactions"
            ],
            technologies: ["React", "Azure", "Power Automate", "Swagger", "Arrow API", "Azure Active Directory", "Ethereum"]
          },
          {
            title: "CRYPTOPLATETRACKR HYPERLEDGER TECHNOLOGIES",
            description: [
              "Developed a blockchain-based license plate tracking system for the Illinois Tollway, ensuring efficient, secure, and transparent vehicle tracking and payments across state borders"
            ],
            technologies: ["Hyperledger Fabric", "Firefly", "Besu", "Indy", "GoQuorum", "Polygon", "Edge", "Kaleido"]
          },
          {
            title: "COMCAST COOKIE CONSENT",
            description: [
              "Centralized client credentials for 96 backend services by updating config files",
              "Automated credential identification and updates with Python scripts",
              "Re-deployed services after consolidating credentials for backend integration"
            ],
            technologies: ["JavaScript", "HTML", "Python", "Securiti"]
          },
          {
            title: "TOKEN GATING DISCORD BOT API",
            description: [
              "Developed a Discord bot to control server access for token holders",
              "Bot interfaces with smart contracts to verify token holdings upon user registration",
              "Token data is stored in a database via a serverless API, updated through a Moralis webhook"
            ],
            technologies: ["Solidity", "ReactJS", "Amazon S3", "Discord API", "Web3", "Serverless", "ThirdWeb", "EthersJS", "Moralis", "Docker", "ERC-4337", "Account Abstraction"]
          },
          {
            title: "METAVERSE COOKIE NETWORK",
            description: [
              "Blockchain Cookie traceability ownership interactivity provides analytics for non-fungible tokens interactions",
              "Video game ecosystem networking in Unity gaming usage patterns"
            ],
            technologies: ["ReactTS", "Metaverse", "Solidity", "Unity", "Hardhat", "TypeScript"]
          }
        ],
        skills: [
          "React",
          "TypeScript",
          "Blockchain",
          "Solidity",
          "Three.js",
          "WebGL",
          "Azure",
          "Unity",
          "Python",
          "Web3",
          "Smart Contracts",
          "Hyperledger"
        ]
      }
    ]
  },
  {
    company: "PARADES",
    logo: `${process.env.PUBLIC_URL}/images/paradessquare.png`,
    roles: [
      {
        title: "SOLIDITY WEB3 ENGINEER",
        date: "JAN 2020 - SEP 2022",
        location: "REMOTE",
        details: [
          "Establish, implement, and accomplish business objectives in collaboration with the executive and engineering leadership teams",
          "Responsible for the entire life cycles of blockchain development",
          "Business needs should be mapped to blockchain system architecture module design",
          "Assured company generated smart contract technical goals timescales were met"
        ],
        projects: [],
        skills: ["JavaScript", "React.js", "Solidity", "Node.js", "Hardhat", "TypeScript"]
      },
      {
        title: "REACT TYPESCRIPT ENGINEER",
        date: "JAN 2020 - SEP 2022",
        location: "REMOTE",
        details: [
          "Integrated React Hooks API to simplify functional components, reducing prop-drilling and improving developer and user experience",
          "Developed TypeScript ReactJS applications using MUI, with a focus on app management, debugging, security, and GraphQL integration",
          "Created API endpoints and implemented backend logic, including SQL stored procedures, tables, models, and services"
        ],
        projects: [],
        skills: ["ReactJS", "GraphQL", "TypeScript", "ExpressJS", "SCSS", "PostgreSQL"]
      },
      {
        title: "PYTHON BACKEND ENGINEER",
        date: "JAN 2020 - SEP 2022",
        location: "REMOTE",
        details: [
          "Designed and implemented RESTful APIs in Python using Flask to manage data pipelines and integrate with external services, ensuring secure, efficient, and scalable backend operations for high-traffic applications",
          "Developed asynchronous task management with Celery and Redis, automating background processes, optimizing server load, and improving response times by 40%",
          "Built and maintained PostgreSQL databases, implementing schema design, data migrations, and query optimization to handle large datasets effectively and ensure high availability",
          "Integrated CI/CD workflows with Jenkins and Docker for streamlined deployment and version control, ensuring rapid, consistent updates across staging and production environments"
        ],
        projects: [],
        skills: ["Python", "Flask", "PostgreSQL", "Celery", "Redis", "Docker"]
      }
    ]
  },
  {
    company: "TREASURE",
    logo: `${process.env.PUBLIC_URL}/images/treasureicon.png`,
    roles: [
      {
        title: "SOLIDITY WEB3 DEVELOPER",
        date: "JAN 2020 - APR 2022",
        location: "REMOTE",
        details: [
          "Designed decentralized smart contracts using OpenZeppelin standards (ERC-777/20/721/1155/1400) and deployed IPFS-backed NFT contracts using Pinata and Hashlips art engine",
          "Developed dApps and Web3.js applications with DeFi protocols, using Waffle, Hardhat, React, TypeScript, Web3, and Ethers for frontend UI",
          "Tested contract protocols on Rinkeby, Kovan, and Ropsten forks, and created Web3 scripts for transaction queries with Etherscan APIs"
        ],
        projects: [],
        skills: ["Solidity", "JavaScript", "React.js", "Node.js", "Hardhat", "TypeScript"]
      },
      {
        title: "GOLANG BLOCKCHAIN ENGINEER",
        date: "JAN 2020 - APR 2022",
        location: "REMOTE",
        details: [
          "Developed decentralized smart contracts for asset registration and verification, utilizing Ethereum standards and deploying on local Ethereum networks (Ganache, Rinkeby). Integrated IPFS-backed metadata storage using native IPFS APIs for decentralized asset data",
          "Built dApp backend in Golang with go-ethereum, designing RESTful API endpoints for smart contract interaction and asset ownership tracking, and used React for a simple frontend UI",
          "Deployed and tested contract protocols on Ethereum testnets, creating Golang scripts for automated transaction handling and real-time asset verification"
        ],
        projects: [],
        skills: ["Golang", "Solidity", "React.js", "Node.js", "IPFS", "Ethereum"]
      },
      {
        title: "PYTHON BLOCKCHAIN DEVELOPER",
        date: "JAN 2020 - APR 2022",
        location: "REMOTE",
        details: [
          "Developed smart contracts for decentralized voting and governance systems, following ERC-20 and ERC-721 standards, and deployed on Ethereum and Binance Smart Chain. Integrated IPFS for immutable proposal and result storage using Python's ipfshttpclient library",
          "Built backend APIs in Python using Flask to handle voting interactions with the blockchain and support for user authentication. Created Web3.py scripts for querying transaction history, fetching proposal states, and conducting secure on-chain voting",
          "Tested smart contract functionality on Rinkeby and BSC Testnet, automating end-to-end testing with Pytest and integrating transaction monitoring with Etherscan and BscScan APIs"
        ],
        projects: [],
        skills: ["Python", "Solidity", "Flask", "Web3.py", "IPFS", "Ethereum"]
      }
    ]
  },
  {
    company: "CARD SWAPPER",
    logo: `${process.env.PUBLIC_URL}/images/cardswappersquare.png`,
    roles: [
      {
        title: "WEB DEVELOPMENT INTERNSHIP",
        date: "SEPT 2017 - DEC 2019",
        location: "SEATTLE, WA",
        details: [
          "Developed the first user-to-user trading app for gift cards, enabling instant buying, selling, and trading via mobile. The first-generation app was built entirely in Objective-C"
        ],
        projects: [],
        skills: ["Objective-C", "iOS Development", "Mobile Development"]
      }
    ]
  }
];

const Experience: React.FC = () => {
  const [expandedRoles, setExpandedRoles] = React.useState<{[key: string]: boolean}>(() => {
    const initialState: {[key: string]: boolean} = {};
    experiences.forEach((exp, companyIndex) => {
      exp.roles.forEach((_, roleIndex) => {
        initialState[`${companyIndex}-${roleIndex}`] = true;
      });
    });
    return initialState;
  });

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
