import React from "react";
import "./styles/services.css"
import online from "./images/online.png"
import mentorship from "./images/mentorship.png"


const Services = () => {
    return (
        //i want to create two cards each with an image, title and description
        <section className="services">
            <h4 className="header text-3xl font-medium text-center">
                OUR SERVICES
            </h4>
            <hr className="line"/>
            <div className="services-container flex justify-center items-center my-30 gap-20">   
                <div className="card flex flex-col justify-center items-center text-center">
                    <img src={online} alt="online-learning" />
                    <h5 className="title text-3xl font-semibold mb-5">Online Learning and Training</h5>
                    <p className="paragraph text-2xl font-medium">Our online programs offer flexible, up-to-date tech education, allowing you to learn at your pace. Engage with practical assignments, quizzes, and join a supportive community of learners and experts. Stay relevant in the ever-evolving tech world.</p>
                </div>

                <div className="card flex flex-col justify-center items-center text-center">
                    <img src={mentorship} alt="Mentorship" />
                    <h5 className="title text-3xl font-semibold mb-5">Mentorship</h5>
                    <p className="paragraph text-2xl font-medium">Unlock your tech career's full potential through our mentorship programs. Connect with experienced professionals for personalized guidance, career advice, and ongoing support. 
                    </p>
                </div>
            </div>
        </section>   
    );
    }

export default Services;