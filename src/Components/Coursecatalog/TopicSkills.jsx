import React from 'react'
import BgImage from '../../assets/images/catalog-img/standard.jpg'
import BgImage1 from '../../assets/images/catalog-img/laptop-on-login-screen.jpg'
import BgImage2 from '../../assets/images/catalog-img/mobile.jpg'
import BgImage3 from '../../assets/images/catalog-img/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg'
import "../Coursecatalog/Style/course-catalog.css"
const TopicSkills = () => {
  return (
    <React.Fragment>
      <div className="skill">Explore Topic and Skills</div>
      <section className="grid md:grid-cols-2 grid-cols-1 my-16 place-content-stretch items-stretch justify-stretch">
        <article
          className="w-11/12 justify-self-center rounded-lg relative place-content-stretch items-stretch"
        >
          <div className="absolute w-full rounded-lg">
            <img src={BgImage} className="w-full h-[385px]" />
          </div>
          <div className="text-center  p-16  relative bg-blue-500/50  h-max rounded-lg">
            <p className="text-[32px] font-semibold leading-loose my-24 text-white">
              Cyber Security
            </p>
          </div>
        </article>

        <article className="w-11/12  justify-self-center grid grid-cols-1 relative sm:mt-auto mt-8">
            <div className="absolute w-full rounded-lg">
              <img src={BgImage2} className="w-full h-[190px]" />
            </div>
            <div className="text-center mb-10 w-full p-16 rounded-md bg-indigo-500/50 relative text-[32px] font-semibold leading-loose text-white">
              {' '}
              Development{' '}
            </div>
          <div className=" rounded-md w-full grid md:grid-cols-2 grid-cols-1 justify-between place-items-center relative">
            <div
              className="relative w-11/12 md:justify-self-start justify-self-center"
            >
              <div className="absolute w-full rounded-lg">
                <img src={BgImage3} className="w-full h-40" />
              </div>
              <div className="text-center w-full bg-blue-500/50 py-12 mx-0 items-center relative text-[32px] font-semibold leading-loose text-white">
                <p>Design</p>
              </div>
            </div>

            <div
              className="relative w-11/12 md:justify-self-end sm:mt-auto mt-4 justify-self-center"
            >
              <div className="absolute w-full rounded-lg">
                <img src={BgImage1} className="w-full h-40" />
              </div>

              <div className="text-center w-full bg-blue-500/50 py-12 mx-0 relative text-[32px] font-semibold leading-loose text-white">
                {' '}
                <p>Business </p>{' '}
              </div>
            </div>
          </div>
        </article>
      </section>
    </React.Fragment>
  )
}

export default TopicSkills;
