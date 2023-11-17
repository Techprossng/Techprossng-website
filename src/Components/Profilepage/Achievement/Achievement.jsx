import React from "react";
import StarRating from "./Ratings";

const Achievement = () => {
  return (
    <div className="container mx-auto mt-8 mb-8 w-full bg-white">
      <div className="flex flex-wrap px-16 w-full">
        {/* First Column (col-8) */}
        <div className="md:w-8/12 mb-4 md:mb-0 shadow-md px-8 rounded-xl">
          <div className="flex p-4 font-bold mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7 mr-2 font-bold text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>

            <h5 className="-bold text-xl text-blue-900 tracking-tighter">
              Certificates
            </h5>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="flex flex-wrap border border-2 p-4 rounded-xl">
              {/* Cards in the Nested Columns */}
              <div className="md:w-4/12 lg\:w-3\/4 md:mb-0">
                <div className="p-4 rounded-lg">
                  <img
                    src="images/achievement.jpg"
                    alt="achieve-img"
                    className="h-40 border border-1 rounded-xl w-full"
                  />
                </div>
              </div>
              <div className="md:w-4/12 mb-4 md:mb-0">
                <div className="p-4 rounded-lg mb-4">
                  {/* Content for the card */}
                  <p className="text-blue-900 font-bold text-xl tracking-tighter">
                    Introduction To Coding
                  </p>
                  <div className="flex mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 font-bold text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627
                         0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482
                         0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0
                         0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112
                         13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000
                         1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>

                    <p className="font-bold text-md tracking-tighter text-red-500">
                      TechprosNG
                    </p>
                  </div>
                  <p className="font-bold text-md tracking-tighter text-gray-500">
                    Date Issued
                  </p>
                  <p className="font-bold text-md tracking-tighter text-gray-500">
                    Expiration Date
                  </p>
                  <p className="font-bold text-md tracking-tighter text-gray-500 mb-4">
                    Credential ID
                  </p>
                  <div className="flex">
                    <p className="font-bold text-md tracking-tighter text-gray-500">
                      Share:
                    </p>
                    <a href="#">
                      <i className="fab fa-twitter ml-4 text-red-500 text-2xl"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook ml-4 text-red-500 text-2xl"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram ml-4 text-red-500 text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-4/12 mb-4 md:mb-0">
                <div className="rounded-lg mb-4 text-right">
                  <div className="flex items-center p-4">
                    {/* JavaScript dynamically generates 5 stars */}
                    <StarRating />
                    <p className="text-red-500 font-semibold text-xl border border-2 p-2">
                      4.5
                    </p>
                  </div>
                  <div className="mt-4 p-4">
                    <p className="text-black font-semibold">may 2022</p>
                    <p className="text-black font-semibold text-sm tracking-tighter">
                      This certificate does not expire
                    </p>
                    <p className="text-black font-semibold">GX4EMF6NM4PB</p>
                    <div className="flex mt-4 float-right font-semibold p-4 underline text-red-500">
                      <a href="#">
                        <p className="text-red-500 text-lg font-semibold">
                          View
                        </p>
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-red-500 ml-4 mt-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap border border-2 p-4 rounded-xl mt-10">
              {/* Cards in the Nested Columns */}
              <div className="md:w-4/12 lg\:w-3\/4 md:mb-0">
                <div className="p-4 rounded-lg">
                  <img
                    src="images/achievement.jpg"
                    alt="achieve-img"
                    className="h-40 border border-1 rounded-xl w-full"
                  />
                </div>
              </div>
              <div className="md:w-4/12 mb-4 md:mb-0">
                <div className="p-4 rounded-lg mb-4">
                  {/* Content for the card */}
                  <p className="text-blue-900 font-bold text-xl tracking-tighter">
                    Introduction To Coding
                  </p>
                  <div className="flex mt-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 font-bold text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>

                    <p className="font-bold text-md tracking-tighter text-red-500n">
                      TechprosNG
                    </p>
                  </div>
                  <p className="font-bold text-md tracking-tighter text-gray-500">
                    Date Issued
                  </p>
                  <p className="font-bold text-md tracking-tighter text-gray-500">
                    Expiration Date
                  </p>
                  <p className="font-bold text-md tracking-tighter text-gray-500">
                    Credential ID
                  </p>
                  <div className="flex mt-8">
                    <p className="font-bold text-md tracking-tighter text-gray-500">
                      Share:
                    </p>
                    <a href="#">
                      <i className="fab fa-twitter ml-4 text-red-500 text-2xl"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook ml-4 text-red-500 text-2xl"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram ml-4 text-red-500 text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-4/12 mb-4 md:mb-0">
                <div className="rounded-lg mb-4 text-right">
                  <div className="flex p-4">
                    {/* JavaScript dynamically generates 5 stars */}
                    <StarRating />
                    <p className="text-red-500 font-semibold text-xl border border-2 p-2">
                      4.5
                    </p>
                  </div>
                  <div className="p-4 mt-8">
                    <p className="text-black font-semibold">may 2022</p>
                    <p className="text-black font-semibold text-sm tracking-tighter">
                      This certificate does not expire
                    </p>
                    <p className="text-black font-semibold">GX4EMF6NM4PB</p>
                    <div className="flex mt-4 float-right font-semibold p-4 underline text-red-500">
                      <a href="#">
                        <p className="text-red-500 text-lg font-semibold">
                          View
                        </p>
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-red-500 ml-4 mt-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column (col-4) */}
        <div className="md:w-4/12 px-4 rounded-xl shadow-lg w-full">
          {/* Cards in the Second Column */}
          <div className="flex py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{.5}"
              stroke="currentColor"
              className="w-6 h-6 font-extrabold text-red-500 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>

            <h5 className="font-bold text-xl text-blue-900">Medals</h5>
          </div>
          <div className="flex items-center rounded-xl mb-4 border border-1 bg-blue-900 text-white p-4">
            <h1 className="font-semibold">
              First Time Champion <br />
              <span className="font-normal">Complete 1 Course</span>
            </h1>
            <i className="fas fa-star text-white mr-1 ml-auto"></i>
          </div>
          <div className="flex items-center rounded-xl mb-4 border border-1 p-4">
            <h1 className="font-semibold">
              First Time Champion <br />
              <span className="font-normal">Complete 1 Course</span>
            </h1>
            <i className="fas fa-star text-black bg-white mr-1 ml-auto"></i>
          </div>
          <div className="flex items-center rounded-xl mb-4 border border-1 p-4">
            <h1 className="font-semibold">
              First Time Champion <br />
              <span className="font-normal">Complete 1 Course</span>
            </h1>
            <i className="fas fa-star text-black bg-white mr-1 ml-auto"></i>
          </div>
          <div className="flex items-center rounded-xl mb-4 border border-1 p-4">
            <h1 className="font-semibold">
              First Time Champion <br />
              <span className="font-normal">Complete 1 Course</span>
            </h1>
            <i className="fas fa-star text-black bg-white mr-1 ml-auto"></i>
          </div>
          <div className="flex items-center rounded-xl mb-4 border border-1 p-4">
            <h1 className="font-semibold">
              First Time Champion <br />
              <span className="font-normal">Complete 1 Course</span>
            </h1>
            <i className="fas fa-star text-black bg-white mr-1 ml-auto"></i>
          </div>
          <div className="flex items-center rounded-xl mb-4 border border-1 p-4">
            <h1 className="font-semibold">
              First Time Champion <br />
              <span className="font-normal">Complete 1 Course</span>
            </h1>
            <i className="fas fa-star text-black bg-white mr-1 ml-auto"></i>
          </div>
          <div className="flex items-center rounded-xl mb-4 border border-1 p-4">
            <h1 className="font-semibold">
              First Time Champion <br />
              <span className="font-normal">Complete 1 Course</span>
            </h1>
            <i className="fas fa-star text-black bg-white mr-1 ml-auto"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
