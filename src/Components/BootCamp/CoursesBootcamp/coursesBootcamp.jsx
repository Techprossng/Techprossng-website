import React from "react";
import { useState, useEffect } from "react";
import pd from "../../BootCamp/CoursesBootcamp/Image/pd.svg";
import wd from "../../BootCamp/CoursesBootcamp/Image/wd.svg";
import da from "../../BootCamp/CoursesBootcamp/Image/da.svg";
import mad from "../../BootCamp/CoursesBootcamp/Image/mad.svg";
import bed from "../../BootCamp/CoursesBootcamp/Image/bed.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CoursesBootcamp/Style/coursesBootcamp.css";

export const course = [
  {
    title: "Product Design",
    description: "Unlock the art of crafting innovative and user-centric products. Learn to navigate the entire design process, from ideation to prototyping, ensuring your creations seamlessly blend form and function. This course hones your skills in design tools and collaborative teamwork, empowering you to shape products that captivate users and stand out in the market.",
    imageUrl: pd,
    link: "https://drive.google.com/file/d/1FRD2ICmV55trSqhQ9VZh-e1EK7bxG5S4/view?usp=drive_link",
  },
  {
    title: "Web Development",
    description: "Become a full-stack developer by mastering both frontend and backend technologies. Learn to design user interfaces, develop server-side logic, and manage databases. Acquire a comprehensive skill set for building dynamic web applications.",
    imageUrl: wd,
    link: "https://drive.google.com/file/d/1cf_rLfBDSSFopzmpTmDSBWg85S56bA17/view?usp=drive_link",
  },
    {
      title: "Data Analysis",
      description: "In this course, delve into the world of data analytics to understand and interpret complex datasets. Develop proficiency in statistical analysis, data visualization, and programming languages like Python or R. Gain insights into actionable decision-making through hands-on projects",
      imageUrl: da,
      link:"https://drive.google.com/file/d/1wQwYR1f2Cgm-DTXEZ3oprExJK_tAVDP9/view?usp=drive_link"
    },
    {
      title: "Digital Marketing",
      description: "Navigate the dynamic landscape of online marketing. Develop expertise in search engine optimization (SEO), social media marketing, content creation, and analytics. Learn to create impactful digital marketing campaigns that drive results",
      imageUrl: mad,
      link:"https://drive.google.com/file/d/1Hy_gt7rcHXZ17MZoTRasxgF78r42adIM/view?usp=drive_link"
    },
    {
      title: "Backend Developemnt",
      description: "Master the art of server-side development, learning to build robust and scalable applications. Explore backend frameworks and databases, acquiring the skills needed to create efficient server logic and handle data securely",
      imageUrl: bed,
      link:"https://drive.google.com/file/d/1y8eIWNq3OypyuHEE4NrFL3fhQp110W0w/view?usp=drive_link",

    },
     {
          title: "Frontend Developemnt",
          description: "Immerse yourself in the creation of captivating user interfaces. From HTML and CSS fundamentals to dynamic JavaScript interactions, learn the latest front-end frameworks like React or Vue.js. Craft responsive and visually appealing web applications",
          imageUrl: bed,
          link:"https://drive.google.com/file/d/1pEyf_Vg3cgl_jPbVXR-GQQ4FU8RMu3qQ/view?usp=drive_link",
    
        },
    {
      title: "Project management",
      description: "Develop the skills to lead successful projects from initiation to completion. Explore project management methodologies, communication strategies, and effective team collaboration. Gain tools to ensure projects are delivered on time and within budget.",
      imageUrl: pd,
      link: "https://drive.google.com/file/d/13CCCCt_84WZSqfH-EdSpbXsj62SN2-b5/view?usp=drive_link",
    },
    {
      title: "UI/UX Design for Beginners",
      description: "Embark on a journey into the realms of User Interface (UI) and User Experience (UX) design. Understand the principles of effective design, usability, and user psychology. Create intuitive digital interfaces tailored to user needs",
      imageUrl: wd,
      link: "/bootcamp",
    },
      {
        title: "Creative Content Writing",
        description:"Elevate your writing skills for the digital era. Learn the art of storytelling, content strategy, and SEO optimization. Craft engaging content for various platforms, mastering the nuances of effective online communication",
        imageUrl: da,
        link:"https://drive.google.com/file/d/1GLIy2FbG_2qHJTPlDtjDRABgQTuqf7oh/view?usp=drive_link",
      },
      {
        title: "Creative Design", 
        description:"Unleash your creativity in the world of visual design. Explore graphic design principles, color theory, and industry-standard tools. Develop the skills to create visually stunning designs that communicate effectively across various media",
        imageUrl: mad,
        link:"https://drive.google.com/file/d/1csUBlVI6rqCL34L6iQPoy4B3J_6hVtMI/view?usp=drive_link"
      },
     
];



  

const CoursesBootcamp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [clickedCourse, setClickedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setClickedCourse((prevCourse) => (prevCourse === course ? null : course));
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className="px-6 py-12 md:px-12 mt-24 mb-24 main-bootcamp-course">
      <div className="mx-14 main-bootcamp-inner">
        <div className="flex justify-between gap-8 items-center bootcamp-course-header">
          <h1 className="text-7xl w-1/2 font-medium flex flex-col gap-3">
             Courses for 
            the Bootcamp
          </h1>
          <p
            className="w-1/2 text-base font-medium"
            style={{ color: "#2b2b2b" }}
          >
            Explore a diverse spectrum of cutting-edge skills and technologies
            across courses such as Web Development, Product Design, Back-End
            Development, and more in the upcoming TechProsNaija Bootcamp,
            fostering a comprehensive and transformative learning experience
          </p>
        </div>
        <div className="mt-20 course-slider ">
      <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={isMobile ? 1 : 3}
        slidesToScroll={isMobile ? 1 : 3}
      >
        {course.map((course, index) => (
          <div key={index} className="p-0">
            <div className="relative flex courses-card-house">
              <div
                className={`bg-cover bg-center rounded-lg courses-cards ${
                  course === clickedCourse ? "clicked" : ""
                }`}
                onClick={() => handleCourseClick(course)}
              >
                <div
                  className="w-full h-[100%] bg-cover tutors-image"
                  style={{ backgroundImage: `url(${course.imageUrl})` }}
                >
                  {course === clickedCourse && (
                    <div className="course-info h-[100%]">
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                      <a href={course.link} target="_blank" rel="noopener noreferrer">
                        Download Document
                      </a>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      </div>
    </div>
  );
};

export default CoursesBootcamp;
