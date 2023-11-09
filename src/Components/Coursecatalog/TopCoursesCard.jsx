import React, { useEffect } from 'react'
import CardImage from '../../assets/images/catalog-img/topcourses.png'
import { MdStar, MdBookmarks } from 'react-icons/md'
const TopCoursesCard = (props) => {
  return (
        <article className="w-full mb-8 sm:mb-14">
      <div className="p-4 bg-white rounded-md shadow-md">
        <div
          className="h-[200px] sm:h-[300px] bg-cover bg-center bg-no-repeat mb-4 rounded-2xl"
          style={{ backgroundImage: `url(${props.src})` }}
        ></div>
        <h5 className="text-2xl font-bold tracking-tight text-blue-900">
          {props.head}
        </h5>
        <p className="font-normal text-gray-700 mt-2">
          {props.text}
        </p>
        <div className="mt-4 flex items-center">
          {[...Array(5)].map((_, i) => (
            <span className="mr-2 text-yellow-400" key={i}>
              <MdStar color="orange" />
            </span>
          ))}
          <span className="text-black-900">(5.0 / 3)</span>
        </div>
        <div className="flex flex-col sm:flex-row mt-4 justify-around">
          <button className="inline-flex items-center sm:mr-2 sm:mb-0 mb-2 text-blue-900 hover:bg-blue-900 hover:text-white ring-2 ring-blue-700 text-sm px-4 py-2 font-semibold rounded-md">
            <MdBookmarks />
            <span className="ml-2">Add To List</span>
          </button>
          <button className="inline-flex items-center sm:ml-2 sm:mb-0 mb-2 bg-red-500 text-white hover:bg-blue-900 hover:text-white text-lg font-semibold px-4 py-2 rounded-2xl">
            <span>View Course</span>
          </button>
        </div>
      </div>
    </article>
  );
};

const CourseForyou = () => {
  return (
    <section>
      <div className="font-sans text-2xl ml-4 sm:ml-8 mb-8">
        <p>Top Courses</p>
      </div>

      <div className="container mx-auto px-4 mb-8 sm:mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <TopCoursesCard
              key={i}
              src={CardImage}
              head="UI/UX Design"
              text="Design user interface that does not only look great but also provide seamless and intuitive experiences for users."
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CourseForyou;
