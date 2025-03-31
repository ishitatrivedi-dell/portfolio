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
        'My resume encapsulates my entire academic and professional journey. It details my education, including my ongoing *B.Tech in Computer Science* at Rai University (2024-2028), my higher secondary education at Vidhydhish VidhyaSankul in Bhavnagar (2022-2024), and secondary education at Gyanmanjri Vidhyapith Secondary School in Mahuva, Bhavnagar (2019-2022). My skills encompass front-end technologies like HTML, CSS (preferred over Tailwind), and JavaScript, frameworks such as React, backend tools including Node.js, Express.js, and MongoDB (without Mongoose), plus C and C++ for problem-solving, version control with Git, and strong communication skills. I’m fluent in *Hindi*, *English*, and *Gujarati*. Contact details include my phone (+91 8883600026) and email (ishita.trivedi.cg@gmail.com). A downloadable PDF version is available for full details.',
      link: '/resume',
    },
    {
      title: 'Education',
      icon: 'fas fa-graduation-cap',
      summary:
        'My educational path has built a solid foundation for my career in technology. I am currently enrolled in a *B.Tech in Computer Science* at (CodingGita X Rai University), where I am learning advanced programming concepts, web development techniques, and backend development skills. Prior to this, I completed my higher secondary education at Vidhyadhish Vidyasankul in Bhavnagar city, Bhavnagar (2022-2024), achieving academic excellence and honing my analytical abilities. My secondary education was at Gyanmanjri Vidhyapith Secondary School in Mahuva, Bhavnagar (2019-2022), where I first engaged with computer science, sparking my passion for coding and development that continues to drive my studies today.',
      link: '/education',
    },
    {
      title: 'Skills',
      icon: 'fas fa-tools',
      summary:
        'I have cultivated an extensive skill set tailored to full-stack development, technical problem-solving, and academic proficiency. My front-end expertise includes HTML, CSS (my preferred styling method over Tailwind CSS), JavaScript, and frameworks like React and Angular JS for creating dynamic and interactive user interfaces. On the backend, I’m adept with Node.js, Express.js, and NoSQL Databases such as MongoDB (opting not to use Mongoose) and Redis, enabling me to build robust server-side applications. I’m skilled in C and C++, with a focus on Object-Oriented Programming with C++ for algorithmic challenges and structured coding. My academic skills include Mathematics II for analytical problem-solving and Environment Studies for interdisciplinary awareness. I also have experience with version control with Git for project management and various tools and platforms essential for development workflows. My strong communication skills facilitate effective teamwork and project coordination, enhancing my technical capabilities.',
      link: '/skills',
    },
    {
      title: 'Projects',
      icon: 'fas fa-project-diagram',
      summary:
        'My project portfolio demonstrates my practical experience in web development across multiple domains. Skill Scheduler is a standout project—a study planner with progress tracking built using React.js, Node.js, Express.js, MongoDB, and RESTful APIs, featuring Figma designs (*https://www.figma.com/design/1PDr2aGXQJMBxMr5OSgDRF/Skills-Schedular*), Postman documentation (*https://documenter.getpostman.com/view/39189818/2sAYX3sixA*), GitHub repository (*https://github.com/ishitatrivedi-dell/skill_scheduler*), and a demo video (*https://www.youtube.com/embed/0sd4LicL6sI*). The YouTube Clone supports video uploads, categories, and search, developed with React.js, Node.js, Express.js, and MongoDB (GitHub: *https://github.com/ishitatrivedi-dell/youtube_react*, Postman: *https://documenter.getpostman.com/view/39189818/2sAYXEDxN7*). Mixed Web Application integrates Google, Facebook, Gmail, and Twitter using React.js and Node.js (GitHub: *https://github.com/ishitatrivedi-dell/learner_routing*, Demo: *https://learner-routing.onrender.com*). Additional projects include the Spotify Clone for UI practice (GitHub: *https://github.com/ishitatrivedi-dell/Spotify-react*), Neural Style Transfer static site (GitHub: *https://github.com/ishitatrivedi-dell/nst*), and static websites for Cocktail, MealDB, Bank, and Potter using React and APIs.',
      link: '/projects',
    },
    {
      title: 'UI/UX Designs',
      icon: 'fas fa-paint-brush',
      summary:
        'My UI/UX design work, executed in Figma, showcases my ability to craft intuitive and visually appealing interfaces. Skill Scheduler features a sleek, user-friendly study planner UI (*https://www.figma.com/design/1PDr2aGXQJMBxMr5OSgDRF/Skills-Schedular?m=auto&t=PIFUU6U1aXCWHiS4-6*). The Learning App offers a minimalist design for tracking goals, tasks, and analytics with video integration (*https://www.figma.com/design/zFLRIgR7VtGg7h13rDXNTl/learning-app?m=auto&t=PIFUU6U1aXCWHiS4-6*). Cricket Dashboard uses vibrant colors to display team scoring (*https://www.figma.com/design/E5QDdhdb30dEj95NhhDYg2/Untitled?m=auto&t=PIFUU6U1aXCWHiS4-6*). Instagram Clone refines my Figma skills with tools and plugins (*https://www.figma.com/design/QGN8z9OQnQCPzHi7IIbdcA/instagram?m=auto&t=PIFUU6U1aXCWHiS4-6*). Aerospace and Rockets Template provides a thematic thumbnail for aerospace-related content (*https://www.figma.com/proto/ppSDezzBfSnuvcWsJhcQZw?node-id=0-1&t=PIFUU6U1aXCWHiS4-6*), and Storytale is a planetary system knowledge layout with book purchasing and review features (*https://www.figma.com/design/ppSDezzBfSnuvcWsJhcQZw/storytale?node-id=0-1&t=Zszs2nuMwPsrQMUe-1*).',
      link: '/ui',
    },
    {
      title: 'LeetCode Activity',
      icon: 'fas fa-code',
      summary:
        'I actively refine my coding skills on LeetCode under the username IshitaTrivedi06 (*https://leetcode.com/u/IshitaTrivedi06/*), currently ranked *3,625,670*. I’ve solved 14 out of 34,474 problems, with a breakdown of *12,863 easy*, *2,185 medium*, and *0 out of 806 hard problems*, all coded in C++. My recent accepted submissions include *"Power of Two"* (22 days ago), *"Remove Element"* (22 days ago), and *"Greatest Common Divisor of Strings"* (25 days ago), totaling *18 submissions* in the past year. Community stats show *0 views*, *0 likes*, *0 solutions*, *0 discussions*, and *0 reputation*, with no badges earned yet, indicating my ongoing commitment to enhancing algorithmic proficiency as a Computer Science student.',
      link: '/leetcode',
    },
    {
      title: 'Social Media',
      icon: 'fas fa-share-alt',
      summary:
        'My social media profiles bridge my work with the broader tech community. On LinkedIn (*https://www.linkedin.com/in/ishita-trivedi0611/*), I post professional updates, connect with peers, and explore opportunities. GitHub (*https://github.com/ishitatrivedi-dell*) serves as a repository hub for my projects, including *Skill Scheduler*, *YouTube Clone*, *Spotify Clone*, and more, offering transparency into my coding process. Twitter (*https://x.com/IshitaTrivedi06*) is where I share real-time thoughts on tech trends, project updates, and engage with followers, building a network around my interests in web development and programming.',
      link: '/social-media',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-900 to-indigo-950 text-white">
      <Navbar />
      <section id="about-me" className="py-20">
        <div className="container mx-auto px-6">
          {/* Header with Icon */}
          <div className="flex items-center justify-center mb-16">
            <i className="fas fa-user text-4xl text-indigo-400 mr-4"></i>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>

          {/* Personal Intro */}
          <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-md p-8 rounded-xl shadow-2xl mb-16 hover:shadow-indigo-500/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEGi0alMoJJOw/profile-displayphoto-shrink_400_400/B4DZVTB5enGkAg-/0/1740854764265?e=1746057600&v=beta&t=-rYJWY_EtIpPKQyJvC8NI_UUQKe2fqny_aVFCweXN28"
                alt="Ish=Ishita Trivedi"
                className="w-56 h-56 rounded-full object-cover border-4 border-indigo-400 shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="flex-1">
                <p className="text-gray-200 text-lg leading-relaxed">
                  Hey there! I am a B.Tech Computer Science student at Rai University, diving deep into the world of coding with a fiery passion for web development and backend magic. I wield HTML, CSS, JavaScript, and React like a front-end, while mastering Node.js, Express.js, and MongoDB (no Mongoose for me—I like it raw!) on the backend. 
                  <br /><br />
                  Recently, I’ve been leveling up my game with Redux for state management wizardry, Object-Oriented Programming (OOP)in C++ to structure my code like a pro, and Data Structures and Algorithms (DSA) to tackle complex problems with finesse. Curious about my skills?{' '}
                  <button
                    onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                    className="text-indigo-400 hover:text-indigo-300 underline transition-colors duration-200"
                  >
                    Click here to see my evolving skill set!
                  </button>
                  {isSkillsOpen && (
                    <span className="block mt-2 text-indigo-200 italic animate-fade-in">
                      - Redux: Managing app states like a boss.<br />
                      - OOP: Building reusable, scalable code with C++.<br />
                      - DSA: Cracking arrays, trees, and graphs with C++ finesse!
                    </span>
                  )}
                  <br /><br />
                  I’ve built cool stuff like Skill Scheduler—a study planner with progress tracking—and clones of Spotify and YouTube, plus static sites for Cocktail, MealDB, and more using React and APIs. Right now, I’m exploring Material UI for sleek designs, adding authentication to Skill Scheduler, and cooking up a fresh project (stay tuned!). I code on Linux, love beginner-friendly explanations, and keep my solutions simple yet powerful.
                </p>
                <div className="text-center mt-10">
                  <a
                    href="../../public/Ishita Resume .pdf"
                    download
                    className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <i className="fas fa-download mr-2"></i>
                    Download Full Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-semibold text-center mb-20 text-indigo-300 border-b-2 border-indigo-400 pb-4 animate-fade-in-down">
              Overview
            </h3>
            <div className="flex flex-col gap-12">
              {overviews.map((overview, index) => (
                <div
                  key={index}
                  className="bg-gray-800/70 backdrop-blur-lg p-10 rounded-2xl shadow-xl hover:shadow-indigo-500/30 transition-all duration-500 border-l-4 border-indigo-500 hover:border-indigo-400 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="flex items-center mb-8">
                    <i className={`${overview.icon} text-4xl text-indigo-400 mr-6 animate-bounce`}></i>
                    <h4 className="text-3xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                      {overview.title}
                    </h4>
                  </div>
                  <p className="text-gray-200 text-lg leading-loose mb-8">
                    {overview.summary.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((part, i) =>
                      part.match(/\*\*(.*?)\*\*/) ? (
                        <span key={i} className="font-bold text-white">
                          {part.replace(/\*\*/g, '')}
                        </span>
                      ) : part.match(/\*(.*?)\*/) ? (
                        <span key={i} className="italic text-indigo-300">
                          {part.replace(/\*/g, '')}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </p>
                  <a
                    href={overview.link}
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutMe;