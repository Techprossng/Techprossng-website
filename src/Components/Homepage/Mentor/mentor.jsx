import { useState, useEffect } from "react";
import mentor from "../Mentor/Data/mentor";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Homepage/Mentor/Styles/mentor.css";
import Arrow from "../../../assets/icons/arrow.png";

function MentorsSection() {
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
    <div className="mx-16 Mentors-box">
      <div className="flex items-center justify-between header-box">
        <div className="flex items-center ">
          <h2 className="text-2xl font-bold">Explore Mentors</h2>
        </div>
      </div>

      <div className="mt-8">
        {showFullList ? (
          /* Full Card Lists */
          <div className="full-list flex col-3 flex-wrap gap-4">
            {mentor.map((mentor, index) => (
              <div
                key={index}
                className={`full-list-card ${
                  isMobile ? "mobile-card" : "desktop-card"
                }`}
              >
                <div className="relative flex">
                  <div
                    className="bg-cover bg-center h-48 rounded-lg p-4 border border-opacity-20 full-card"
                    style={{
                      backgroundImage: `url(${mentor.imageURL})`,
                      borderRadius: "20px",
                    }}
                  >
                    <div
                      className="absolute top-64 left-2 h-auto p-2 pt-8 pb-3 rounded-8 gap-0 bg-black bg-opacity-70 flex flex-wrap items-center text-white full-content"
                      style={{
                        borderRadius: "10px",
                      }}
                    >
                      <ul className="list-disc relative bottom-5">
                        <h2 className="text-[16px] pb-2 flex font-secondary font-bold">
                          {" "}
                          {mentor.name}
                        </h2>
                        <li className="text-[14px] ml-5 font-secondary font-normal">{mentor.jobTitle}</li>
                        <li className="text-[14px] ml-5 font-secondary font-normal mt-2">
                          {mentor.certifications}
                        </li>
                        <p className="flex gap-3 mt-4 mr-10 font-secondary font-medium text-[12px]">
                          <img
                            src={mentor.starIcon}
                            style={{ width: "16px", height: "16px" }}
                          />
                          {mentor.starRating}
                          <span>{mentor.starPublish}</span>
                        </p>
                      </ul>

                      <button
                        className={`mt-2 bg-[rgba(15,27,99,1)] font-semibold font-secondary w-full md:w-full text-white px-2 md:px-3 py-2 md:py-3 ${
                          isMobile ? "mobile-button" : "desktop-button"
                        }`}
                        style={{
                          borderRadius: "10px",
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
          /* Slider Card Lists */
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={isMobile ? 1 : 4}
            slidesToScroll={isMobile ? 1 : 3}
          >
            {mentor.map((mentor, index) => (
              <div key={index} className="w-full p-2">
                <div className="relative flex card-house">
                  <div
                    className="bg-cover bg-center rounded-lg p-4 border border-opacity-20 card"
                    style={{
                      backgroundImage: `url(${mentor.imageURL})`,
                      borderRadius: "20px",
                    }}
                  >
                    <div
                      className="absolute top-[55%] left-2 h-auto p-2 pt-8 pb-3  gap-0 bg-black bg-opacity-70 flex flex-wrap items-center text-white card-content"
                      style={{
                        borderRadius: "10px",
                      }}
                    >
                      <ul className="list-disc relative bottom-5" >
                        <h2 className="text-[16px] pb-2 flex font-secondary font-bold">
                          {" "}
                          {mentor.name}
                        </h2>
                        <li className="text-[14px] ml-5 font-secondary font-normal" style={{ listStyle:"disc"}} >{mentor.jobTitle}</li>
                        <li className="text-[14px] ml-5 mt-2 font-secondary font-normal" style={{ listStyle:"disc"}}>
                          {mentor.certifications}
                        </li>
                        <p className="flex gap-3 mt-4 mr-10 text-[11px]font-secondary font-medium text-[12px] ">
                          <img
                            src={mentor.starIcon}
                            style={{ width: "16px", height: "16px" }}
                          />
                          {mentor.starRating}
                          <span>{mentor.starPublish}</span>
                        </p>
                      </ul>

                      <button
                        className={`mt-2 bg-[rgba(15,27,99,1)] font-semibold font-secondary text-[13px] w-full md:w-full text-white px-2 md:px-3 py-2 md:py-3 all-button ${
                          isMobile ? "mobile-button" : "desktop-button"
                        }`}
                        style={{
                          borderRadius: "10px",
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
        )}
      </div>

      <div className="mt-4 flex justify-end items-center">
        <button
          className="bg-none px-4 py-2 rounded flex gap-5"
          onClick={toggleFullList}
          style={{
            color: "red",
            fontWeight: 500,
            textDecoration: "underline",
          }}
        >
          {showFullList ? "Hide Full List" : "View Full List"}
          <img
            src={Arrow}
            alt="arrow image"
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

export default MentorsSection;
