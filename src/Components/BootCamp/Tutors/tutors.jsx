import React from "react";
import { useState, useEffect } from "react";
import tutor from "./Data/tutor";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../BootCamp/Tutors/Style/tutors.css";

function Tutors() {
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
    <div className=" Mentors-box mt-10">
      <div className="px-20 py-28 md:px-[8%] tutors-container">
        <div className="header-box">
          <div className=" text-center tutors-header">
            <h2 className="text-2xl font-bold" style={{ color: "#fff" }}>
              Meet Our <span>Tutors</span>
            </h2>
            <p className="mt-6" style={{ color: "#fff" }}>
            Get acquainted with the brilliant minds shaping your learning journey. 
              <br className="line-break-2" />
              Each tutor brings passion and proficiency, ensuring your educational experience is nothing short of exceptional.
            </p>
          </div>
        </div>

        <div className="mt-[8%]  ">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={isMobile ? 1 : 3}
            slidesToScroll={isMobile ? 1 : 3}
       
          >
            {tutor.map((tutor, index) => (
              <div key={index} className=" p-0">
                <div className="relative flex card-house">
                  <div
                    className="bg-cover bg-center rounded-lg  card"
                    style={{
                      borderRadius: "20px",
                    }}
                  >
                    <div
                      className="w-[427px] h-[300px] tutors-image"
                      style={{ backgroundImage: `url(${tutor.imageURL})`,
                      ...tutor.imageStyle, }}
                    > 
                  </div>
                    <div
                      className="w-[427px] h-[260px] p-5 tutors-details"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <div className="name ">
                        <h1
                          className="text-[24px] font-bold"
                          style={{ color: "rgba(0, 25, 117, 1)" }}
                        >
                          {tutor.name}
                        </h1>
                        <h6 className="text-[16px] font-bold mt-2">
                          {tutor.jobTitle}
                        </h6>
                      </div>
                      <div className="description mt-2">
                        <p className="font-bold" style={{ color: "gray" }}>
                         {tutor.bio}
                        </p>
                      </div>
                     
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
}

export default Tutors;
