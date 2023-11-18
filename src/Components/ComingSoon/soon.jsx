import React from "react";
import "../ComingSoon/Style/soon.css";
import { CgArrowLongRight } from "react-icons/cg";
import Time from "../../assets/images/Time.svg"

function Soon() {
  return (
    <div className="w-full background-soon mt-10">
      <div className="flex justify-between p-20 ">
        <div className="  border-box p-20 left-soon ">
          <div className="mb-20">
          <h2 className="header-bold text-3xl mb-7">Oops, We’re sorry!</h2>
          <h1 className="header-bold text-7xl mb-7" >Coming Soon</h1>
          <p className="text-base font-medium mb-4">
            Subscribe to be the first to know about all the events and get a
            discount<br/> on your first order!
          </p>
          </div>
          <div className="soon-search flex w-[100%] mt-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="font-secondary font-light text-base"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
            <button type="submit">Join Waitlist</button>
          </div>
          <div className=" flex mt-12">
           <a href="/" className="text-red-600 flex gap-x-5 font-medium">Check out our top courses
           <CgArrowLongRight size={30} />
           </a>
          
          </div>
        </div>
        <div className="border-box ">
        <img src={Time} alt="Time-img"/>


        </div>
      </div>
    </div>
  );
}

export default Soon;
