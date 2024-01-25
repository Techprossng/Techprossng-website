import React from "react";
import "../Attend/Style/attend.css";
import Attend2 from "../../../assets/images/attend 2.svg";
import Attend1 from "../../../assets/images/attend 1.svg";
import Box from "../../../assets/images/Box.svg";

function Attend() {
  return (
    <div className="px-6 py-12 md:px-12">
      <div className="header-container">
        <h5 className="text-center text-[34px] font-secondary font-bold ">
          How to attend the <span className="text-center font-thin">BOOTCAMP</span>
        </h5>
        <p
          className="text-center font-secondary "
          style={{ whiteSpace: "pre-line" }}
        >
          Embark on a transformative learning journey as you meet our dedicated
          tutors at the bootcamp,
          <br /> where expertise converges with passion to fuel your educational
          success
        </p>
      </div>
      <div className="flex px-20 py-12 justify-between attend-container">
        <div className="w-[60%] attend-inner">
          <div className=" w-[737px] p-5 flex h-[350px] attend">
            <div className="w-[60%] mt-[47px] ">
              <h2 className="font-bold text-[28px] font-secondary whitespace-nowrap mb-4">
                Sign Up for the <span>BOOTCAMP</span>
              </h2>
              <p className="font-medium">
                sign up now for the TechProsNaija Bootcamp and embark on a
                transformative journey to master cutting-edge skills and shape
                your future in technology!
              </p>
              <button className=" w-[206px] h-[52px] px-5 py-3 mt-10 text-[40px] rounded-md text-white button-4">
                <a href="">Register</a>
              </button>
            </div>
            <div className="w-[40%]">
              <img src={Attend2} />
            </div>
          </div>
            <div className="flex mt-5 mr-2">
            <div className="w-[50%]">
            <div className="w-[348px] h-[317px] attends">
            <div className="p-5 ">
            <img src={Box} className="mt-1"/>
            <h2 className="font-bold text-[28px] font-secondary whitespace-nowrap mt-4">
               Attend Bootcamp
              </h2>
              <p className="font-medium text-[16px]">
              For our already registered candidates, get ready to embark on a transformative learning journey at the upcoming TechProsNaija Bootcamp, where the future of technology awaits your expertise!
              </p>
            </div>
            </div>

            </div>
            <div className="w-[50%]">
            <div className="w-[348px] h-[317px] attends">
            <div className="p-5 ">
            <img src={Box} className="mt-1"/>
            <h2 className="font-bold text-[28px] font-secondary whitespace-nowrap mt-4">
               Grow in Learning
              </h2>
              <p className="font-medium text-[16px]">
              As a registered candidate for the upcoming TechProsNaija Bootcamp, anticipate exponential professional growth and skill enhancement, positioning yourself at the cutting edge of the ever-evolving tech landscape.
              </p>
            </div>
            </div>
            </div>

          </div>
        </div>
        <div className="w-[40%]">
          <div className=" w-[520px] h-[690px] attend">
          <div className="p-5 ">
              <h2 className="font-bold text-[30px] font-secondary whitespace-nowrap mt-3">
                Select Payment Options
              </h2>
              <p className="mt-3 font-medium ">
              Elevate your career prospects and secure your seat at the forefront of technology by completing your registration and payment for the TechProsNaija Bootcamp today
              </p>
             <img src={Attend1} className="mt-20"/>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Attend;
