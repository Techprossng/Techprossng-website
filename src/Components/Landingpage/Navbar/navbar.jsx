// src/components/Navbar.js
import { useState } from "react";
import "../../Landingpage/Navbar/Styles/navbar.css";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/" },
    { name: "Mentorship", link: "/" },
    { name: "Resources", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Library", link: "/" },
    { name: "About Us", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav
      className="bg-white p-4 flex fixed top-0 left-0 bg-cover py-0 md:px-10 px-7 bg-center w-full justify-between md:justify-around custom-height items-center shadow"
      style={{ zIndex: 2 }}
    >
      <div className="flex items-center">
        <img
          src="../../src/assets/images/Logo.svg"
          alt="Logo"
          className="custom-image-small"
        />
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
      >
        <img
          src={open ? "src/assets/icons/menu.png" : "src/assets/icons/menu.png"}
          alt={open ? "Close Menu" : "Open Menu"}
          className="menu"
        />
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden
        md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 pt-10 transition-all duration-500 ease-in ${
          open ? "top-20 " : "top-[-490px]"
        }`}
      >
        <div className="flex flex-col space-y-5 ">
          {Links.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="text-gray-800 hover:text-gray-400 duration-500 custom-font"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex space-x-4 mt-5">
          <button className="w-32 h-[44px] px-3 py-3 font-[Work Sans] button-2">
            Login
          </button>
          <button className="w-32 h-[44px] px-3 py-3 text-white button-1">
            Signup
          </button>
        </div>
      </div>

      {/* Tablet and Desktop Menu */}
      <div className="hidden md:flex custom-space-x">
        {Links.map((link) => (
          <a
            href={link.link}
            key={link.name}
            className="text-gray-800 hover:text-gray-400 duration-500 custom-font"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="hidden md:flex space-x-4">
        <button className="w-32 h-[44px] px-3 py-3 font-[Work Sans] button-2">
          Login
        </button>
        <button className="w-32 h-[44px] px-3 py-3 text-white button-1">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
