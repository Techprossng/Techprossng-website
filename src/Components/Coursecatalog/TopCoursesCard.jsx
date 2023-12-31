import React from 'react';
import CardImage from "../../assets/images/catalog-img/topcourses.png";
import { MdStar, MdBookmarks } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TopCoursesCard = (props) => {
  return (
    <div className="w-full mb-8 sm:mb-14">
      <div className=" bg-white rounded-md shadow-md">
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
          <button className="inline-flex items-center px-2 py-2 sm:mr-2 sm:mb-0 mb-2 text-blue-900 hover:bg-blue-900 hover:text-white ring-2 ring-blue-700 text-sm px-7 py-2 font-semibold rounded-md">
            <MdBookmarks />
            <span className="text-[12px] font-secondary font-semibold">
              Add To List
            </span>
          </button>
          <button className="inline-flex items-center px-2 py-2 sm:ml-2 sm:mb-0 mb-2 bg-red-500 text-white hover:bg-blue-900 hover:text-white ring-2 text-lg font-semibold px-7 py-2 rounded-md">
            <a href="/coming-soon">
              <span className="text-[12px] font-secondary font-semibold">
                View Course
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

TopCoursesCard.propTypes = {
  head: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const CourseForyou = () => {
  const topCoursesData = [
    {
      src: CardImage,
      head: "UI/UX Design",
      text: "Design user interface that looks great and also provide seamless and intuitive experiences for users.",
    },
    {
      src: CardImage,
      head: "Front-End Development",
      text: "Craft engaging user interfaces with HTML, CSS, and JavaScript for seamless web experiences..",
    },
    {
      src: CardImage,
      head: "Back-End Development",
      text: "Build robust server-side applications and databases to power dynamic and scalable websites..",
    },
  ];

  return (
    <section>
      <div className="mx-6 md:mx-16 lg:mx-16 font-secondary text-2xl sm: mb-8">
        <h4 className="font-primary font-normal text-3xl">Top Courses</h4>
      </div>

      <div className="mx-6 md:mx-16 lg:mx-16 mb-8 sm:mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topCoursesData.map((course, index) => (
            <TopCoursesCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CourseForyou;
