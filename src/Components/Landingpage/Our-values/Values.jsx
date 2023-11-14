import "aos";
import Blue from "../Blueline/blue";
import "./styles/style.css";
// import backgroundimage from "../../../assets/images/values/background.svg";

const Values = () => {
  return (
    <section className="values mt-20">
      <div className="items-center">
        <h2 className="text-center  text-4xl md:text-3xl xl:text-4xl  md:mb-12">
          Our Values
          <p className=" relative bottom-[-5px] left-[44%] ml-0 w-[83px] h-[6px] color  rounded-[12px] under-line"></p>
        </h2>
      </div>
      <div className="mt-10 md:mt-24">
        <div className="grid-cols-1 sm:grid md:grid-cols-2 mb-4 text-2xl font-sans mx-12 ">
          <div className="bg-image mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-black duration-300">
            <button
              className="inline-flex items-center px-6 text-black hover:text-black
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-center"> Customer Centricity</span>
            </button>
          </div>
          <div className="bg-image mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  hover:text-black duration-300">
            <button className="inline-flex items-center px-6 text-black hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-center"> Innovation</span>
            </button>
          </div>
          <div className="bg-image mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-black duration-300">
            <button className="inline-flex items-center px-6 text-black hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-center"> Quality</span>
            </button>
          </div>
          <div className="bg-image mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-black duration-300">
            <button className="inline-flex items-center px-6 text-black hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-center"> Sustainability</span>
            </button>
          </div>
          <div className="bg-image mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-black duration-300">
            <button className="inline-flex items-center px-6 text-black hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-center"> Diversity and Inclusion</span>
            </button>
          </div>
          <div className="bg-image mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:text-black duration-300">
            <button className="inline-flex items-center px-6 text-black hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2 text-blue-900 hover:text-white bg-white rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-center"> Responsibility</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
