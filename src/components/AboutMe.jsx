import React from 'react';
import Navbar from '../components/Navbar';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <section id="about-me" className="py-16">
        <div className="container mx-auto px-6">
          {/* Header with Icon */}
          <div className="flex items-center justify-center mb-12">
            <i className="fas fa-user text-4xl text-purple-500 mr-4"></i>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEGi0alMoJJOw/profile-displayphoto-shrink_400_400/B4DZVTB5enGkAg-/0/1740854764265?e=1746057600&v=beta&t=-rYJWY_EtIpPKQyJvC8NI_UUQKe2fqny_aVFCweXN28"
                alt="Ishita Trivedi"
                className="w-48 h-48 rounded-full object-cover shadow-md"
              />
              <div className="flex-1">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am a first-year B.Tech Computer Science student at Rai University (2024-2028) with a strong passion for web development and backend programming. I have knowledge of HTML, CSS, JavaScript, React, C, and C++, and I prefer using CSS for styling instead of Tailwind CSS.
                  <br /><br />
                  I have worked on various projects, including a Skill Scheduler (a study planner with progress tracking), a Spotify clone, and websites for Cocktail, MealDB, Bank, and Potter using React and APIs.
                  <br /><br />
                  I am currently exploring backend development with MongoDB, Express, and Node.js but prefer not to use Mongoose. I am working on Material UI for UI enhancements and planning to add authentication to my Skill Scheduler project.
                  <br /><br />
                  I use Linux and prefer beginner-friendly coding explanations with simplified code solutions. I am also building a new project which will be updated soon.
                </p>
                {/* Download Resume Button */}
          <div className="text-center mt-12">
            <a
              href="../../public/Ishita Resume .pdf" // Replace with your actual resume PDF URL or file path
              download
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            >
              <i className="fas fa-download mr-2"></i>
              Download Full Resume
            </a>
          </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;