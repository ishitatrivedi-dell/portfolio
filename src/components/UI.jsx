import React from 'react';
import Navbar from '../components/Navbar';

const UI = () => {
  const designs = [
    {
      title: 'Skill Scheduler',
      description: 'A sleek and user-friendly UI for an e-commerce mobile app, featuring product listings, cart, and checkout flows.',
      figma: 'https://www.figma.com/design/1PDr2aGXQJMBxMr5OSgDRF/Skills-Schedular?m=auto&t=PIFUU6U1aXCWHiS4-6',
    },
    {
      title: 'The Learning App',
      description: 'A minimalist Learning app design for tracking personal goals, tasks, and analytics with a clean layout with videos.',
      figma: 'https://www.figma.com/design/zFLRIgR7VtGg7h13rDXNTl/learning-app?m=auto&t=PIFUU6U1aXCWHiS4-6',
    },
    {
      title: 'Cricket Dashboard',
      description: 'A cricket Dashboard with different colors used to showcase different team scoring.',
      figma: 'https://www.figma.com/design/E5QDdhdb30dEj95NhhDYg2/Untitled?m=auto&t=PIFUU6U1aXCWHiS4-6',
    },
    {
      title: 'Instagram Clone',
      description: 'An Instagram clone for practicing Figma with different tools and plugins.',
      figma: 'https://www.figma.com/design/QGN8z9OQnQCPzHi7IIbdcA/instagram?m=auto&t=PIFUU6U1aXCWHiS4-6',
    },
    {
      title: 'Aerospace and Rockets Template',
      description: 'A template/thumbnail for a website related to rockets and aerospace.',
      figma: 'https://www.figma.com/proto/ppSDezzBfSnuvcWsJhcQZw?node-id=0-1&t=PIFUU6U1aXCWHiS4-6',
    },
    {
      title: 'Storytale',
      description: 'A creative UI/UX design for a storytelling platform, featuring intuitive navigation and visually engaging layouts.',
      figma: 'https://www.figma.com/design/ppSDezzBfSnuvcWsJhcQZw/storytale?node-id=0-1&t=Zszs2nuMwPsrQMUe-1',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header with Icon */}
          <div className="flex items-center justify-center mb-12">
            <i className="fas fa-paint-brush text-4xl text-purple-500 mr-4"></i>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              UI/UX Designs
            </h2>
          </div>

          {/* Designs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{design.title}</h3>
                <p className="text-gray-300 mb-4">{design.description}</p>
                <a
                  href={design.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
                >
                  <i className="fab fa-figma mr-2"></i>
                  View in Figma
                </a>
              </div>
            ))}
          </div>

          {/* Back to About Me Link */}
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

export default UI;