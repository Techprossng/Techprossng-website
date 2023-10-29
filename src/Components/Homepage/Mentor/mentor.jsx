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

  return (
    <div className="container mx-auto mt-10 p-20 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">Explore Mentors</h2>
        </div>
      </div>

      <div className="mt-8">
        <Slider {...settings}>
          {mentor.map((mentor, index) => (
            <div key={index} className="w-full p-2">
              <div className="relative">
                <div
                  className="bg-cover bg-center h-48 rounded-lg p-4 border  border-opacity-20"
                  style={{
                    backgroundImage: `url(${mentor.imageURL})`,
                    gap: "8px",
                    borderRadius: "8px",
                    width: "334px",
                    height: "493px",
                  }}
                >
                  <div className="absolute top-52 left-5 right-5 w-302  h-auto p-2 pt-8 pb-8 rounded-8 gap-0 bg-black bg-opacity-40 flex  flex-wrap items-center justify text-white "
                    style={{
                      borderRadius: "12px"
                    }}
                  
                  >
                    <ul className="list-disc relative bottom-5">
                    <h2 className="text-[16px] pb-2 flex "> {mentor.name}</h2>
                      <li className="text-[12px] ml-5">{mentor.jobTitle}</li>
                      <li className="text-[12px] ml-5 mt-2">{mentor.certifications}</li>
                      <p className=" flex gap-3 mt-4 mr-10 text-[11px]"><img src={mentor.starIcon} style={{ width:"16px" , height:"16px"}}/>{mentor.starRating}</p>
                    </ul>
                    
                    <button className="mt-2 bg-[rgba(15,27,99,1)] w-full text-white px-3 py-3 "
                     style={{
                      borderRadius:"10px"
                     }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>


      <div className="mt-4 flex justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          View Full List
        </button>
      </div>
    </div>
  );
}

const mentor = [
  {
    name: "Alice ",
    jobTitle: "Data Scientist",
    certifications: "Machine Learning Expert",
    starRating: 4.8,
    imageURL: "../../src/assets/images/tutor1.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Bob ",
    jobTitle: "Web Developer",
    certifications: "Front-End Specialist",
    starRating: 4.2,
    imageURL: "../../src/assets/images/tutor2.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Eva ",
    jobTitle: "Graphic Designer",
    certifications: "Creative Illustrator",
    starRating: 4.6,
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Michael ",
    jobTitle: "Product Manager",
    certifications: "Agile Certified",
    starRating: 4.4,
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Sarah ",
    jobTitle: "Marketing Manager",
    certifications: "Digital Marketing Pro",
    starRating: 4.7,
    imageURL: "../../src/assets/images/tutor2.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Liam ",
    jobTitle: "Software Architect",
    certifications: "Architectural Master",
    starRating: 4.9,
    imageURL: "../../src/assets/images/tutor2.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Olivia",
    jobTitle: "UX Designer",
    certifications: "User Experience Guru",
    starRating: 4.5,
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Daniel ",
    jobTitle: "Network Engineer",
    certifications: "Cisco Certified Professional",
    starRating: 4.1,
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Sophia ",
    jobTitle: "Database Administrator",
    certifications: "Database Expert",
    starRating: 4.3,
    imageURL: "../../src/assets/images/Logo.svg",
  },
  {
    name: "Jackson ",
    jobTitle: "Project Manager",
    certifications: "Certified Project Manager",
    starRating: 4.6,
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Emma",
    jobTitle: "Content Writer",
    certifications: "Content Marketing Specialist",
    starRating: 4.7,
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon:"../../src/assets/icons/star.png"
    
  },
  {
    name: "Matthew",
    jobTitle: "System Administrator",
    certifications: "System Admin Pro",
    starRating: 4.4,
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Isabella",
    jobTitle: "UI Designer",
    certifications: "UI/UX Specialist",
    starRating: 4.8,
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Logan",
    jobTitle: "DevOps Engineer",
    certifications: "DevOps Pro",
    starRating: 4.2,
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Ava",
    jobTitle: "Quality Assurance Analyst",
    certifications: "QA Expert",
    starRating: 4.5,
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
  {
    name: "Noah",
    jobTitle: "Business Analyst",
    certifications: "Business Analysis Master",
    starRating: 4.6,
    imageURL: "../../src/assets/images/tutor3.svg",
    starIcon:"../../src/assets/icons/star.png"
  },
];

export default MentorsSection;
