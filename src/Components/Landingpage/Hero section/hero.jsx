import React from 'react'
import HeroImage from '../../../assets/images/hero-img.png'
import 'aos'

const Hero = () => {
  return (
    <div className="px-6 py-12 md:px-12 text-center lg:text-left  mt-24">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
          <div
            className="mt-12 lg:mt-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h2 className="text-5xl md:text-4xl xl:text-6xl font-semibold tracking-tight mb-12 text-blue-900  animate-text bg-gradient-to-r from-red-500 via-blue-900 to-red-400 bg-clip-text text-transparent text-5xl">
              <br />
              TechProsNG
            </h2>
            <p className="text-xl text-justify-start text-black">
              We are Tech Education Company dedicated to empowering the next
              generation of tech innovators in Nigeria. Explore our cutting-edge
              courses, join a supportive tech community, and become confident in
              your tech skills. Together we're driving progress in the digital
              era. Start your transformative journey with us now.
            </p>

            <button class="inline-flex items-center px-6 py-2 bg-transparent hover:bg-blue-900 text-red-500 font-semibold hover:text-white py-2 px-8 border border-red-700 hover:border-transparent rounded-full mt-5">
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
            </button>
          </div>
          <div
            className="mb-12 lg:mb-0"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img
              src={HeroImage}
              className="w-full rounded-lg shadow-lg transition duration-500 ease-in-out bg-white-700 hover:bg-blue-900 transform hover:-translate-y-1 hover:scale-100 "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
