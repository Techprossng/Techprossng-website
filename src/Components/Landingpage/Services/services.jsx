import React from "react";
import "./styles/services.css";
import online from "./images/online.png";
import mentorship from "./images/mentorship.png";
import "aos";

const Services = () => {
  return (
    //i want to create two cards each with an image, title and description
    <section className="services flex flex-col items-center justify-center">
      <div>
        <h4 className="sm:flex items-center md:text-3xl ml-24 mr-24 lg:text-3xl ml-24 mr-24" style={{ color: "#272727" }}>
          OUR SERVICES
        </h4>
        <div
          style={{ backgroundColor: "#2B3F8C" }}
          className="w-16 h-1 rounded-xl ml-24 mr-24 mt-1 mb-3"
        ></div>
      </div>
      <div className="services-container md:flex justify-center items-center my-30 gap-20 lg:flex justify-center items-center my-30 gap-20">
        <div className="card lg:flex flex-col justify-center items-center text-center" data-aos="fade-right">
          <img src={online} alt="online-learning" />
          <h5 className="title text-3xl font-primary mb-5">
            Online Learning and Training
          </h5>
          <p className="paragraph text-2xl font-secondary">
            Our online programs offer flexible, up-to-date tech education,
            allowing you to learn at your pace. Engage with practical
            assignments, quizzes, and join a supportive community of learners
            and experts.
          </p>
        </div>

        <div className="card flex flex-col justify-center items-center text-center" data-aos="fade-left">
          <img src={mentorship} alt="Mentorship" />
          <h5 className="title text-3xl font-primary mb-5">Mentorship</h5>
          <p className="paragraph text-2xl font-secondary">
            Unlock your tech career's full potential through our mentorship
            programs. Connect with experienced professionals for personalized
            guidance, career advice, and ongoing support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
