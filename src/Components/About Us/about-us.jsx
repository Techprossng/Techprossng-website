import React, { useState } from "react";
import "../About Us/Style/about-us.css";
import ImpactVideo from "../../assets/images/impact-video.png";
import AboutHero from "../../assets/images/about-hero-image.png";
import CEO from "../../assets/images/team/soge-ceo.jpg";
import Merit from "../../assets/images/merit-frame.png";
import HR from "../../assets/images/team/runsewe.png";
import MS from "../../assets/images/team/adeyemo.png";
import FM from "../../assets/images/team/chinyere.png";
import PM from "../../assets/images/team/mofeoluwa.png";
import COO from "../../assets/images/team/olakanmi.png";
import CEO2 from "../../assets/images/team/mayomiwa.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Blogs } from "./Data/data";

const AboutUs = () => {
  const courses = [
    "--Select your Course--",
    "Back-end Development",
    "Content / Copywriting Marketing",
    "Creative Design",
    "Cybersecurity",
    "Data Science", 
    "Data Analytics",
    "Digital Marketing and SEO",
    "Front-end Development",
    "Full Stack Development",
    "Microsoft for Complete Beginners",
    "Mobile App Development",
    "Product Management",
    "Social Media Management",
    "UI/UX Advanced for Professionals",
    "UI/UX Design for Beginners",
    "Web Development"
  ];
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    website: "",
    course: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  const validation = (values) => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "This is not a valid email pattern";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validation(formValues));
    try {
      const response = await fetch(
        "https://techprosnaija.com/api/v1/contacts",
        {
          method: "POST",
          body: JSON.stringify({
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            description: formValues.description,
            website: formValues.website,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("Sent");
        setFormValues(initialValues);
        setFormSuccess(true);
        setTimeout(() => {
          setFormSuccess(false);
        }, 3000);
      } else {
        console.error("Try again:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("An error occured:", error.message);
      setFormErrors("An error occured:" + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  return (
    <>
      <div className="about-us">
        <div className="about-us-intro flex justify-around items-center">
          <div className="about-us-intro-header">
            <h2 className="font-black text-5xl leading-[67.5px] text-[#001562]">
              ABOUT US
            </h2>
          </div>
          <div className="about-us-intro-sub">
            <p className="font-normal text-base leading-[24px] text-[#272727] mt-3">
              We are a dynamic tech education company that helps people access
              high-quality <br />
              tech skills by increasing digital literacy and celebrating tech
              talents globally. <br />
              We are on a mission to empower the next generation of tech
              Innovators in Nigeria.
            </p>
          </div>
        </div>
        <div className="hero-image mt-10">
          <img src={AboutHero} alt="hero-image" className="w-full" />
        </div>
        <div className="mission-intro flex justify-around items-center mt-10">
          <div className="mission-intro-header">
            <h2 className="font-black text-5xl leading-[67.5px] text-[#001562]">
              Where we <br />
              are headed
            </h2>
          </div>
          <div className="mission-text flex flex-col gap-5">
            <div className="mission-text-sub">
              <h5 className="font-primary font-medium text-2xl leading-[36px] text-[#272727]">
                Our Mission
              </h5>
              <p className="font-secondary font-medium text-base text-[#272727] mt-2">
                Our mission at TechProsNaija is to pave the way for digital
                literacy and technological <br />
                proficiency across Nigeria&apos;s educational landscape and
                workforce.
              </p>
            </div>
            <div className="mission-text-sub">
              <h5 className="font-primary font-medium text-2xl leading-[36px] text-[#272727]">
                Our Vision
              </h5>
              <p className="font-secondary font-medium text-base text-[#272727] mt-2">
                TechProsNaija aims to become Nigeria&apos;s premier EdTech
                institution by 2030. <br />
                Our goal is to disseminate tech education throughout the nation,
                empowering <br />a tech-savvy generation to drive the
                country&apos;s technological advancement.
              </p>
            </div>
          </div>
        </div>
        <div className="founder bg-[#aab2d1] border-4 mt-10">
          <div className="founder-inner">
            <h5 className="font-primary font-bold text-2xl text-justify">
              &quot;As the CEO/Founder of TechProsNaija I am glad to announce
              the acquisition in the edtech space, we are not just a random
              Edtech startup; we are creating a priceless society for skill
              acquisition and mentorship to redefine the landscape of learning.
              <br />
              <br />
              Our vision extends beyond the confines of traditional education.
              We aim to cultivate a culture of lifelong learning, where anyone,
              anywhere can access knowledge that transcends boundaries. This
              acquisition propels us into a future where education is not a
              privilege but a universal right.&quot;
            </h5>
            <br />
            <div className="founder-frame flex gap-3 items-center">
              <div className="ceo-image">
                <img src={CEO} alt="" />
              </div>
              <div className="ceo-name">
                <h6 className="font-normal text-lg">Sogelola Mayomiwa</h6>
                <h6 className="font-medium text-xs">Founder and CEO</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="why-us flex gap-1 w-[100%] mb-10">
          <div className="impact-video ml-20 w-[50%]">
            <div className="thetext mt-8">
              <h4 className="font-bold text-3xl text-[#001562]">
                Why Choose Us?
              </h4>
              <p className="font-normal py-5 text-base">
                Elevate your learning journey with our innovative edtech
                solutions. <br />
                Expert educators, personalized learning paths, and cutting-edge
                technology ensure a transformative educational experience
                tailored to your success.
              </p>
            </div>
            <div className="thevideo w-full">
              <a href="">
                <img src={ImpactVideo} alt="impact video" className="w-[90%]" />
              </a>
            </div>
          </div>
          <div
            className="merit flex flex-col w-[50%] gap-y-10"
            style={{ backgroundColor: "#000517" }}
          >
            <div className="meritlist flex items-center gap-10 mx-10 mt-5 text-justify">
              <div className="meritimage">
                <img src={Merit} alt="" />
              </div>
              <div>
                <h5 className="font-normal text-2xl text-[#fff]">Training</h5>
                <p className="font-medium text-base text-[#fff]">
                  Proper Tech Learning-drill: We focus on real-world
                  applications, so you can confidently apply your skills in any
                  tech-related field.
                </p>
              </div>
            </div>
            <div className="meritlist flex items-center gap-10 mx-10 text-justify">
              <div className="meritimage">
                <img src={Merit} alt="" />
              </div>
              <div>
                <h5 className="font-normal text-2xl text-[#fff]">
                  Flexibility
                </h5>
                <p className="font-medium text-base text-[#fff]">
                  Learn at your pace with our online & offline classes. Fit tech
                  education into your busy life without having to worry about
                  missing out.
                </p>
              </div>
            </div>
            <div className="meritlist flex items-center gap-10 mx-10 text-justify">
              <div className="meritimage">
                <img src={Merit} alt="" />
              </div>
              <div>
                <h5 className="font-normal text-2xl text-[#fff]">
                  Industry-Driven Curriculum
                </h5>
                <p className="font-medium text-base text-[#fff]">
                  Our courses are designed in collaboration with industry
                  experts to ensure you&apos;re learning what matters most with
                  new technologies.
                </p>
              </div>
            </div>
            <div className="meritlist flex items-center gap-10 mx-10 text-justify mb-10">
              <div className="meritimage">
                <img src={Merit} alt="" />
              </div>
              <div>
                <h5 className="font-normal text-2xl text-[#fff]">
                  Career Opportunities
                </h5>
                <p className="font-medium text-base text-[#fff]">
                  TechProsNaija graduates are followed up and given internship
                  opportunities to land their first jobs which stands them out
                  from other.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-team">
          <div>
            <h4 className="team-title font-bold text-3xl font-primary text-center text-[#001562] my-10">
              Our Team
            </h4>
          </div>
          <div className="flex flex-wrap">
            <div className="flex justify-center flex-wrap bg-[#001975]">
              <img src={CEO2} alt="ceo image" className="w-[30%]" />
              <img src={COO} alt="coo image" className="w-[30%]" />
              <img src={PM} alt="pm image" className="w-[30%]" />
            </div>
            <div className="flex justify-center flex-wrap bg-[#001975]">
              <img src={HR} alt="hr image" className="w-[30%]" />
              <img src={FM} alt="fm image" className="w-[30%]" />
              <img src={MS} alt="ms image" className="w-[30%]" />
            </div>
          </div>
        </div>

        <div className="blog-section flex flex-col items-center mx-4">
          <div className="blog-header text-[#001562] mt-10">
            <h4 className="font-bold text-3xl mb-10">Our Blog</h4>
          </div>
          <div className="blog-detail-container flex gap-10 items-center justify-around] ">
            {Blogs.map((blog, index) => (
              <div
                key={index}
                className="blog-details flex justify-around flex-col gap-5"
              >
                <div className="blog-poster flex justify-center items-center">
                  <img src={blog.img} alt="blog-poster" className="w-full rounded-xl"/>
                </div>
                <div className="blog-text flex flex-col justify-start">
                  <p className="font-bold text-sm text-[#001562]">
                    {blog.title}
                  </p>
                  <h5 className="font-bold text-2xl mt-3">
                    {blog.description}
                  </h5>
                </div>
                <div className="blog-author flex justify-between">
                  <p className="font-bold text-sm">{blog.author}</p>
                  <p className="font-normal text-sm">{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="blog-link w-full mt-10 border-3 flex gap-10 justify-center items-center font-bold text-sm">
            <a href="/blog">Go To Blog</a>
            <FaLongArrowAltRight className="blogpoint" />
          </div>
        </div>
        <div className="contact-form my-10">
          <div className="contact-us m-10">
            <div className="contact-intro flex flex-col justify-center items-center">
              <h4 className="font-bold text-3xl text-[#001562]">Contact Us</h4>
              <p className="font-medium text-base text-[#272727] mt-5">
                Please fill out the form below, and our team will get back to
                you as soon as possible.
              </p>
            </div>
            <form onSubmit={handleSubmit} action="" className="forminputs">
              <div className="name flex justify-around items-center mt-10">
                <div className="firstinput flex flex-col">
                <label className="text-[#272727] font-medium text-sm flex gap-1 ">
                  <span className="text-inherit"> First Name</span>
                  <div className="text-red-600 text-base font-bold">*</div>
                </label>
                  <input
                    onChange={handleChange}
                    name="firstName"
                    value={formValues.firstName}
                    type="text"
                    className=""
                  />
                  <p className="mt-2 text-[#f00]">{formErrors.firstName}</p>
                </div>
                <div className="lastinput flex flex-col">
                <label className="text-[#272727] font-medium text-sm flex gap-1">
                  <span className="text-inherit"> Last Name</span>
                  <div className="text-red-600 text-base font-bold">*</div>
                </label>
                  <input
                    onChange={handleChange}
                    name="lastName"
                    value={formValues.lastName}
                    type="text"
                    className=""
                  />
                  <p className="mt-2 text-[#f00]">{formErrors.lastName}</p>
                </div>
              </div>
              <div className="mail-website flex justify-around items-center mt-10">
                <div className="mailinput flex flex-col">
                <label className="text-[#272727] font-medium text-sm flex gap-1">
                  <span className="text-inherit">Email</span>
                  <div className="text-red-600 text-base font-bold">*</div>
                </label>
                  <input
                    onChange={handleChange}
                    name="email"
                    value={formValues.email}
                    type="email"
                    className=""
                  />
                  <p className="mt-2 text-[#f00]">{formErrors.email}</p>
                </div>
                <div className="websiteinput flex flex-col">
                  <label className="text-[#272727] font-medium text-sm">
                    Website (Optional)
                  </label>
                  <input
                    onChange={handleChange}
                    name="website"
                    value={formValues.website}
                    type="text"
                    className=""
                  />
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="course-option mt-10">
                <label className="text-[#272727] font-medium text-sm flex gap-1">
                  <span className="text-inherit">
                    Please select your course of enquiry
                  </span>
                  <div className="text-red-600 text-base font-bold">*</div>
                </label>
                  <div className="course-select">
                    <select id="courses">
                      {/* <option value="---">--Select One--</option>
                <option value="digital-marketing">
                  Digital Marketing
                </option>
                <option value="data-analyst">Data Analyst</option>
                <option value="frontend">Frontend Web Developer</option>
                <option value="backend">Backend Web Developer</option> */}
                      {courses.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-enquiry mt-10">
                <label className="text-[#272727] font-medium text-sm flex gap-1">
                  <span className="text-inherit"> How can we help</span>
                  <div className="text-red-600 text-base font-bold">*</div>
                </label>
                  <div className="field">
                    <input
                      onChange={handleChange}
                      name="description"
                      value={formValues.description}
                      type="text"
                      className=""
                    />
                    <p className="mt-2 text-[#f00]">{formErrors.description}</p>
                  </div>
                </div>
              </div>
              <div className="submit-form flex justify-center mt-10">
                <button type="submit">
                  <p className="font-semibold text-sm">Send</p>
                </button>
              </div>
            </form>
            {formSuccess && (
              <div className="text-green-500 text-center font-bold mt-5 text-xl">
                Successful!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
