import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleLinkClick = (link) => {};
  return (
    <>
      <div>
        <nav className="bg-slate-950 p-4 font-Primary border-solid border-2 border-green-100">
          <div className="container mx-auto flex justify-between items-center">
            <div className="  grid grid-cols-1  place-content-center text-2xl ml-10">
              <a
                href="/#"
                className="text-green-400 hover:text-green-100   "
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
              <a
                href="/#"
                className="text-green-400 hover:text-green-100 "
                onClick={() => handleLinkClick("about")}
              >
                Shop
              </a>
              <a
                href="/#"
                className="text-green-400 hover:text-green-100 "
                onClick={() => handleLinkClick("services")}
              >
                Replacement
              </a>
              <a
                href="/#"
                className="text-green-400 hover:text-green-100  "
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </a>
            </div>
            <div className="text-green-400 hover:text-red-500 font-extrabold text-4xl md:text-6xl ">
              Trendy
            </div>
          </div>
          <div className="grid  place-content-center">
            <p className="text-green-400 text-sm font-Secondary">
              {" "}
              &copy;2021 THE TRENDY
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Footer;
