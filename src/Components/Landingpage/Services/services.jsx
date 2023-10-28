import "./styles/services.css";
import online from "./images/online.png";
import mentorship from "./images/mentorship.png";
import "aos";

const Services = () => {
  return (
    <section className="services flex flex-col items-center justify-center">
      <div>
        <h4 className="sm:flex items-center md:text-3xl ml-24 mr-24 leading-[38.4px] uppercase lg:text-3xl ml-24 mr-24 leading-[38.4px] uppercase" style={{ color: "#272727" }}>
          our services
        </h4>
        <div
          style={{ backgroundColor: "#2B3F8C" }}
          className="w-16 h-1 rounded-xl ml-24 mr-24 mt-1"
        ></div>
      </div>
      <div className="services-container md:flex justify-center items-center  lg:flex justify-center items-center sm:flex justify-center items-center
      ">
        <div className="card lg:flex flex-col justify-center items-center text-center p-10" data-aos="fade-right">
          <img src={online} alt="online-learning" />
          <h5 className="title font-normal text-3xl font-primary mb-5">
            Online Learning and Training
          </h5>
          <p className="paragraph text-2xl font-medium font-secondary">
            Our online programs offer flexible, up-to-date tech education,
            allowing you to learn at your pace.
          </p>
        </div>

        <div className="card flex flex-col justify-center items-center text-center p-10" data-aos="fade-left">
          <img src={mentorship} alt="Mentorship" />
          <h5 className="title font-normal text-3xl font-primary mb-5">Mentorship</h5>
          <p className="paragraph text-2xl font-medium font-secondary">
            Unlock your tech career&apos;s full potential through our mentorship
            programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
