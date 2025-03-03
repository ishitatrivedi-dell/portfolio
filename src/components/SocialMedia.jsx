import React from 'react';
import Navbar from '../components/Navbar';

const SocialMedia = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header with Icon */}
          <div className="flex items-center justify-center mb-12">
            <i className="fas fa-share-alt text-4xl text-purple-500 mr-4"></i>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Social Media
            </h2>
          </div>

          {/* Social Media Links */}
          <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex flex-col items-center space-y-6">
              <a
                href="https://www.linkedin.com/in/ishita-trivedi0611/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition duration-300 flex items-center space-x-3"
              >
                <i className="fab fa-linkedin text-3xl"></i>
                <span className="text-lg">LinkedIn</span>
              </a>
              <a
                href="https://github.com/ishitatrivedi-dell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition duration-300 flex items-center space-x-3"
              >
                <i className="fab fa-github text-3xl"></i>
                <span className="text-lg">GitHub</span>
              </a>
              <a
                href="https://x.com/IshitaTrivedi06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition duration-300 flex items-center space-x-3"
              >
                <i className="fab fa-twitter text-3xl"></i>
                <span className="text-lg">Twitter</span>
              </a>
            </div>
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

export default SocialMedia;