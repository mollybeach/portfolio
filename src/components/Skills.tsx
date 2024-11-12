// path: src/components/Skills.tsx
import React from 'react';

const skills = {
  languages: [
    'TypeScript', 'JavaScript', 'Solidity', 'Python', 'Swift', 'Scala', 
    'Java', 'Rust', 'Ruby', 'C++', 'R', 'GoLang', 'GLSL'
  ],
  frontend: [
    'React', 'ReactJS', 'Vue', 'HTML5', 'CSS', 'SCSS', 'Canvas API', 
    'Three.js', 'Tailwind', 'Astro', 'UI/UX Design'
  ],
  backend: [
    'Node.js', 'Django', 'GraphQL', 'Express.js', 'Flask', 'REST APIs', 
    'RESTful APIs', 'Microservices', 'Swagger', 'Arrow API'
  ],
  databases: [
    'PostgreSQL', 'MySQL', 'MS SQL Server', 'SQL', 'MongoDB', 'Redis'
  ],
  cloud: [
    'AWS', 'Azure', 'Firebase', 'GCP', 'Netlify', 'Heroku', 'Amazon S3',
    'Azure Active Directory', 'Power Automate', 'Serverless'
  ],
  blockchain: [
    'Hardhat', 'Truffle', 'Ganache', 'Remix', 'Web3', 'ThirdWeb', 'EthersJS',
    'Moralis', 'ERC-4337', 'Account Abstraction', 'IPFS', 'Ethereum',
    'Hyperledger Fabric', 'Firefly', 'Besu', 'Indy', 'GoQuorum', 'Polygon',
    'Edge', 'Kaleido', 'Web3.py'
  ],
  tools: [
    'Docker', 'Git', 'GitLab', 'Linear', 'JSON', 'Blender', 'Unity',
    'Discord API', 'Celery'
  ],
  testing: [
    'Jest', 'Mocha', 'Pytest'
  ],
  methodologies: [
    'Agile Development', 'Cross-functional Collaboration',
    'Performance Optimization', 'Functional Programming',
    'iOS Development', 'Metaverse'
  ]
};

const Skills: React.FC = () => {
  return (
    <section className="space-y-6 p-8">
      <h2 className="text-3xl font-semibold text-gray-900">Skills</h2>
      
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="space-y-2">
          <h3 className="text-xl font-medium text-gray-800 capitalize">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {items.map(skill => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition-colors 
                          rounded-full text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
