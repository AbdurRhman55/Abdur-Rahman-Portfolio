import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// 👇 Images import
import bakeryImg from "../../assets/Bakery Shope.PNG";
import teaImg from "../../assets/Tea Website.PNG";
import tutorImg from "../../assets/E_-Tutor.PNG";
import ResearchAcademia from "../../assets/Research Academia.PNG";
import HRManagement from "../../assets/HR MANAGEMENT.PNG";

// Projects Data
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce web app with payment integration and inventory management system.",
    image: bakeryImg,
    tech: ["TailwindCSS", "PHP", "MySQL"],
    demo: "https://pakizabites.com/",
    github: "#",
    category: "Web Development",
    featured: true,
  },
  {
    id: 2,
    title: "E-Tutor Website",
    description:
      "Personal portfolio to showcase skills and projects with modern design and smooth animations.",
    image: tutorImg,
    tech: ["React", "TailwindCSS", "Node.js", "Mongo DB"],
    demo: "#",
    github: "#",
    category: "React",
  },
  {
    id: 3,
    title: "Tea Website",
    description:
      "A blogging platform with user authentication, comments, and admin dashboard.",
    image: teaImg,
    tech: ["PHP", "MySQL", "TailwindCSS"],
    demo: "https://ar-leaf.netlify.app/",
    github: "#",
    category: "PHP",
    featured: true,
  },
  {
    id: 4,
    title: "Research Academia",
    description:
      "Platform for publishing and accessing academic research papers with advanced search.",
    image: ResearchAcademia,
    tech: ["TailwindCSS", "JavaScript", "Node.js"],
    demo: "#",
    github: "#",
    category: "UI/UX",
  },
  {
    id: 5,
    title: "HR Management",
    description:
      "Comprehensive system to manage employees, payroll, attendance, and performance.",
    image: HRManagement,
    tech: ["TailwindCSS", "JavaScript", "React"],
    demo: "#",
    github: "#",
    category: "React",
    featured: true,
  },
];

// Categories
const categories = [
  "All",
  "TailwindCSS",
  "JavaScript",
  "React",
  "PHP",
  "MySQL",
];

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  let filteredProjects;
  if (activeCategory === "All") {
    filteredProjects = projects;
  } else {
    filteredProjects = projects.filter((p) => p.tech.includes(activeCategory));
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My Recent Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A collection of my latest work showcasing modern web development and
            design solutions
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 border-b border-gray-300 dark:border-gray-700 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative text-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "text-[#1A2A80] dark:text-[#4F46E5]"
                  : "text-gray-500 dark:text-gray-400 hover:text-[#1A2A80] dark:hover:text-[#4F46E5]"
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute left-0 -bottom-1 w-full h-1 rounded-full bg-gradient-to-r from-[#1A2A80] to-[#000B58]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-slate-100 dark:border-slate-700"
            >
              {project.featured && (
                <span className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Featured
                </span>
              )}

              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-[#1A2A80] to-[#000B58] text-white py-2.5 px-4 rounded-lg hover:from-blue-700 hover:to-blue-1000 transition shadow-md hover:shadow-lg"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 bg-slate-800 dark:bg-slate-700 text-white py-2.5 px-4 rounded-lg hover:bg-slate-900 dark:hover:bg-slate-600 transition shadow-md hover:shadow-lg"
                  >
                    <FaGithub className="text-sm" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
