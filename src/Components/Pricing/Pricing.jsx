import React from 'react';
import CourseCard from "../../assets/images/coursecard.png"
import RatingStar from "../../assets/images/catalog-img/rating-stars.png"
import { MdOutlineBookmarks } from "react-icons/md";

const Pricing = () => {
  return (
    <>
      <div className="pricing-section mt-48">
        <div>
          <div className="pricing-title flex flex-col justify-center items-center gap-4 my-8">
            <h3 className='font-primary font-normal text-5xl'>
              Pricing
            </h3>
            <p className='font-secondary font-normal text-base text-[#555555] w-[684px] h-[38px]'>
              Lorem ipsum dolor sit amet consectetur. Lobortis condimentum proin tempus et urna imperdiet ullamcorper placerat lacus.
            </p>
          </div>
          <div className='pricing-card-house'>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" />
                </div>
                <div>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px]'>
                    UI/UX Design
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Design user interfaces that not only look great but also provide seamless and intuitive experiences for users.
                  </p>
                </div>
                <div className='flex gap-2'>
                  <div className='flex gap-1'>
                    <img src={RatingStar} alt="" />
                    <img src={RatingStar} alt="" />
                    <img src={RatingStar} alt="" />
                    <img src={RatingStar} alt="" />
                    <img src={RatingStar} alt="" />
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <p className='font-primary font-medium text-base'>
                      5.0
                    </p>
                    <p className='font-primary font-bold text-xs'>
                      (3)
                    </p>
                  </div>
                </div>
                <div>
                  <button type='submit' className='courseflex items-center'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='flex items-center'><MdOutlineBookmarks />N5,000</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
