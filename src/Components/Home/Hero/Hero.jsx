import { TypeAnimation } from "react-type-animation";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";
import Button from "../Button/Button";
import hero from "../../../assets/hero.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row md:items-start items-center justify-between gap-12 md:gap-8 lg:gap-56 relative z-10 sm:mt-10 mt-2">
        
        {/* Left Content */}
        <div className="max-w-2xl space-y-6 text-center md:text-left ">
          <div> 
            <h2 data-aos="fade-right" data-aos-duration="1000" className="text-[#4477CE] font-medium tracking-wider text-lg md:text-xl mb-2">
              Hi, I am
            </h2>
            <h1 data-aos="fade-right" data-aos-duration="1000" className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
              ABDUR RAHMAN
            </h1>
          </div>

          {/* TypeAnimation with fixed container to prevent layout shift */}
          <div data-aos="fade-right" data-aos-duration="1000"  className="h-16 md:h-20 flex items-center">
            <h2 className="text-2xl text-left  sm:text-center md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1A2A80] to-[#4477CE]">
              <TypeAnimation
                sequence={["FrontEnd Web Developer", 2000, "React JS Developer", 2000]}
                speed={10}
                repeat={Infinity}
                cursor={true}
              />
            </h2>
          </div>

          {/* Social icons */}
          <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-center md:justify-start items-center gap-5">
            {[FaFacebook, FaInstagram, FaGithub, FaLinkedin].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="group transition-all duration-300 hover:-translate-y-1"
                aria-label={`Social media link ${i+1}`}
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-[#1A2A80] to-[#000B58] group-hover:shadow-lg group-hover:shadow-blue-500/40">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              className="text-white bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg px-6 py-3 font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              contant="Hire Me"
            />
            <Button
              className="text-white border border-gray-400 rounded-lg px-6 py-3 font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              contant="Download CV"
            />
          </div>

          {/* Stats */}
          {/* <div
            className="max-w-lg mx-auto md:mx-0 w-full p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: FaBriefcase, num: "2+", label: "Years Experience" },
                { icon: FaProjectDiagram, num: "24+", label: "Projects Completed" },
                { icon: FaUsers, num: "18+", label: "Happy Clients" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center">
                    <div className="p-2 rounded-full bg-[#1A2A80]/20">
                      <stat.icon className="w-5 h-5 text-[#4477CE]" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-white mt-2">{stat.num}</h2>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Right Side - Image */}
        <div className="relative flex-shrink-0" data-aos="fade-left" data-aos-duration="1000">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 p-1 rounded-full bg-gradient-to-r from-[#1A2A80] to-[#4477CE] relative">
            <div className="relative rounded-full bg-gradient-to-b from-gray-800 to-gray-900 p-1 h-full">
              <img
                src={hero}
                alt="Abdur Rahman"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;