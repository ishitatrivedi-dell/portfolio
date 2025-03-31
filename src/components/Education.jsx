import React from 'react';
import Navbar from '../components/Navbar';

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header with Icon */}
          <div className="flex items-center justify-center mb-12">
            <i className="fas fa-graduation-cap text-4xl text-purple-500 mr-4"></i>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Education
            </h2>
          </div>

          {/* Education List */}
          <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <ul className="space-y-6 text-gray-300">
              {[
                {
                  title: 'RaI University, CodingGita',
                  location: 'Currently pursuing B.Tech in Computer Science',
                },
                {
                  title: 'Vidhyadhish Vidyasankul',
                  location: 'Bhavnagar city , Bhavnagar',
                },
                {
                  title: 'Gyanmanjri Vidhyapith Secondary School ',
                  location: 'Mahuva , Bhavnagar',
                },
              ].map((edu, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-circle text-xs text-purple-500 mt-2 mr-4"></i>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
                    <p className="text-gray-400">{edu.location}</p>
                    <p className="text-purple-400">{edu.duration}</p>
                  </div>
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

export default Education;