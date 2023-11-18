import React from "react";
import Newsletter from "../../Components/Landingpage/Newsletter Section/newsletter";
import TechProsNaija from "../../assets/images/TechProsNaija.png"
import CoffeeSplash from "../../assets/images/coffee_unsplash.png"
import BlogBooks from "../../assets/images/blog_books.png"
import BlogTrees from "../../assets/images/blog_trees.png"

export default function BlogPage() {
  return (
    <section className="mt-24 p-[46px_128px] max-[375px]:px-[1.5rem] max-[1080px]:px-[2rem]">
      {/* header section */}
      <header className="mb-[96px]">
        <img src={TechProsNaija} className="mb-[64px]"/>
        <p className="text-[48px] max-[768px]:text-[40px] font-extrabold text-[#272727] mb-[16px]">Lorem ipsum dolor sit amet consectetur. Et in vitae fringilla.</p>
        <p className="text-[17px] font-bold text-[#656565] mb-[32px]">
          Lorem ipsum dolor sit amet consectetur. Lacus non morbi tempus diam magna. Pretium gravida enim justo porttitor at. Habitant viverra vehicula duis congue augue tincidunt feugiat tempus. Mauris ornare eu mi diam.
        </p>
        <p className="space-x-[16px]">
          <span className="text-[24px] font-extrabold text-[#272727] mb-[16px]">
            Omolara Jaiyeola
          </span>
          <span className="text-[17px] font-bold text-[#656565]">
            November 17, 2023
          </span>
        </p>
      </header>
      
      {/* image unsplash caption section*/}
      <section>
        <img src={CoffeeSplash} className="mb-[24px]"/>
        {/* caption */}
        <p className="flex items-center gap-x-[8px] max-[480px]:text-[12px] flex-wrap">
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
              <path id="Vector" d="M10.875 1H7.125L5.25 3.25H3C2.60218 3.25 2.22064 3.40804 1.93934 3.68934C1.65804 3.97064 1.5 4.35218 1.5 4.75V11.5C1.5 11.8978 1.65804 12.2794 1.93934 12.5607C2.22064 12.842 2.60218 13 3 13H15C15.3978 13 15.7794 12.842 16.0607 12.5607C16.342 12.2794 16.5 11.8978 16.5 11.5V4.75C16.5 4.35218 16.342 3.97064 16.0607 3.68934C15.7794 3.40804 15.3978 3.25 15 3.25H12.75L10.875 1Z" stroke="#2B3F8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_2" d="M9 10C10.2426 10 11.25 8.99264 11.25 7.75C11.25 6.50736 10.2426 5.5 9 5.5C7.75736 5.5 6.75 6.50736 6.75 7.75C6.75 8.99264 7.75736 10 9 10Z" stroke="#2B3F8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <span className="font-secondary text-[#656565] font-medium">Image credits:</span>
          <span className="flex font-secondary font-medium gap-x-[4px]">
            <p className="text-[#2B3F8C]">TsHAuw</p>
            <p className="text-[#656565]">/ Getty Images</p>
          </span>
        </p>
      </section>

      {/* body content section */}
      <section className="p-[64px_100px] max-[768px]:px-0 space-y-[32px] font-secondary text-[#272727]">
        <header className="flex gap-x-[8px] items-center max-[480px]:items-start">
          <p className="text-[96px] font-black font-primary">W</p>
          <p>Lorem ipsum dolor sit amet consectetur. Ac amet sit ut morbi magnis purus lorem vestibulum. Scelerisque eu vitae amet rhoncus cursus etiam. Dictumst duis ut massa dui in lectus. Netus vestibulum ullamcorper purus nunc odio. </p>
        </header>
        <div className="flex gap-x-[8px] items-center">
          <p >Lorem ipsum dolor sit amet consectetur. Pulvinar gravida ultrices ornare risus non auctor dui donec tempor. Tempor hendrerit vitae suspendisse diam ante. Arcu placerat non adipiscing amet in nec id ultrices. Nibh scelerisque sit enim volutpat in ac. Facilisis praesent purus morbi ornare habitant proin risus at volutpat. Sodales ac imperdiet risus nam mauris. Diam quis ac phasellus imperdiet risus nunc at cum lorem. Posuere quis lacus ultricies viverra ipsum sed pretium. Sit.</p>
        </div>
        <div className="flex gap-x-[8px] items-center">
          <p >Lorem ipsum dolor sit amet consectetur. Pulvinar gravida ultrices ornare risus non auctor dui donec tempor. Tempor hendrerit vitae suspendisse diam ante. Arcu placerat non adipiscing amet in nec id ultrices. Nibh scelerisque sit enim volutpat in ac. Facilisis praesent purus morbi ornare habitant proin risus at volutpat. Sodales ac imperdiet risus nam mauris. Diam quis ac phasellus imperdiet risus nunc at cum lorem. Posuere quis lacus ultricies viverra ipsum sed pretium. Sit.</p>
        </div>
        <div className="flex gap-x-[8px] items-center">
          <p >Lorem ipsum dolor sit amet consectetur. Pulvinar gravida ultrices ornare risus non auctor dui donec tempor. Tempor hendrerit vitae suspendisse diam ante. Arcu placerat non adipiscing amet in nec id ultrices. Nibh scelerisque sit enim volutpat in ac. Facilisis praesent purus morbi ornare habitant proin risus at volutpat. Sodales ac imperdiet risus nam mauris. Diam quis ac phasellus imperdiet risus nunc at cum lorem. Posuere quis lacus ultricies viverra ipsum sed pretium. Sit.</p>
        </div>
        <div className="flex gap-x-[8px] items-center">
          <p >Lorem ipsum dolor sit amet consectetur. Pulvinar gravida ultrices ornare risus non auctor dui donec tempor. Tempor hendrerit vitae suspendisse diam ante. Arcu placerat non adipiscing amet in nec id ultrices. Nibh scelerisque sit enim volutpat in ac. Facilisis praesent purus morbi ornare habitant proin risus at volutpat. Sodales ac imperdiet risus nam mauris. Diam quis ac phasellus imperdiet risus nunc at cum lorem. Posuere quis lacus ultricies viverra ipsum sed pretium. Sit.</p>
        </div>
        <div className="flex gap-x-[8px] items-center">
          <p >Lorem ipsum dolor sit amet consectetur. Pulvinar gravida ultrices ornare risus non auctor dui donec tempor. Tempor hendrerit vitae suspendisse diam ante. Arcu placerat non adipiscing amet in nec id ultrices. Nibh scelerisque sit enim volutpat in ac. Facilisis praesent purus morbi ornare habitant proin risus at volutpat. Sodales ac imperdiet risus nam mauris. Diam quis ac phasellus imperdiet risus nunc at cum lorem. Posuere quis lacus ultricies viverra ipsum sed pretium. Sit.</p>
        </div>
        <div className="flex gap-x-[8px] items-center">
          <p >Lorem ipsum dolor sit amet consectetur. Pulvinar gravida ultrices ornare risus non auctor dui donec tempor. Tempor hendrerit vitae suspendisse diam ante. Arcu placerat non adipiscing amet in nec id ultrices. Nibh scelerisque sit enim volutpat in ac. Facilisis praesent purus morbi ornare habitant proin risus at volutpat. Sodales ac imperdiet risus nam mauris. Diam quis ac phasellus imperdiet risus nunc at cum lorem. Posuere quis lacus ultricies viverra ipsum sed pretium. Sit.</p>
        </div>
      </section>

      {/* more section */}
      <section className="pb-[64px] mb-[64px] border-b-[1px]">
        <header className="mb-[64px]">
          <p className="text-[#001975] text-[24px] font-bold border-y-[1px] border-t-[#001975] border-b-[#CCCCCC] py-[14px]">More TechProsNaija</p>
        </header>
        <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-[32px]">
          <div className="space-y-[16px]">
            <img src={BlogBooks} className="w-full"/>
            <p className="text-[#001975] font-extrabold text-[15px]">TECHNOLOGY</p>
            <p className="text-[24px] font-bold">Lorem ipsum dolor sit amet consectetur. Sagittis nascetur duis.</p>
            <div className="flex justify-between font-secondary">
              <p className="font-bold">Eze Chiemele</p>
              <p className="text-[#272727] font-medium">October 25, 2023</p>
            </div>
          </div>
          <div className="space-y-[16px]">
            <img src={BlogTrees} className="w-full"/>
            <p className="text-[#001975] font-extrabold text-[15px]">TECHNOLOGY</p>
            <p className="text-[24px] font-bold">Lorem ipsum dolor sit amet consectetur. Sagittis nascetur duis.</p>
            <div className="flex justify-between font-secondary">
              <p className="font-bold">Eze Chiemele</p>
              <p className="text-[#272727] font-medium">October 25, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* newsletter section */}
      <Newsletter />
    </section>
  )
}