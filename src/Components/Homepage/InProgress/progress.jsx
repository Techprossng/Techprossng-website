import React from "react";
import image from "./images/imageprogress.svg";
import starfull from "./images/star.svg";
import starhalf from "./images/Vector.svg";
import watchlater from "./images/watch_later.svg";
import book from "./images/book.svg";
import arrow from "./images/arrow-right.svg";
import sharebutton from "./images/share.svg";
import Progressbar from "./progress-bar/Progressbar";
import "./styles/progress.css";

const Progress = () => {
  return (
    <section className="inprogress-container mt-20">
      <div className="progress mobile-inprogress sm:w-[100%] md:w-[100%] lg:w-[92%] p-5 bg-[#fff] text-[#00114E]">
        <h5 className="progress-title font-primary font-bold font-bold w-[143px] h-[36px]">
          In Progress
        </h5>
      </div>
      <div className="border-box-container p-5 bg-[#CCD1E3] sm:w-[100%] md:[89%] lg:w-[89%]">
        <div className="progress-container flex justify-between">
          <div className="total-mobile-view flex gap-5 sm:w-[100%] md:[80%] lg:w-[80%]">
            <div className="course-image-desktop">
              <img src={image} alt="inprogress image" />
            </div>
            <div className="info-container flex flex-col justify-between w-[100%]">
              <div className="flex mobile-container">
                <img
                  src={image}
                  alt="inprogress image"
                  className="mobile-view-image"
                />
                <div className="info flex flex-col w-[100%]">
                  <div className="mobile-view flex justify-between text-[#001975] font-secondary">
                    <strong>Introduction To Coding</strong>
                    <div>
                      <div className="flex items-start">
                        <img src={starfull} alt="full star image" />
                        <img src={starfull} alt="full star image" />
                        <img src={starfull} alt="full star image" />
                        <img src={starfull} alt="full star image" />
                        <img src={starhalf} alt="half start image" />
                        <div className="number-rating font-bold font-secondary text-[#FE0000]">
                          4.5
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <div className="watch-later flex gap-2">
                        <img src={watchlater} alt="viewlater" />
                        <span className="current-timing font-secondary font-medium text-[#272727] text-xs">
                          5 hours completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <Progressbar />
                <hr className="mt-3 mb-2" />
                <div className="mobile">
                  <div className="next-lesson font-bold text-xs">
                    Next Lesson
                  </div>
                  <div className="intro-mobile flex justify-between mt-2">
                    <div className="flex">
                      <img src={book} alt="book icon" />
                      <div className="course-title font-secondary font-bold  text-base text-[#272727]">
                        Introduction To Javascript and Typescript
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <img src={watchlater} alt="watchlater icon" />
                      <div className="time font-secondary text-base font-medium text-[#272727]">
                        50 Minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="continue-button flex flex-col justify-center gap-10">
            <div className="button-border flex justify-center items-center gap-2">
              <button className="btn text-[#fff] font-semibold text-sm font-secondary">
                Continue Course
              </button>
              <img src={arrow} alt="arrow right" />
            </div>
            <div className="flex justify-center gap-2">
              <img
                src={sharebutton}
                alt="share button"
                className="color-[#001975]"
              />
              <button className="font-bold font-secondary underline text-base">
                <a href="#" className="text-[#001975]">
                  Share Progress
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
