import React from "react";
import "../ComingSoon/Style/soon.css";
import { CgArrowLongRight } from "react-icons/cg";
import Time from "../../assets/images/Time.svg";

function Soon() {
  return (
    <div className="w-full background-soon mt-20 md:mt-5 ">
      <div className="flex flex-col md:flex-row justify-between p-2 md:p-10 soon-custom">
        <div className="border-box p-2 md:p-20  mt-10 left-soon">
          <div className="mb-20 soon-text">
            <h2 className="header-bold text-2xl md:text-4xl mb-7">
              Oops, We&apos;re sorry!
            </h2>
            <h1 className="header-bold text-4xl md:text-7xl mb-7">
              Coming Soon
            </h1>
            <p className="text-base font-medium mb-4 text-gray-500 font-secondary">
              Subscribe to be the first to know about all the events and get a
              discount
              <br /> on your first order!
            </p>
          </div>
          <form >
          <div className="soon-search flex w-[100%] mt-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="font-secondary font-light text-base"
            />
            <i class="fa-regular fa-envelope "></i>
            <button type="submit" className="font-secondary">Join Waitlist</button>
            <button type="submit" className="soon-button-2 mt-10 font-secondary">Join Waitlist</button>
          </div>
          </form>
          <div className="flex mt-12 md:mt-12 ">
            <a
              href="/course-catalogue"
              className="text-red-600 flex gap-x-5 items-center font-primary font-medium soon-link"
            >
              Check out our top courses
              <CgArrowLongRight size={30} className="mt-1" />
            </a>
          </div>
        </div>
        <div className="border-box mb-5 md:mb-0 Timeimg-container ">
          <img src={Time} alt="Time-img" className="w-full Time-img rotating " />
        </div>
      </div>
    </div>
  );
}

export default Soon;
