
import Sponsor1 from "../../assets/images/coinbase.svg";
import Sponsor2 from "../../assets/images/spotify.svg";
import Sponsor3 from "../../assets/images/slack.svg";
import Sponsor4 from "../../assets/images/dropbox.svg";
import Sponsor5 from "../../assets/images/webflow.svg";
import Sponsor6 from "../../assets/images/zoom.svg";
import Sponsor7 from "../../assets/images/loom.svg";
import Sponsor8 from "../../assets/images/asana.svg";
import Sponsor9 from "../../assets/images/adobe.svg";
import Sponsor10 from "../../assets/images/calendly.svg";
import Sponsor11 from "../../assets/images/github.svg";
import Sponsor12 from "../../assets/images/figma.svg";
import "../Sponsor/Styles/sponsor.css";

const Sponsor = () => {

  const sponsorLogos = [
    Sponsor1,
    Sponsor2,
    Sponsor3,
    Sponsor4,
    Sponsor5,
    Sponsor6,
    Sponsor7,
    Sponsor8,
    Sponsor9,
    Sponsor10,
    Sponsor11,
    Sponsor12,
  ];


  return (
    <div
      className="bg-contain w-full  bg-center bg-fixed py-40 background-color"
    >
      <div className="top-0  left-0 right-0 text-center pt-4 ">
        <h2 className="text-3xl  font-semibold text-black header-text ">
          PARTNERSHIPS
        </h2>
        <div className=" mx-auto mt-0 color"></div>
      </div>

      <div className="container  mx-auto grid grid-cols-6 gap-0">
        {sponsorLogos.map((logo, index) => (
          <div key={index} className="w-2/2 p-10">
            <img
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="mx-auto"
            
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
