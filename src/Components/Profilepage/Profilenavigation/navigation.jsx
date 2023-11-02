import React from "react";
import { useState } from "react";

const Navigation = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/courses" },
    { name: "Library", link: "/library" },
    { name: "Community", link: "/community" },
    { name: "Mentors", link: "/mentorship" },
  ];

  let [open, setOpen] = useState(false);


  return (
    <nav
      className="bg-white p-4 flex fixed top-0 left-0 bg-cover py-0 md:px-10 px-7 bg-center w-full justify-around md:justify-around custom-height items-center"
      style={{ zIndex: 2 }}
    >
      <div className="flex items-center">
        <img
          src="../../src/assets/images/Logo.svg"
          alt="Logo"
          className="custom-image-large"
        />
        <img
          src="../../src/assets/images/Logo2.svg"
          alt="Logo"
          className="custom-image-small md:hidden"
        />
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
      >
        <img
          src={
            open ? "src/assets/icons/close.svg" : "src/assets/icons/menu.svg"
          }
          alt={open ? "Close Menu" : "Open Menu"}
          className="menu"
        />
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden 
  md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-0 pt-10 transition-all duration-500 ease-in menu-color ${
    open ? "top-24 " : "top-[-690px]"
  }`}
        style={{ textAlign: "center", alignItems: "center" }}
      >
        <div className="flex flex-col space-y-10">
          {Links.map((link) => (
            <a
              key={link.name}
              href={`/${link.link}`}
              className={`text-gray-800  duration-500`}
              style={{ fontSize: "20px", fontWeight: "500" }}>
              {link.name}
            </a>
          ))}
        </div>
        <div className=" flex flex-wrap space-y-4 pr-5 pl-5 mt-10 ">
          <button className="w-full h-[48px] px-5 py-3 rounded-md  button-2-small">
            Log in
          </button>
          <button className="w-full h-[48px] px-5 py-3 rounded-md  text-white button-1">
            Signup
          </button>
        </div>
      </div>

      {/* Tablet and Desktop Menu */}
      <div className="hidden md:flex custom-space-x">
        {Links.map((link) => (
          <a
            href={`/${link.link}`}
            key={link.name}
            className={`text-gray-800  duration-500 custom-font`}>
            {link.name}
          </a>
        ))}
      </div>
      <div className="hidden md:flex justify-between items-center gap-8">
        <div>
            <img src="../../src/assets/icons/Search.svg" alt="search-icon" />
        </div>
        <div className="flex items-center gap-1">
            <img src="../../src/assets/images/person-icon.png" alt="profile-picture" />
            <span>Hi, Mike</span>
            <img src="../../src/assets/icons/down-button.svg" alt="down-button" />
          </div>
        </div>
    </nav>
  );
};

export default Navigation;
