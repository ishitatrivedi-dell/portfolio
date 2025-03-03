import React from 'react';
import Navbar from '../components/Navbar';

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header with Icon */}
          <div className="flex items-center justify-center mb-12">
            <i className="fas fa-tools text-4xl text-purple-500 mr-4"></i>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Skills
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-300">
              {[
                'HTML, CSS, JS',
                'Node.js, Express.js',
                'Database (MongoDB)',
                'Problem Solving',
                'Version Control',
                'Tools and Platforms',
                'Communication Skills',
              ].map((skill, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-purple-500"></i>
                  <span className="text-lg">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Optional Back to Resume Link */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to About Me 
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;