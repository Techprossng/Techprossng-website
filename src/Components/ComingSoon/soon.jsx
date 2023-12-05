import React, { useState , useEffect , useRef } from "react";
import "../ComingSoon/Style/soon.css";
import { CgArrowLongRight } from "react-icons/cg";
import Time from "../../assets/images/Time.svg";
import emailjs from "@emailjs/browser";

function Soon() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(null);

  const emailRef = useRef(); 
  useEffect(() => emailjs.init("vwO4HaF8SUOUXS9-6"), []);


  const validation = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = "";
    if (!value) {
      error = "Enter an email address";
    } else if (!emailPattern.test(value)) {
      error = "This is not a valid email format";
    }
    return error;
  };

  const subscribeHandler = async (e) => {
    e.preventDefault();
    validation(email);
    try {
      const response = await fetch(
        "https://techprosnaija.com/api/v1/subscribers",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const serviceId = "service_vt8jufe";
        const templateId = "template_cek4prb";
        await emailjs.send(serviceId, templateId, {
          email: emailRef.current.value,
        });
      
        console.log("Successfully subscribed!");
        setEmail("");
        setErrors("Successfully Subscribed");
        setTimeout(() => {
          setErrors(null); // Clears the message after 3000 milliseconds (3 seconds)
        }, 3000);

      } else {
        console.error(
          "Failed to subscribe:",
          response.status,
          response.statusText
        );
        setErrors("Failed to Subscribed, please check the email entered");
        setTimeout(() => {
          setErrors(null); // Clears the message after 3000 milliseconds (3 seconds)
        }, 3000);
        // Handle error states or show an error message to the user
      }
    } catch (error) {
      console.error("Error subscribing:  ",  error.message);
      setErrors(
        "Network Error:" + error.message
      );
      setTimeout(() => {
        setErrors(null); // Clear the message after 3000 milliseconds (3 seconds)
      }, 3000);
      // Handle error states or show an error message to the user
    }
  };
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
          <form  onSubmit={subscribeHandler}>
          <div className="soon-search flex w-[100%] mt-5">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              ref={emailRef}
              type="email"
              placeholder="Enter your email"
              className="font-secondary font-light text-base"
            />
            <i className="fa-regular fa-envelope "></i>
            <button type="submit" className="font-secondary">Join Waitlist</button>
            <button type="submit" className="soon-button-2 mt-10 font-secondary">Join Waitlist</button>
          </div>
          </form>
          {errors && (
          <p
            style={{ color: errors.includes("Successfully") ? "green" : "red" }}
            className="mt-10">
            {errors}
          </p>
        )}
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
