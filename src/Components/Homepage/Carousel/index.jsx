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
        <SwiperSlide className="bg-[blue]">
          <div className="flex justify-around">
            <div
              className="flex flex-col border-rounded border-[#001975] border-2 p-5 m-5 shadow-xl w-4/6
            "
            >
              <h1 className="text-lg font-bold font-primary text-[#fff]">
                Top recommended
              </h1>
              <h1 className="text-2xl font-bold text-[#001975]">
                UI/UX Design
              </h1>
              <p
                className="text-[#656565] text-justify w-[500px] h-[100px] overflow-hidden
              "
              >
                "Join our UI/UX Design Course for a transformative learning
                experience. Master the art of creating intuitive user interfaces
                and delightful user experiences. Enroll now and shape the future
                of design!",
              </p>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <p className="text-[#656565]">2 months</p>
                  <p className="text-[#656565]">45 currently enrolled</p>
                  <p className="text-[#656565]">includes certificate</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#656565]">4.5 (56) Read Reviews</p>
                </div>
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

        <SwiperSlide>
          <div className="flex justify-around bg-[blue]">
            <div
              className="flex flex-col border-rounded border-[#001975] border-2 p-5 m-5 shadow-xl w-4/6
            "
            >
              <h1 className="text-lg font-bold font-primary text-[#fff]">
                Top courses
              </h1>
              <h1 className="text-2xl font-bold text-[#001975]">
                Web Development
              </h1>
              <p
                className="text-[#656565] text-justify w-[500px] h-[100px] overflow-hidden
              "
              >
                "Join our UI/UX Design Course for a transformative learning
                experience. Master the art of creating intuitive user interfaces
                and delightful user experiences. Enroll now and shape the future
                of design!",
              </p>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <p className="text-[#656565]">4 months</p>
                  <p className="text-[#656565]">45 currently enrolled</p>
                  <p className="text-[#656565]">includes certificate</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#656565]">4.5 (56) Read Reviews</p>
                </div>
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
