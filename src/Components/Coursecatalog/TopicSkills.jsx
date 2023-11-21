import React from "react";
import BgImage from "../../assets/images/catalog-img/Cybersecurity.png";
import BgImage1 from "../../assets/images/catalog-img/Development.png";
import BgImage2 from "../../assets/images/catalog-img/Design.png";
import BgImage3 from "../../assets/images/catalog-img/Business.png";
import "../Coursecatalog/Style/course-catalog.css";
const TopicSkills = () => {
  return (
    <React.Fragment>
      <section className="mt-32">
        <div className="mx-16">
          {" "}
          <h6 className="text-[17px] mb-5 font-medium font-primary text-[#272727] ">
            Explore topics and skills
          </h6>
        </div>
        <div>
          <div className="resource-grid mx-16">
            <article className="box span-2 box1 ">
              <img src={BgImage} alt="" className="w-[100%]" />
            </article>
            <article className="box span-2 box2">
              <img src={BgImage1} alt="" className="w-[100%]" />
            </article>
            <article className="box  grid-col-start box3">
              <img src={BgImage2} alt="" className="w-[100%]" />
            </article>
            <article className="box box4">
              <img src={BgImage3} alt="" className="w-[100%]" />
            </article>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TopicSkills;
