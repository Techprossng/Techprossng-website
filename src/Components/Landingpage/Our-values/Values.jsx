import React from 'react'
import 'aos'
import ValuesImg from '../../../assets/images/values/values.jpg'
const Values = () => {
  return (
    <section className="values mt-24">
      <h2 className="text-center font-sans text-4xl md:text-3xl xl:text-4xl tracking-tight md:mb-12">
        <span className="text-blue-900 text-5xl">Our</span>
        <span className="text-black text-5xl"> Values</span>
      </h2>
      <div
        className="mt-12 md:mt-24 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${ValuesImg})` }}
      >
        <div className="bg-blue-900 bg-opacity-60 text-white py-12">
          <p
            className="text-justify mx-6 sm:mx-12 md:mx-24 text-sans text-lg md:text-xl mb-4"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          >
            These values serve as a compass, directing the company's decisions,
            behaviors, and interactions both internally and externally. Tech
            company values typically reflect the organization's commitment to
            innovation, customer-centricity, and ethical practices.
          </p>
        </div>

        <div className="grid-cols-1 sm:grid md:grid-cols-2 mb-4 text-2xl font-sans mx-12 ">
              <div
                className="mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 hover:text-white duration-300"
              >
                <button className="inline-flex items-center px-6 text-black hover:text-white">
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
              <div
                className="mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 hover:text-white duration-300"
              >
                <button className="inline-flex items-center px-6 text-black hover:text-white">
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
              <div
                className="mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 hover:text-white duration-300"
              >
                <button className="inline-flex items-center px-6 text-black hover:text-white">
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
              <div
                className="mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 hover:text-white duration-300"
              >
                <button className="inline-flex items-center px-6 text-black hover:text-white">
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
              <div
                className="mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 hover:text-white duration-300"
              >
                <button className="inline-flex items-center px-6 text-black hover:text-white">
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
              <div
                className="mx-12 mt-6 flex flex-col rounded-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 border border-blue-400 py-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 hover:text-white duration-300"
              >
                <button className="inline-flex items-center px-6 text-black hover:text-white">
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
  )
}

export default Values
