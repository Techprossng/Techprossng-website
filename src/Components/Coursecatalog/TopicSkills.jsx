import React from "react";
import BgImage from "../../assets/images/catalog-img/course1.png";
import BgImage1 from "../../assets/images/catalog-img/course4.png";
import BgImage2 from "../../assets/images/catalog-img/course2.png";
import BgImage3 from "../../assets/images/catalog-img/course3.png";
import "../Coursecatalog/Style/course-catalog.css";
const TopicSkills = () => {
  return (
    <React.Fragment>
      <section className="mt-28">
        <div>
          {" "}
          <h4 className="text-[17px] font-medium font-primary ">
            Explore topics and skills
          </h4>
        </div>
        <div className="resource-grid">
          <article className="box bg-[black] span-2">
            box1
          </article>
          <article className="box bg-[blue] span-2">
            box2
          </article>
          <article className="box bg-[red] grid-col-start">
            box3  
          </article>
          <article className="box bg-[green]">
            box4
          </article>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TopicSkills;
