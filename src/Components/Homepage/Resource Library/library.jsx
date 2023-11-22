import React from "react";
import "../Resource Library/Style/library.css";
import Image1 from "../../../assets/images/image1.png";
import Image4 from "../../../assets/images/image4.png";
import Image5 from "../../../assets/images/image5.png";
import Image6 from "../../../assets/images/image6.png";

function Library() {
  return (
    <div className="libraries">
      <h1 className="heading">
        Resource Library{" "}
        <div className="resourse-link flex justify-center items-center">
          <a href="/coming-soon">View Resource Library</a>{" "}
          <i className="fa-solid fa-arrow-right-long"></i>
        </div>
      </h1>
      <div className="box-container">
        <div className="box flex justify-around flex-col">
          <div>
            <img src={Image1} alt="library image" className="w-full rounded-2xl" />
          </div>
          <div className="flex justify-center flex-col items-center mt-3">
            <h3 className="font-seconday font-bold text-[11px] text-[#001975]">
              Videos
            </h3>
            <button
              className=" library-button
                bg-white px-4 py-2 rounded-md mt-2"
            >
              <a href="#" className="btn text-[#0F1B63] font-semibold text-xs">
                Explore Now
              </a>
            </button>
          </div>
        </div>
        <div className="box">
          <div>
            <img src={Image4} alt="library image" className="w-full rounded-2xl" />
          </div>
          <div className="flex justify-center flex-col items-center mt-3">
            <h3 className="font-seconday font-bold text-[11px] text-[#001975]">
              E-Books
            </h3>
            <button
              className=" library-button
                bg-white px-4 py-2 rounded-md mt-2
              "
            >
              <a href="#" className="btn text-[#0F1B63] font-semibold text-xs">
                Explore Now
              </a>
            </button>
          </div>
        </div>
        <div className="box">
          <div>
            <img src={Image5} alt="library image" className="w-full rounded-2xl" />
          </div>
          <div className="flex justify-center flex-col items-center mt-3">
            <h3 className="font-seconday font-bold text-[11px] text-[#001975]">
              Projects
            </h3>
            <button
              className=" library-button
                bg-white px-4 py-2 rounded-md mt-2
              "
            >
              <a href="#" className="btn text-[#0F1B63] font-semibold text-xs">
                Explore Now
              </a>
            </button>
          </div>
        </div>
        <div className="box">
          <div>
            <img src={Image6} alt="library image" className="w-full rounded-2xl" />
          </div>
          <div className="flex justify-center flex-col items-center mt-3">
            <h3 className="font-seconday font-bold text-[11px] text-[#001975]">
              Tutorials
            </h3>
            <button
              className=" library-button
                bg-white px-4 py-2 rounded-md mt-2
              "
            >
              <a href="#" className="btn text-[#0F1B63] font-semibold text-xs">
                Explore Now
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-resourse-link flex justify-center items-center">
        <a href="/coming-soon">View Resource Library</a>{" "}
        <i className="fa-solid fa-arrow-right-long"></i>
      </div>
    </div>
  );
}

export default Library;
