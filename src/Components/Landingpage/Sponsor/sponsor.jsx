import "aos/dist/aos.css";
import Sponsor1 from "../../../assets/images/coinbase.svg";
import Sponsor2 from "../../../assets/images/spotify.svg";
import Sponsor3 from "../../../assets/images/slack.svg";
import Sponsor4 from "../../../assets/images/dropbox.svg";
import Sponsor5 from "../../../assets/images/webflow.svg";
import Sponsor6 from "../../../assets/images/zoom.svg";
import Sponsor7 from "../../../assets/images/loom.svg";
import Sponsor8 from "../../../assets/images/asana.svg";
import Sponsor9 from "../../../assets/images/adobe.svg";
import Sponsor10 from "../../../assets/images/calendly.svg";
import Sponsor11 from "../../../assets/images/github.svg";
import Sponsor12 from "../../../assets/images/figma.svg";
import "../../Landingpage/Sponsor/Styles/sponsor.css";

const Sponsor = () => {
  const sponsorLogos = [
    Sponsor1,
    Sponsor2,
    Sponsor3,
    Sponsor4,
    Sponsor5,
    Sponsor6,
    Sponsor7,
    Sponsor10,
    Sponsor11,
    Sponsor9,
    Sponsor8,
    Sponsor12,
  ];
  return (
    <div className="px-6 bg-contain w-full bg-center py-40 background-color sponsor-contain">
      <div className="flex justify-center" style={{ zIndex: 1 }}>
        <h2 className="text-[32px] leading-[38.4px] relative w-fit header-text  ">
          PARTNERSHIPS
          <p className="absolute bottom-[80px] left-0 w-[83px] h-[6px] color rounded-[12px] under-line"></p>
        </h2>
      </div>

      <div
        className="container mt-0 mx-auto grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-20 pl-0 sponsor-small"
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
