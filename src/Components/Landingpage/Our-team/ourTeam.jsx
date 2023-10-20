import React from "react";
import team_avi from "../../../assets/team_avi.png";
import "./styles/team.css"

export const team = [
  {
    img: team_avi,
    name: "Lorem Ipsum",
    role: "Founder & CEO",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing enim amet id elit non ac aenean. Adipiscing enim amet id elit non ac aenean. ",
  },
  {
    img: team_avi,
    name: "Lorem Ipsum",
    role: "Founder & CEO",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing enim amet id elit non ac aenean. Adipiscing enim amet id elit non ac aenean. ",
  },
  {
    img: team_avi,
    name: "Lorem Ipsum",
    role: "Founder & CEO",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing enim amet id elit non ac aenean. Adipiscing enim amet id elit non ac aenean. ",
  },
];

const OurTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 py-11">
      <div>
        <h4
          className="text-3xl ml-24 mr-24 uppercase"
          style={{ color: "#272727" }}
        >
          our team
        </h4>
        <div
          style={{ backgroundColor: "#2B3F8C" }}
          className="w-16 h-1 rounded-xl ml-24 mr-24 mt-1 mb-3"
        ></div>
      </div>
      <div className="flex gap-10 items-center justify-center mx-24 ">
        {team.map((item, index) => (
          <div key={index}>
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
                <p style={{ color: "#001975" }} className="text-3xl">
                  {item.name}
                </p>
                <p style={{ color: "#656565" }} className="text-base uppercase">
                  {item.role}
                </p>
                <p style={{ color: "#272727" }} className="text-sm">
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
