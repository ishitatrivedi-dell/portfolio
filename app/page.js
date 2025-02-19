"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, GitlabIcon as GitHub, Linkedin, Mail, Menu, Twitter, X  } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const educations = [
    {
      "institution": "Rai University, CodingGita",
      "degree": "BTech in Computer Science",
      "years": "2024-2028"
    },
    {
      "institution": "Vidhyadhish Vidhyasankul",
      "degree": "Higher Secondary Education",
      "years": "2022-2024"
    },
    {
      "institution": "Gyanmanjri Secondary School ",
      "degree": "Secondary Education",
      "years": "2018-2022"
    }

  ]


  const skillsData = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB"]
    },
    {
      category: "Tools",
      skills: ["Git", "Postman", "VS Code" , "Figma" ]
    }
  ];

  const projects = [
    {
      title: "Youtube Clone",
      description: "A YouTube clone that fetches data from an API to display videos, categories, and search results.",
      technologies: ["React.js", "API Integration", "CSS"],
      codeLink: ["https://github.com/ishitatrivedi-dell/youtube_react" ]
    },
    {
      "title": "Skill Scheduler",
      "description": "A full-stack MERN application designed to help students manage their study schedules efficiently.",
      "technologies": ["MongoDB", "Express.js", "React.js", "Node.js"],
      "codeLink": ["https://github.com/ishitatrivedi-dell/skill_scheduler"]
    },
    {
      "title": "Mixed web",
      "description": "A multi-featured React website that integrates MealDB, CocktailDB, Harry Potter, and Bank APIs to provide recipe searches, cocktail details, Hogwarts information, and banking functionalities.",
      "technologies": ["React.js", "API Integration", "CSS"],
      "codeLink": ["https://github.com/ishitatrivedi-dell/learner_routing"]
    }
  ];


  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/ishitatrivedi-dell",
      icon: <Github size={20} />
    },
    {
      platform: "Email",
      url: "mailto:ishita.trivedi.cg@gmail.com",
      icon: <Mail size={20} />
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ishitatrivedi",
      icon: <Linkedin size={20} />
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/ishitatrivedi",
      icon: <Github size={20} /> // Lucide-react does not have a LeetCode icon, using GitHub as a placeholder
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/ishitatrivedi",
      icon: <Twitter size={20} />
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Menu Button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="fixed top-4 right-4 z-50 md:hidden">
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed inset-0 bg-black z-40 md:hidden"
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          
          <a href="#projects" className="text-xl hover:text-gray-400">
            Projects
          </a>
          <a href="#skills" className="text-xl hover:text-gray-400">
            Skills
          </a>
          <a href="#education" className="text-xl hover:text-gray-400">
            Education
          </a>
        </nav>
      </motion.div>

      <div className="grid md:grid-cols-[1fr,1.5fr] min-h-screen">
        {/* Left Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-16 flex flex-col justify-between"
        >
          <div>

          <div className="w-full h-fit mb-5 rounded-full overflow-hidden flex items-center justify-center md:hidden">
            <img
              className="object-cover w-[50%] aspect-square rounded-full "
              src="https://media.licdn.com/dms/image/v2/D4D03AQEMieEy0z2Jww/profile-displayphoto-shrink_400_400/B4DZQ8gvdVHYAo-/0/1736182007548?e=1745452800&v=beta&t=DTmMr0x5w343OT9BDjfJauyClC_G5coeFwCVmIxR-xM"
              alt="Profile Picture"
            />
          </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hello, I'm
              <br />
              Ishita Trivedi.
            </h1>
            <p className="text-gray-400 mb-8">
              A passionate full-stack developer, specializing in building scalable, user-friendly applications using the
              MERN stack. I thrive on solving complex problems and bringing ideas to life.
            </p>
            <nav className="hidden md:block">
              <ul className="space-y-4">
               
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    01 — Education
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                    02 — Skills
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-gray-400 hover:text-white transition-colors">
                    03 — Projects
                  </a>

                </li>
              </ul>
            </nav>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border rounded-full hover:bg-gray-200 transition hover:text-black hover:outline-black"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.section>

        {/* Right Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-zinc-900 p-8 md:p-16 overflow-auto flex flex-col gap-10"
        >


          <div className="w-full h-fit mb-5 rounded-full overflow-hidden flex items-center justify-center max-md:hidden">
            <img
              className="object-cover w-[50%] aspect-square rounded-full "
              src="https://media.licdn.com/dms/image/v2/D4D03AQEMieEy0z2Jww/profile-displayphoto-shrink_400_400/B4DZQ8gvdVHYAo-/0/1736182007548?e=1745452800&v=beta&t=DTmMr0x5w343OT9BDjfJauyClC_G5coeFwCVmIxR-xM"
              alt="Profile Picture"
            />
          </div>
{/* 
              <div className="">
                  
              <p>
              A passionate and dedicated B.Tech Computer Science student at Rai University, eager to apply my skills in web development and software engineering. Proficient in HTML, CSS, JavaScript, React, and backend technologies like Node.js and MongoDB. Experienced in building interactive web applications, including an e-learning platform, a Spotify clone, and a Skill Scheduler project. Always enthusiastic about learning new technologies and improving my problem-solving abilities.
              </p>

              </div> */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            <h2 className="text-sm text-gray-400 mb-4">EDUCATION</h2>
            <div className="space-y-4">
              {
                educations.map((education, index) => (
                  <div key={index} className="bg-zinc-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">{education.institution}</h3>
                    <p className="text-sm text-gray-400">{education.degree}</p>
                    <p className="text-sm text-gray-400">{education.years}</p>
                  </div>
                ))
              }
            </div>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            <h2 className="text-sm text-gray-400 mb-4">SKILLS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skillsData.map((skill, index) => (
                <div key={index} className="bg-zinc-800 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">{skill.category}</h3>
                  <p className="text-sm text-gray-400">{skill.skills.join(", ")}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            <h2 className="text-sm text-gray-400 mb-4">RECENT PROJECT</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-zinc-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    View Code →
                  </a>
                </div>
              ))}
            </div>
          </motion.div>


        </motion.section>
      </div>
    </div>
  )
}

