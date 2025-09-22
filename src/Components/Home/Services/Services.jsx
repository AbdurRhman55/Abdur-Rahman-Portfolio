import React from "react";
import Button from "../Button/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      {/* Services Buttons */}
      <div className="flex flex-wrap gap-5 justify-center py-10">
        {/* one */}
        <Button
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-white bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg px-5 py-2 text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
          contant="Frontend Development"
        />

        {/* two */}
        <Button
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-white bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg px-5 py-2 text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
          contant="Backend Development"
        />

        {/* three */}
        <Button
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg px-5 py-2 text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
          contant="Full-Stack Solutions"
        />

        {/* four */}
        <Button
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-white bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg px-5 py-2 text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
          contant="Database Design & Management"
        />

        {/* five */}
        <Button
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-white bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg px-5 py-2 text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
          contant="API Development & Integration"
        />

        {/* six */}
        <Button
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-white bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg px-5 py-2 text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
          contant="Custom Web Applications"
        />
      </div>
    </div>
  );
}

export default Services;
