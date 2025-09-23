import React from "react";
import Button from "../Button/Button";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const nav = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Projects", href: "/projects" },
  { id: 4, name: "Services", href: "/services" },
  { id: 5, name: "Contacts", href: "/contacts" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
          <span className="text-xl font-bold text-white">Abdur</span>
        </div>

        {/* Navbar */}

        <nav>
          <ul className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className="text-white text-lg font-medium relative group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Button */}
        <div className="hidden md:block">
          <Button
            className="text-white bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg px-5 py-2 text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            contant="Contact Us"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
