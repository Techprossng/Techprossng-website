import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import "../../BootCamp/Register/Style/register.css";
import FormImage from "../../../assets/images/pricebg2.svg";

function Register() {
  return (
    <div className="w-full register-main">
      <div className="w-full h-[497px] register-header-container">
        <div className=" register-inner px-12 py-40">
          <div className="flex justify-center mt-10 register-venue-container">
            <div className=" flex justify-center  w-[400px] text-center h-[50px] p-[14px] register-date">
              <FaRegCalendarCheck size={20} />
              <h5 className="font-primary text-[16px]  font-semibold ">
                STARTING: MONDAY, 4TH MARCH, 2024
              </h5>
            </div>
          </div>
          <div className="text-center register-header">
            <h1 className="text-[90px] font-bold">BootCamp Registration</h1>
          </div>
        </div>
      </div>
      <div className="form-cont ">
        <div className=" flex form-main px-20 py-20">
          <div className="w-[50%] register-1">
            <div className="w-[627px] register-1-inner">
              <h2 className="text-[30px]  font-bold ">
                Personal Information
              </h2>
              <hr className="w-[53%] border-2 border-black  mt-1" />
              <form className="flex flex-wrap mt-10 register-1-form">
                <div className=" flex w-full gap-4 register-first-form">
                <div className="w-full sm:w-1/2 input-reg-container">
                  <label className="block mb-2 label">First Name</label>
                  <input className="w-full p-3 register-input" placeholder="Enter First Name" />
                </div>
                <div className="w-full sm:w-1/2 input-reg-container">
                  <label className="block mb-2 label">Last Name</label>
                  <input className="w-full p-3 register-input" placeholder="Enter Last Name" />
                </div>
                </div>
                <div className="w-full mt-4 input-reg-container">
                  <label className="block mb-2 label">Email Address</label>
                  <input className="w-full p-3 register-input" placeholder="Enter Email Address" />
                </div>
                <div className="w-full mt-4 input-reg-container">
                  <label className="block mb-2 label">Last Name</label>
                  <input className="w-full p-3 register-input" placeholder="Enter Last Name" />
                </div>
                <button className=" w-[301px] flex justify-center gap-4 h-[52px] px-5 py-3 mt-10 text-[16px] rounded-md text-white button-8">
                <a href="/register">Proceed to payment </a>
                <FaArrowRightLong size={20} className="mt-[2px]" />
              </button>
              </form>
            </div>
          </div>
          <div className=" w-[50%] register-2"></div>
          <img src={FormImage} className=" relative bottom-40 register-image" />
        </div>
      </div>
    </div>
  );
}

export default Register;
