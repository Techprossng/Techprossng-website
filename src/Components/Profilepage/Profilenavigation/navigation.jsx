import React from "react";
import { useState } from "react";
import {
  BiHome,
  BiGroup,
  BiImages,
  BiLibrary,
  BiFace,
  BiUser,
  BiSearch,
} from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";

const Navigation = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/courses" },
    { name: "Library", link: "/library" },
    { name: "Community", link: "/community" },
    { name: "Mentors", link: "/mentorship" },
  ];

  let Links2 = [
    { name: "Search", link: "/search" },
    { name: "Home", link: "/" },
    { name: "Catalog", link: "/catalog" },
    { name: "Library", link: "/library" },
    { name: "Community", link: "/community" },
    { name: "Mentors", link: "/mentors" },
    { name: "Profile", link: "/profile" },
    { name: "Settings", link: "/settings" },
    { name: "Logout", link: "/logout" },
  ];
 
  let [open, setOpen] = useState(false);
   
  const [activeLink, setActiveLink] = useState("Home"); // Set the default active link

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };


  return (
    <nav
      className="bg-white p-4 flex fixed top-0 left-0 bg-cover py-0 md:px-10 px-7 bg-center w-full flex justify-between custom-height items-center"
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
      <div className="text-3xl absolute right-8 top-6 cursor-pointer menu-container md:hidden">
        {!open && (
          <img
            src="src/assets/icons/menu.svg"
            alt="Open-Menu"
            className="menu"
            onClick={() => setOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden md:pb-0 pb-12  absolute md:static md:z-auto right-0 w-full h-screen md:w-auto md:pl-0 pl-0 pt-10 transition-all duration-500 ease-in menu-color mobile-menu ${
          open ? "top-0 translate-x-0" : "top-0 translate-x-full"
        }`}
        style={{ borderRadius: "8px", maxHeight: "100vh", overflowY: "scroll"  }}
      >
        <div className="text-3xl relative pl-7 mt-10 right-0 top-0 cursor-pointer menu-container">
          {open && (
            <img
              src="src/assets/icons/next.png"
              alt="Close-Menu"
              className="menu-back"
              onClick={() => setOpen(false)}
            />
          )}
        </div>

        <div className="flex flex-col  custom-space-y   mt-20">
          {Links2.map((link) => (
            <a
              key={link.name}
              href={`/${link.link}`}
              className={`text-blue-900 flex duration-500  p-8  ${
                activeLink === link.name ? "active-link" : ""
              } ${link.name.toLowerCase().replace(/\s/g, "-")}`}
              style={{
                fontSize: "19px",
                fontWeight: "700",
                border: "1px solid rgba(204, 209, 227, 1)",
                
              }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.name);
              }}
            >
              {link.name === "Search" && (
                <BiSearch size={25} className="mr-5 p-0" />
              )}
              {link.name === "Home" && (
                <BiHome size={25} className="mr-5 p-0" />
              )}
              {link.name === "Catalog" && (
                <BiImages size={25} className="mr-5 p-0" />
              )}
              {link.name === "Library" && (
                <BiLibrary size={25} className="mr-5 p-0" />
              )}
              {link.name === "Community" && (
                <BiGroup size={25} className="mr-5 p-0" />
              )}
              {link.name === "Mentors" && (
                <BiFace size={25} className="mr-5 p-0" />
              )}
              {link.name === "Profile" && (
                <BiUser size={25} className="mr-5 p-0" />
              )}
              {link.name === "Settings" && (
                <AiOutlineSetting size={25} className="mr-5 p-0" />
              )}
              {link.name === "Logout" && (
                <GoSignOut size={25} className="mr-5 p-0" />
              )}
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Tablet and Desktop Menu */}
      <div className="hidden lg:flex custom-space-x">
        {Links.map((link) => (
          <a
            href={`/${link.link}`}
            key={link.name}
            className={`text-gray-800  duration-500 custom-font`}>
            {link.name}
          </a>
        ))}
      </div>
      <div className="hidden md: justify-between items-center gap-8 lg:flex">
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
