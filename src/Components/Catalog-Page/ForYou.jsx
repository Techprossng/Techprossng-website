import React from 'react'
import CardImage from '../../assets/images/full-shot-man-experiencing-virtual-reality.jpg'
import CyberImage from '../../assets/images/cyber-img.jpg'
import FrontendImage from '../../assets/images/frontend-img.jpg'
import CourseForYouCard from './CourseForYouCard'

const ForYou = () => {
  return (
    <section>
      <div className="font-sans text-2xl  ml-8 mb-8">
        <p>Recommended For You</p>
      </div>
<div className="mb-14 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
  <CourseForYouCard
    key={0}
    src={CardImage}
    head={'UI/UX Design'}
    text={
      'Design user interface that does not only look great but also provide seamless and intuitive experiences for users.'
    }
  />
  <CourseForYouCard
    key={1}
    src={CyberImage}
    head={'Cyber Security'}
    text={
      '
Cybersecurity is the practice of protecting computer systems, networks, and data from digital threats and attacks.'
    }
  />
  <CourseForYouCard
    key={2}
    src={FrontendImage}
    head={'Frontend Development'}
    text={'
Elevate your digital presence by mastering frontend development—cultivate user-friendly interfaces and enhance online experiences. '}
  />
</div>

     
    </section>
  )
}

export default ForYou
