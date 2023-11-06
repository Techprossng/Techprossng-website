import { Card } from 'flowbite-react'
import { MdStar, MdBookmarks } from 'react-icons/md'
import {FaLongArrowAltRight} from 'react-icons/fa'
import  'aos'

const CourseForYouCard = (props) => {

  return (
    <article className={`w-full mb-14 `}>
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={props.src}
        className=" py-0 mx-8 h-[718px]"
        data-aos="fade-up" data-aos-duration="2000" 
      >
        <h5 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
          <p>{props.head}</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>{props.text}</p>
        </p>
        <div className="mt-4 flex">
          {[...Array.from({ length: 5 }, (_, i) => i * 2)].map((val, indx) => {
            return (
              <span className={`mr-2 text-yellow-400`} key={indx}>
                <MdStar color={`red`} />
              </span>
            )
          })}

          <span> 5.0 (3) </span>
        </div>
        <div className="flex sm:flex-row flex-col m-auto">
          <button className="inline-flex items-center md:mr-4 mr-2 hover:bg-blue-900 hover:text-white  bg-white text-blue-900 text-sm px-8 font-semibold py-2 border border-blue-900 rounded-[10px] mt-12 ">
            <MdBookmarks />
            <span className={`ml-2`}> Add To List</span>
          </button>
          <button className="inline-flex items-center md:ml-4 ml-2 text-white text-lg bg-red-500 hover:bg-blue-900 hover:text-white  font-semibold  px-4 py-2  border  rounded-[10px] mt-12">
            <span> View Course</span>
            <FaLongArrowAltRight/>
          </button>
        </div>
      </Card>
    </article>
  )
}

export default CourseForYouCard
