import React from 'react'
import glitter from "./autistic/sensory/glitter.svg"
import ice from "./autistic/sensory/ice.svg"
import jewelery from "./autistic/sensory/jewelry.svg"
import rubbing from "./autistic/sensory/rubbing.svg"
import sort from "./autistic/sensory/sort.svg"
import texture from "./autistic/sensory/texture.svg"
import tub from "./autistic/sensory/tub.svg"
import game from "./autistic/sensory/game.svg"

import hero from "./Images/hero.jpg";
import "./styles/NormalAct.css";

const SensoryAct = () => {
  return (
    <div className='activity-main'>


    <div className="hero-image">
     <img src={hero} alt="hero image" />
   </div>

   <div>
        <img src={glitter} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={ice} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={jewelery} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={rubbing} className="normal-act" alt=''/>
        <div>
        <img src={sort} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={texture} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={tub} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={game} className="normal-act" alt=''/>
        </div>
        </div>
        <div>
       </div>

   </div>
  )
}

export default SensoryAct