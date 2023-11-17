import PropTypes from "prop-types";
import "./Styles/testimonial.css";
import { useMediaQuery } from "react-responsive";

const Card = ({ image, heading, subHeading, content, even }) => {
  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 640px)",
  });
  const isTab = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });
  const isBigScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <>
      {isBigScreen && (
        <div className="flex gap-8 justify-center items-center px-16 transform hover:scale-110">
          {even ? (
            <div
              className="flex gap-9 justify-center items-center"
              data-aos="zoom-in-left"
            >
              <img src={image} alt="avi" className="testimonial-image w-44 h-44 " />
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
                  className="text-sm mb-3 font-semibold"
                >
                  {subHeading}
                </p>
                <p
                  style={{ color: "#272727" }}
                  className="text-sm text-justify"
                >
                  {content}
                </p>
              </div>
            </div>
          ) : (
            <div
              className="flex gap-9 odd1 justify-center items-center"
              data-aos="zoom-in-right"
            >
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
                  className="text-sm mb-3 font-semibold"
                >
                  {subHeading}
                </p>
                <p
                  style={{ color: "#272727" }}
                  className="text-sm text-justify"
                >
                  {content}
                </p>
              </div>
              <img src={image} alt="avi" className="testimonial-image w-44 h-44" />
            </div>
          )}
        </div>
      )}
      {isTab && (
        <div className="flex gap-8 justify-center items-center px-16 transform hover:scale-110 cardSection1">
          {even ? (
            <div
              className="flex gap-9 justify-center items-center"
              data-aos="zoom-in-left"
            >
              <img src={image} alt="avi" className="testimonial-image w-40 h-40" />

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
                  className="text-base mb-3 font-semibold"
                >
                  {subHeading}
                </p>
                <p
                  style={{ color: "#272727" }}
                  className="text-sm text-justify"
                >
                  {content}
                </p>
              </div>
            </div>
          ) : (
            <div
              className="flex gap-9 justify-center items-center"
              data-aos="zoom-in-right"
            >
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
                  className="text-base mb-3 font-semibold"
                >
                  {subHeading}
                </p>
                <p
                  style={{ color: "#272727" }}
                  className="text-sm text-justify"
                >
                  {content}
                </p>
              </div>
              <img src={image} alt="avi" className="testimonial-image w-40 h-40" />
            </div>
          )}
        </div>
      )}
      {isMobile && (
        <div
          className="flex flex-col relative justify-center items-center transform hover:scale-110 "
          data-aos="zoom-in-left"
        >
          <img src={image} alt="avi" className="testimonial-image w-24 h-24 absolute -top-10" />

          <div className="rounded-lg w-full px-3 py-6 shadow-2xl mt-9">
            <p
              style={{
                color: "#001975",
              }}
              className="text-base font-bold mb-1"
            >
              {heading}
            </p>
            <p
              style={{
                color: "#272727",
              }}
              className="text-sm mb-3 font-semibold"
            >
              {subHeading}
            </p>
            <p style={{ color: "#272727" }} className="text-sm  text-justify">
              {content}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  content: PropTypes.string,
  even: PropTypes.bool,
};

export default Card;
