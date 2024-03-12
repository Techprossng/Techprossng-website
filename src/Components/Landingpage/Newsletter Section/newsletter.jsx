import React, { useState , useEffect , useRef } from "react";
import "../Newsletter Section/Styles/newsletter.css";
import emailjs from "@emailjs/browser";


function Newsletter() {
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
    <div>
      <div className="news-box font-primary">
        <h1> Would you like to stay updated?</h1>
        <h4 className="font-primary">Subscribe to our newsletter.</h4>
        <form
          onSubmit={subscribeHandler}
          className="email"
          data-aos="fade-right"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            ref={emailRef}
            type="email"
            placeholder="Enter your email address"
            data-aos="fade-down-left"
          />
          <i className="icon fa fa-envelope"></i>
          <button type="submit">Subscribe</button>
        </form>
        {errors && (
          <p
            style={{ color: errors.includes("Successfully") ? "green" : "red" }}
          >
            {errors}
          </p>
        )}

        <form onSubmit={subscribeHandler} className="mobile-view">
          <p className="text-mobile font-primary">Enter your email address</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            ref={emailRef}
            placeholder="Email"
            data-aos="fade-down-left"
            className="
          border-2 rounded-[16px] w-[90%]
          "
          />
          <div className="mobile-button">
            <button type="submit">Subscribe</button>
          </div>
        </form>
        <div className="font-secondary flex justify-center">
          <p data-aos="fade-up ">
            We are committed to your privacy. TechProsNaija uses the information
            you provide to us to contact you about our relevant content,
            products and services. You may unsubscribe from these communication
            at any time. For more information, check our{" "}
            <a href="09068875239">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
