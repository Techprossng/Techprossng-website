// src/components/Navbar.js
import { useState , useEffect } from "react";
import { Link , useLocation} from "react-router-dom";
import Logo from "../../../assets/images/logo2.png";
import close from "../../../assets/icons/close.svg";
import Menu from "../../../assets/icons/menu.svg";
import "../../Landingpage/Navbar/Styles/navbar.css";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/home" },
    { name: "About Us", link: "/about-us" },
    { name: "Courses", link: "/course-catalogue" },
    { name: "Pricing", link: "/coming" },
    { name: "Resources", link: "/resource-page" },
    { name: "Mentorship", link: "/coming-soon" },
    
  ];

 
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    // Get the current pathname and find the matching link
    const currentPath = location.pathname;
    const matchingLink = Links.find((link) => currentPath.startsWith(link.link));

    // Set the active link based on the matching link
    if (matchingLink) {
      setActiveLink(matchingLink.name);
    } else {
      // Set a default active link if no match is found
      setActiveLink("Home");
    }
  }, [location.pathname, Links]);


  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setOpen(false);
  };

  return (
    <nav className="bg-white p-4 flex fixed top-0 left-0 bg-cover py-0 md:px-20 px-7 bg-center w-full justify-between custom-height items-center shadow " style={{ zIndex: 2 }}>
      <div className="flex items-center logo-container">
        <a href="/">
          <img src={Logo} alt="Logo" className="custom-large" style={{ width: "200px", height: "200px" }} />
        </a>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer menu-container md:hidden"
      >
        <img src={open ? close : Menu} alt={open ? "Close Menu" : "Open Menu"} className="menu" />
      </div>

      <div className={`md:hidden md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full  md:w-auto md:pl-0 pl-0 pt-10 transition-all duration-500 ease-in nav-color mobile-menu ${open ? "top-24 " : "top-[-690px]"}`} style={{ textAlign: "center", alignItems: "center" }}>
        <div className="flex flex-col space-y-10">
          {Links.map((link) => (
            <a
             href={link.link}
             key={link.name} 
             className={`text-gray-800 duration-500 ${
                activeLink === link.name ? "active-nav" : ""
              }`}
              style={{ fontSize: "20px", fontWeight: "500" }}
              onClick={() => {
                handleLinkClick(link.name);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap space-y-4 pr-5 pl-5 mt-10">
         {/*<button className="w-full h-[48px] px-5 py-3 rounded-md button-2-small">Log in</button>
          <button className="w-full h-[48px] px-5 py-3 rounded-md text-white button-1">Sign Up</button> */} 
          <button className="w-full h-[48px] px-5 py-3 rounded-md button-1"> <Link to="/contact-us">Contact Us</Link></button>
        </div>
      </div>

      <div className="hidden md:flex custom-space-landing desktop">
        {Links.map((link) => (
          <a
            href={link.link}
            key={link.name}
            className={`text-gray-800 duration-500  custom-font-small ${
              activeLink === link.name ? "active-nav" : ""
            }`}
            onClick={() => {
              handleLinkClick(link.name);
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="hidden md:flex space-x-4 desktop-button">
        {/*<button className="w-32 h-[44px] px-3 py-3 button-2">
          <Link to="/sign-in">
            <span className="text-[#001975]">Log in</span>
          </Link>
        </button>
        <button className="w-32 h-[48px] px-5 py-3 rounded-md text-white button-1">
          <Link to="/sign-up">Sign Up</Link>
        </button> */}
        
        <button className="w-35 h-[48px] px-5 py-3 rounded-md text-white button-1">
          <a href="/contact-us">Contact Us</a>
        </button> 
      </div>
    </nav>
  );
};

export default Navbar;

