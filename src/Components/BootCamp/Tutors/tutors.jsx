import React from "react";
import { useState, useEffect } from "react";
import tutor from "./Data/tutor";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../BootCamp/Tutors/Style/tutors.css";


function Tutors() {
  const [showFullList, setShowFullList] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const toggleFullList = () => {
    setShowFullList(!showFullList);
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
    <div className=" Mentors-box mt-10">
      <div className="px-20 py-28 md:px-[8%] tutors-container">
        <div className="header-box">
          <div className=" text-center tutors-header">
            <h2 className="text-2xl font-bold" style={{ color: "#fff" }}>
              Meet Our <span>Tutors</span>
            </h2>
            <p className="mt-6" style={{ color: "#fff" }}>
              Embark on a transformative learning journey as you meet our
              dedicated tutors at the bootcamp,
              <br className="line-break-2" />
              where expertise converges with passion to fuel your educational
              success
            </p>
          </div>
        </div>

        <div className="mt-8">
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
                    <div className="w-[427px] h-[254px] bg-cover tutors-image"  style={{backgroundImage: `url(${tutor.imageURL})` ,}}>
                  

                    </div>
                    <div className="w-[427px] h-[241px] p-5 tutors-details" style={{ backgroundColor:"#fff" ,}}>
                     <div className="name">
                      <h1 className="text-[24px] font-bold" style={{ color: "rgba(0, 25, 117, 1)" ,}}>{tutor.name}</h1>
                      <h6 className="text-[16px] font-bold">{tutor.jobTitle}</h6>
                     </div>
                     <div className="description mt-2">
                      <p  className="font-bold" style={{ color:"gray"}}>Design user interfaces that not only look great but also provide seamless and intuitive experiences for users.</p>
                     </div>
                     <div className="experience mt-2">
                      <span className="text-[15px] font-bold" style={{ color:"gray"}}>Experience</span>
                      <p className="text-[15px] font-bold">4 years</p>

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
