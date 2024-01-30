import React from "react";
import Money from "../../../assets/images/money.svg";
import { FaRegCalendarCheck } from "react-icons/fa6";
import "../Pricing/Style/pricing.css";

function Pricing() {
  return (
    <div className="w-[100%] h-[902px] pricing-background">
      <div className=" w-full pricing-container py-[10%]">
        <div className="pricing-content">
        <div className="pricing-header">
          <h1 className="text-center text-[48px] font-bold ">BootCamp Price</h1>
          <p className="text-center text-[18px] mt-2 font-medium">
            Experience exceptional value for your investment in the upcoming
            TechProsNaija Bootcamp,
            <br className="line-break-6" /> where the affordable pricing ensures access to top-tier
            education, expert mentorship, and
            <br className="line-break-7"/> transformative learning opportunities in the ever-evolving
            tech landscape.
          </p>
        </div>
        <div className="flex justify-center pricing-fee mt-20">
        <img src={Money} className="w-[100px] h-[78px] money-mobile"/>
          <p className="text-[75px] font-bold ">₦20,000.00</p>
          <img src={Money} className="w-[186px] h-[98px] money-web"/>
        </div>
        <div className="flex justify-center mt-10 venue-container">
          <div className=" flex justify-center  w-[400px] text-center h-[50px] p-[14px] venue-date">
            <FaRegCalendarCheck size={20} />
            <h5 className="font-primary text-[16px]  font-semibold ">
              STARTING: MONDAY, 4TH MARCH, 2024
            </h5>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="venue-register w-[590px] h-[82px] px-5 py-3 mt-16 " style={{ color:"#fff"}}>
            <a href="#">Register</a>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
