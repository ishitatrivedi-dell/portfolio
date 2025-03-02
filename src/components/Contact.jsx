import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header with Icon */}
          <div className="flex items-center justify-center mb-12">
            <i className="fas fa-envelope text-4xl text-purple-500 mr-4"></i>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Contact Me
            </h2>
          </div>

          {/* Contact Information */}
          <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 mb-8">
            <div className="text-gray-300">
              <p className="flex items-center mb-2">
                <i className="fas fa-phone mr-2"></i>
                Phone: +91 8883600026
              </p>
              <p className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                Email: ishita.trivedi.cg@gmail.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
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

export default Contact;