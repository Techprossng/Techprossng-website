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
                  Industry-Relevant Projects:
                </h5>
              </div>
              <div className="image-text-holder flex justify-between">
                <p className="text-sm font-semibold">
                  Work on real-world projects that simulate the challenges encountered in tech roles. 
                </p>
                <img src={Books} alt="picture of books" className="benefit-photos w-[45%] flex justify-center items-center"/>
              </div>
            </div>
            <div className="benefit-card-2 text-[#000] flex flex-col gap-3">
              <div>
                <h5 className="text-base font-primary font-bold">
                  Mentorship Opportunities:
                </h5>
              </div>
              <div className="image-text-holder flex justify-between">
                <p className="text-sm font-semibold">
                  Receive guidance from experienced mentors in the tech field for personalized support.
                </p>
                <img src={Teacher} alt="picture of books" className="benefit-photos w-[33%]"/>
              </div>
            </div>
          </div>
          <div className="benefit-card-tray flex gap-5">
            <div className="benefit-card-2 text-[#000] flex flex-col gap-3">
              <div>
                <h5 className="text-base font-primary font-bold">
                  Certification for Recognition:
                </h5>
              </div>
              <div className="image-text-holder flex justify-between">
                <p className="text-sm font-semibold">
                  Earn a recognized certification upon completion, enhancing your credibility in the job market.
                </p>
                <img src={Graduation} alt="picture of books" className="benefit-photos w-[45%]"/>
              </div>
            </div>
            <div className="benefit-card text-[#000] flex flex-col gap-3">
              <div>
                <h5 className="text-base font-primary font-bold">
                  Access to Tech Communities:
                </h5>
              </div>
              <div className="image-text-holder flex justify-between">
                <p className="text-sm font-semibold">
                  Join tech communities and forums to stay updated on industry trends and connect with like-minded individuals.
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
