import React from "react";
import "../Benefits/Style/Benefit.css";
import Books from "../Benefits/Images/books.svg";
import Graduation from "../Benefits/Images/graduation.svg";
import Teacher from "../Benefits/Images/teacher.svg";
import Network from "../Benefits/Images/network.svg";

function BenefitBootcamp() {
  return (
    <div className="bg-[#001975]">
      <div className="text-[#fff] flex flex-col items-center p-20 gap-9">
        <div className="benefit-title text-center flex gap-2">
          <h5 className="text-5xl font-secondary font-normal">
            Bootcamp Benefits
          </h5>
        </div>
        <div>
          <p className="text-sm text-center font-secondary font-normal">
            Unlock boundless opportunities for professional growth and success
            by enrolling in the upcoming <br /> TechProsNaija Bootcamp, where
            immersive learning, expert mentorship, and hands-on experience
            <br />
            converge to propel your career in the dynamic world of technology
          </p>
        </div>
        <div className="benefit-card-holder flex flex-col gap-5 px-3">
          <div className="benefit-card-tray flex gap-5">
            <div className="benefit-card text-[#000] flex flex-col gap-3">
              <div>
                <h5 className="text-base font-primary font-bold">
                  Access to Study Materials / Resources
                </h5>
              </div>
              <div className="image-text-holder flex justify-between">
                <p className="text-sm font-semibold">
                  Equip yourself for success with comprehensive and
                  industry-relevant study materials provided at the upcoming
                  TechProsNaija Bootcamp, ensuring a robust foundation for your
                  learning journey.
                </p>
                <img src={Books} alt="picture of books" className="benefit-photos w-[45%] flex justify-center items-center"/>
              </div>
            </div>
            <div className="benefit-card-2 text-[#000] flex flex-col gap-3">
              <div>
                <h5 className="text-base font-primary font-bold">
                  Best Tutors
                </h5>
              </div>
              <div className="image-text-holder flex justify-between">
                <p className="text-sm font-semibold">
                Experience unparalleled learning with the best 
                tutors at your disposal throughout the upcoming 
                TechProsNaija Bootcamp, ensuring personalized 
                guidance and expertise to maximize your educational 
                journey.
                </p>
                <img src={Teacher} alt="picture of books" className="benefit-photos w-[33%]"/>
              </div>
            </div>
          </div>
          <div className="benefit-card-tray flex gap-5">
            <div className="benefit-card-2 text-[#000] flex flex-col gap-3">
              <div>
                <h5 className="text-base font-primary font-bold">
                  Bootcamp Certification
                </h5>
              </div>
              <div className="image-text-holder flex justify-between">
                <p className="text-sm font-semibold">
                Upon successful completion of the TechProsNaija Bootcamp, 
                you will be awarded a prestigious certificate, 
                validating your mastery of cutting-edge skills 
                and signaling your readiness for impactful contributions 
                in the tech industry.
                </p>
                <img src={Graduation} alt="picture of books" className="benefit-photos w-[45%]"/>
              </div>
            </div>
            <div className="benefit-card text-[#000] flex flex-col gap-3">
              <div>
                <h5 className="text-base font-primary font-bold">
                  Access to Student Community & Networking
                </h5>
              </div>
              <div className="image-text-holder flex justify-between">
                <p className="text-sm font-semibold">
                Forge invaluable connections and amplify your 
                professional network through interactive sessions 
                and collaborative opportunities at the upcoming 
                TechProsNaija Bootcamp, where networking becomes 
                an integral part of your transformative learning 
                experience.
                </p>
                <img src={Network} alt="picture of books" className="benefit-photos w-[45%]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitBootcamp;
