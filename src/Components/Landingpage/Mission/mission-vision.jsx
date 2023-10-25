import dartImage from "./images/dart-diagram.png";
import "./styles/mission.css";

const Mission = () => {
    return (
        <section className="mission-container flex justify-around">
            <div className="texts-container flex flex-col justify-center items-center gap-20">
                <div className="vision-container">
                    <h4 className="text-heading text-3xl font-primary mb-3 font-normal uppercase">Our Vision</h4>
                    <hr />
                    <p className="vision-paragraph text-base font-secondary font-medium">
                    TechProsNG aims to become Nigeria&apos;s premier EdTech institution by 2030. Our goal is to disseminate tech education throughout the nation, empowering a tech-savvy generation to drive the country&apos;s technological advancement. 
                    </p>
                </div>

                <div className="mission-container" data-aos="fade-up">
                    <h4 className="text-heading text-3xl font-primary mb-3 font-normal uppercase">Our Mission</h4>
                    <hr />
                    <p className="mission-paragraph text-base font-secondary font-medium">
                    TechProsNG is dedicated to championing digital literacy and tech proficiency in Nigeria&apos;s education and workforce. We offer accessible, relevant tech education to empower students and professionals in an evolving digital landscape, fostering a tech-savvy future, one learner at a time.
                    </p>
                </div>    
            </div>

            <div className="mission-image mt-3 mb-5" data-aos="zoom-in">
                <img src={dartImage} alt="dart image" />
            </div>
        </section>
    )
}

export default Mission;