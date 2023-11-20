import HeroImage from "../../../assets/images/hero-image.svg";
import Vector from "../../../assets/images/Vector.svg";
import { Link } from "react-router-dom";
import "../../Landingpage/Hero Section/Styles/hero.css";
import "aos";

const Hero = () => {
  return (
    <div className="px-6 py-12 md:px-12 text-center lg:text-left  mt-24 hero-background">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
          <div
            className="mt-12 sm:flex md:flex flex-col justify-start 
             lg:mt-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p className="text-[#001975] font-bold font-primary mini-logo">TechProsNaija</p>
            <img src={Vector} className="Vector-img" />
            <h1
              className=" text-4xl   md:text-6xl lg:text-5xl xl:text-6xl font-primary xl:font-primary  font-bold tracking-tight mb-5  animate-text landing-hero "
              style={{
                fontWeight: "900px",
                lineHeight: "70px",
              }}
            >
              <span className="text-[#001975]">Unleash</span> Your Potential Through Tech Mastery
            </h1>
            <p className="text-xl text-justify text-black font-primary">
              Start your tech journey with us and upskill with expert mentorship
            </p>

            <button
              className="flex  lg:flex justify-between items-center px-10 py-5 bg-transparent hover:bg-blue-900 font-semibold border-2 border-red-500 transition duration-300 hover:border-blue-900 hover:text-white-500  mt-5"
              style={{
                width: "220px",
                borderRadius: "20px",
                fontSize: "14px",
              }}
            >
              <Link to="/course-catalogue" 
              className="flex text-red-500 hover:text-white font-seconday font-semibold "
            
              >
                <span>See Courses</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6 ml-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </button>
          </div>
          <div
            className="mb-12 lg:mb-0"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img
              src={HeroImage}
              className="w-full rounded-lg  transition duration-500 ease-in-out bg-white-700 transform hover:-translate-y-1 hover:scale-100 "
              alt=""
            />
          </div>
          <div className="block  md:block w-full lg:hidden">
            <button className="rounded-[20px] bg-[#FE0000] hidden font-seconday font-semibold sm:hidden md:hidden outline-none text-white p-[18px_24px]  flex justify-center items-center w-full">
              <Link to="/course-catalogue" className="w-[129px]">
                See Courses
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M10.6727 7.65869H2.66602V8.99202H10.6727V10.992L13.3327 8.32536L10.6727 5.65869V7.65869Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
