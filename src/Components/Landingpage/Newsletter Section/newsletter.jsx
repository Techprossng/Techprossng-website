import React, { useState } from "react";
import "../Newsletter Section/Styles/newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(null);
  const validate = (value) => {
    isValid = true
    
  }
  const subscribeHandler = async (e) => {
    e.preventDefault()
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
        console.log("Successfully subscribed!");
        setEmail("")
        // You might want to update your UI or show a success message here
      } else {
        console.error(
          "Failed to subscribe:",
          response.status,
          response.statusText
        );
        // Handle error states or show an error message to the user
      }
    } catch (error) {
      console.error("Error subscribing:", error.message);
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

            type="email"
            placeholder="Enter your email address"
            data-aos="fade-down-left"
          />
          <i className="icon fa fa-envelope"></i>
          <button type="submit">Subscribe</button>
        </form>
        <div style={{color:"red"}}>
          {errors}
        </div>

        <form className="mobile-view">
          <p className="text-mobile font-primary">Enter your email address</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
              
            type="email"
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
            <a href="/coming-soon">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
