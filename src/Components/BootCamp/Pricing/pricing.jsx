import React from "react";
import Red from "../Redline/red";
import Banner from "../../../assets/images/banner.svg";
import PricingIcon from "../../../assets/images/pricingicon.svg";
import "../Pricing/Style/pricing.css";

function Pricing() {
  return (
    <div className="px-6 py-12 md:px-12 mt-24">
      <div>
        <h4
          className="text-[33px] ml-20 mr-24  font-primary font-bold"
          style={{ color: "#272727" }}
        >
          Pricing
        </h4>
        <Red />
      </div>
      <div className="px-20 py-12 pricing-container">
        <div className="w-full h-[500px] mt-10  pricing-background">
          <div className="flex p-10">
            <div className="pricing-left relative">
              <img
                src={Banner}
                className="w-[300px] relative "
                style={{ top: "-67.6px" }}
                alt="Banner Image"
              />
              <p
                className="absolute text-[36px] top-[12px]  font-bold left-[39px] "
                style={{ color: "white" }}
              >
                ₦20,000.00
              </p>
              <button className=" relative left-[28px] top-[60px] w-[280px] h-[48px] px-5 py-3  rounded-md text-white button-1">
                <a href="">Register</a>
              </button>
            </div>
            <div className=" pricing-right p-20">
              <h1
                className="text-[140px] flex uppercase font-bold  font-secondary "
                style={{ color: "white" }}
              >
                Register
              </h1>
              <br />
              <div className="flex justify-between">
                <h1
                  className="text-[140px] uppercase flex ml-40 font-bold font-secondary"
                  style={{ color: "white" }}
                >
                  now
                </h1>
                <img src={PricingIcon} className="relative bottom-4 right-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
