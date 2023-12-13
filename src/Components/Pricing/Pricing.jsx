import React from 'react';
import "../Pricing/Style/Pricing.css"
import CourseCard from "../../assets/images/coursecard.png"
import RatingStar from "../../assets/images/catalog-img/rating-stars.png"
import { MdOutlineBookmarks } from "react-icons/md";

const Pricing = () => {
  return (
    <>
      <div className="pricing-section mt-48">
        <div>
          <div className="pricing-title flex flex-col justify-center items-center gap-4 my-8">
            <h3 className='font-primary font-bold text-5xl'>
              Pricing
            </h3>
            <p className='font-secondary font-normal text-base text-[#555555] w-[684px] h-[38px]'>
              Lorem ipsum dolor sit amet consectetur. Lobortis condimentum proin tempus et urna imperdiet ullamcorper placerat lacus.
            </p>
          </div>
          <div className='pricing-card-house flex justify-center items-center gap-8 pb-7'>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    UI/UX Advanced for Professionals
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Design user interfaces that not only look great but also provide seamless and intuitive experiences for users..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N250,000</button>
                </div>
              </div>
            </div>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Back-end Development
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Build robust server-side applications and databases to power dynamic and scalable websites..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N200,000</button>
                </div>
              </div>
            </div>
          </div>
          <div className='pricing-card-house flex justify-center items-center gap-8 pb-7'>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Front-end Development
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Craft engaging user interfaces with HTML, CSS, and JavaScript for seamless web experiences..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N150,000</button>
                </div>
              </div>
            </div>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Full Stack Development
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Master frontend and backend technologies, create end-to-end solutions for dynamic web applications..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N250,000</button>
                </div>
              </div>
            </div>
          </div>
          <div className='pricing-card-house flex justify-center items-center gap-8 pb-7'>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Digital Marketing & SEO
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Strategize online campaigns, optimize SEO for brand promotion and audience engagement..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N60,000</button>
                </div>
              </div>
            </div>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Cybersecurity
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Safeguard digital assets with expertise in cybersecurity measures and threat prevention..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N250,000</button>
                </div>
              </div>
            </div>
          </div>
          <div className='pricing-card-house flex justify-center items-center gap-8 pb-7'>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Data Analytics
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Extract insights from data to drive informed decision-making and business strategies..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N150,000</button>
                </div>
              </div>
            </div>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Product Management
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Product management is an organizational function that guides every step of a product's lifecycle..               </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N200,000</button>
                </div>
              </div>
            </div>
          </div>
          <div className='pricing-card-house flex justify-center items-center gap-8 pb-7'>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Content / Copywriting Marketing
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Design user interfaces that not only look great but also provide seamless and intuitive experiences for users..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N80,000</button>
                </div>
              </div>
            </div>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Creative Design
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Build robust server-side applications and databases to power dynamic and scalable websites..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N150,000</button>
                </div>
              </div>
            </div>
          </div>
          <div className='pricing-card-house flex justify-center items-center gap-8 pb-7'>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Data Science
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Craft engaging user interfaces with HTML, CSS, and JavaScript for seamless web experiences..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N150,000</button>
                </div>
              </div>
            </div>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Microsoft for Complete Beginners
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Master frontend and backend technologies, create end-to-end solutions for dynamic web applications..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N50,000</button>
                </div>
              </div>
            </div>
          </div>
          <div className='pricing-card-house flex justify-center items-center gap-8 pb-7'>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Mobile App Development
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Strategize online campaigns, optimize SEO for brand promotion and audience engagement..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N200,000</button>
                </div>
              </div>
            </div>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Social Media Management
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Safeguard digital assets with expertise in cybersecurity measures and threat prevention..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N60,000</button>
                </div>
              </div>
            </div>
          </div>
          <div className='pricing-card-house flex justify-center items-center gap-8 pb-7'>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    Web Development
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Strategize online campaigns, optimize SEO for brand promotion and audience engagement..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N100,000</button>
                </div>
              </div>
            </div>
            <div>
              <div className='rounded-2xl'>
                <div>
                  <img src={CourseCard} alt="course image" className='rounded-lg'/>
                </div>
                <div className='py-3 px-4'>
                  <h5 className='font-primary font-bold text-2xl text-[#001975] w-[528px] h-[29px] pb-2'>
                    UI/UX Design for Beginners
                  </h5>
                  <p className='font-secondary font-medium text-base text-[#656565] w-[528px] h-[42px]'>
                    Safeguard digital assets with expertise in cybersecurity measures and threat prevention..
                  </p>
                </div>
                <div className='flex gap-2 py-2 px-4'>
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
                <div className='flex gap-2 py-2 px-4'>
                  <button type='submit' className='course-add-to-list flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'><MdOutlineBookmarks />Add To List</button>
                  <button type='submit' className='course-pay flex justify-center items-center font-secondary font-semibold text-sm rounded-lg w-[260px] h-[44px]'>N100,000</button>
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
