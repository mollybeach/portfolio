// path: src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  microlink: string;
  link: string;
  previewType: 'microlink' | 'image';
  overview: string;
  keyFeatures: {
    title: string;
    description: string;
    icon?: string;
  }[];
  installation: {
    steps: {
      command: string;
      description: string;
    }[];
  };
  screenshots: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  demoUrl?: string;
  githubUrl?: string;
  status: 'In Development' | 'Completed' | 'Archived';
  architecture?: string;
  techStack: {
    frontend?: string[];
    backend?: string[];
    deployment?: string[];
    tools?: string[];
  };
}

const projects: Project[] = [
  {
    title: "Spectra",
    date: "Jan 2024 - Present",
    description: "Integrated React Hooks API to simplify functional components, reducing prop-drilling and improving developer and user experience. Developed TypeScript ReactJS applications using MUI, with a focus on app management, debugging, security, and GraphQL integration. Created API endpoints and implemented backend logic, including SQL stored procedures, tables, models, and services.Developed and maintained scalable backend services using Scala. Built RESTful APIs and integrated third-party services. Collaborated on cloud-based deployments using AWS and GCP",
    technologies: ["ReactJS", "GraphQL", "TypeScript", "ExpressJS", "SCSS", "Heroku", "PostgreSQL", "Scala", "Functional Programming", "RESTful APIs", "AWS", "GCP", "PostgreSQL"],
    microlink: `${process.env.PUBLIC_URL}/images/spectra-app-preview.png`,
    link: "https://www.spectra.theater/studios",
    previewType: "image",
    overview: "A comprehensive project management tool",
    keyFeatures: [
      { title: "React Hooks", description: "Simplifies functional components" },
      { title: "GraphQL Integration", description: "Improves data fetching" },
      { title: "TypeScript", description: "Improves code quality" }
    ],
    installation: {
      steps: [
        { command: "npm install", description: "Install project dependencies" },
        { command: "npm start", description: "Start the development server" }
      ]
    },
    screenshots: [
      { url: `${process.env.PUBLIC_URL}/images/spectra-app-preview.png`, alt: "Spectra App Preview" }
    ],
    status: "In Development",
    techStack: {
      frontend: ["ReactJS", "GraphQL", "TypeScript"],
      backend: ["ExpressJS", "SCSS", "Heroku"],
      deployment: ["AWS", "GCP"],
      tools: ["MUI", "Heroku", "PostgreSQL"]
    }
  },
  {title: "genaigraphics",
    date: "Jul 2023 - Oct 2023",
    description: "Application merges WebGL technology with Three.js for 3D rendering and Azure ML for AI chat functionalities, empowers users to interact with realistic 3D models that demonstrate step-by-step procedures. The goal is to provide intuitive visual aids that simplify the setup process reduce user errors, and enhance overall user satisfaction 👾.",
    technologies: ["React", "Python", "Threejs", "Typescript", "Astro", "Azure-ml", "Ai-prompts"],
    microlink: `${process.env.PUBLIC_URL}/images/genaigraphics-app-preview.png`,
    link: "https://mollybeach.github.io/genaigraphics/agent/",
    previewType: "image",
    overview: "A 3D visualization tool",
    keyFeatures: [
      { title: "React", description: "JavaScript library" },
      { title: "Python", description: "Programming language" },
      { title: "Threejs", description: "3D rendering library" }
    ],
    installation: {
      steps: [
        { command: "npm install", description: "Install project dependencies" },
        { command: "npm start", description: "Start the development server" }
      ]
    },
    screenshots: [
      { url: `${process.env.PUBLIC_URL}/images/genaigraphics-app-preview.png`, alt: "Genaigraphics App Preview" }
    ],
    status: "Completed",
    techStack: {
      frontend: ["React", "Python"],
      backend: ["Threejs", "Typescript", "Astro"],
      deployment: ["Azure-ml"],
      tools: ["VSCode", "Azure"]
    }
  },
  {
    title: "token-gating-discord-bot-api",
    date: "Jan 2024 - Present",
    description: "A Discord bot integration that manages server access based on users' cryptocurrency token holdings. The system verifies wallet balances through smart contracts and automatically grants/revokes Discord roles based on token ownership. Features real-time monitoring via Moralis webhooks and OAuth2 authentication 🤖.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Discord.js", "Thirdweb", "AWS Lambda", "Moralis", "Smart Contracts"],
    microlink: `${process.env.PUBLIC_URL}/images/token-gate-preview.png`,
    link: "https://mollybeach.github.io/token-gating-discord-bot-api/",
    previewType: "image",
    overview: "Discord bot for token-based access control",
    keyFeatures: [
      { title: "Automated Role Management", description: "Dynamic role assignment based on token holdings" },
      { title: "Smart Contract Integration", description: "Real-time wallet verification" },
      { title: "Web3 Authentication", description: "Secure wallet connection and OAuth2" }
    ],
    installation: {
      steps: [
        { command: "npm install", description: "Install dependencies" },
        { command: "sls deploy --stage dev", description: "Deploy serverless functions" }
      ]
    },
    screenshots: [
      { url: `${process.env.PUBLIC_URL}/images/token-gate-preview.png`, alt: "Token Gate Bot Preview" }
    ],
    status: "In Development",
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Thirdweb SDK"],
      backend: ["Serverless Framework", "Node.js", "MongoDB", "Discord.js"],
      deployment: ["AWS Lambda", "GitHub Pages", "Docker"],
      tools: ["VS Code", "GitHub Actions", "Moralis"]
    }
  },
  {
    title: "CryptoGene",
    date: "Mar 2020 - Dec 2020",
    description: "DApp/Web3JS app converting DNA data from Ancestry.com into NFTs.",
    technologies: ["React", "Web3.js", "Solidity", "GLSL", "Firebase"],
    microlink: `${process.env.PUBLIC_URL}/images/cryptogene-app-preview.png`,
    link: "https://chromagenetic.firebaseapp.com",
    previewType: "image",
    overview: "A decentralized application",
    keyFeatures: [
      { title: "React", description: "JavaScript library" },
      { title: "Web3.js", description: "JavaScript library" },
      { title: "Solidity", description: "Programming language" }
    ],
    installation: {
      steps: [
        { command: "npm install", description: "Install project dependencies" },
        { command: "npm start", description: "Start the development server" }
      ]
    },
    screenshots: [
      {url: `${process.env.PUBLIC_URL}/images/ihaehada-app-preview.png`

      , alt: "CryptoGene App Preview" }
    ],
    status: "Completed",
    techStack: {
      frontend: ["React", "Web3.js"],
      backend: ["Solidity", "GLSL"],
      deployment: ["Firebase"],
      tools: ["VSCode", "Solidity"]
    }
  },
  {
    title: "ihaehada",
    date: "Mar 2020 - Dec 2020",
    description: "Learn Korean language application. Browse the Ihaehada collection of words and phrases.",
    technologies: ["Vue", "JavaScript", "Firebase"],
    microlink: `${process.env.PUBLIC_URL}/images/ihaehada-app-preview.png`,
    link: "https://ihaehada.firebaseapp.com",
    previewType: "image",
    overview: "A language learning tool",
    keyFeatures: [
      { title: "Vue", description: "JavaScript framework" },
      { title: "JavaScript", description: "Programming language" },
      { title: "Firebase", description: "Backend as a service" }
    ],
    installation: {
      steps: [
        { command: "npm install", description: "Install project dependencies" },
        { command: "npm start", description: "Start the development server" }
      ]
    },
    screenshots: [
      { url: `${process.env.PUBLIC_URL}/images/ihaehada-app-preview.png`, alt: "Ihaehada App Preview" }
    ],
    status: "Completed",
    techStack: {
      frontend: ["Vue", "JavaScript"],
      backend: ["Firebase"],
      deployment: [],
      tools: ["VSCode", "Firebase"]
    }
  },
  {
    title: "Python-Django-Appointment-Calendar-Salon",
    date: "Mar 2020 - Dec 2020",
    description: "Django web application for managing salon appointments and services.",
    technologies: ["Django", "Python", "PostgreSQL", "Heroku", "HTML", "CSS", "JavaScript"],
    microlink: `${process.env.PUBLIC_URL}/images/coiffure-app-preview.png`,
    link: "https://mollybeach.github.io/dandelionCoiffure/",
    previewType: "image",
    overview: "A simple appointment management tool",
    keyFeatures: [
      { title: "Django", description: "Python web framework" },
      { title: "PostgreSQL", description: "Database management" },
      { title: "Heroku", description: "Cloud platform" }
    ],
    installation: {
      steps: [
        { command: "pip install django", description: "Install Django" },
        { command: "pip install psycopg2", description: "Install PostgreSQL" },
        { command: "pip install gunicorn", description: "Install Gunicorn" }
      ]
    },
    screenshots: [
      { url: `${process.env.PUBLIC_URL}/images/coiffure-app-preview.png`, alt: "Coiffure App Preview" }
    ],
    status: "Completed",
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Django", "Python", "PostgreSQL"],
      deployment: ["Heroku"],
      tools: ["PyCharm", "PostgreSQL"]
    }
  },
  {title: "Memorizwift",
    date: "Aug 2024 - Nov 2024",
    description: "Memory card game app built with SwiftUI, based on Stanford's CS193p iOS Development course. This project demonstrates core iOS development concepts and SwiftUI best practices.",
    technologies: ["SwiftUI", "Swift", "iOS", "Model-View-ViewModel", "TokamakApp", "Carton"],
    microlink: `${process.env.PUBLIC_URL}/images/swiftapp.png`,
    link: "https://mollybeach.github.io/memorizwift/",
    previewType: "image",
    overview: "A fun memory game app",
    keyFeatures: [
      { title: "SwiftUI", description: "Modern UI framework" },
      { title: "Model-View-ViewModel", description: "Improves code organization" },
      { title: "TokamakApp", description: "Improves performance" }
    ],
    installation: {
      steps: [
        { command: "npm install", description: "Install project dependencies" },
        { command: "npm start", description: "Start the development server" }
      ]
    },
    screenshots: [
      { url: `${process.env.PUBLIC_URL}/images/swiftapp.png`, alt: "Memorizwift App Preview" }
    ],
    status: "In Development",
    techStack: {
      frontend: ["SwiftUI", "Swift"],
      backend: ["TokamakApp", "Carton"],
      deployment: ["iOS"],
      tools: ["Xcode", "Swift"]
    }
  },
];

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
        />
      ))}
    </div>
  );
};

export default Projects;
