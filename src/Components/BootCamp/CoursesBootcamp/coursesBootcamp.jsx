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
import "../../BootCamp/Tutors/Style/tutors.css";

export const course = [
  {
    title: "Product Design",
    image: pd,
  },
  {
    title: "Web Development",
    image: wd,
  },
  //   {
  //     title: "Data Analysis",
  //     image: da,
  //   },
  //   {
  //     title: "Mobile Application Development",
  //     image: mad,
  //   },
  //   {
  //     title: "Backend Developemnt",
  //     image: bed,
  //   },
];



  

const CoursesBootcamp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

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
        <div className="mt-8">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={isMobile ? 1 : 3}
            slidesToScroll={isMobile ? 1 : 3}
          >
          {course.map((item, index) => (
            <div key={index} className="flex">
              <div className="flex mt-12 gap-8 justify-between">
              <div className="rounded-2xl">
                <img src={item.image} alt="course" />
                {/* <p>{item.title}</p> */}
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
