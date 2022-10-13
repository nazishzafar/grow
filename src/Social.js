import React from 'react'
import emotional from "./autistic/social/emotional.svg"
import follow from "./autistic/social/follow.svg"
import memory from "./autistic/social/memory.png"
import put from "./autistic/social/put.svg"


import hero from "./Images/hero.jpg";
import "./styles/NormalAct.css";

const Social
 = () => {
  return (
    <div className='activity-main'>


    <div className="hero-image">
     <img src={hero} alt="hero image" />
   </div>

   <div>
        <img src={emotional} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={follow} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={memory} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={put} className="normal-act" alt=''/>
       
       
      
      
        </div>
        <div>
       </div>

   </div>
  )
}

export default Social
