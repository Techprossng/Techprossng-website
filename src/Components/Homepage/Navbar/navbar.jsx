// src/components/Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";
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
import Logo from "../../../assets/images/logo2.png";
import close from "../../../assets/icons/next.png";
import Menu from "../../../assets/icons/menu.svg";
import { GoSignOut } from "react-icons/go";
import "../../Homepage/Navbar/Styles/navbar.css";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/course-catalogue" },
    { name: "Mentorship", link: "/coming-soon" },
    { name: "Resources", link: "/resource-page" },
    { name: "Pricing", link: "/coming-soon" },
    { name: "About Us", link: "/about-us" },
  ];
  let Links2 = [
    { name: "Search", link: "/search" },
    { name: "Home", link: "/" },
    { name: "Catalog", link: "/catalog" },
    { name: "Library", link: "/library" },
    { name: "Community", link: "/coming-soon" },
    { name: "Mentors", link: "/coming-soon" },
    { name: "Profile", link: "/coming-soon" },
    { name: "Settings", link: "/coming-soon" },
    { name: "Logout", link: "/coming-soon" },
  ];

  let [open, setOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("Home"); // Set the default active link

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav
      className="bg-white p-4 flex fixed top-0 left-0 bg-cover py-0 md:px-20 px-7 bg-center w-full justify-between custom-height items-center shadow"
      style={{ zIndex: 2 }}
    >
      <div className="flex items-center logo-container">
      <Link to="/">
        <img src={Logo} alt="Logo" className="custom-image-large"  style={{width:"200px", height:"200px"}}/>
      </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="text-3xl absolute right-8 top-6 cursor-pointer menu-container md:hidden">
        {!open && (
          <img
          src={Menu}
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
        style={{ borderRadius: "8px", maxHeight: "100vh", overflowY: "scroll" }}
      >
        <div className="text-3xl relative pl-7 mt-10 right-0 top-0 cursor-pointer menu-container">
          {open && (
            <img
              src={close}
              alt="Close-Menu"
              className="menu-back"
              onClick={() => setOpen(false)}
            />
          )}
        </div>

        <div className="flex flex-col  custom-space-y   mt-20">
          {Links2.map((link) => (
            <Link
              key={link.name}
              to={link.link} 
              className={`text-blue-900 flex duration-500  p-8  ${
                activeLink === link.name ? "active-link" : ""
              } ${link.name.toLowerCase().replace(/\s/g, "-")}`}
              style={{
                fontSize: "19px",
                fontWeight: "700",
                border: "1px solid rgba(204, 209, 227, 1)",
              }}
              onClick={() => {
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
            </Link>
          ))}
        </div>
      </div>

      {/* Tablet and Desktop Menu */}
      <div className="hidden  md:flex  custom-space-x  desktop">
        {Links.map((link, index) => (
          <Link 
            key={index}
            href={`/${link.link}`}
            to={link.link} 
            className={`text-gray-800 duration-500 custom-font ${
              activeLink === link.name ? "active-link" : ""
            }`}
            onClick={() => {
              handleLinkClick(link.name);
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex space-x-4 desktop-button">
        {/*<button className="w-32 h-[44px] px-3 py-3 button-2">Log in</button>
        <button className="w-32 h-[48px] px-5 py-3 rounded-md text-white button-1">
          Sign Up
          </button>*/}
          <button className="w-35 h-[48px] px-5 py-3 rounded-md text-white button-1">
          <Link to="/contact-us">Contact Us</Link>
        </button>  
      </div>
    </nav>
  );
};

export default Navbar;
