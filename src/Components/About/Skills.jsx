import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { TiHtml5 } from "react-icons/ti";
import { TbFileTypeCss } from "react-icons/tb";
import { FaSquareJs, FaBootstrap, FaReact, FaGithub,FaGithubAlt,FaFigma } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp, SiMysql } from "react-icons/si";

function Skills() {
  const tools = [
    {
      icon: <TiHtml5 className="text-7xl text-orange-500" />,
      name: "HTML",
    },
    {
      icon: <TbFileTypeCss className="text-7xl text-blue-500" />,
      name: "CSS",
    },
    {
      icon: <FaBootstrap className="text-7xl text-purple-600" />,
      name: "Bootstrap",
    },
    {
      icon: <RiTailwindCssFill className="text-7xl text-cyan-400" />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaSquareJs className="text-7xl text-yellow-400" />,
      name: "JavaScript",
    },
    {
      icon: <FaReact className="text-7xl text-cyan-500" />,
      name: "React",
    },
    {
      icon: <SiPhp className="text-7xl text-indigo-600" />,
      name: "PHP",
    },
    {
      icon: <SiMysql className="text-7xl text-blue-600" />,
      name: "MySQL",
    },
    {
        icon:<FaGithubAlt className="text-7xl text-blue-600" />,
        name:"Git"
    },
    {
      icon: <FaGithub className="text-7xl text-white" />,
      name: "GitHub",
    },
    {
      icon: <FaFigma className="text-7xl text-white" />,
      name: "Figma",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="px-10 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-lg mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 "
        >
          SKILL AND EXPERIENCE
        </h2>
        <p data-aos="fade-up" className="text-5xl text-white">
          Working With Latest Technology And Stacks
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-10 max-w-5xl mx-auto">
        {tools.map((tool, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-110 transition-transform"
          >
            {tool.icon}
            <h2 className="mt-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 font-bold text-center">
              {tool.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
