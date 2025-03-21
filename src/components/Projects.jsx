import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Projects = () => {
  const mainProjects = [
    {
      title: 'Skill Scheduler',
      description: 'A platform that allows users to plan, track, and optimize study schedules, study materials, and study routines. Built with React.js, Node.js, Express.js, MongoDB, and RESTful APIs.',
      links: {
        figma: 'https://www.figma.com/design/1PDr2aGXQJMBxMr5OSgDRF/Skills-Schedular?node-id=0-1&t=7YKvlO8u3ZMlr8tY-1',
        postman: 'https://documenter.getpostman.com/view/39189818/2sAYX3sixA',
        github: 'https://github.com/ishitatrivedi-dell/skill_scheduler',
        demo: 'https://www.youtube.com/embed/0sd4LicL6sI',
      },
    },
    {
      title: 'YouTube Clone',
      description: 'A YouTube clone featuring video uploads, categories, and search results. Built using React.js, Node.js, Express.js, and MongoDB for dynamic content management.',
      links: {
        postman: 'https://documenter.getpostman.com/view/39189818/2sAYXEDxN7',
        github: 'https://github.com/ishitatrivedi-dell/youtube_react',
      },
    },
    {
      title: 'Mixed Web Application',
      description: 'A multi-functional web app integrating Google, Facebook, Gmail, and Twitter. Built with React.js, Node.js, and MongoDB for seamless third-party integrations.',
      links: {
        github: 'https://github.com/ishitatrivedi-dell/learner_routing',
        demo: 'https://learner-routing.onrender.com',
      },
    },
  ];

  const cloneProjects = [
    {
      title: 'Spotify Clone',
      description: 'A Spotify-inspired music streaming interface clone built with React.js, featuring responsive design and core UI components.',
      links: {
        github: 'https://github.com/ishitatrivedi-dell/Spotify-react',
      },
    },
    {
      title: 'Neural Style Transfer (NST)',
      description: 'A static website showcasing neural style transfer concepts, built with HTML, CSS, and JavaScript.',
      links: {
        github: 'https://github.com/ishitatrivedi-dell/nst',
      },
    },
  ];

  const [visibleVideo, setVisibleVideo] = useState(null);

  const toggleVideo = (projectIndex) => {
    setVisibleVideo(visibleVideo === projectIndex ? null : projectIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Main Projects Header */}
          <div className="flex items-center justify-center mb-12">
            <i className="fas fa-project-diagram text-4xl text-purple-500 mr-4"></i>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Main Projects
            </h2>
          </div>

          {/* Main Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {mainProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-col gap-4">
                  {project.links.figma && (
                    <a href={project.links.figma} target="_blank" rel="noopener noreferrer" className="flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300">
                      <i className="fab fa-figma mr-2"></i>Figma
                    </a>
                  )}
                  {project.links.postman && (
                    <a href={project.links.postman} target="_blank" rel="noopener noreferrer" className="flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300">
                      <i className="fas fa-file-code mr-2"></i>Postman
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300">
                      <i className="fab fa-github mr-2"></i>GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <>
                      <button
                        onClick={() => toggleVideo(index)}
                        className="flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
                      >
                        <i className="fas fa-play-circle mr-2"></i>
                        {visibleVideo === index ? 'Hide Demo' : 'Show Demo'}
                      </button>
                      {visibleVideo === index && (
                        <div className="mt-4">
                          <iframe
                            width="100%"
                            height="315"
                            src={project.links.demo}
                            title={`${project.title} Demo`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Clones and Static Websites Header */}
          <div className="flex items-center justify-center mb-12">
            <i className="fas fa-clone text-4xl text-purple-500 mr-4"></i>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Clones & Static Websites
            </h2>
          </div>

          {/* Clones and Static Websites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloneProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-col gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
                    >
                      <i className="fab fa-github mr-2"></i>GitHub
                    </a>
                  )}
                </div>
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

export default Projects;