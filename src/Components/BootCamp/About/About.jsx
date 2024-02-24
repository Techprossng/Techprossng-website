import React from "react";
import { useState } from "react";
import "../About/Style/About.css";
import AboutOne from "../About/Image/about1.svg";
import AboutTwo from "../About/Image/about2.svg";

const AboutBootcamp = () => {
  const longText =
    " At Tech Career LaunchPad, we believe in the power of hands-on learning and immersive experiences. Our team of industry experts and seasoned educators has crafted a unique 2-week bootcamp designed to fast-track your journey into the tech world.Why Choose Us:Real-World Skills: Learn practical, in-demand skills that the tech industry craves.Efficient Learning: No time wasted, our intensive 2-week bootcamp ensures you gain maximum knowledge.Expert Instructors: Learn from experienced professionals passionate about sharing their insights.Community Support: Join a vibrant community of like-minded learners, fostering collaboration and growth.Courses We Offer:Frontend Mastery: Build a strong foundation in frontend development, mastering essential coding skills to create engaging user interfaces.Product Design for Beginners: Explore  the world of product design, learning the fundamentals to bring your creative ideas to life.Creative Content Writing: Explore the art of content writing, developing skills to craft compelling and impactful narratives across various platforms.Data Analysis: Discover the secrets hidden in data through hands-on exercises, gaining practical skills in data analysis.Product Management: Learn the core principles of product management, from ideation to execution, to drive successful product development.How It Works:Day-to-Day Structure: Engage in interactive sessions, projects, and collaborative challenges daily.Practical Application: Apply your skills to tangible projects, avoiding theoretical overload.Graduation & Beyond: Earn a certification and join a supportive alumni community.";
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };
  return (
    <div className=" w-full h-[100%] px-12 py-12  main-about-us ">
      <div className=" px-20 mt-10 flex gap-[2%] main-about-container ">
        <div className="w-[50%] flex md:space-x-[-40%] space-x-[0%]  main-about-left">
          <div className=" main-about-header">
            <h1 className=" text-[60px] font-bold">About The Bootcamp</h1>
          </div>
          <div className=" mb-[30%] About-image-container">
            <img src={AboutOne} className="About-one-image" />
          </div>
        </div>
        <div className="w-[50%]">
          <div className=" about-right-content">
            <p className="about-span font-medium ">
              {showFullText ? longText : `${longText.slice(0, 200)}...`}
            </p>
            <button
              onClick={toggleShowFullText}
              className="w-[20%] h-[48px] px-5 py-3 rounded-md learn-button"
            >
              {showFullText ? "Show Less" : "Learn More"}
            </button>
            <div className="">
              <img src={AboutTwo} className=" About-two-image " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBootcamp;
