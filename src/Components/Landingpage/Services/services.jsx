import React from "react";
import "./fonts/CraftworkGrotesk-Regular.ttf";
import "./styles/services.css"
import online from "./images/online.png"
import mentorship from "./images/mentorship.png"


const Services = () => {
    return (
        //i want to create two cards each with an image, title and description
        <section className="services">
            <h4 className="header text-3xl font-medium text-center ">
                OUR SERVICES
            </h4>
            <hr className="line"/>
            <div className="services-container flex justify-center items-center my-10 gap-10">   
                <div className="card flex flex-col justify-center items-center text-center">
                    <img src={online} alt="online-learning" />
                    <h5 className="title text-3xl font-semibold mb-5">Online Learning and Training</h5>
                    <p className="paragraph text-2xl font-medium self-stretch">Lorem ipsum dolor sit amet consectetur. Ultrices mi tristique egestas accumsan. Tempus adipiscing.</p>
                </div>

                <div className="card flex flex-col justify-center items-center text-center">
                    <img src={mentorship} alt="Mentorship" />
                    <h5 className="title text-3xl font-semibold mb-5">Mentorship</h5>
                    <p className="paragraph text-2xl font-medium self-stretch ">Lorem ipsum dolor sit amet consectetur. Ultrices mi tristique egestas accumsan. Tempus adipiscing.</p>
                </div>
            </div>
        </section>   
    );
    }

export default Services;