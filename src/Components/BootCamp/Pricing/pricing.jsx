import React from 'react';
import Red from '../Redline/red';
import Banner from "../../../assets/images/banner.png"
import "../Pricing/Style/pricing.css"

function Pricing() {
  return (
    <div className="px-6 py-12 md:px-12 mt-24">
      <div >
        <h4
          className="text-[33px] ml-20 mr-24  font-primary font-bold"
          style={{ color: "#272727" }}
        >
          Pricing
        </h4>
        <Red />
      </div>
      <div className="px-20 py-12 pricing-container">
        <div className='w-full h-[500px]   pricing-background'>
        <div className='flex p-10'>
        <div className=''>
        <img src={Banner} className='absolute bottom-10 '/>

        </div>
        <div className=''> 

        </div>

        </div>

        </div>
        
      </div>
    </div>
  )
}

export default Pricing;