import React from 'react'
import ThinkAboutSection from './ThinkAboutSection'
import ThinkImage from '../../assets/images/books.png'

const ThinkAbout = () => {
  return (
    <div>
      <ThinkAboutSection
        head="Have you been thinking about getting into tech?"
        text="We've got you covered."
        src={ThinkImage}
      />
    </div>
  )
}

export default ThinkAbout