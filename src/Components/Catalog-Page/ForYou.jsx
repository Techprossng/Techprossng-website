import React from 'react'
import CardImage from '../../assets/images/full-shot-man-experiencing-virtual-reality.jpg'
import CourseForYouCard from './CourseForYouCard'

const ForYou = () => {
  return (
    <section>
      <div className="font-sans text-2xl  ml-8 mb-8">
        <p>Recommended For You</p>
      </div>

      <div className={`mb-14 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1`}>
        {[...Array.from({ length: 3 }, (_, i) => i * 2)].map((val, indx) => {
          return (
            <CourseForYouCard
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

export default ForYou
