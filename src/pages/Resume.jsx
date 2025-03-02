import React from 'react';
import Navbar from '../components/Navbar';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header with Icon */}
          <div className="flex items-center justify-center mb-12">
            <i className="fas fa-file-alt text-4xl text-purple-500 mr-4"></i>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              My Resume
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Education Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <i className="fas fa-graduation-cap text-2xl text-purple-400 mr-3"></i>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-purple-500 mt-2 mr-2"></i>
                  <span>Gyanmanjri Vidhyapith Secondary School , Mahuva , Bhavnagar (2019-2022)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-purple-500 mt-2 mr-2"></i>
                  <span>Vidhydhish VidhyaSankul , Bhavanagar (2012-2019)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-xs text-purple-500 mt-2 mr-2"></i>
                  <span>RaI University, CodingGita (B.Tech in Computer Science, Ongoing)</span>
                </li>
              </ul>
            </div>

            {/* Skills Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <i className="fas fa-tools text-2xl text-purple-400 mr-3"></i>
                <h3 className="text-2xl font-semibold">Skills</h3>
              </div>
              <ul className="grid grid-cols-2 gap-3 text-gray-300">
                {[
                  'HTML, CSS, JS',
                  'Node.js, Express.js',
                  'Database (MongoDB)',
                  'Problem Solving',
                  'Version Control',
                  'Tools and Platforms',
                  'Communication Skills',
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-purple-500 mr-2"></i>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <i className="fas fa-language text-2xl text-purple-400 mr-3"></i>
                <h3 className="text-2xl font-semibold">Languages</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                {['Hindi', 'English', 'Gujarati'].map((lang, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-globe text-purple-500 mr-2"></i>
                    <span>{lang}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <i className="fas fa-address-card text-2xl text-purple-400 mr-3"></i>
                <h3 className="text-2xl font-semibold">Contact</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-phone text-purple-500 mr-2"></i>
                  <span>Phone: +91 8883600026</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope text-purple-500 mr-2"></i>
                  <span>Email: ishita.trivedi.cg@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center mt-12">
            <a
              href="../../public/Ishita Resume .pdf"
              download
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            >
              <i className="fas fa-download mr-2"></i>
              Download Full Resume
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;