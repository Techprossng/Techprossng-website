import React from "react";
import CardImage from "../../assets/images/catalog-img/allcourses.png";
import { MdStar, MdBookmarks } from "react-icons/md";
import PropTypes from "prop-types";

const AllCoursesCard = (props) => {
  return (
    <article className="w-full mb-8 sm:mb-14">
      <div className="bg-white rounded-md shadow-md">
        <div
          className="h-[200px] sm:h-[300px] bg-cover bg-center bg-no-repeat mb-4 rounded-2xl"
          style={{ backgroundImage: `url(${props.src})` }}
        ></div>
        <h5 className="text-2xl m-3 font-primay font-bold tracking-tight text-blue-900">
          {props.head}
        </h5>
        <p className="font-secondary font-medium text-sm m-3 text-gray-700 mt-2">
          {props.text}
        </p>
        <div className="mt-4 m-3 flex items-center">
          {[...Array(5)].map((_, i) => (
            <span className="mr-2 text-yellow-400" key={i}>
              <MdStar color="orange" />
            </span>
          ))}
          <span className="text-black-900">(5.0 / 3)</span>
        </div>
        <div className="flex gap-2 pb-5 sm:flex-row mt-4 justify-around">
          <button className="inline-flex items-center sm:mr-2 sm:mb-0 mb-2 text-blue-900 hover:bg-blue-900 hover:text-white ring-2 ring-blue-700 text-sm px-7 py-2 font-semibold rounded-md">
            <MdBookmarks />
            <span className="text-[12px] font-secondary font-semibold">
              Add To List
            </span>
          </button>
          <button className="inline-flex items-center sm:ml-2 sm:mb-0 mb-2 bg-red-500 text-white hover:bg-blue-900 hover:text-white ring-2 text-lg font-semibold px-7 py-2 rounded-md">
            <a href="/coming-soon">
              <span className="text-[12px] font-secondary font-semibold">
                View Course
              </span>
            </a>
          </button>
        </div>
      </div>
    </article>
  );
};

AllCoursesCard.propTypes = {
  head: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const CourseForYou = () => {
  const allCoursesData = [
    {
      src: CardImage,
      head: "Data Analysis",
      text: "Extract insights from data to drive informed decision-making and business strategies",
    },
    {
      src: CardImage,
      head: "Cyber Security",
      text: "Safeguard digital assets with expertise in cybersecurity measures and threat prevention",
    },
    {
      src: CardImage,
      head: "Creative Writing",
      text: "Create compelling and impactful content for effective communication and engagement.",
    },
   
   
  ];

  return (
    <section>
      <div className="mx-6 md:mx-16 lg:mx-16 font-sans text-2xl sm: mb-8">
        <h4 className="font-primary font-normal text-3xl">All Courses</h4>
      </div>

      <div className="mx-6 md:mx-16 lg:mx-16 mb-8 sm:mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allCoursesData.map((course, index) => (
            <AllCoursesCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseForYou;
