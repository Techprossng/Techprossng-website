import React from "react";
import { useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import RemitaPayment from "react-remita";
import { FaArrowRightLong } from "react-icons/fa6";
import "../../BootCamp/Register/Style/register.css";
import FormImage from "../../../assets/images/pricebg2.svg";

function Register() {

  const courses = [
    "--Select your Course--",
    "Back-end Development",
    "Data Analytics",
    "Front-end Development",
    "Product Management",
    "UI/UX Design for Beginners",
    "Web Development"
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    course: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [showPayment, setShowPayment] = useState(false)

  const validation = (values) => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "This is not a valid email pattern";
    }
    if (!values.course) {
      errors.course = "Course is required";
    }
    return errors;
  };
      // Set Remita payment data
      const remitaPaymentData = {
        key: "",
        customerId: formValues.email,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        amount: 100, 
        narration: "BootCamp Registration Payment",
        onSuccess: function (response) {
          console.log("Callback Successful Response", response);
          setShowPayment(true);
         
        },
        onError: function (response) {
          console.log("Callback Error Response", response);
          setFormValues(false);
         
        },
        onClose: function () {
          console.log("Payment modal closed");
        setShowPayment(false);
           
          
         
        },
      };
        
  const handlePayment = async (e) => {
    e.preventDefault();
    setFormErrors(validation(formValues));
    try {
      const response = await fetch(
        "https://techprosnaija.com/api/v1/payers",
        {
          method: "POST",
          body: JSON.stringify({
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            course: formValues.course,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("Sent");
        setFormValues(initialValues);
        setFormSuccess(true);
        setTimeout(() => {
          setFormSuccess(false);
         
        }, 3000);

    
     // Render the RemitaPayment component with the provided data
     setShowPayment(true);
    } else {
      console.error("Try again:", response.status, response.statusText);
     
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
    setFormErrors("An error occurred:" + error.message);
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
   
 
  };


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
              <hr className="w-[53%] border-2 border-black  mt-1 register-line" />
              <form  className="flex flex-wrap mt-10 register-1-form">
                <div className=" flex w-full gap-4 register-first-form">
                <div className="w-full sm:w-1/2 input-reg-container">
                  <label className="block mb-2 label">First Name</label>
                  <input
                  value={formValues.firstName}
                  onChange={handleChange}
                  name="firstName"
                  type="text"
                  className="w-full p-3 register-input" placeholder="Enter First Name" />
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
                  placeholder="Enter Last Name" />
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
                  className="w-full p-3 register-input" 
                  placeholder="Enter Email Address" />
                  <p className="mt-2 text-[#f00]">{formErrors.email}</p>
                </div>
                <div className="w-full mt-4 input-reg-container">
                  <label className="block mb-2 label">Course</label>
                  <select
                   onChange={handleChange}
                   name="course"
                   value={formValues.course}
                   type="text"
                  id="courses" className="w-full p-3 register-input" placeholder="Select-course">
                    {courses.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-[#f00]">{formErrors.course}</p>
                </div>
                <button  onClick={handlePayment} type="button" className=" w-[301px] flex justify-center gap-4 h-[52px] px-5 py-3 mt-10 text-[16px] rounded-md text-white button-8">
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
      {showPayment && <RemitaPayment key={formValues.email} {...remitaPaymentData} />}
    </div>
  );
}

export default Register;
