import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const AboutMe = () => {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const overviews = [
    {
      title: 'Resume',
      icon: 'fas fa-file-alt',
      summary:
        'My resume highlights my academic journey and technical expertise. Currently pursuing a *B.Tech in Computer Science* at Rai University (2024-2028), I specialize in front-end (HTML, CSS, JavaScript, React) and back-end (Node.js, Express.js, MongoDB) development. Proficient in C, C++, and Git, I’m also fluent in *Hindi*, *English*, and *Gujarati*. Download my resume for a detailed overview.',
      link: '/resume',
    },
    {
      title: 'Education',
      icon: 'fas fa-graduation-cap',
      summary:
        'My education fuels my passion for tech. I’m studying *B.Tech in Computer Science* at Rai University, mastering programming and web development. I completed higher secondary at Vidhyadhish Vidyasankul, Bhavnagar (2022-2024), and secondary at Gyanmanjri Vidhyapith, Mahuva (2019-2022), where my interest in coding began.',
      link: '/education',
    },
    {
      title: 'Skills',
      icon: 'fas fa-tools',
      summary:
        'I’m a full-stack enthusiast with expertise in HTML, CSS, JavaScript, and React for dynamic front-ends, and Node.js, Express.js, and MongoDB for robust back-ends. Skilled in C++ for algorithmic challenges, Git for version control, and clear communication for teamwork, I thrive in building scalable solutions.',
      link: '/skills',
    },
    {
      title: 'Projects',
      icon: 'fas fa-project-diagram',
      summary:
        'My projects showcase my development skills. *Skill Scheduler*, a study planner, uses React, Node.js, and MongoDB with RESTful APIs. My *YouTube Clone* supports video uploads and search, while *Mixed Web App* integrates social platforms. Explore my GitHub for more, including Spotify and static API-driven sites.',
      link: '/projects',
    },
    {
      title: 'UI/UX Designs',
      icon: 'fas fa-paint-brush',
      summary:
        'I design intuitive interfaces with Figma. Highlights include *Skill Scheduler*’s clean study planner UI, a vibrant *Cricket Dashboard*, and a minimalist *Learning App*. My *Instagram Clone* and *Storytale* layouts reflect my focus on user-friendly, visually appealing designs.',
      link: '/ui',
    },
    {
      title: 'LeetCode Activity',
      icon: 'fas fa-code',
      summary:
        'I sharpen my problem-solving on LeetCode as *IshitaTrivedi06*. With some problems solved in C++, including *Power of Two**, Remove Element* etc .. , I’m steadily building my algorithmic skills to tackle real-world challenges efficiently.',
      link: '/leetcode',
    },
    {
      title: 'Social Media',
      icon: 'fas fa-share-alt',
      summary:
        'I connect with the tech community online. Follow me on *LinkedIn* for professional updates, *GitHub* for project insights like *Skill Scheduler*, and *Twitter* for thoughts on coding and trends. Let’s build something great together!',
      link: '/social-media',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-slate-800 to-purple-900 text-gray-100">
      <Navbar />
      <section id="about-me" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Icon */}
          <div className="flex items-center justify-center mb-12 animate-zoom-in">
            <i className="fas fa-user text-4xl text-teal-400 mr-4 animate-bounce"></i>
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-teal-300 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight shadow-sm">
              About Me
            </h2>
          </div>

          {/* Personal Intro */}
          <div className="max-w-4xl mx-auto bg-slate-900/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl mb-12 hover:shadow-teal-400/30 transition-shadow duration-500 border border-teal-400/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQGL1ERh28fP-w/profile-displayphoto-shrink_400_400/B4EZYUoRExHgAg-/0/1744102823525?e=1749686400&v=beta&t=NUW-d2u7Hu_K6Pn976L644mtqf1X7ctn6A3_f04WM-8"
                alt="Ishita Trivedi"
                className="w-52 h-52 rounded-full object-cover border-4 border-teal-400 shadow-lg hover:scale-110 transition-transform duration-300"
              />
              <div className="flex-1">
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                  Hey! I’m a B.Tech Computer Science student at Rai University, hooked on building awesome web apps. I rock front-end with HTML, CSS, JavaScript, and React, and power back-ends with Node.js, Express.js, and MongoDB. 
                  <br /><br />
                  Right now, I’m mastering Redux for slick state management, OOP in C++ for clean code, and DSA for cracking tough problems. Want a peek at my skills?{' '}
                  <button
                    onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                    className="text-pink-300 hover:text-pink-200 underline transition-colors duration-200"
                  >
                    Click to explore!
                  </button>
                  {isSkillsOpen && (
                    <span className="block mt-3 text-pink-200 italic animate-fade-slide-up">
                      - Redux: Taming app states.<br />
                      - OOP: Crafting modular C++ code.<br />
                      - DSA: Nailing algorithms with style!
                    </span>
                  )}
                  <br /><br />
                  I’ve built Skill Scheduler, YouTube and Spotify Clones, and cool static sites. I’m diving into Material UI, boosting Skill Scheduler with auth, and dreaming up my next project. Coding on Linux, I keep it clear and collaborative!
                </p>
                <div className="text-center mt-8">
                  <a
                    href="/Ishita_Resume.pdf" // Update with your actual resume path
                    download
                    className="inline-flex items-center bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-pink-400/40 hover:scale-105 hover:rotate-3 transition-all duration-300 animate-pulse"
                  >
                    <i className="fas fa-download mr-2"></i>
                    Grab My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-16 bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent tracking-tight shadow-sm animate-zoom-in">
              Overview
            </h3>
            <div className="flex flex-col gap-8">
              {overviews.map((overview, index) => (
                <div
                  key={index}
                  className="bg-slate-900/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-teal-400/40 transition-all duration-500 border-l-4 border-teal-400 hover:border-pink-400 animate-fade-in-slide"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-6">
                    <i className={`${overview.icon} text-4xl text-teal-400 mr-5 animate-bounce hover:scale-125 transition-transform duration-300`}></i>
                    <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent">
                      {overview.title}
                    </h4>
                  </div>
                  <p className="text-gray-200 text-base sm:text-lg leading-loose mb-6">
                    {overview.summary.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, i) =>
                      part.match(/\*\*(.*?)\*\*/) ? (
                        <span key={i} className="font-bold text-gray-100">
                          {part.replace(/\*\*/g, '')}
                        </span>
                      ) : part.match(/\*(.*?)\*/) ? (
                        <span key={i} className="italic text-pink-300">
                          {part.replace(/\*/g, '')}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                  <a
                    href={overview.link}
                    className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-teal-600 to-purple-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-teal-700 hover:to-purple-700 hover:scale-105 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-pink-400/40 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  >
                    Visit Page <i className="fas fa-arrow-right ml-3"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @keyframes fadeInSlide {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-slide {
          animation: fadeInSlide 0.8s ease-out forwards;
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.5s ease-in forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 1s ease-out forwards;
        }
        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutMe;