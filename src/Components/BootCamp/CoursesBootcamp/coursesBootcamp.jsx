import React from "react";
import pd from "../../BootCamp/CoursesBootcamp/Image/pd.svg";
import wd from "../../BootCamp/CoursesBootcamp/Image/wd.svg";
import da from "../../BootCamp/CoursesBootcamp/Image/da.svg";
import mad from "../../BootCamp/CoursesBootcamp/Image/mad.svg";
import bed from "../../BootCamp/CoursesBootcamp/Image/bed.svg";

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
        <div className="flex mt-12 gap-8 justify-between">
          {course.map((item, index) => (
            <div key={index}>
              <div className="rounded-2xl">
                <img src={item.image} alt="course" />
                {/* <p>{item.title}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesBootcamp;
