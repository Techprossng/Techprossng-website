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
    Sponsor8,
    Sponsor9,
    Sponsor10,
    Sponsor11,
    Sponsor12,
  ];

  return (
    <div className="bg-contain w-full  bg-center bg-fixed py-40 background-color">
      <div className="flex justify-center " style={{ zIndex: 1 }}>
        <h2 className="text-[32px] leading-[38.4px] relative w-fit header-text">
          PARTNERSHIPS
          <p className="absolute bottom-[-8px] left-0 w-[83px] h-[6px] color rounded-[12px]"></p>
        </h2>
      </div>

      <div className="container mt-10  mx-auto grid grid-cols-6 gap-0">
        {sponsorLogos.map((logo, index) => (
          <div key={index} className="w-2/2 p-10">
            <img src={logo} alt={`Sponsor ${index + 1}`} className="mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
