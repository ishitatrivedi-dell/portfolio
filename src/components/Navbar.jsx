import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'About Me', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'UI/UX Designs', path: '/ui' },
    { name: 'LeetCode', path: '/leetcode' },
    { name: 'Social Media', path: '/social-media' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 shadow-md z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Ishita Trivedi</h1>
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-white hover:text-purple-400 transition duration-300 ${
                      isActive ? 'text-purple-400 border-b-2 border-purple-400' : ''
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-800">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-white hover:text-purple-400 transition duration-300 ${
                      isActive ? 'text-purple-400' : ''
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;