import React from "react";
import "./fonts/CraftworkGrotesk-Regular.ttf"
import dartImage from "./images/dart-diagram.png";
import "./styles/mission.css";

const Mission = () => {
    return (
        <section className="mission-container flex justify-around">
            <div className="texts-container flex flex-col justify-center items-center gap-20 ">
                <div className="vision-container">
                    <h4 className="heading text-3xl font-normal mb-3">Our Vision</h4>
                    <hr />
                    <p className="paragraph text-base font-medium">
                        Lorem ipsum dolor sit amet consectetur. Sollicitudin 
                        sed nisl vulputate consequat placerat. Risus enim lectus.
                    </p>
                </div>

                <div className="mission-container">
                    <h4 className="heading text-3xl font-normal mb-3">Our Mission</h4>
                    <hr />
                    <p className="paragraph text-base font-medium">
                        Lorem ipsum dolor sit amet consectetur. Sollicitudin 
                        sed nisl vulputate consequat placerat. Risus enim lectus.
                    </p>
                </div>    
            </div>

            <div className="mission-image">
                <img src={dartImage} alt="dart image" />
            </div>
        </section>
    )
}

export default Mission;