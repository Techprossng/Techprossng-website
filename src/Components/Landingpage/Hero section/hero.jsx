import HeroImage from "../../../assets/images/hero-image.svg";
import Vector from "../../../assets/images/Vector.svg";
import "../../Landingpage/Hero Section/Styles/hero.css";
import "aos";

const Hero = () => {
  return (
    <div className="px-6 py-12 md:px-12 text-center lg:text-left  mt-24 hero-background"
    >
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
          <div
            className="mt-12 sm:flex md:flex flex-col justify-start 
             lg:mt-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img  src={Vector} className="Vector-img"/>
            <h1 className=" text-5xl md:text-6xl lg:text-5xl xl:text-7xl flex font-primary font-primary xl:font-primary  font-bold tracking-tight mb-12 text-[#001975] animate-text "
             style={{
           
            fontWeight:"900px"
          
            }}>
              <br />
              TechProsNG
            </h1>
            <p className="text-xl text-justify text-black">
              We are Tech Education Company dedicated to empowering the next
              generation of tech innovators in Nigeria. Explore our cutting-edge
              courses, join a supportive tech community, and become confident in
              your tech skills. Together we are driving progress in the digital
              era. Start your transformative journey with us now.
            </p>

            <button className="flex hidden sm:hidden md:hidden lg:flex justify-between items-center px-10 py-5 bg-transparent hover:bg-blue-900 text-red-500 font-semibold border-2 border-red-500 transition duration-300 hover:border-blue-900 hover:text-white  mt-5"
            style={{
              width: "220px",
              borderRadius: "20px",
              fontSize: "14px",
          
            }}>
          
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
            <button className="rounded-[20px] bg-[#FE0000] outline-none text-white p-[18px_24px]  flex justify-center items-center w-full">
              <p className="w-[129px]">See Courses</p>
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
