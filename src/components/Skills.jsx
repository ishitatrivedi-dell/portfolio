import React from 'react';
import Navbar from '../components/Navbar';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'fas fa-desktop',
      skills: [
        'HTML, CSS & JavaScript (Frontend Foundations)',
        'JavaScript: Fundamentals to Advanced',
        'Front End Using React, Angular JS',
        'Design Essentials: UI/UX, Figma',
      ],
      color: 'purple',
    },
    {
      title: 'Backend Development',
      icon: 'fas fa-server',
      skills: [
        'Back End + Node JS',
        'NoSQL Databases (MongoDB, Redis)',
      ],
      color: 'blue',
    },
    {
      title: 'Programming & Problem Solving',
      icon: 'fas fa-code',
      skills: [
        'Object-Oriented Programming with C++',
        'Programming for Problem Solving',
      ],
      color: 'green',
    },
    {
      title: 'Tools & Collaboration',
      icon: 'fas fa-tools',
      skills: [
        'Git and GitHub: Tools for Modern Development',
      ],
      color: 'yellow',
    },
    {
      title: 'Academic Foundation',
      icon: 'fas fa-book',
      skills: [
        'Mathematics - I',
        'Mathematics II',
        'Environment Studies',
        'Communication Skills in English and Personality Development',
      ],
      color: 'indigo',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-6">
          {/* Header with Icon */}
          <div className="flex items-center justify-center mb-16">
            <i className="fas fa-tools text-5xl text-indigo-500 mr-6 animate-pulse"></i>
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600">
              My Skills & Expertise
            </h2>
          </div>

          {/* Skill Categories */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-${category.color}-500/40 border-t-4 border-${category.color}-500 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <i className={`${category.icon} text-3xl text-${category.color}-500 mr-4`}></i>
                  <h3 className={`text-2xl font-semibold text-${category.color}-300`}>
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-200 text-lg leading-relaxed">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start space-x-3 hover:text-${category.color}-300 transition-colors duration-300`}
                    >
                      <i className={`fas fa-circle text-xs text-${category.color}-500 mt-2`}></i>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Back to About Me Link */}
          <div className="text-center mt-16">
            <a
              href="/about-me"
              className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 px-8 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <i className="fas fa-arrow-left mr-3"></i>
              Back to About Me
            </a>
          </div>
        </div>
      </main>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Skills;