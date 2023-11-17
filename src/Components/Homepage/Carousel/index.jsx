import React from "react";
import ui from "../../../assets/images/home-image.png";
import cybersecurity from "../../../assets/images/cyber.png";
import game from "../../../assets/images/game-dev.png";
import content from "../../../assets/images/content-marketing.png";
import time from "../../../assets/icons/Vectortime.svg";
import enrolled from "../../../assets/icons/person.svg";
import certificate from "../../../assets/icons/schoolcerti.svg";
import bookmark from "../../../assets/icons/bookmark.svg";
import star from "../../../assets/icons/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import "./styles/style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// export const announcements = [
//   {
//     header: "Top recommended",
//     title: "UI/UX Design",
//     description:
//       "Join our UI/UX Design Course for a transformative learning experience. Master the art of creating intuitive user interfaces and delightful user experiences. Enroll now and shape the future of design!",
//     time: "2 months",
//     enrolled: "45 currently enrolled",
//     certificate: "includes certificate",
//     rating: "4.5 (56) Read Reviews",
//     image: img,
//   },

//   {
//     header: "Top course",
//     title: "Web Development",
//     description:
//       "Join our UI/UX Design Course for a transformative learning experience. Master the art of creating intuitive user interfaces and delightful user experiences. Enroll now and shape the future of design!",
//     time: "2 months",
//     enrolled: "45 currently enrolled",
//     certificate: "includes certificate",
//     rating: "4.5 (56) Read Reviews",
//     image: img1,
//   },

//   {
//     header: "Top recommended",
//     title: "UI/UX Design",
//     description:
//       "Join our UI/UX Design Course for a transformative learning experience. Master the art of creating intuitive user interfaces and delightful user experiences. Enroll now and shape the future of design!",
//     time: "2 months",
//     enrolled: "45 currently enrolled",
//     certificate: "includes certificate",
//     rating: "4.5 (56) Read Reviews",
//     image: img,
//   },

//   {
//     header: "Top recommended",
//     title: "UI/UX Design",
//     description:
//       "Join our UI/UX Design Course for a transformative learning experience. Master the art of creating intuitive user interfaces and delightful user experiences. Enroll now and shape the future of design!",
//     time: "2 months",
//     enrolled: "45 currently enrolled",
//     certificate: "includes certificate",
//     rating: "4.5 (56) Read Reviews",
//     image: img,
//   },
// ];

