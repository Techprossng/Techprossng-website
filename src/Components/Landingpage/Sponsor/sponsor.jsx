import React from 'react';
import "aos/dist/aos.css";
import Sponsor3 from "../../../assets/images/microsoft.svg";
import Sponsor4 from "../../../assets/images/flutterwave.svg";
import Sponsor5 from "../../../assets/images/google.svg";
import Sponsor6 from "../../../assets/images/app.svg";
import Sponsor8 from "../../../assets/images/farm.svg";
import Sponsor10 from "../../../assets/images/interswitch.svg";
import Sponsor11 from "../../../assets/images/amazon.svg";
import Sponsor12 from "../../../assets/images/andela.svg";
import "../../Landingpage/Sponsor/Styles/sponsor.css";

const Sponsor = () => {
  const sponsorLogos = [
    Sponsor3,
    Sponsor4,
    Sponsor5,
    Sponsor6,
    Sponsor8,
    Sponsor10,
    Sponsor11,
    Sponsor12,
  ];
  return (
    <div className="px-6 bg-contain w-full bg-center py-40 background-color sponsor-contain">
      <div className="flex justify-center" style={{ zIndex: 1 }}>
        <h4 className="text-[32px] leading-[38.4px] relative w-fit header-text font-primary font-normal">
          COMPANIES TO WORK WITH
          <p className="absolute bottom-[65%] left-0 w-[83px] h-[6px] color rounded-[12px] under-line"></p>
        </h4>
      </div>

      <div
        className="container mt-0 mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-20 pl-0 sponsor-small"
        data-aos="zoom-in-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      >
        {sponsorLogos.map((logo, index) => (
          <div key={index} className="w-full sm:w-5/5 md:w-5/5 lg:w-5/5 ">
            <img
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="mx-auto"
              data-aos="zoom-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
