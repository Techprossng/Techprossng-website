import React from "react";
import icon from "./icons/icon.svg";
import vector from "./icons/vector.png";
import vector1 from "./icons/vector1.svg";
import "aos";
import "./styles/style.css";

const Identity = () => {
  return (
    <section className="identity-container">
      <div className="border-container">
        <div className="flex justify-between items-center">
          <div
            className="flex flex-col items-start gap-[16px]"
            data-aos="fade-right"
          >
            <h6 className="text-base font-primary text-[#272727]">WHO WE ARE</h6>
            <h5 className="text-3xl font-primary text-[#001975]">
              WE ARE YOUR PARTNER FOR LEARNING AND CAREER GROWTH.
            </h5>
            <p className="font-secondary text-[#272727]">
              We are a dynamic tech education company that helps people access
              high-quality tech skills by increasing digital literacy and
              celebrating tech talents globally. We are on a mission to empower
              the next generation of tech Innovators in Nigeria.
            </p>
          </div>
          <div className="mini-border-container" data-aos="fade-left">
            <i className="h-9">
              <img src={vector1} alt="vector" />
            </i>
            <img src={icon} alt="icon" />
            <i className="w-52">
              <img src={vector} alt="vector" />
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
