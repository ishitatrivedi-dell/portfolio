import React from 'react';
import Navbar from './Navbar';

const LeetCode = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header with Icon */}
          <div className="flex items-center justify-center mb-12">
            <i className="fas fa-code text-4xl text-purple-500 mr-4"></i>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              LeetCode Activity
            </h2>
          </div>

          {/* LeetCode Stats Card */}
          <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            {/* Profile Overview */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQEGi0alMoJJOw/profile-displayphoto-shrink_400_400/B4DZVTB5enGkAg-/0/1740854764265?e=1746057600&v=beta&t=-rYJWY_EtIpPKQyJvC8NI_UUQKe2fqny_aVFCweXN28" // Replace with actual profile image if available
                  alt="Ishita Trivedi"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">IshitaTrivedi06</h3>
                  <p className="text-gray-400">Rank: 3,625,670</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                I am a Computer Science student engaging in every field of computers.
              </p>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <p className="text-lg font-semibold text-white">14/34,474</p>
                <p className="text-gray-400">Problems Solved</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-white">12,863</p>
                <p className="text-gray-400">Easy</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-white">2,185</p>
                <p className="text-gray-400">Medium</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-white">0/806</p>
                <p className="text-gray-400">Hard</p>
              </div>
            </div>

            {/* Badges */}
            <div className="mb-6">
              <p className="text-gray-400 mb-2">Badges</p>
              <div className="flex space-x-4">
                <span className="text-purple-400">0 Badges</span>
                <span className="text-gray-500">Locked LeetCoding Challenge</span>
              </div>
            </div>

            {/* Activity Chart (Simulated) */}
            <div className="mb-6">
              <p className="text-gray-400 mb-2">Activity (Past Year)</p>
              <div className="bg-gray-700 h-16 rounded-lg flex items-center justify-center">
                <p className="text-gray-300">18 Submissions in the Past Year</p>
                {/* Simulated grid for activity (you can use a library like Chart.js for a real chart) */}
                <div className="hidden md:flex flex-wrap gap-1 mt-2">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className="w-2 h-2 bg-gray-500 rounded"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="mb-6">
              <p className="text-gray-400 mb-2">Community Stats</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Views: 0</li>
                <li>Likes: 0</li>
                <li>Solution: 0</li>
                <li>Discuss: 0</li>
                <li>Reputation: 0</li>
              </ul>
            </div>

            {/* Recent AC Problems */}
            <div className="mb-6">
              <p className="text-gray-400 mb-2">Recent AC Problems</p>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Power of Two (22 days ago)</li>
                <li>Remove Element (22 days ago)</li>
                <li>Greatest Common Divisor of Strings (25 days ago)</li>
              </ul>
            </div>

            {/* Languages/Skills */}
            <div className="mb-6">
              <p className="text-gray-400 mb-2">Languages</p>
              <p className="text-gray-300">C++ (14 problems solved)</p>
            </div>

            {/* LeetCode Profile Link */}
            <a
              href="https://leetcode.com/u/IshitaTrivedi06/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              View LeetCode Profile
            </a>
          </div>

          {/* Optional Back to Resume Link */}
          <div className="text-center mt-12">
            <a
              href="/resume"
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

export default LeetCode;