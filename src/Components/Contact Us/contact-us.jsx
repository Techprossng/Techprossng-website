import React, { useState } from "react";
import "../Contact Us/Style/contact-us.css";

function ContactUs() {
  const courses = [
    "--Select your Course--",
    "Data Analysis",
    "Cybersecurity",
    "Digital Marketing",
    "Frontend Development",
    "Backend Development",
    "Product Design",
    "UI/UX Design",
  ];
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    website: "",
    course: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

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
    if (!values.description) {
      errors.description = "Description is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validation(formValues));
    try {
      const response = await fetch(
        "https://techprosnaija.com/api/v1/contacts",
        {
          method: "POST",
          body: JSON.stringify({
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            description: formValues.description,
            website: formValues.website,
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
      } else {
        console.error("Try again:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("An error occured:", error.message);
      setFormErrors("An error occured:" + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  return (
    <>
      <div className="contact-form my-10">
        <div className="contact-us m-10">
          <div className="contact-intro flex flex-col justify-center items-center">
            <h4 className="font-bold text-3xl text-[#001562]">Contact Us</h4>
            <p className="font-medium text-base text-[#272727] mt-5">
              Please fill out the form below, and our team will get back to you
              as soon as possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} action="" className="forminputs">
            <div className="name flex justify-around items-center mt-10">
              <div className="firstinput flex flex-col">
                <label className="text-[#272727] font-medium text-sm flex gap-1 ">
                  <span className="text-inherit"> First Name</span>
                  <div className="text-red-600 text-base font-bold">*</div>
                </label>
                <input
                  onChange={handleChange}
                  name="firstName"
                  value={formValues.firstName}
                  type="text"
                  className=""
                />
                <p className="mb-10 md:mt-2 text-[#f00]">{formErrors.firstName}</p>
              </div>
              <div className="lastinput flex flex-col">
                <label className="text-[#272727] font-medium text-sm flex gap-1">
                  <span className="text-inherit"> Last Name</span>
                  <div className="text-red-600 text-base font-bold">*</div>
                </label>
                <input
                  onChange={handleChange}
                  name="lastName"
                  value={formValues.lastName}
                  type="text"
                  className=""
                />
                <p className="mt-2 text-[#f00]">{formErrors.lastName}</p>
              </div>
            </div>
            <div className="mail-website flex justify-around items-center mt-10">
              <div className="mailinput flex flex-col">
                <label className="text-[#272727] font-medium text-sm flex gap-1">
                  <span className="text-inherit"> Last Name</span>
                  <div className="text-red-600 text-base font-bold">*</div>
                </label>
                <input
                  onChange={handleChange}
                  name="email"
                  value={formValues.email}
                  type="email"
                  className=""
                />
                <p className="mt-2 text-[#f00]">{formErrors.email}</p>
              </div>
              <div className="websiteinput flex flex-col">
                <label className="text-[#272727] font-medium text-sm">
                  Website
                </label>
                <input
                  onChange={handleChange}
                  name="website"
                  value={formValues.website}
                  type="text"
                  className=""
                />
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="course-option mt-10">
                <label className="text-[#272727] font-medium text-sm flex gap-1">
                  <span className="text-inherit">
                    Please select your course of enquiry
                  </span>
                  <div className="text-red-600 text-base font-bold">*</div>
                </label>
                <div className="course-select">
                  <select id="courses">
                    {courses.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-enquiry mt-10">
                <label className="text-[#272727] font-medium text-sm flex gap-1">
                  <span className="text-inherit"> How can we help</span>
                  <div className="text-red-600 text-base font-bold">*</div>
                </label>
                <div className="field">
                  <input
                    onChange={handleChange}
                    name="description"
                    value={formValues.description}
                    type="text"
                    className=""
                  />
                  <p className="mt-1 text-[#f00]">{formErrors.description}</p>
                </div>
              </div>
            </div>
            <div className="submit-form flex justify-center mt-10">
              <button type="submit">
                <p className="font-semibold text-sm">Send</p>
              </button>
            </div>
          </form>
          {formSuccess && (
            <div className="text-green-500 text-center font-bold mt-5 text-xl">
              Successful!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactUs;
