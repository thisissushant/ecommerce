import React, { useState } from "react";

export default function Trendy() {
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsActive(false);
  };
  return (
    <>
      <div>
        <nav className="bg-black p-4 font-Primary">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-green-400 hover:text-red-500 font-extrabold text-6xl ">
              Trendy
            </div>
            <div className="hidden md:flex space-x-4">
              <a
                href="/#"
                className={`text-green-400 hover:text-green-100 ${
                  activeLink === "home" ? "border-b-2 border-white" : ""
                }`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
              <a
                href="/#"
                className={`text-green-400 hover:text-green-100 ${
                  activeLink === "about" ? "border-b-2 border-white" : ""
                }`}
                onClick={() => handleLinkClick("about")}
              >
                About
              </a>
              <div className="group relative">
                <a
                  href="/#"
                  className={`text-green-400 hover:text-green-100 ${
                    activeLink === "services" ? "border-b-2 border-white" : ""
                  }`}
                  onClick={() => handleLinkClick("services")}
                >
                  Services
                </a>
                <div
                  className={`absolute hidden mt-2 space-y-2 bg-gray-800 text-green-400 hover:text-green-100 ${
                    isActive ? "block" : ""
                  }`}
                >
                  <a href="/#" className="block px-4 py-2">
                    Service 1
                  </a>
                  <a href="/#" className="block px-4 py-2">
                    Service 2
                  </a>
                  <a href="/#" className="block px-4 py-2">
                    Service 3
                  </a>
                </div>
              </div>
              <a
                href="/#"
                className={`text-green-400 hover:text-green-100 ${
                  activeLink === "contact" ? "border-b-2 border-white" : ""
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </a>
            </div>
            <button
              className="md:hidden text-green-400 hover:text-green-100 focus:outline-none"
              onClick={() => setIsActive(!isActive)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
