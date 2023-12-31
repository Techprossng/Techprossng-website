import React from 'react';
import cta from "../../../assets/images/cta_image.png";

export default function CTA() {
  return (
    <section className="p-[48px_128px] max-[375px]:px-[1.5rem] max-[768px]:px-[2rem]">
      <div className="flex flex-col sm:flex-row gap-[40px] justify-between sm:items-center">
        <div className="space-y-[32px]" data-aos="fade">
          <div className="text-[32px] md:text-[42px] leading-[48px] font-semibold">
            Take that step <br className="hidden sm:block" /> with TechProsNaija!
          </div>
          <button className="rounded-[20px] bg-[#FE0000] outline-none text-white p-[18px_24px] justify-center items-center hidden sm:flex">
            <a href="/course-catalogue" className="flex">
              <p className="w-[190px]">See Courses</p>
            </a>
          </button>
        </div>
        <div data-aos="zoom-in" className="text-center">
          <img src={cta} className="sm:w-fit w-full" />
        </div>
        <div className="block sm:hidden">
          <button className="rounded-[20px] bg-[#FE0000] outline-none text-white p-[18px_24px]  flex justify-center items-center w-full sm:w-fit">
            <a href="/course-catalogue" className="flex">
              <p className="w-[190px]">See Courses</p>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
