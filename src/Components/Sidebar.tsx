// path: src/components/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
}

const Sidebar: React.FC = () => {
  const navItems: NavItem[] = [
    { name: 'Overview', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
  ];

  return (
    <aside className="w-64 h-full bg-white shadow-lg p-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Molly Beach</h1>
        <p className="text-gray-600">Software Engineer</p>
      </div>
      <nav className="space-y-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block py-2 px-4 rounded text-lg font-medium ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-200'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
