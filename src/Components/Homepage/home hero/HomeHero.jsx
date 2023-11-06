import HeroImage from '../../../assets/images/homepage-img/Frame 427320498.png'
import { MdBookmarks } from 'react-icons/md'
import 'aos'

const Hero = () => {

  return (
    <div
      className="px-6 py-12 md:px-12 text-center lg:text-left mx-0 "
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-0 flex items-center">
          <div className="mt-12 lg:mt-10 bg-blue-900 px-12 h-full mb-8">
            <h3 className="mt-12 text-red-500">Top Recommended</h3>
            <h2 className="text-5xl md:text-4xl xl:text-4xl font-semibold tracking-tight mb-12 text-gray-400  text-2xl mt-4">
              UI/UX <br />
              DESIGN
            </h2>
            <p className="text-lg text-left text-white"></p>
            <div class="mt-4 flex">
              <svg
                class="w-6 h-6 mr-2 text-red-500 rounded-full font-semibold"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <ul class="list-none text-white text-base">
                <li>3 Months</li>
              </ul>
            </div>

            <div class="mt-4 flex">
              <svg
                class="w-6 h-6 mr-2 text-red-500 rounded-full font-semibold"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                ></path>
              </svg>
              <ul class="list-none text-white text-base">
                <li>45 Currently Enrolled</li>
              </ul>
            </div>
            <div class="mt-4 flex">
              <svg
                class="w-6 h-6 mr-2 text-red-500 rounded-full font-semibold"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                ></path>
              </svg>

              <ul class="list-none text-white text-base">
                <li>Includes Certificates</li>
              </ul>
            </div>
            <div class="mt-4 flex">
              <svg
                class="w-6 h-6 mr-2 text-red-500 rounded-full font-semibold"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                ></path>
              </svg>
              <ul class="list-none">
                <li class="text-base">
                  <span class="text-white">4.5 </span>
                  <span class="text-yellow-400 text-underline">
                    Road[56] Reviews
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex mt-4">
              <MdBookmarks color={'white'} className="mr-2" />
              <ul class="list-none text-white text-base">
                <li>Currently Enrolled</li>
              </ul>
            </div>
            <div className="flex">
              <button className="inline-flex items-center  hover:bg-white hover:text-red-500  bg-red-500 text-white font-semibold   px-8 border  hover:border-transparent py-2 mt-12 rounded-full mr-4">
                <span>Start Course</span>
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
          </div>

          <div className=" lg:mb-0">
            <img
              src={HeroImage}
              className="w-full rounded-lg shadow-lg transition duration-500 ease-in-out bg-white-700 mx-0  md:mt-10 sm:mt-10 mt-10"
              data-aos="fade-left"
              data-aos-duration="2000"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}



export default Hero
