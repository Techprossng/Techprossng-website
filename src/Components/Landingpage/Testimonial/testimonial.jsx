import smGuy from "../../../assets/smGuy.jpg";
import dataGuy from "../../../assets/dataGuy.jpg";
import Rafiu from "../../../assets/Rafiu.png";
import avi from "../../../assets/avi.png";
import Card from "./card";
import Blue from "../Blueline/blue";
import "./Styles/testimonial.css";

export const cards = [
  {
    image: avi,
    heading: "Content Marketer",
    subHeading: "Boluwatife Ogunniyi",
    content:
      "TechProsNG has transformed me into a more skilled Content Writer & Creator. Being a part of TechProsNG opened my eyes to the fact that possessing a skill is just the beginning; it's the application of that skill to tackle content challenges that truly matters. TechProsNG served as my practical training ground, where I put my acquired skills into action like a true professional.",
  },
  {
    image: Rafiu,
    heading: "Product Designer",
    subHeading: "AbdulRafiu Popoola",
    content:
      "TechProsNG challenged me to grow as a designer. When I first joined the team, I had some experience working on real-life projects. However, the feedback I received on one of my early designs helped me take my skills to the next level. While it was difficult to hear at first, I took it with an open mind and willingness to learn. The redesign turned out way better. I'm grateful for the opportunity to work with the other interns at TechProsNG.",
  },
  {
    image: dataGuy,
    heading: "Data Analyst",
    subHeading: "Oluwatobi Akinwale",
    content:
      "My experience at TechProsNG provided valuable insights into the dynamics of remote teams. It allowed me to refine my communication and collaboration skills, which are crucial for ensuring the efficiency of remote work and successful project deliveries. I've been involved in various projects, including data gathering and cleansing, creating a real-time dashboard for monitoring a social media platform using Google Sheets (GS).",
  },
  {
    image: smGuy,
    heading: "Social Media Manager",
    subHeading: "Jerry Ogbomor",
    content:
      "TechProsNaija is a powerhouse for young and creative minds to thrive. TechProsNaija fosters a balance between individual creativity and collaborative partnerships among team members. The opportunity to work with TechProsNaija has opened my eyes to the potential of tech education and the importance of acquiring tech skills. I am learning a lot and eagerly anticipating more success with TechProsNaija.",
  },
];

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 py-12">
      <div data-aos="zoom-in-left">
        <h4
          className="text-3xl ml-24 mr-24 uppercase testimonial font-primary font-bold"
          style={{ color: "#272727" }}
        >
          testimonials
        </h4>
        <Blue />
      </div>
      <div className="flex gap-16 items-center justify-center flex-col px-32 mainSection">
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