const index = () => {
  return (
    <div className=" mt-24">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        //cant i set the fading duration here?
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className="bg-[#000517]">
          <div className="flex justify-around">
            <div
              className="flex flex-col justify-start sm:p-1 m-1 md:p-[2rem] m-[3rem] shadow-xl w-4/6 
            ui-ux-image bg-[#000517]
            "
            >
              <h1 className="text-lg font-bold font-primary text-[#FE0000]">
                Top recommended
              </h1>
              <h1 className="text-6xl font-black leading-[76.8px] font-primary text-[#AAB2D1]">
                UI/UX Design
              </h1>
              <p className="text-[#fff] text-justify overflow-hidden font-medium text-base mt-5">
                Join our UI/UX Design Course for a transformative learning
                experience. Master the art of creating intuitive user interfaces
                and delightful user experiences. Enroll now and shape the future
                of design!
              </p>
              <div className="flex flex-col mt-5">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={time} alt="time" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      3 months
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={enrolled} alt="enrolled" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      45 currently enrolled
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={certificate} alt="certificate" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      includes certificate
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <i>
                    <img src={star} alt="full star" />
                  </i>
                  <figure className="text-[#fff] text-base font-bold font-secondary">
                    4.5
                  </figure>
                  <figure className="text-[#FE0000]">(56) Read Reviews</figure>
                </div>
              </div>
              <div className="flex items-center gap-7 mt-5">
                <button className="px-10 py-5 bg-[#FC0606] text-[#fff] font-bold text-base">
                  Start Courses
                </button>
                <div className="flex gap-2">
                  <i>
                    <img src={bookmark} alt="save" />
                  </i>
                  <span className=" flex text-[#fff] font-bold text-base underline">
                    Save For Later
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-2/6 object-cover home-image">
              <img src={ui} alt="image" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[#000517]">
          <div className="flex justify-around">
            <div className="flex flex-col justify-start sm:p-1 m-1 md:p-[2rem] m-[3rem] shadow-xl w-4/6 cyber-image bg-[#000517]">
              <h1 className="text-lg font-bold font-primary text-[#FE0000]">
                New Additions
              </h1>
              <h1 className="text-6xl font-black leading-[76.8px] font-primary text-[#AAB2D1]">
                Cyber-security
              </h1>
              <p className="text-[#fff] text-justify overflow-hidden font-medium text-base mt-5">
                In a world where data is king, protect it like royalty. Dive
                into the world of cybersecurity with our comprehensive course.
                Learn to safeguard networks, defend against threats, and become
                the guardian of digital realms. Your cybersecurity journey
                starts here.
              </p>
              <div className="flex flex-col mt-5">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={time} alt="time" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      4 months
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={enrolled} alt="enrolled" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      15 currently enrolled
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={certificate} alt="certificate" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      includes certificate
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <i>
                    <img src={star} alt="full star" />
                  </i>
                  <figure className="text-[#fff] text-base font-bold font-secondary">
                    4.8
                  </figure>
                  <figure className="text-[#FE0000]">(5) Read Reviews</figure>
                </div>
              </div>
              <div className="flex items-center gap-7 mt-5">
                <button className="px-10 py-5 bg-[#FC0606] text-[#fff] font-bold text-base">
                  Start Courses
                </button>
                <div className="flex gap-2">
                  <i>
                    <img src={bookmark} alt="save" />
                  </i>
                  <span className=" flex text-[#fff] font-bold text-base underline">
                    Save For Later
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-2/6 object-cover home-image">
              <img src={cybersecurity} alt="image" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#000517]">
          <div className="flex justify-around">
            <div className="flex flex-col justify-start sm:p-1 m-1 md:p-[2rem] m-[3rem] shadow-xl w-4/6 game-image bg-[#000517]">
              <h1 className="text-lg font-bold font-primary text-[#FE0000]">
                New Additions
              </h1>
              <h1 className="text-5xl font-black leading-[76.8px] font-primary text-[#AAB2D1]">
                Game Development
              </h1>
              <p className="text-[#fff] text-justify overflow-hidden font-medium text-base mt-5">
                Turn your passion for gaming into a career! Explore the world of
                game design, programming, and storytelling. Create captivating
                virtual worlds and interactive experiences. Enroll now and start
                your journey to becoming a game development pro
              </p>
              <div className="flex flex-col mt-5">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={time} alt="time" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      5 months
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={enrolled} alt="enrolled" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      19 currently enrolled
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={certificate} alt="certificate" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      includes certificate
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <i>
                    <img src={star} alt="full star" />
                  </i>
                  <figure className="text-[#fff] text-base font-bold font-secondary">
                    4.7
                  </figure>
                  <figure className="text-[#FE0000]">(7) Read Reviews</figure>
                </div>
              </div>
              <div className="flex items-center gap-7 mt-5">
                <button className="px-10 py-5 bg-[#FC0606] text-[#fff] font-bold text-base">
                  Start Courses
                </button>
                <div className="flex gap-2">
                  <i>
                    <img src={bookmark} alt="save" />
                  </i>
                  <span className=" flex text-[#fff] font-bold text-base underline">
                    Save For Later
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-2/6 object-cover home-image">
              <img src={game} alt="image" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#000517]">
          <div className="flex justify-around">
            <div className="flex flex-col justify-start sm:p-1 m-1 md:p-[2rem] m-[3rem] shadow-xl w-4/6 content-image bg-[#000517]">
              <h1 className="text-lg font-bold font-primary text-[#FE0000]">
                New Additions
              </h1>
              <h1 className="text-6xl font-black leading-[76.8px] font-primary text-[#AAB2D1]">
                Content Marketing Course
              </h1>
              <p className="text-[#fff] text-justify overflow-hidden font-medium text-base mt-5">
                Craft compelling stories, boost brand visibility, and drive
                results with our Content Marketing Course. Dive into the art of
                creating content that resonates and converts. Join us now and
                master the tools of the trade!"
              </p>
              <div className="flex flex-col mt-5">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={time} alt="time" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      2 months
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={enrolled} alt="enrolled" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      46 currently enrolled
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i>
                      <img src={certificate} alt="certificate" />
                    </i>
                    <p className="text-[#fff] text-base font-bold font-secondary">
                      includes certificate
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <i>
                    <img src={star} alt="full star" />
                  </i>
                  <figure className="text-[#fff] text-base font-bold font-secondary">
                    4.4
                  </figure>
                  <figure className="text-[#FE0000]">(23) Read Reviews</figure>
                </div>
              </div>
              <div className="flex items-center gap-7 mt-5">
                <button className="px-10 py-5 bg-[#FC0606] text-[#fff] font-bold text-base">
                  Start Courses
                </button>
                <div className="flex gap-2">
                  <i>
                    <img src={bookmark} alt="save" />
                  </i>
                  <span className=" flex text-[#fff] font-bold text-base underline">
                    Save For Later
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-2/6 object-cover home-image">
              <img src={content} alt="image" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default index;
