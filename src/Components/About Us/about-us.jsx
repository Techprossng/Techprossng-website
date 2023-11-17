import "../About Us/Style/about-us.css";
import ImpactVideo from "../../assets/images/impact-video.png"
import AboutHero from "../../assets/images/about-hero-image.png"
import CEO from "../../assets/images/team/soge-ceo.jpg"
import Merit from "../../assets/images/merit-frame.png"
import HR from "../../assets/images/team/sophia-hr.jpg"
import MS from "../../assets/images/team/adeyemo-ms.jpg"
import FM from "../../assets/images/team/chinyere-fm.jpg"
import PM from "../../assets/images/team/mofe-pm.jpg"
import COO from "../../assets/images/team/praise-coo.jpg"
const AboutUs = () => {
    return (
      <>
        <div className="about-us">
          <div className="about-us-intro flex justify-around items-center">
            <div>
            <h2 className="font-black text-5xl leading-[67.5px] text-[#001562]">
              ABOUT US
            </h2>
            </div>
            <div>
              <h6 className="font-medium text-lg leading-[25.5px] text-[#272727]">
                How we started...</h6>
                <p className="font-normal text-base leading-[24px] text-[#272727] mt-3">
                  We are a dynamic tech education company that helps people access high-quality <br />
                  tech skills by increasing digital literacy and celebrating tech talents globally. <br />
                  We are on a mission to empower the next generation of tech Innovators in Nigeria.
                </p>
            </div>
              
          </div>
          <div className="hero-image bg-[aqua] mt-10">
          <img src={AboutHero} alt="hero-image" className="w-full" />
          </div>
          <div className="mission-intro flex justify-around items-center mt-10">
            <div>
            <h2 className="font-black text-5xl leading-[67.5px] text-[#001562]">
              Where we are <br />headed
            </h2>
            </div>
            <div className="mission-text flex flex-col gap-5">
              <div>
              <h5 className="font-primary font-medium text-2xl leading-[36px] text-[#272727]">Our Mission</h5>
                <p className="font-secondary font-medium text-base text-[#272727] mt-2">
                Our mission at TechProsNaija is to pave the way for digital 
                literacy and technological <br />proficiency across Nigeria's educational 
                landscape and workforce. 
                </p>
              </div>
              <div>
              <h5 className="font-primary font-medium text-2xl leading-[36px] text-[#272727]">Our Vision</h5>
                <p className="font-secondary font-medium text-base text-[#272727] mt-2">
                TechProsNaija aims to become Nigeria's premier EdTech institution by 2030. <br />
                Our goal is to disseminate tech education throughout the nation, empowering <br />
                a tech-savvy generation to drive the country's technological advancement.
                </p>
              </div>
            </div>
            </div>
          <div className="founder bg-[#aab2d1] border-4 mt-10">
            <div className="founder-inner">
            <h5 className="font-primary font-bold text-2xl text-justify">"As the CEO/Founder of TechProsNaija I am glad to announce the acquisition in the edtech space, 
            we are not just a random Edtech startup; we are creating a priceless society for skill acquisition 
            and mentorship to redefine the landscape of learning.
            <br />
            <br />
            Our vision extends beyond the confines of traditional education. We aim to cultivate a culture of 
            lifelong learning, where anyone, anywhere can access knowledge that transcends boundaries. This acquisition 
            propels us into a future where education is not a privilege but a universal right."
            </h5>
            <br />
            <div className="founder-frame flex gap-3 items-center">
              <div className="ceo-image">
                  <img src={CEO} alt="" />
              </div>
              <div className="ceo-name">
                <h6 className="font-normal text-lg">Sogelola Mayomiwa</h6><h6 className="font-medium text-xs">Founder and CEO</h6>
              </div>
            </div>
            </div>
          </div>

          <div className="why-us flex gap-10">
            <div className="impact-video ml-20">
              <div className="thetext">
                <h2>Why Choose Us?</h2>
                <p>Elevate your learning journey with our innovative edtech <br />solutions. Expert educators, 
                  personalized learning paths, <br />and cutting-edge technology ensure a transformative <br />
                  educational experience tailored to your success.</p>
                </div>
              <div className="theimage">
                <a href=""><img src={ImpactVideo} alt="" /></a>
              </div>
            </div>
            <div className="merit flex flex-col w-[50%] gap-y-10" style={{backgroundColor: "#000517"}}>
              <div className="meritlist flex m-3 gap-x-3">
                <div className="merigimgage flex">
                  <img src={Merit} alt="" />
                </div>
                <div className="merittext flex flex-col">
                  <div className="merith5">
                  <h5 className="font-normal text-2xl text-[#fff]">Training</h5>
                  </div>
                  <div className="meritp">
                  <p className="font-medium text-base text-[#fff]">Proper Tech Learning-drill: We focus on real-world applications, 
                    so you can confidently apply your skills in any tech-related field.
                  </p>
                  </div>
                </div>
              </div>
              <div className="meritlist flex m-3 gap-x-3">
                <div className="merigimgage flex">
                  <img src={Merit} alt="" />
                </div>
                <div className="merittext">
                  <div className="merith5">
                  <h5 className="font-normal text-base text-[#fff] ">Flexibility</h5>
                  </div>
                  <div className="meritp text-[#fff] ">
                  <p>Learn at your own pace with our online and offline classes. Fit 
                    tech education into your busy life.
                  </p>
                  </div>
                </div>
              </div>
              <div className="meritlist flex m-3 gap-x-3">
                <div className="merigimgage flex">
                  <img src={Merit} alt="" />
                </div>
                <div className="merittext">
                  <div className="merith5">
                  <h5 className="font-normal text-base text-[#fff] ">Industry-Driven Curriculum</h5>
                  </div>
                  <div className="meritp text-[#fff] ">
                  <p>Our courses are designed in collaboration with industry experts to 
                    ensure you're learning what matters most.
                  </p>
                  </div>
                </div>
              </div>
              <div className="meritlist flex m-3 gap-x-3">
                <div className="merigimgage flex ">
                  <img src={Merit} alt="" />
                </div>
                <div className="merittext">
                  <div className="merith5">
                  <h5 className="font-normal text-base text-[#fff] ">Career Opportunities</h5>
                  </div>
                  <div className="meritp text-[#fff] ">
                  <p>TechProsNaija graduates are followed up and given internship opportunities 
                    to land their first jobs
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-team">
            <h1>Our Team</h1>
            <div className="team-image">
              <div className="set">
                <div className="set1 ">
                  <img src={MS} alt="" /><h2>Adeyemo Temitope</h2><h6>Marketing Specialist</h6>
                </div>
                <div className="set1">
                  <img src={FM} alt="" /><h2>Chinyere Irechukwu</h2><h6>Finance Manager</h6>
                </div>
                <div className="set1">
                  <img src={PM} alt="" /><h2>Mofeoluwa Opadotun</h2><h6>Project Manager</h6>
                </div>
              </div>
              <div className="set">
                <div className="set1">
                  <img src={HR} alt="" /><h2>Sophia Runsewe</h2><h6>HR Manager</h6>
                </div>
                <div className="set1">
                  <img src={COO} alt="" /><h2>Praise Olakanmi</h2><h6>COO</h6>
                </div>
                <div className="set1">
                  <img src={CEO} alt="" /><h2>Sogelola Mayomiwa</h2><h6>CEO</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="blog">
            <h1>Our Blog</h1>
            <div className="blog-cards">
            <div className="blog-card">
              <div className="blog-photo">
                <img src="../../../src/assets/images/blog-frame.png" alt="" />
              </div>
              <div className="blog-topic">
                <h4>Technology</h4>
              </div>
              <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est!</p>
              </div>
              <div className="author">
                <div className="name">
                  <h6>Eze Chiemele</h6>
                </div>
                <div className="date">
                  <h6>October 25, 2023</h6>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-photo">
                <img src="../../../src/assets/images/blog-frame.png" alt="" />
              </div>
              <div className="blog-topic">
                <h4>Technology</h4>
              </div>
              <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est!</p>
              </div>
              <div className="author">
                <div className="name">
                  <h6>Eze Chiemele</h6>
                </div>
                <div className="date">
                  <h6>October 25, 2023</h6>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-photo">
                <img src="../../../src/assets/images/blog-frame.png" alt="" />
              </div>
              <div className="blog-topic">
                <h4>Technology</h4>
              </div>
              <div className="blog-text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est!</p>
              </div>
              <div className="author">
                <div className="name">
                  <h6>Eze Chiemele</h6>
                </div>
                <div className="date">
                  <h6>October 25, 2023</h6>
                </div>
              </div>
            </div>
            </div>
            <div className="blog-link">
              <a href="#">Go To Blog <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
          <div className="contact-us">
            <h1>Contact Us</h1>
            <h4>Please fill out the form below, and our team will get back to you as <br /> soon as possible. </h4>
            <form className="contact-form">
              <div className="name">
              <div className="firstname">
                  <p>First Name</p>
                  <input type="name" />
              </div>
              <div className="lastname">
                  <p>Last Name</p>
                  <input type="name" />
              </div>
              </div>
              <div className="query">
                <p>How can we help?</p>
                <input type="text" />
              </div>
              <div className="mail">
              <div className="email">
                  <p>Email</p>
                  <input type="name" />
              </div>
              <div className="website">
                  <p>Website (Optional)</p>
                  <input type="name" />
              </div>
              </div>
              <div className="send-button">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
export default AboutUs;