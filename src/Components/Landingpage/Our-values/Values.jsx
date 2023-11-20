import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import "./styles/style.css";
// import backgroundimage from "../../../assets/images/values/background.svg";
import aos from "aos";

const ValueItem = ({ title, icon, }) => {
  return (
    <div
    className="bg-image mx-6 md:mx-20   mt-6  flex flex-col  rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0 border py-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-300 button-container"
    data-aos="fade-up"
  >
    <button className="flex items-center justify-center px-6 text-black hover:text-black">
      {icon}
      <span className="text-center  font-bold">{title}</span>
    </button>
  </div>
  );
};

ValueItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

const Values = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const valuesData = [
    {
      title: "Customer Centricity",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      ),
      description: "Description for Customer Centricity.",
    },
    {
      title: "Innovation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      ),
      description: "Description for Customer Centricity.",
    },
    {
      title: "Quality and Reliability",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      ),
      description: "Description for Customer Centricity.",
    },
    {
      title: "Sustainability",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      ),
      description: "Description for Customer Centricity.",
    },
    {
      title: "Diversity and Inclusion",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      ),
      description: "Description for Customer Centricity.",
    },
    {
      title: "Responsibility",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      ),
      description: "Description for Customer Centricity.",
    },
   
  ];

  return (
    <section className="values mt-8 sm:mt-20 my-20">
    <div className="items-center">
  <h4 className="text-center font-secondary text-[32px] font-bold  sm:text-3xl md:text-4xl lg:text-[32px] xl:text-4xl md:mb-6 lg:mb-12 ">
    Our Values
    <p className="relative bottom-[-5px] ml-[33%] md:ml-[38%] sm:ml-[40%] lg:ml-[44%] w-[83px] h-[6px] color rounded-[12px] value-line mx-auto"></p>
  </h4>
</div>


    <div className="mt-6 sm:mt-12 md:mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-5 mx-4  sm:mx-20">
        {valuesData.map((value, index) => (
          <ValueItem key={index} {...value} />
        ))}
      </div>
    </div>
  </section>
  );
};

export default Values;
