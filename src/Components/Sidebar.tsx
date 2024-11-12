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
    <aside className="w-80 h-full border-r bg-gray-50 flex flex-col">
      <div className="p-6 bg-white border-b">
        <h1 className="text-2xl font-bold text-gray-900">Molly Beach</h1>
        <p className="text-sm text-gray-600">Software Engineer</p>
      </div>
      
      <nav className="flex-1 p-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                isActive ? 'bg-primary-purple text-white' : 'text-gray-700 hover:bg-gray-100'
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
