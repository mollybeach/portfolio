// src/components/Overview.tsx
import React from 'react';

const Overview: React.FC = () => {
  const shaderGifs = [
    { src: `${process.env.PUBLIC_URL}/images/mandelbrot.gif`, title: 'Mandelbrot Set' },
    { src: `${process.env.PUBLIC_URL}/images/owl.gif`, title: 'Owl' },
    { src: `${process.env.PUBLIC_URL}/images/fidgetToy.gif`, title: 'Fidget Toy' },
    { src: `${process.env.PUBLIC_URL}/images/milkers.gif`, title: 'Milkers' },
    { src: `${process.env.PUBLIC_URL}/images/gene.gif`, title: 'Gene Expression' },
    { src: `${process.env.PUBLIC_URL}/images/butterfree.gif`, title: 'Butterfree' },
    { src: `${process.env.PUBLIC_URL}/images/binaryTree.gif`, title: 'Binary Tree' },
    { src: `${process.env.PUBLIC_URL}/images/rattata.gif`, title: 'Rattata' },
    { src: `${process.env.PUBLIC_URL}/images/poke.gif`, title: 'Poke' },
    { src: `${process.env.PUBLIC_URL}/images/purugly.gif`, title: 'Purugly' },
    { src: `${process.env.PUBLIC_URL}/images/growlithe.gif`, title: 'Growlithe' },
    { src: `${process.env.PUBLIC_URL}/images/chikorita.gif`, title: 'Chikorita' },
    { src: `${process.env.PUBLIC_URL}/images/grimLeaper.gif`, title: 'Grim Leaper' },
    { src: `${process.env.PUBLIC_URL}/images/zap.gif`, title: 'Zap' },
    { src: `${process.env.PUBLIC_URL}/images/horseSea.gif`, title: 'Horse Sea' },
    { src: `${process.env.PUBLIC_URL}/images/flowerGarden.gif`, title: 'Flower Garden' },
  ];
  
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      {/* Header with name and avatar */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Molly Beach</h1>
          <p className="text-lg text-gray-600 mb-4">Software Engineer</p>
          
          {/* Social Links */}
          <div className="flex gap-3">
            <a 
              href="https://github.com/mollybeach" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/images/githubsquare.png`}
                alt="GitHub"
                className="w-10 h-10 rounded shadow-sm hover:shadow-md"
              />
            </a>
            <a 
              href="https://www.linkedin.com/in/mollybeach" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/images/linkedinsquare.png`}
                alt="LinkedIn"
                className="w-10 h-10 rounded shadow-sm hover:shadow-md"
              />
            </a>
          </div>
        </div>
        <img 
          src={`${process.env.PUBLIC_URL}/images/beach_molly_avi.png`}
          alt="Molly Beach"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 shadow-lg"
        />
      </div>

      {/* Contact Info */}
      <div className="mb-6 text-gray-700">
        <p className="mb-2">📞 206.947.6991</p>
        <p className="mb-2">✉️ mollyjbeach@gmail.com</p>
      </div>

      {/* Overview content */}
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
        Hello! My name is Molly, and I'm a full-stack software engineer from Seattle, specializing in TypeScript, React, Python, SwiftUI, Scala, Java, and blockchain technologies. My expertise spans both frontend and backend development, as well as blockchain integration, allowing me to build scalable, high-performance applications and distributed systems.
        </p>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Blockchain</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">React</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">TypeScript</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Solidity</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Web3</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {shaderGifs.map((gif, index) => (
            <div key={index} className="relative group">
              <img 
                src={gif.src} 
                alt={gif.title}
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <p className="text-center text-sm">{}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
