import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Homepage/Mentor/Styles/mentor.css";

function MentorsSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  const [showFullList, setShowFullList] = useState(false);

  const toggleFullList = () => {
    setShowFullList(!showFullList);
  };
  const cardClass = showFullList ? "full-list-card" : "slider-card";
  return (
    <div className="container mx-auto mt-10 p-4 md:p-20">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <h2 className="text-xl md:text-2xl font-bold">Explore Mentors</h2>
      </div>
    </div>
  
    <div className="mt-4 md:mt-8">
      {showFullList ? (
        /* full-card-lists */
        <div className="full-list flex flex-col md:flex-row flex-wrap gap-4">
          {mentor.map((mentor, index) => (
            <div key={index} className={`full-list-card ${cardClass}`}>
              <div className="relative flex">
                <div
                  className="bg-cover bg-center h-36 md:h-48 rounded-lg p-2 md:p-4 border border-opacity-20 full-card"
                  style={{
                    backgroundImage: `url(${mentor.imageURL})`,
                    borderRadius: "20px",
                  }}
                >
                  <div
                    className="absolute top-44 md:top-64 left-2 w-full md:w-full h-auto p-2 pt-6 pb-2 md:p-3 rounded-8 gap-0 bg-black bg-opacity-70 flex flex-wrap items-center text-white card-content"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    <ul className="list-disc relative bottom-3 md:bottom-5">
                      <h2 className="text-base md:text-lg pb-1 md:pb-2 flex">
                        {" "}
                        {mentor.name}
                      </h2>
                      <li className="text-[10px] md:text-[12px] ml-2 md:ml-4">
                        {mentor.jobTitle}
                      </li>
                      <li className="text-[10px] md:text-[12px] ml-2 md:ml-4 mt-1 md:mt-2">
                        {mentor.certifications}
                      </li>
                      <p className="flex gap-1 md:gap-3 mt-2 md:mt-4 ml-4 md:ml-10 text-[10px] md:text-[11px]">
                        <img
                          src={mentor.starIcon}
                          style={{ width: "14px", height: "14px" }}
                        />
                        {mentor.starRating}
                        <span>{mentor.starPublish}</span>
                      </p>
                    </ul>
  
                    <button
                      className="mt-2 bg-[rgba(15,27,99,1)] w-full md:w-auto text-white px-2 md:px-3 py-2 md:py-3"
                      style={{
                        borderRadius: "10px",
                        fontSize: "11px",
                        fontWeight: "600",
                      }}
                    >
                      View Mentor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* full-card-lists */
        
        /* slider-card-list */
        <Slider {...settings}>
          {mentor.map((mentor, index) => (
            <div key={index} className="w-full md:w-1/4 p-2 md:p-4">
              <div className="relative flex">
                <div
                  className="bg-cover bg-center h-36 md:h-48 rounded-lg p-2 md:p-4 border border-opacity-20 card"
                  style={{
                    backgroundImage: `url(${mentor.imageURL})`,
                    borderRadius: "20px",
                  }}
                >
                  <div
                    className="absolute top-44 md:top-64 left-2 w-full md:w-auto h-auto p-2 pt-6 pb-2 md:p-3 rounded-8 gap-0 bg-black bg-opacity-70 flex flex-wrap items-center text-white card-content"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    <ul className="list-disc relative bottom-3 md:bottom-5">
                      <h2 className="text-base md:text-lg pb-1 md:pb-2 flex">
                        {" "}
                        {mentor.name}
                      </h2>
                      <li className="text-[10px] md:text-[12px] ml-2 md:ml-4">
                        {mentor.jobTitle}
                      </li>
                      <li className="text-[10px] md:text-[12px] ml-2 md:ml-4 mt-1 md:mt-2">
                        {mentor.certifications}
                      </li>
                      <p className="flex gap-1 md:gap-3 mt-2 md:mt-4 ml-4 md:ml-10 text-[10px] md:text-[11px]">
                        <img
                          src={mentor.starIcon}
                          style={{ width: "14px", height: "14px" }}
                        />
                        {mentor.starRating}
                        <span>{mentor.starPublish}</span>
                      </p>
                    </ul>
  
                    <button
                      className="mt-2 bg-[rgba(15,27,99,1)] w-full md:w-auto text-white px-2 md:px-3 py-2 md:py-3"
                      style={{
                        borderRadius: "10px",
                        fontSize: "11px",
                        fontWeight: "600",
                      }}
                    >
                      View Mentor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        /* slider-card-list */
      )}
    </div>
  
    <div className="mt-4 md:mt-8 flex justify-center md:justify-end items-center">
      <button
        className="bg-none px-4 py-2 rounded flex gap-2 md:gap-5"
        onClick={toggleFullList}
        style={{
          color: "red",
          fontWeight: 500,
          textDecoration: "underline",
        }}
      >
        {showFullList ? "Hide Full List" : "View Full List"}
        <img
          src="../../src/assets/icons/arrow.png"
          style={{
            width: "20px",
            height: "20px",
            marginTop: "2px",
          }}
        />
      </button>
    </div>
  </div>
  
  );
}

const mentor = [
  {
    name: "Alice ",
    jobTitle: "UI/UX Designer, Product Manager",
    certifications: "Machine Learning Expert",
    starRating: 4.8,
    starPublish: "(13) ",
    imageURL: "../../src/assets/images/tutor1.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Bob ",
    jobTitle: "Full Stack Developer",
    certifications: "IBM Full Stack Development Certification",
    starRating: 4.2,
    starPublish: "(18) ",
    imageURL: "../../src/assets/images/tutor2.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Eva ",
    jobTitle: "Graphic Designer",
    certifications: "Creative Illustrator",
    starRating: 4.6,
    starPublish: "(43) ",
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Michael ",
    jobTitle: "Product Manager",
    certifications: "Agile Certified",
    starRating: 4.4,
    starPublish: "(23) ",
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Sarah ",
    jobTitle: "Marketing Manager",
    certifications: "Digital Marketing Pro",
    starRating: 4.7,
    starPublish: "(13) ",
    imageURL: "../../src/assets/images/tutor2.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Liam ",
    jobTitle: "Software Architect",
    certifications: "Architectural Master",
    starRating: 4.9,
    imageURL: "../../src/assets/images/tutor2.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Olivia",
    jobTitle: "UX Designer",
    certifications: "User Experience Guru",
    starRating: 4.5,
    starPublish: "(10) ",
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Daniel ",
    jobTitle: "Network Engineer",
    certifications: "Cisco Certified Professional",
    starRating: 4.1,
    starPublish: "(14) ",
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Sophia ",
    jobTitle: "Database Administrator",
    certifications: "Database Expert",
    starRating: 4.3,
    starPublish: "(13) ",
    imageURL: "../../src/assets/images/Logo.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Jackson ",
    jobTitle: "Project Manager",
    certifications: "Certified Project Manager",
    starRating: 4.6,
    starPublish: "(33) ",
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Emma",
    jobTitle: "Content Writer",
    certifications: "Content Marketing Specialist",
    starRating: 4.7,
    starPublish: "(42) ",
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Matthew",
    jobTitle: "System Administrator",
    certifications: "System Admin Pro",
    starRating: 4.4,
    starPublish: "(12) ",
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Isabella",
    jobTitle: "UI Designer",
    certifications: "UI/UX Specialist",
    starRating: 4.8,
    starPublish: "(11) ",
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Logan",
    jobTitle: "DevOps Engineer",
    certifications: "DevOps Pro",
    starRating: 4.2,
    starPublish: "(10) ",
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Ava",
    jobTitle: "Quality Assurance Analyst",
    certifications: "QA Expert",
    starRating: 4.5,
    starPublish: "(13) ",
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
  {
    name: "Noah",
    jobTitle: "Business Analyst",
    certifications: "Business Analysis Master",
    starRating: 4.6,
    starPublish: "(11) ",
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon: "../../src/assets/icons/star.png",
  },
];

export default MentorsSection;