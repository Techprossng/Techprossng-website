import React from "react";
import "./Styles/topCourses.css";
import clock from "../../../assets/clock.png";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import avatar from "../../../assets/avatar.png";
import { BsBookmark } from "react-icons/bs";
import StarIcons from "../../../assets/icons/star.png";

export const courses = [
  {
    img: img1,
    career: "FullStack Development",
    content:
      "Full stack development refers to the end-to-end application software development, including the front end and back end. The front end consists of the user interface, and the back end takes care of the business logic and application workflows.",
    starRating: 5.0,
    starPublish: "(3) ",

    clock: clock,
    duration: "45 hours",
    avi: avatar,
    username: "Jane",
    addToList: "Add to list",
    viewCourse: "View Course",
  },
  {
    img: img2,
    career: "Digital Marketing & SEO",
    content:
      "Digital marketing is the promotion of brands to connect with potential customers using the internet and other forms of digital communication: email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.",
    starRating: 5.0,
    starPublish: "(3) ",

    clock: clock,
    duration: "45 hours",
    avi: avatar,
    username: "Jane",
    addToList: "Add to list",
    viewCourse: "View Course",
  },
  {
    img: img3,
    career: "Product Management",
    content:
      "Product management is an organizational function that guides every step of a product's lifecycle — starting from it's development to it's positioning and pricing — by focusing on the product and its customers first and foremost.",
    starRating: 5.0,
    starPublish: "(3) ",

    clock: clock,
    duration: "45 hours",
    avi: avatar,
    username: "Jane",
    addToList: "Add to list",
    viewCourse: "View Course",
  },
];

const Topcourses = () => {
  return (
    <div className="mx-0 px-6 mt-8 mb-11 sm:mx-8 lg:mx-16">
      <div className="head-box">
        <h2 className="headerText text-2xl font-bold font-primary">
          Top Courses For You
        </h2>
      </div>
      <div className="mt-8 w-full flex gap-3 flex-wrap justify-between">
        {courses.map((item, index) => (
          <div
            key={index}
            className="h-fit w-[30%] rounded-lg p-2 border border-opacity-20 each-card"
          >
            <div>
              <img src={item.img} alt="image" className="w-full" />
            </div>
            <div className="mt-8 w-full flex flex-col gap-4">
              <p className="text-[#2B3F8C] font-bold text-base font-primary">
                {item.career}
              </p>
              <p className=" text-[#656565] font-medium text-xs">
                {item.content}
              </p>
              <div>
                <div className="flex gap-1 justify-between">
                  <div className="flex gap-1 justify-center items-center">
                    <div className="flex gap-1">
                      <img
                        src={StarIcons}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={StarIcons}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={StarIcons}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={StarIcons}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={StarIcons}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <div
                      style={{ color: "#fe0000" }}
                      className="text-[11px] font-bold"
                    >
                      {item.starRating}
                    </div>
                    <div
                      style={{ color: "#272727" }}
                      className="text-[11px] font-bold"
                    >
                      {item.starPublish}
                    </div>
                  </div>
                  <div className="flex gap-1 justify-center items-center">
                    <img src={item.clock} alt="clock" className="w-3 h-3" />
                    <div
                      style={{ color: "#272727" }}
                      className="text-[11px] font-bold"
                    >
                      {item.duration}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <div className="flex gap-1 justify-between items-center pt-2 ">
                  <div className="flex gap-1">
                    <img src={avatar} alt="avatar" className="w-4 h-4" />
                    <p className="text-xs font-bold text-[#2B3F8C] font-primary">
                      {item.username}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <div className="flex gap-1">
                      <img
                        src={StarIcons}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={StarIcons}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={StarIcons}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={StarIcons}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                      <img
                        src={StarIcons}
                        alt="star-icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <div
                      style={{ color: "#fe0000" }}
                      className="text-[11px] font-bold font-secondary"
                    >
                      {item.starRating}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <button
                  style={{ border: "1px solid #0F1B63" }}
                  className="text-xs text-[#0F1B63] font-medium rounded-lg p-3 w-[40%] flex gap-3 justify-center items-center"
                >
                  <BsBookmark />
                  {item.addToList}
                </button>
                <button
                  style={{ border: "1px solid #0F1B63" }}
                  className="text-xs rounded-lg bg-[#0F1B63] font-medium text-white p-3 w-40 font-primary"
                >
                  <a href="/coming-soon">{item.viewCourse}</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topcourses;
