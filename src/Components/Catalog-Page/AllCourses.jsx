import React from 'react'
import CardImage from '../../assets/images/standard-quality-control-concept-m.jpg'
import AllCoursesCard from './AllCoursesCard'
import { BiChevronRight } from 'react-icons/bi'
const AllCourses = () => {
  return (
    <section>
      <div className="font-sans text-2xl ml-8 mb-8 flex mr-8">
        <p className="mr-auto">All Courses</p>
      
          <a href="" className="ml-auto font-normal text-small pl-2 hover:text-red-500">view all</a>
          <BiChevronRight
            color={'red'}
            fontSize={'20px'}
            className="mt-2 mb-2"
          />
      
      </div>

      <div className={`mb-14 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1`}>
        {[...Array.from({ length: 3 }, (_, i) => i * 2)].map((val, indx) => {
          return (
            <AllCoursesCard
              key={indx}
              src={CardImage}
              head={'UI/UX Design'}
              text={
                'Design user interface that does not only look great but also provide seamless and intuitive experiences for users.'
              }
            />
          )
        })}
      </div>
    </section>
  )
}

export default AllCourses
