import "./styles/services.css";
import online from "./images/online.png";
import mentorship from "./images/mentorship.png";
import "aos";

const Services = () => {
  return (
    <section className="services flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <h4 className="text-[32px] leading-[38.4px] font-primary relative w-fit text-4xl font-bold uppercase">
          Our Services
        </h4>
      </div>
      <div className="flex">
        <span className="w-[80px] h-[6px] color rounded-[12px] mr-[11pc]"></span>
      </div>
      <div
        className="services-container md:flex justify-center items-center  lg:flex justify-center items-center sm:flex justify-center items-center
      "
      >
        <div
          className="lg:flex flex-col justify-start p-10"
          data-aos="fade-right"
        >
          <img src={online} alt="online-learning" />
          <h5 className="title font-bold text-3xl font-primary mb-5">
            Online Learning and Training
          </h5>
          <p className="paragraph text-2xl font-medium font-secondary">
            Our online programs offer flexible, up-to-date tech education,
            allowing you to learn at your pace.
          </p>
          <button
            className="flex  lg:flex justify-between items-center px-10 py-5 bg-transparent hover:bg-blue-900 text-red-500 font-semibold border-2 border-red-500 transition duration-300 hover:border-blue-900 hover:text-white  mt-5"
            style={{
              width: "220px",
              borderRadius: "20px",
              fontSize: "14px",
            }}
          >
            <a
              href="/course-catalogue"
              className="flex text-red-500  hover:text-white"
            >
              <span>See Courses</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </button>
        </div>

        <div className="flex flex-col justify-start p-10" data-aos="fade-left">
          <img src={mentorship} alt="Mentorship" />
          <h5 className="title font-bold text-3xl font-primary mb-5">
            Mentorship
          </h5>
          <p className="paragraph text-2xl font-medium font-secondary">
            Our online programs offer flexible, up-to-date tech education,
            allowing you to learn at your pace.
          </p>
          <button
            className="flex  lg:flex justify-between px-10 py-5 bg-transparent hover:bg-blue-900 text-red-500 font-semibold border-2 border-red-500 transition duration-300 hover:border-blue-900 hover:text-white  mt-5"
            style={{
              width: "220px",
              borderRadius: "20px",
              fontSize: "14px",
            }}
          >
            <a
              href="/coming-soon"
              className="flex text-red-500  hover:text-white"
            >
              <span>See Mentors</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
