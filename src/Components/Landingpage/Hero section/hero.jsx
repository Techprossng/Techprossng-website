import React from "react";
import HeroImage from "../../../assets/images/hero-image.svg";
import "aos";

const Hero = () => {
  return (
    <div className="px-6 py-12 md:px-12 text-center lg:text-left  mt-24">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
          <div
            className="mt-12 sm:flex md:flex flex-col justify-start 
             lg:mt-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1 className="text-5xl flex font-primary md:text-4xl font-primary xl:font-primary text-6xl font-semibold tracking-tight mb-12 text-[#001975] animate-text text-5xl">
              <br />
              TechProsNG
            </h1>
            <p className="text-xl text-justify text-black">
              We are Tech Education Company dedicated to empowering the next
              generation of tech innovators in Nigeria. Explore our cutting-edge
              courses, join a supportive tech community, and become confident in
              your tech skills. Together were driving progress in the digital
              era. Start your transformative journey with us now.
            </p>

            <button class="inline-flex hidden sm:hidden md:hidden lg:block items-center px-6 py-2 bg-transparent hover:bg-blue-900 text-red-500 font-semibold hover:text-white py-2 px-8 border border-red-700 hover:border-transparent rounded-full mt-5">
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
              className="w-full rounded-lg shadow-lg transition duration-500 ease-in-out bg-white-700 hover:bg-blue-900 transform hover:-translate-y-1 hover:scale-100 "
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
