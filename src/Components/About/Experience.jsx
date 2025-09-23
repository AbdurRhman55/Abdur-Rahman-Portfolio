// Experience.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGraduationCap,
  FaBook,
  FaLaptopCode,
  FaUserTie,
  FaRocket,
  FaBriefcase,
  FaCode,
  FaPalette,
  FaDatabase,
} from "react-icons/fa";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const educationData = [
    {
      id: 1,
      title: "Matric",
      institution: "New Islamia Public High School",
      grade: "Grade A",
      year: "2016-2018",
      icon: <FaGraduationCap className="text-white" />,
    },
    {
      id: 2,
      title: "FSC",
      institution: "The Peace Group of School and College",
      grade: "Grade A",
      year: "2018-2020",
      icon: <FaBook className="text-white" />,
    },
    {
      id: 3,
      title: "BS Computer Science",
      institution: "Agriculture University Peshawar",
      grade: "Grade A",
      year: "2025-Graduate",
      icon: <FaLaptopCode className="text-white" />,
    },
  ];

  const experienceData = [
    {
      id: 1,
      title: "Internship / Training",
      company: "BitCoderLab",
      description:
        "Gained hands-on experience in web development technologies and best practices.",
      year: "2024-Present",
      icon: <FaUserTie className="text-white" />,
      skills: ["React", "JS", "MongoDB", "Git"],
    },
    {
      id: 2,
      title: "Final Year Project",
      company: "Tuition Website",
      description:
        "Developed a comprehensive platform connecting students with tutors.",
      year: "2025",
      icon: <FaRocket className="text-white" />,
      skills: ["Full Stack", "UI/UX", "Database Design", "Deployment"],
    },
    {
      id: 3,
      title: "Freelance Projects",
      company: "Various Clients",
      description:
        "Portfolio websites, Bakery Shop Website, Admin Panels, and other custom solutions.",
      year: "2021-Present",
      icon: <FaBriefcase className="text-white" />,
      skills: ["Web Development", "Client Management", "Problem Solving"],
    },
  ];

  const projectHighlights = [
    {
      id: 1,
      title: "Portfolio Websites",
      icon: <FaPalette className="text-white" />,
      count: "5+",
      description: "Modern, responsive portfolio sites for professionals",
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      icon: <FaCode className="text-white" />,
      count: "3+",
      description: "Bakery shop and other e-commerce platforms",
    },
    {
      id: 3,
      title: "Admin Panels",
      icon: <FaDatabase className="text-white" />,
      count: "4+",
      description: "Custom admin dashboards with analytics",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#1A2A80] to-[#000B58] bg-clip-text text-transparent mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through education and professional growth in the world of
            technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education Section */}
          <div data-aos="fade-right">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-[#1A2A80] to-[#000B58] p-3 rounded-xl mr-4">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-[#1A2A80] to-[#000B58] mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="text-gray-300">{item.institution}</p>
                      </div>
                    </div>
                    <span className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-400">{item.grade}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div data-aos="fade-left">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-[#1A2A80] to-[#000B58] p-3 rounded-xl mr-4">
                <FaBriefcase className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                Experience & Projects
              </h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 200}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-[#1A2A80] to-[#000B58] mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="text-gray-300">{item.company}</p>
                      </div>
                    </div>
                    <span className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Highlights */}
        <div data-aos="fade-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Project Highlights
            </h3>
            <p className="text-gray-400">
              Key projects demonstrating my skills and capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectHighlights.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-full mb-4">
                  {project.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  {project.count}
                </h4>
                <h5 className="text-lg font-semibold text-gray-300 mb-2">
                  {project.title}
                </h5>
                <p className="text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
