import React from "react";
import { useState, useEffect } from "react";
import pd from "../../BootCamp/CoursesBootcamp/Image/pd.svg";
import wd from "../../BootCamp/CoursesBootcamp/Image/wd.svg";
import da from "../../BootCamp/CoursesBootcamp/Image/da.svg";
import mad from "../../BootCamp/CoursesBootcamp/Image/mad.svg";
import bed from "../../BootCamp/CoursesBootcamp/Image/bed.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CoursesBootcamp/Style/coursesBootcamp.css";

export const course = [
  {
    title: "Product Design",
    description: "User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when interacting with digital products and applications. In this course, we'll cover the theory and methodologies behind UI and UX design. You'll also design your own wireframes and interactive prototypes.",
    imageUrl: pd,
    link: "/register",
  },
  {
    title: "Web Development",
    description: "Front end web developers use technical and design skills to create a satisfying user experience accessible to everyone, employing essential technical skills in HTML, CSS, JavaScript, command-line editing, and browser developer tools; while creating a seamless operation of the web interface",
    imageUrl: wd,
    link: "/bootcamp",
  },
    {
      title: "Data Analysis",
      imageUrl: da,
      link:"/validate"
    },
    {
      title: "Mobile Application Development",
      imageUrl: mad,
    },
    {
      title: "Backend Developemnt",
      imageUrl: bed,
    },
];



  

const CoursesBootcamp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [clickedCourse, setClickedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setClickedCourse((prevCourse) => (prevCourse === course ? null : course));
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className="px-6 py-12 md:px-12 mt-24 mb-24">
      <div className="mx-14">
        <div className="flex justify-between gap-8 items-center">
          <h1 className="text-7xl w-1/2 font-medium flex flex-col gap-3">
            <p> Courses for </p>
            <p> the Bootcamp</p>
          </h1>
          <p
            className="w-1/2 text-base font-medium"
            style={{ color: "#2b2b2b" }}
          >
            Explore a diverse spectrum of cutting-edge skills and technologies
            across courses such as Web Development, Product Design, Back-End
            Development, and more in the upcoming TechProsNaija Bootcamp,
            fostering a comprehensive and transformative learning experience
          </p>
        </div>
        <div className="mt-20">
      <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={isMobile ? 1 : 3}
        slidesToScroll={isMobile ? 1 : 3}
      >
        {course.map((course, index) => (
          <div key={index} className="p-0">
            <div className="relative flex courses-card-house">
              <div
                className={`bg-cover bg-center rounded-lg courses-cards ${
                  course === clickedCourse ? "clicked" : ""
                }`}
                onClick={() => handleCourseClick(course)}
              >
                <div
                  className="w-full h-[100%] bg-cover tutors-image"
                  style={{ backgroundImage: `url(${course.imageUrl})` }}
                >
                  {course === clickedCourse && (
                    <div className="course-info h-[100%]">
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                      <a href={course.link} target="_blank" rel="noopener noreferrer">
                        Download Document
                      </a>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      </div>
    </div>
  );
};

export default CoursesBootcamp;
