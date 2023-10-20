import React from "react";

const Card = ({ image, heading, subHeading, content, even }) => {
  return (
    <div className="flex gap-8 justify-center items-center px-16">
      {even ? (
        <>
          <img src={image} alt="avi" className="w-40 h-40" />

          <div className="rounded-lg px-4 py-6 shadow-2xl">
            <p
              style={{
                color: "#001975",
              }}
              className="text-base font-semibold mb-1"
            >
              {heading}
            </p>
            <p
              style={{
                color: "#272727",
              }}
              className="text-sm mb-1"
            >
              {subHeading}
            </p>
            <p style={{ color: "#272727" }} className="text-xs">
              {content}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="rounded-lg px-4 py-6 shadow-lg">
            <p
              style={{
                color: "#001975",
              }}
              className="text-base font-semibold mb-1"
            >
              {heading}
            </p>
            <p
              style={{
                color: "#272727",
              }}
              className="text-sm mb-1"
            >
              {subHeading}
            </p>
            <p style={{ color: "#272727" }} className="text-xs">
              {content}
            </p>
          </div>
          <img src={image} alt="avi" className="w-40 h-40" />
        </>
      )}
    </div>
  );
};

export default Card;
