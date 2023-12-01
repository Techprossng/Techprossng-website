import React from 'react';
import "../Resource Page/Style/resource.css";
import ResourceImage from "../../assets/images/Resource-Hero.png"
import { FaSearch } from "react-icons/fa";

const Resource = () => {
  return (
    <>
      <div className="resource mx-5 sm:mx-8 lg:mx-16"> 
        <div className="resource-hero flex gap-4 justify-between sm:flex  items-center md:flex">
          <div className="resource-hero-text w-[60%]">
            <div>
              <h3 className="font-bold text-4xl mt-20 font-primary">
                TechPros Support Center
              </h3>
              <p className="sub-title font-medium text-base mt-7 font-secondary">
                Welcome to TechProsNaija! We are here to assist you in making the most of your learning experience. Whether you have questions about our courses, technical issues, or need guidance on using our platform, you&apos;ll find the help and support you need right here.
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
          <div className="resource-hero-image bg-[#FAFAFA]">
            <img src={ResourceImage} alt="tech support image" />
          </div>
        </div>

        <div className="resource-faq mt-20">
          <div>
            <h4 className="resource-title font-bold text-3xl font-primary">
              Frequently Asked Questions
            </h4>
            <p className="sub-title font-medium text-base text-[#555555] mt-2 w-[629px] font-secondary">
              Browse our FAQs to find quick answers to common questions related to:
            </p> 
            <br />
            <hr className="w-[550px]"/>
          </div>
          <div className="sub mt-10 flex justify-between">
              <div className="sub-items">
                <h6 className="font-bold text-xl font-primary">
                  Courses
                </h6>
                <p className="desc font-medium text-base text-[#555555] mt-5 font-secondary">
                  Explore information about course availability, prerequisites, and more.
                </p>
                
              </div>
              <div className="sub-items">
                <h6 className="font-bold text-xl font-primary">
                  Subscriptions
                </h6>
                <p className="desc font-medium text-base text-[#555555] mt-5 font-secondary">
                  Understand our pricing, subscription plans, and how to manage your subscription.
                </p>
              </div>
            <div className="sub-items">
              <h6 className="font-bold text-xl font-primary">
                Technical Support
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5 font-secondary">
                Get solutions for technical issues, including login problems, video playback, and account settings.
              </p>
            </div>
          </div>
          <div className="sub mt-16 flex gap-20">
            <div className="sub-items">
              <h6 className="font-bold text-xl font-primary">
                Payment
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5 font-secondary">
                Learn about accepted payment methods, billing cycles, and refund policies.
              </p>
            </div>
            <div className="sub-items">
              <h6 className="account font-bold text-xl font-primary">
                Account Management
              </h6>
              <p className="account font-medium text-base text-[#555555] mt-5 font-secondary">
                Find guidance on changing your password, updating your profile, and managing your account.
              </p>
            </div>
          </div>
        </div>

        <div className="resource-contact mt-32">
          <div>
            <h4 className="resource-title font-bold text-3xl font-primary">
              Contact Us
            </h4>
            <p className="sub-title font-medium text-base text-[#555555] mt-2 w-[629px] font-secondary">
              If you can&apos;t find the answer you&apos;re looking for in our FAQs, our dedicated support team is ready to assist you. You can reach out to us through the following channels:
            </p>
            <br />
            <hr className="w-[650px]"/>
          </div>
          <div className="sub mt-16 flex justify-between">
            <div className="sub-items">
              <h6 className="font-bold text-xl font-primary">
                Email Support
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5 font-secondary">
                Send an email to support@techprosng.com with your inquiry, and our team will respond promptly.
              </p>
            </div>
            <div className="sub-items">
              <h6 className="font-bold text-xl font-primary">
                Live Chat
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5 font-secondary">
                Our live chat support is available during specified 9am to 3pm to provide real-time assistance.
              </p>
            </div>
            <div className="sub-items">
              <h6 className="font-bold text-xl font-primary">
                Phone support
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5 font-secondary">
                Call our support hotline at +2349017433227 if you prefer to speak with a representative directly.
              </p>
            </div>
          </div>
        </div>

        <div className="guide-faq mt-32">
          <div>
            <h4 className="resource-title font-bold text-3xl font-primary">
              User Guides and Resources
            </h4>
            <p className="sub-title font-medium text-base text-[#555555] mt-2 w-[629px]">
              Explore our library of user guides and resources to make the most of your learning journey:
            </p>
            <br />
            <hr className="w-[600px]"/>
          </div>
          <div className="sub mt-16 flex justify-between">
            <div className="sub-items">
              <h6 className="font-bold text-xl font-primary">
                Getting Started Guide
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5 font-secondary">
                New to TechPros Naija? Check our guide for a smooth start.
              </p>
            </div>
            <div className="sub-items">
              <h6 className="font-bold text-xl font-primary">
                Technical Troubleshooting
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5 font-secondary">
                Our live chat support is available during specified 9am to 3pm to provide real-time assistance.
              </p>
            </div>
            <div className="sub-items">
              <h6 className="font-bold text-xl font-primary">
                Learning Resources
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5 font-secondary">
                Discover additional resources to enhance your understanding of the course material.
              </p>
            </div>
          </div>
          <div className="sub mt-10 flex gap-10">
            <div className="sub-items">
              <h6 className="font-bold text-xl font-primary">
                Tips for Success
              </h6>
              <p className="desc font-medium text-base text-[#555555] mt-5 font-secondary">
                Get tips and strategies for successful online learning.
              </p>
            </div>
          </div>
        </div>

        <div className=" feedback flex justify-between mt-20">
          <div>
            <h4 className="resource-title font-bold text-3xl font-primary">
              Feedback and Suggestions
            </h4>
            <p className="sub-title font-medium text-base text-[#555555] mt-5 w-[526.5px] font-secondary">
              Explore our library of user guides and resources to make the most of your learning journey:
            </p>
            <br />
            <hr className="w-[520px]"/>
          </div>
          <div>
            <h4 className="resource-title font-bold text-3xl font-primary">
              Community Forum
            </h4>
            <p className="sub-title font-medium text-base text-[#555555] mt-5 w-[526.5px] font-secondary">
              Explore our library of user guides and resources to make the most of your learning journey:
            </p>
            <br />
            <hr className="w-[520px]"/>
          </div>
        </div>
        <div>
          <h5 className="sub-title font-semibold text-2xl w-[1152px] my-20 font-primary">
            Thank you for choosing TechPros Naija as your learning partner. We&apos;re here to support you every step of the way on your educational journey.
          </h5>
        </div>
      </div>
    </>
  );
};
export default Resource;
