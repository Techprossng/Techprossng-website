import "../Resource Page/Style/resource.css";
import ResourceImage from "../../assets/images/Resource-Hero.png"
import { FaSearch } from "react-icons/fa";

const Resource = () => {
  return (
    <>
      <div className="resource"> 
        <div className="resource-hero flex gap-20">
          <div className="resource-hero-text w-[45%]">
            <div>
              <h3 className="font-bold text-4xl mt-20">
                TechPros Support Center
              </h3>
              <p className="sub-title font-medium text-base mt-7">
                Welcome to TechProsNg! We are here to assist you in making the most of your learning experience. Whether you have questions about our courses, technical issues, or need guidance on using our platform, you'll find the help and support you need right here.
              </p>
            </div>
            <div className="resource-search-box flex justify-between items-center mt-7">
              <div className="search-input flex justify-between gap-2 items-center">
                <FaSearch className="text-[#AAAAAA]" />
                <input
                  type="email"
                  placeholder="Search for Support"
                  className="r-search-input font-secondary font-light text-base text-[#AAAAAA]"
                />
              </div>
              <div className="r-search-button">
                <button type="submit">Search</button>
              </div>
              
            </div>
          </div>
          <div className="resource-hero-image">
            <img src={ResourceImage} alt="tech support image" />
          </div>
        </div>

        <div className="resource-faq mt-20">
          <div>
            <h4 className="resource-title font-bold text-3xl">
              Frequently Asked Questions
            </h4>
            <p className="sub-title font-medium text-base text-[#555555] mt-5 w-[629px]">
              Browse our FAQs to find quick answers to common questions related to:
            </p>
          </div>
          <div className="sub mt-10 flex justify-between">
              <div className="sub-items">
                <h6 className="font-bold text-xl">
                  Courses
                </h6>
                <p className="desc font-medium text-base text-[#555555] mt-5">
                  Explore information about course availability, prerequisites, and more.
                </p>
              </div>
              <div className="sub-items">
                <h6 className="font-bold text-xl">
                  Subscriptions
                </h6>
                <p className="desc font-medium text-base text-[#555555] mt-5">
                  Understand our pricing, subscription plans, and how to manage your subscription.
                </p>
              </div>
            <div className="sub-items">
              <h6 className="font-bold text-xl">
                Technical Support
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5">
                Get solutions for technical issues, including login problems, video playback, and account settings.
              </p>
            </div>
          </div>
          <div className="sub mt-10 flex gap-20">
            <div className="sub-items">
              <h6 className="font-bold text-xl">
                Payment
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5 ">
                Learn about accepted payment methods, billing cycles, and refund policies.
              </p>
            </div>
            <div className="sub-items">
              <h6 className="account font-bold text-xl ml-20">
                Account Management
              </h6>
              <p className="account font-medium text-base text-[#555555] mt-5 ml-20">
                Find guidance on changing your password, updating your profile, and managing your account.
              </p>
            </div>
          </div>
        </div>

        <div className="resource-contact mt-20">
          <div>
            <h4 className="resource-title font-bold text-3xl">
              Contact Us
            </h4>
            <p className="sub-title font-medium text-base text-[#555555] mt-5 w-[629px]">
              If you can't find the answer you're looking for in our FAQs, our dedicated support team is ready to assist you. You can reach out to us through the following channels:
            </p>
          </div>
          <div className="sub mt-10 flex justify-between">
            <div className="sub-items">
              <h6 className="font-bold text-xl">
                Email Support
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5">
                Send an email to support@techprosng.com with your inquiry, and our team will respond promptly.
              </p>
            </div>
            <div className="sub-items">
              <h6 className="font-bold text-xl">
                Live Chat
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5">
                Our live chat support is available during specified 9am to 3pm to provide real-time assistance.
              </p>
            </div>
            <div className="sub-items">
              <h6 className="font-bold text-xl">
                Phone support
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5">
                Call our support hotline at +2349017433227 if you prefer to speak with a representative directly.
              </p>
            </div>
          </div>
        </div>

        <div className="guide-faq mt-20">
          <div>
            <h4 className="resource-title font-bold text-3xl">
              User Guides and Resources
            </h4>
            <p className="sub-title font-medium text-base text-[#555555] mt-5 w-[629px]">
              Explore our library of user guides and resources to make the most of your learning journey:
            </p>
          </div>
          <div className="sub mt-10 flex justify-between">
            <div className="sub-items">
              <h6 className="font-bold text-xl">
                Getting Started Guide
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5">
                New to TechProsNg? Check our guide for a smooth start.
              </p>
            </div>
            <div className="sub-items">
              <h6 className="font-bold text-xl">
                Technical Troubleshooting
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5">
                Our live chat support is available during specified 9am to 3pm to provide real-time assistance.
              </p>
            </div>
            <div className="sub-items">
              <h6 className="font-bold text-xl">
                Learning Resources
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5">
                Discover additional resources to enhance your understanding of the course material.
              </p>
            </div>
          </div>
          <div className="sub mt-10 flex gap-10">
            <div className="sub-items">
              <h6 className="font-bold text-xl">
                Tips for Success
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5">
                Get tips and strategies for successful online learning.
              </p>
            </div>
          </div>
        </div>

        <div className=" feedback flex justify-between mt-20">
          <div>
            <h4 className="resource-title font-bold text-3xl">
              Feedback and Suggestions
            </h4>
            <p className="sub-title font-medium text-base text-[#555555] mt-5 w-[526.5px]">
              Explore our library of user guides and resources to make the most of your learning journey:
            </p>
          </div>
          <div>
            <h4 className="resource-title font-bold text-3xl">
              Community Forum
            </h4>
            <p className="sub-title font-medium text-base text-[#555555] mt-5 w-[526.5px]">
              Explore our library of user guides and resources to make the most of your learning journey:
            </p>
          </div>
        </div>
        <div>
          <h5 className="sub-title font-semibold text-2xl w-[1152px] my-20">
            Thank you for choosing TechPros Ng as your learning partner. We're here to support you every step of the way on your educational journey.
          </h5>
        </div>
      </div>
    </>
  );
};
export default Resource;
