import React from "react";
import dartImage from "./images/dart-diagram.png";
import "./styles/mission.css";

const Mission = () => {
    return (
        <section className="mission-container flex justify-around">
            <div className="texts-container flex flex-col justify-center items-center gap-20">
                <div className="vision-container">
                    <h4 className="heading text-3xl font-normal mb-3">Our Vision</h4>
                    <hr />
                    <p className="paragraph text-base font-medium">
                    TechProsNG aims to become Nigeria's premier EdTech institution by 2030. Our goal is to disseminate tech education throughout the nation, empowering a tech-savvy generation to drive the country's technological advancement.
                    </p>
                </div>

                <div className="mission-container">
                    <h4 className="heading text-3xl font-normal mb-3">Our Mission</h4>
                    <hr />
                    <p className="paragraph text-base font-medium">
                    TechProsNG is dedicated to championing digital literacy and tech proficiency in Nigeria's education and workforce. We offer accessible, relevant tech education to empower students and professionals in an evolving digital landscape, fostering a tech-savvy future, one learner at a time.
                    </p>
                </div>    
            </div>

            <div className="mission-image mt-3 mb-3">
                <img src={dartImage} alt="dart image" />
            </div>
        </section>
    )
}

export default Mission;