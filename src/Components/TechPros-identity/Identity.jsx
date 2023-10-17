import React from "react";
import "./fonts/CraftworkGrotesk-Regular.ttf";
import icon from "./icons/icon.svg";
import vector from "./icons/vector.png";
import vector1 from "./icons/vector1.svg";
import "./styles/style.css";

const Identity = () => {
  return (
    // statistics section
    <section className="container">
      <div className="border-container">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start gap-[16px]">
            <h6 className="text-base font-normal">WHO WE ARE</h6>
            <h5 className="text-3xl font-normal">
              WE ARE YOUR PARTNER FOR LEARNING AND CAREER GROWTH.
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices mi tristique
              egestas accumsan. Tempus adipiscing egestas et in purus imperdiet
              urna.
            </p>
          </div>
          <div className="mini-border-container">
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
