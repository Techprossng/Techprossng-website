import React from "react";
import { useState } from "react";
import { FaRegCalendarCheck, FaArrowRightLong } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import "../../BootCamp/Register/Style/register.css";
import FormImage from "../../../assets/images/TechProsNg2.png";

const courses = [
  "--Select your Course--",
  "Back-end Development",
  "Data Analytics",
  "Project Management",
  "Front-end Development",
  "Creative and Content Design",
  "Product Management",
  "Product Design",
  "Creative Design",
  "UI/UX Design for Beginners",
  "Web Development",
];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  course: "",
};

const Register = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!formValues.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formValues.email)) {
      errors.email = "This is not a valid email pattern";
    }
    if (!formValues.course || formValues.course === "--Select your Course--") {
      errors.course = "Course is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (registrationComplete || loading || !validateForm()) {
      return;
    }
    try {
      setLoading(true);
      // Step 1: Send user details to your server to register
      const registerResponse = await fetch(
        "https://techprosnaija.com/api/v1/payers",
        {
          method: "POST",
          body: JSON.stringify(formValues),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (registerResponse.ok) {
        console.log("User registered successfully");
        setFormValues(initialValues);
        setRegistrationComplete(true);
        setTimeout(() => {
          window.location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLSc4KvhRweS4NfetsP-kdPJ4rgJdXOrxVsVUXVP1h0bg5Wpe3Q/viewform";
        }, 1500);
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error.message);
      setFormErrors("An error occurred:" + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the "Copied" message after 2 seconds
  };

  return (
    <div className="w-full register-main">
      <div className="w-full h-[497px] register-header-container">
        <div className=" register-inner px-12 py-40">
          <div className="flex justify-center mt-10 register-venue-container">
            <div className=" flex justify-center  w-[400px] text-center h-[50px] p-[14px] register-date">
              <FaRegCalendarCheck size={20} color="white" />
              <h5 className="font-primary text-[16px] text-white font-semibold ">
                STARTING: MONDAY, 1ST APRIL, 2024
              </h5>
            </div>
          </div>
          <div className="text-center register-header">
            <h1 className="text-[90px] font-bold text-white">
              BootCamp Registration
            </h1>
          </div>
        </div>
      </div>
      <div className="form-cont ">
        <div className=" flex form-main px-20 py-20">
          <div className="w-[50%] register-1">
            {registrationComplete ? null : (
              <div className="w-[627px] register-1-inner">
                <h2 className="text-[30px]  font-bold ">
                  Personal Information
                </h2>
                <hr className="w-[53%] border-2 border-black  mt-1 register-line" />
                <form className="flex flex-wrap mt-10 register-1-form">
                  <div className=" flex w-full gap-4 register-first-form">
                    <div className="w-full sm:w-1/2 input-reg-container">
                      <label className="block mb-2 label">First Name</label>
                      <input
                        value={formValues.firstName}
                        onChange={handleChange}
                        name="firstName"
                        type="text"
                        className="w-full p-3 register-input "
                        placeholder="Enter First Name"
                      />
                      <p className="mt-2 text-[#f00]">{formErrors.firstName}</p>
                    </div>
                    <div className="w-full sm:w-1/2 input-reg-container">
                      <label className="block mb-2 label">Last Name</label>
                      <input
                        onChange={handleChange}
                        name="lastName"
                        value={formValues.lastName}
                        type="text"
                        className="w-full p-3 register-input"
                        placeholder="Enter Last Name"
                      />
                      <p className="mt-2 text-[#f00]">{formErrors.lastName}</p>
                    </div>
                  </div>
                  <div className="w-full mt-4 input-reg-container">
                    <label className="block mb-2 label">Email Address</label>
                    <input
                      onChange={handleChange}
                      name="email"
                      value={formValues.email}
                      type="email"
                      className="w-full p-3 register-input email-reg-input"
                      placeholder="Enter Email Address"
                    />
                    <p className="mt-2 text-[#f00]">{formErrors.email}</p>
                  </div>
                  <div className="w-full mt-4 input-reg-container">
                    <label className="block mb-2 label">Course</label>
                    <select
                      onChange={handleChange}
                      name="course"
                      value={formValues.course}
                      type="text"
                      id="courses"
                      className="w-full p-3 register-input course-reg-input"
                      placeholder="Select-course"
                    >
                      {courses.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <p className="mt-2 text-[#f00]">{formErrors.course}</p>
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className=" w-[301px] flex justify-center gap-4 h-[52px] px-5 py-3 mt-10 text-[16px] rounded-md text-white button-8"
                  >
                    {loading ? (
                      <div className="flex justify-start">
                        <div className="text-[30px] spinner-1"></div>
                      </div>
                    ) : (
                      <>
                        Proceed to payment
                        <FaArrowRightLong size={20} className="mt-[2px]" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
            {registrationComplete && (
              <div className="success-message w-full flex">
                <p className="text-green-500 text-[30px] font-semibold">
                  Thank you for registering! pls follow the instructions on the
                  next screen to make payment.
                </p>
                <GoCheckCircleFill color="green" size={200} />
              </div>
            )}
          </div>

          <div className=" w-[50%] register-2"></div>
          <img src={FormImage} className=" relative bottom-40 register-image" />
        </div>
      </div>
    </div>
  );
};

export default Register;
