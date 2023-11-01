// import React from "react";
import avi from "../../../assets/avi.png";
import Card from "./card";
import Blue from "../Blueline/blue";
import "./Styles/testimonial.css";

export const cards = [
  {
    image: avi,
    heading: "Data analysis",
    subHeading: "Nia Abimbola",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nec lacus non orci cursus proin integer tellus volutpat. Dui morbi ullamcorper ut sed nunc. Quam convallis tortor condimentum adipiscing maecenas nunc. A orci fames in cras.",
  },
  {
    image: avi,
    heading: "Data analysis",
    subHeading: "Nia Abimbola",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nec lacus non orci cursus proin integer tellus volutpat. Dui morbi ullamcorper ut sed nunc. Quam convallis tortor condimentum adipiscing maecenas nunc. A orci fames in cras.",
  },
  {
    image: avi,
    heading: "Data analysis",
    subHeading: "Nia Abimbola",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nec lacus non orci cursus proin integer tellus volutpat. Dui morbi ullamcorper ut sed nunc. Quam convallis tortor condimentum adipiscing maecenas nunc. A orci fames in cras.",
  },
  {
    image: avi,
    heading: "Data analysis",
    subHeading: "Nia Abimbola",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nec lacus non orci cursus proin integer tellus volutpat. Dui morbi ullamcorper ut sed nunc. Quam convallis tortor condimentum adipiscing maecenas nunc. A orci fames in cras.",
  },
];

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 py-11">
      <div data-aos="zoom-in-left">
        <h4
          className="text-3xl ml-24 mr-24 uppercase testimonial"
          style={{ color: "#272727" }}
        >
          testimonials
        </h4>
        <Blue />
      </div>
      <div className="flex gap-16 items-center justify-center mx-24 flex-col px-32 mainSection">
        {cards.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            heading={item.heading}
            subHeading={item.subHeading}
            content={item.content}
            even={index % 2 === 0 ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
