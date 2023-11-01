// import React from "react";
import team_avi from "../../../assets/team_avi.png";
import "./styles/team.css";
import Blue from "../Blueline/blue";

export const team = [
  {
    img: team_avi,
    name: "Lorem Ipsum",
    role: "Founder & CEO",
    fade: "fade-right",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing enim amet id elit non ac aenean. Adipiscing enim amet id elit non ac aenean. ",
  },
  {
    img: team_avi,
    name: "Lorem Ipsum",
    role: "Founder & CEO",
    fade: "flip-right",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing enim amet id elit non ac aenean. Adipiscing enim amet id elit non ac aenean. ",
  },
  {
    img: team_avi,
    name: "Lorem Ipsum",
    role: "Founder & CEO",
    fade: "fade-left",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing enim amet id elit non ac aenean. Adipiscing enim amet id elit non ac aenean. ",
  },
];

const OurTeam = () => {
  return (
    <div className="flex flex-col  items-center justify-center gap-16 py-11">
      <div data-aos="zoom-in-left">
        <h4
          className="text-3xl ml-24 mr-24 uppercase ourTeam"
          style={{ color: "#272727" }}
        >
          our team
        </h4>
        <Blue />
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-center mx-24 cardSection">
        {team.map((item, index) => (
          <div key={index} data-aos={item.fade} className="w-1/4 singleCard">
            <div className="rounded-t-2xl">
              <img
                src={item.img}
                alt="image"
                style={{
                  borderTopRightRadius: "16px",
                  borderTopLeftRadius: "16px",
                }}
              />
            </div>
            <div className="bgImg">
              <div className="rounded-b-2xl px-5 h-fit py-10 flex flex-col gap-2 items-center shadow-md">
                <p style={{ color: "#001975" }} className="text-3xl name">
                  {item.name}
                </p>
                <p
                  style={{ color: "#656565" }}
                  className="text-base uppercase role"
                >
                  {item.role}
                </p>
                <p style={{ color: "#272727" }} className="text-sm desc">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
