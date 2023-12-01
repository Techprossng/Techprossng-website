import React from 'react';
import "../Stats-ImpactVideo/Style/s-iv.css"
import IV from "../../../assets/images/impact-video.png"
import Stat1 from "../../../assets/images/Stats.png"
import Stat2 from "../../../assets/images/Stats-2.png"
import Stat3 from "../../../assets/images/Stats-3.png"



function StatsImpactVideo() {
  return (
    <div className="s-iv">
          <div className="stats">
               <div className="stats-text">
                    <h4 className="font-primary font-bold text-3xl text-center">Numbers doing the talking...</h4>
               </div>
               <div className="stats-image">
                    <img src={Stat1} alt="" />
                    <img src={Stat2} alt="" />
                    <img src={Stat3} alt="" />
               </div>
          </div>
          <div className="impact-video mt-10 mb-10 w-[65%]">
               <a href=""><img src={IV} alt="impact-video" 
               className="w-full"
               /></a>
          </div>
    </div>
  )
}

export default StatsImpactVideo;
