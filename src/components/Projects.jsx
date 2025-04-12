import React, { useRef } from 'react';
import Navbar from '../components/Navbar';

const Projects = () => {
  const mernRef = useRef(null);
  const uiuxRef = useRef(null);
  const clonesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const mainProjects = [
    {
      title: 'Skill Scheduler',
      description: 'A platform that allows users to plan, track, and optimize study schedules, study materials, and study routines.',
      technologies: 'React.js, Node.js, Express.js, MongoDB, RESTful APIs',
      links: {
        figma: 'https://www.figma.com/design/1PDr2aGXQJMBxMr5OSgDRF/Skills-Schedular?node-id=0-1&t=7YKvlO8u3ZMlr8tY-1',
        postman: 'https://documenter.getpostman.com/view/39189818/2sAYX3sixA',
        github: 'https://github.com/ishitatrivedi-dell/skill_scheduler',
        demo: 'https://www.youtube.com/embed/0sd4LicL6sI',
      },
    },
    {
      title: 'YouTube Clone',
      description: 'A YouTube clone featuring video uploads, categories, and search results.',
      technologies: 'React.js, Node.js, Express.js, MongoDB',
      links: {
        postman: 'https://documenter.getpostman.com/view/39189818/2sAYXEDxN7',
        github: 'https://github.com/ishitatrivedi-dell/youtube_react',
      },
    },
    {
      title: 'Mixed Web Application',
      description: 'A multi-functional web app integrating Google, Facebook, Gmail, and Twitter APIs for a seamless user experience.',
      technologies: 'React.js, RESTful APIs',
      links: {
        github: 'https://github.com/ishitatrivedi-dell/learner_routing',
        demo: 'https://www.youtube.com/embed/DVGfTxPL9dE',
        live: 'https://learner-routing.onrender.com',
      },
    },
  ];

  const cloneProjects = [
    {
      title: 'Spotify Clone',
      description: 'A Spotify-inspired music streaming interface clone featuring a responsive design with sections like "Good Morning" and "Shows You Might Like."',
      technologies: 'React.js, CSS',
      links: {
        github: 'https://github.com/ishitatrivedi-dell/Spotify-react',
        live: 'https://spotify-react-wine.vercel.app/',
      },
    },
    {
      title: 'Newton School Of Technology (NST)',
      description: 'A static website showcasing the B.Tech programs at Newton School of Technology, highlighting curriculum and admission details.',
      technologies: 'HTML, CSS',
      links: {
        github: 'https://github.com/ishitatrivedi-dell/nst',
        live: 'https://nst-ishita-trivedis-projects.vercel.app/',
      },
    },
  ];

  const designs = [
    {
      title: 'Skill Scheduler',
      description: 'A sleek and user-friendly UI for a study planner app, featuring schedule management and progress tracking.',
      figma: 'https://www.figma.com/design/1PDr2aGXQJMBxMr5OSgDRF/Skills-Schedular?m=auto&t=PIFUU6U1aXCWHiS4-6',
    },
    {
      title: 'The Learning App',
      description: 'A minimalist learning app design for tracking personal goals, tasks, and analytics with a clean layout with videos.',
      figma: 'https://www.figma.com/design/zFLRIgR7VtGg7h13rDXNTl/learning-app?m=auto&t=PIFUU6U1aXCWHiS4-6',
    },
    {
      title: 'Cricket Dashboard',
      description: 'A cricket dashboard with vibrant colors to showcase different team scoring metrics.',
      figma: 'https://www.figma.com/design/E5QDdhdb30dEj95NhhDYg2/Untitled?m=auto&t=PIFUU6U1aXCWHiS4-6',
    },
    {
      title: 'Instagram Clone',
      description: 'An Instagram clone design for practicing Figma with various tools and plugins.',
      figma: 'https://www.figma.com/design/QGN8z9OQnQCPzHi7IIbdcA/instagram?m=auto&t=PIFUU6U1aXCWHiS4-6',
    },
    {
      title: 'Aerospace and Rockets Template',
      description: 'A template/thumbnail for a website related to rockets and aerospace.',
      figma: 'https://www.figma.com/proto/ppSDezzBfSnuvcWsJhcQZw?node-id=0-1&t=PIFUU6U1aXCWHiS4-6',
    },
    {
      title: 'Storytale',
      description: 'A layout for a website providing knowledge about the planetary system, with book purchasing and review features.',
      figma: 'https://www.figma.com/design/ppSDezzBfSnuvcWsJhcQZw/storytale?node-id=0-1&t=Zszs2nuMwPsrQMUe-1',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-12 space-x-8">
            <button
              onClick={() => scrollToSection(mernRef)}
              className="text-lg font-semibold text-purple-400 hover:text-purple-300 transition duration-300"
            >
              MERN Projects
            </button>
            <button
              onClick={() => scrollToSection(uiuxRef)}
              className="text-lg font-semibold text-purple-400 hover:text-purple-300 transition duration-300"
            >
              UI/UX Projects
            </button>
            <button
              onClick={() => scrollToSection(clonesRef)}
              className="text-lg font-semibold text-purple-400 hover:text-purple-300 transition duration-300"
            >
              Clones & Static Websites
            </button>
          </div>

          {/* MERN Projects Section */}
          <div ref={mernRef}>
            <div className="flex items-center justify-center mb-12">
              <i className="fas fa-project-diagram text-4xl text-purple-500 mr-4"></i>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                MERN Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {mainProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  {project.links.demo && (
                    <div className="mb-4">
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
                  <p className="text-gray-400 mb-4">
                    <span className="font-semibold text-white">Technologies:</span> {project.technologies}
                  </p>
                  <div className="flex flex-col gap-4">
                    {project.links.figma && (
                      <a
                        href={project.links.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
                      >
                        <i className="fab fa-figma mr-2"></i>Figma
                      </a>
                    )}
                    {project.links.postman && (
                      <a
                        href={project.links.postman}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
                      >
                        <i className="fas fa-file-code mr-2"></i>Postman
                      </a>
                    )}
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
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
                      >
                        <i className="fas fa-globe mr-2"></i>Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clones and Static Websites Section */}
          <div ref={clonesRef}>
            <div className="flex items-center justify-center mb-12">
              <i className="fas fa-clone text-4xl text-purple-500 mr-4"></i>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Clones & Static Websites
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {cloneProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <p className="text-gray-400 mb-4">
                    <span className="font-semibold text-white">Technologies:</span> {project.technologies}
                  </p>
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
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
                      >
                        <i className="fas fa-globe mr-2"></i>Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UI/UX Projects Section */}
          <div ref={uiuxRef}>
            <div className="flex items-center justify-center mb-12">
              <i className="fas fa-paint-brush text-4xl text-purple-500 mr-4"></i>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                UI/UX Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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