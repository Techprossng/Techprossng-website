import React from "react";
import Newsletter from "../../Components/Landingpage/Newsletter Section/newsletter";
import TechProsNaija from "../../assets/images/TechProsNaija.png"
import CoffeeSplash from "../../assets/images/coffee_unsplash.png"
import BlogBooks from "../../assets/images/blog_books.png"
import BlogTrees from "../../assets/images/blog_trees.png"
import Footer from "../../Components/Landingpage/Footer/footer"
import Navbar from "../../Components/Landingpage/Navbar/navbar"

export default function BlogPage() {
  return (
    <>
    <Navbar />
    <section className="mt-24 p-[46px_128px] max-[375px]:px-[1.5rem] max-[1080px]:px-[2rem]">
      {/* header section */}
      <header className="mb-[96px]">
        <img src={TechProsNaija} className="mb-[64px]"/>
        <p className="text-[48px] max-[768px]:text-[40px] font-extrabold text-[#272727] mb-[16px]">Tech Mentorship For Beginners: Finding Your Guide in The Tech World. </p>
        <p className="text-[17px] font-bold text-[#656565] mb-[32px]">
          New to the ever-evolving world of tech? If so, you've probably already realized that navigating this landscape can be both exciting and daunting. The good news is that you don't have to do it alone. One of the most valuable resources available to newcomers in tech is mentorship. In this blog post, we'll explore the importance of mentorship for beginners and offer guidance on how to find your tech mentor.
        </p>
        <p className="space-x-[16px]">
          <span className="text-[24px] font-extrabold text-[#272727] mb-[16px]">
            Boluwatife Ogunniyi
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
              <path id="Vector" d="M10.875 1H7.125L5.25 3.25H3C2.60218 3.25 2.22064 3.40804 1.93934 3.68934C1.65804 3.97064 1.5 4.35218 1.5 4.75V11.5C1.5 11.8978 1.65804 12.2794 1.93934 12.5607C2.22064 12.842 2.60218 13 3 13H15C15.3978 13 15.7794 12.842 16.0607 12.5607C16.342 12.2794 16.5 11.8978 16.5 11.5V4.75C16.5 4.35218 16.342 3.97064 16.0607 3.68934C15.7794 3.40804 15.3978 3.25 15 3.25H12.75L10.875 1Z" stroke="#2B3F8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path id="Vector_2" d="M9 10C10.2426 10 11.25 8.99264 11.25 7.75C11.25 6.50736 10.2426 5.5 9 5.5C7.75736 5.5 6.75 6.50736 6.75 7.75C6.75 8.99264 7.75736 10 9 10Z" stroke="#2B3F8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
          <p className="text-[96px] font-black font-primary">T</p>
          <p>he Power of Mentorship. Mentorship is like having a seasoned guide by your side as you embark on your tech journey. Here's why it's so valuable: </p>
        </header>
        <div className="flex gap-x-[8px] items-center">
          <p >
          1. Accelerated Learning
            A mentor can help you avoid common pitfalls and provide insights that might take years to gain on your own. They can recommend resources, share their experiences, and offer practical advice that accelerates your learning process.
          </p>
        </div>
        <div className="flex gap-x-[8px] items-center">
          <p >
            2. Networking Opportunities
            Tech mentors often have extensive networks in the industry. Being mentored can open doors to networking events, job opportunities, and collaborations with other professionals, giving you a head start in building your own network.
          </p>
        </div>
        <div className="flex flex-col gap-x-[8px]">
          <p className="text-[32px] font-black">Finding Your Tech Mentor</p>
          <p >
            Now that you have understood the value of mentorship, let's explore how to find the right mentor for you:
          </p>
        </div>
        <div className="flex gap-x-[8px] items-center">
          <p >
            1. Identify Your Goals
            Before seeking a mentor, clarify your tech-related goals. What do you want to achieve? Knowing your objectives will help you find a mentor with the expertise and experience that aligns with your aspirations
          </p>
        </div>
        <div className="flex gap-x-[8px] items-center">
          <p >
            2. Leverage Online Communities
            Tech communities, both on social media and specialized forums, can be treasure troves of mentorship opportunities. Platforms like LinkedIn, GitHub are excellent places to connect with potential mentors.
          </p>
        </div>
        <div className="flex gap-x-[8px] items-center">
          <p >
            3. Attend Tech Events
            Tech conferences, workshops, and meetups are great places to meet experienced professionals who might be willing to mentor you. Attend these events, engage in discussions, and be open to forming connections.
          </p>
        </div>
        <div className="flex gap-x-[8px] items-center">
          <p >
            4. Take Advantage of Mentorship Programs
            Many organizations and educational institutions offer formal mentorship programs for tech enthusiasts. TechProsNaija places a premium on mentorship in your learning path. We have programs that match beginners with experienced mentors, providing structured guidance.
          </p>
        </div>
        <div className="flex gap-x-[8px] items-center">
          <p >
            5. Connect with Professionals and Instructors
            If you're a student or enrolled in a tech-related course, don't overlook the opportunity to seek mentorship from your  instructors. They often have valuable industry insights and connections.
          </p>
        </div>

        <div className="flex gap-x-[8px] items-center">
          <p >
            6. Be Proactive and Persistent
            Finding the right mentor may take time and effort. Be proactive in reaching out, but also be respectful of their time. Craft a compelling message explaining why you'd like them to be your mentor and how you can benefit from their guidance.

          </p>
        </div>
        <div className="flex flex-col gap-x-[8px]">
          <p className="text-[32px] font-black">In Conclusion</p>
          <p >
            Tech mentorship is a powerful tool for beginners, offering guidance, support, and accelerated learning. With the right mentor by your side, you can navigate the tech world with confidence and achieve your goals more efficiently. So, don't hesitate to seek out a mentor, because in the ever-evolving landscape of technology, having a trusted guide can make all the difference in your journey to success.
          </p>
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
            <p className="text-[#001975] font-extrabold text-[15px]">Marketing: Strategies and Values</p>
            <p className="text-[24px] font-bold">How to get your product to the right audience.</p>
            <div className="flex justify-between font-secondary">
              <p className="font-bold">Boluwatife Ogunniyi</p>
              <p className="text-[#272727] font-medium">26th November, 2023</p>
            </div>
          </div>
          <div className="space-y-[16px]">
            <img src={BlogTrees} className="w-full"/>
            <p className="text-[#001975] font-extrabold text-[15px]">Research</p>
            <p className="text-[24px] font-bold">Why do you need to spend time on research?.</p>
            <div className="flex justify-between font-secondary">
              <p className="font-bold">Boluwatife Ogunniyi</p>
              <p className="text-[#272727] font-medium">4th December, 2023</p>
            </div>
          </div>
        </div>
      </section>
        <hr />

      {/* newsletter section */}
      <Newsletter />
    </section>
    <Footer />
    </>
  )
}
