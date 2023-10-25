// import React from "react";
import avi from "../../../assets/avi.png";
import Card from "./card";

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
    <div
      className="flex flex-col items-center justify-center gap-16 py-11"
      data-aos="zoom-in-left"
    >
      <div>
        <h4
          className="text-3xl ml-24 mr-24 uppercase"
          style={{ color: "#272727" }}
        >
          testimonials
        </h4>
        <div
          style={{ backgroundColor: "#2B3F8C" }}
          className="w-20 h-1 rounded-xl ml-24 mr-24 mt-1 mb-3"
        ></div>
      </div>
      <div className="flex gap-16 items-center justify-center mx-24 flex-col px-32 ">
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
