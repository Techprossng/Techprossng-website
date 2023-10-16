import { useState } from "react";
import "../Navbar/Styles/navbar.css";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/" },
    { name: "Mentorship", link: "/" },
    { name: "Resources", link: "/" },
    { name: "About", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md bg-cover  bg-center w-full fixed top-0 left-0">
      <div className="md:flex items-center  bg-white py-0 md:px-10 px-7 custom-height custom-gap shadow">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center  
        text-gray-800"
        >
          <span className=" mr-1 pt-2 custom-image-small">
            <img src="src/assets/images/Logo.svg"></img>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <img
            name={open ? "close" : "menu"}
            src="src/assets/icons/menu.png"
            className="menu"
          ></img>
        </div>

        <ul
          className={`md:flex md:items-center links-gap md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 custom-size md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 custom-font "
              >
                {link.name}
              </a>
            </li>
          ))}

          <div className="font-bold  cursor-pointer flex items-center ">
            <span className="mr-1 pt-0 custom-position custom-position-small">
              <img src="src/assets/icons/Search.svg"></img>
            </span>
          </div>

          <div className="md:flex md:items-center ml-80 button-gap custom-button-position">
            <button className="w-32 h-[44px] px-3 py-3  font-[Work Sans] button-2">
              Login
            </button>
            <button className="w-32 h-[44px] px-3 py-3  text-white button-1">
              Signup
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
