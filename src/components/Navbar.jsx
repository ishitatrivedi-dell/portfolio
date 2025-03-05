import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-white hover:text-purple-400 transition duration-300"
          >
            Ishita Trivedi
          </NavLink>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="block tablet:hidden text-white focus:outline-none focus:ring-2 focus:ring-purple-400 rounded p-2"
            aria-label="Toggle navigation menu"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>

          {/* Desktop/Tablet Menu */}
          <ul className="hidden tablet:flex tablet:items-center tablet:space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-white hover:text-purple-400 transition duration-300 px-2 py-1 ${
                      isActive ? 'text-purple-400 border-b-2 border-purple-400' : ''
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } tablet:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-800`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-white hover:text-purple-400 transition duration-300 px-4 py-2 w-full text-center ${
                      isActive ? 'text-purple-400 bg-gray-700 rounded' : ''
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;