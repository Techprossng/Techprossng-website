import React from 'react'
import {HiCheck} from 'react-icons/hi'
const ThinkAboutSection = (props) => {
  return (
   <div className="px-6 py-12 md:px-12 text-center lg:text-left  ">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
          <div className="mt-12 lg:mt-0 font-sans" data-aos="fade-right"  data-aos-duration="2000">
            <h2 className=" text-[24px] font-semibold leading-loose my-8  text-blue-900">
              <br />
              {props.head}
            </h2>
            <p className='mb-16'>{props.text}</p>
           <div class="mt-4 flex text-start">
                <HiCheck  color={'green'} className="w-6 h-6 mr-4 text-green-500  "/>
                <ul class="list-none ">
                  <li>Designed in collaboration with industry experts, focusing on practical skills.</li>
                </ul>
              </div>
               <div class="mt-4 flex text-start">
                <HiCheck className='w-6 h-6 mr-4 text-green-500 ' color={'green'}/>
                <ul class="list-none ">
                  <li>Affordable courses and flexible payment options.</li>
                </ul>
              </div>
               <div class="mt-4 flex text-start">
              <HiCheck className='w-6 h-6 mr-4 text-green-500' color={'green'}/>
                <ul class="list-none ">
                  <li>Personalized learning paths and adaptive assesments.</li>
                </ul>
              </div>
               <div class="mt-4 flex text-start">
               <HiCheck className='w-6 h-6 mr-4 text-green-500 ' color={'green'}/>
                <div class="list-none  ">
                  <p>Frequently updated to align with industry standards and market demands.</p>
                </div>
              </div>
               <div class="mt-4 flex text-start">
               <HiCheck className='w-6 h-6 mr-4 text-green-500' color={'green'}/>
                <ul class="list-none ">
                  <li>Support you need to succeed, not only academically but also  personally and professionally.</li>
                </ul>
              </div>
          </div>
          <div className="mb-12 lg:mb-0" data-aos="fade-left"  data-aos-duration="2000">
            <img
              src={props.src}
              className="w-full rounded-lg shadow-lg transition duration-500 ease-in-out bg-white-700 hover:bg-blue-900 transform hover:-translate-y-1 hover:scale-110 "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThinkAboutSection