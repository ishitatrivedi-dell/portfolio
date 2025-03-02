import React from 'react';
import { Link } from 'react-router-dom';
import AboutMe from '../components/AboutMe';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
     
      <main>
        {/* About Me Section (Displayed First) */}
        <AboutMe />

        {/* Navigation/Options Section Below About Me */}
        <section id="options" className="py-16 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Explore My Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Resume',
                'Education',
                'Skills',
                'Projects',
                'UI',
                'LeetCode',
                'Social Media',
                'Contact',
              ].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="bg-gray-800 hover:bg-gray-700 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center text-xl font-semibold"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;