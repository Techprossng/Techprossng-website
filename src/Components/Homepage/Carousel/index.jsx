import React from "react";
import img from "../../../assets/images/home-image.png";
// import img1 from "../../../assets/images/image6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
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
            <div className="flex flex-col p-[2rem] m-[3rem] shadow-xl w-4/6">
              <h1 className="text-lg font-bold font-primary text-[#FE0000]">
                Top recommended
              </h1>
              <h1 className="text-6xl font-black leading-[76.8px] font-primary text-[#AAB2D1]">
                UI/UX Design
              </h1>
              <p className="text-[#fff] text-justify w-[647px] h-[72px] overflow-hidden font-medium text-base mt-5">
                Join our UI/UX Design Course for a transformative learning
                experience. Master the art of creating intuitive user interfaces
                and delightful user experiences. Enroll now and shape the future
                of design!
              </p>
              <div className="flex flex-col mt-5">
                <div className="flex flex-col">
                  <p className="text-[#fff] text-base font-bold font-secondary">
                    3 months
                  </p>
                  <p className="text-[#fff] text-base font-bold font-secondary">
                    45 currently enrolled
                  </p>
                  <p className="text-[#fff] text-base font-bold font-secondary">
                    includes certificate
                  </p>
                </div>
                <div className="flex gap-1">
                  <figure className="text-[#fff] text-base font-bold font-secondary">
                    4.5
                  </figure>
                  <figure className="text-[#FE0000]">(56) Read Reviews</figure>
                </div>
              </div>
              <div className="flex items-center gap-7 w-[70%] mt-5">
                <button className="px-10 py-5 bg-[#FC0606] text-[#fff] font-bold text-base">
                  Start Courses
                </button>
                <span className=" flex text-[#fff] font-bold text-base">
                  Save For Later
                </span>
              </div>
            </div>

            <div
              className="flex flex-col w-2/6 object-cover
            "
            >
              <img src={img} alt="image" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[#000517]">
          <div className="flex justify-around">
            <div className="flex flex-col border-rounded border-[#001975] border-2 p-[2rem] m-[3rem] shadow-xl w-4/6">
              <h1 className="text-lg font-bold font-primary text-[#FE0000]">
                New Additions
              </h1>
              <h1 className="text-6xl font-black leading-[76.8px] font-primary text-[#AAB2D1]">
                Cyber-security
              </h1>
              <p className="text-[#fff] text-justify w-[647px] h-[72px] overflow-hidden font-medium text-base mt-5">
                Join our UI/UX Design Course for a transformative learning
                experience. Master the art of creating intuitive user interfaces
                and delightful user experiences. Enroll now and shape the future
                of design!
              </p>
              <div className="flex flex-col mt-5">
                <div className="flex flex-col">
                  <p className="text-[#fff] text-base font-bold font-secondary">
                    4 months
                  </p>
                  <p className="text-[#fff] text-base font-bold font-secondary">
                    15 currently enrolled
                  </p>
                  <p className="text-[#fff] text-base font-bold font-secondary">
                    includes certificate
                  </p>
                </div>
                <div className="flex gap-1">
                  <figure className="text-[#fff] text-base font-bold font-secondary">
                    4.8
                  </figure>
                  <figure className="text-[#FE0000]">(56) Read Reviews</figure>
                </div>
              </div>
              <div className="flex items-center gap-7 w-[70%] mt-5">
                <button className="px-10 py-5 bg-[#FC0606] text-[#fff] font-bold text-base">
                  Start Courses
                </button>
                <span className=" flex text-[#fff] font-bold text-base">
                  Save For Later
                </span>
              </div>
            </div>
            <div
              className="flex flex-col w-2/6 object-cover
            "
            >
              <img src={img} alt="image" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default index;
