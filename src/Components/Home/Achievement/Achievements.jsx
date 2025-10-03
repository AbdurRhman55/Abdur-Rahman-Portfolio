import React from "react";
import {
  FaGraduationCap,
  FaAward,
  FaCertificate,
  FaLaptopCode,
  FaUserTie,
  FaUsers,
  FaTrophy,
  FaGitAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Achievements = () => {

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  const achievements = [
    {
      category: "Academic Achievements",
      icon: <FaGraduationCap className="text-2xl md:text-3xl text-[#4477CE]" />,
      items: [
        {
          title: "Matriculation",
          description: "Grade A (86%)",
          year: "2018",
        },
        {
          title: "FSC Pre-Engineering",
          description: "Grade A (84%)",
          year: "2020",
        },
        {
          title: "University Performance",
          description: "CGPA 3.6/4.0 with Dean's Honor Roll",
          year: "2024",
        },
      ],
    },
    {
      category: "Certifications & Diplomas",
      icon: <FaCertificate className="text-2xl md:text-3xl text-[#4477CE]" />,
      items: [
        {
          title: "DIT Diploma",
          description: "Diploma in Information Technology",
          year: "2021",
        },
        {
          title: "freeCodeCamp Certifications",
          description: "Responsive Web Design & JavaScript Algorithms",
          year: "2022",
        },
        {
          title: "Frontend Development Bootcamp",
          description: "Advanced React & Modern UI Development",
          year: "2023",
        },
      ],
    },
    {
      category: "Projects & Competitions",
      icon: <FaLaptopCode className="text-2xl md:text-3xl text-[#4477CE]" />,
      items: [
        {
          title: "Final Year Project",
          description: "Tuition Website with admin dashboard & payment system",
          year: "2024",
        },
        {
          title: "University Tech Fest",
          description: "2nd Prize in Web Development Competition",
          year: "2023",
        },
        {
          title: "GDSC AI Event Participation",
          description:
            "Attended a Google Developer Student Clubs AI-focused event .",
          year: "2023",
        },
      ],
    },
    {
      category: "Freelancing & Client Work",
      icon: <FaUserTie className="text-2xl md:text-3xl text-[#4477CE]" />,
      items: [
        {
          title: "AR LEAF eCommerce Project",
          description: "Developed admin panel with inventory management",
          year: "2023",
        },
        {
          title: "Bakery Website",
          description:
            "Built responsive eCommerce site with cart functionality",
          year: "2022",
        },
        {
          title: "Portfolio Websites",
          description: "Created 5+ professional portfolios for clients",
          year: "2022-2023",
        },
      ],
    },
    {
      category: "Workshops & Seminars",
      icon: <FaUsers className="text-2xl md:text-3xl text-[#4477CE]" />,
      items: [
        {
          title: "Web Technologies Workshop",
          description:
            "Attended 3-day intensive workshop on modern web development",
          year: "2022",
        },
        {
          title: "AI & Machine Learning Seminar",
          description:
            "Participated in national conference on emerging technologies",
          year: "2023",
        },
        {
          title: "UX Design Bootcamp",
          description: "Completed hands-on training in user experience design",
          year: "2023",
        },
      ],
    },
    {
      category: "Awards & Recognition",
      icon: <FaTrophy className="text-2xl md:text-3xl text-[#4477CE]" />,
      items: [
        {
          title: "Best Project Award",
          description: "Won department showcase for tuition website project",
          year: "2024",
        },
        {
          title: "Academic Excellence",
          description: "Received scholarship for outstanding performance",
          year: "2022",
        },
        {
          title: "Coding Competition",
          description: "1st runner up in university programming contest",
          year: "2023",
        },
      ],
    },
  ];

  return (
    <section
      id="achievements"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4477CE] to-[#1A2A80]">
              Achievements
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Throughout my academic and professional journey, I've been dedicated
            to excellence and continuous learning.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1A2A80] to-[#4477CE] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={sectionIndex * 100}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                <div className="p-3 rounded-full bg-[#1A2A80]/20">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {section.category}
                </h3>
              </div>

              {/* Achievements List */}
              <div className="space-y-5">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 mt-2 rounded-full bg-[#4477CE]"></div>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {item.description}
                      </p>
                      <span className="text-xs text-[#4477CE] font-medium mt-2 inline-block">
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-gray-400 mb-6">Want to know more about my work?</p>
          <a href="../../../assets/Abdur Rahman CV.docx"
          download
          >
            <button className="cursor-pointer px-6 py-3 bg-gradient-to-r from-[#1A2A80] to-[#000B58] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
            Download Full CV
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
