import React from 'react'
import hideImg from "./autistic/outdoor/hide.svg"
import playing from "./autistic/outdoor/playing.svg"
import splash from "./autistic/outdoor/splash.svg"
import throwing from "./autistic/outdoor/throwing.svg"
import hero from "./Images/hero.jpg";
import "./styles/NormalAct.css";

const OutdoorAutistic = () => {
  return (
    <div className='activity-main'>


    <div className="hero-image">
     <img src={hero} alt="hero image" />
   </div>

   <div>
        <img src={hideImg} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={playing} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={splash} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={throwing} className="normal-act" alt=''/>
        </div>
        <div>
       </div>

   </div>
  )
}

export default OutdoorAutistic