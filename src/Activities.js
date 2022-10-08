import React from 'react'
import hero from "./Images/hero.jpg";
import balance from "./normal/balance.png"
import ballon from "./normal/ballon.png"
import blocks from "./normal/blocks.png"
import chair from "./normal/chair.png"
import freeze from "./normal/freeze.png"
import hide from "./normal/hide.png"
import HOPSCOTCH from "./normal/HOPSCOTCH.png"
import ice  from "./normal/ice.png"
import indoorc from "./normal/indoorc.png"
import inout from "./normal/inout.png"
import light from "./normal/lght.png"
import puzzle from "./normal/puzzle.png"
import simon from "./normal/simon.png"
import sorting from "./normal/sorting.png"
import tape from "./normal/tape.png"
import ziping from "./normal/ziping.png"
import "./styles/NormalAct.css";
const Activities = () => {
  return (
    <div className='activity-main'>


    <div className="hero-image">
     <img src={hero} alt="hero image" />
   </div>

   <div>
        <img src={balance} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={ballon} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={blocks} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={chair} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={freeze} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={hide} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={HOPSCOTCH} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={ice} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={indoorc} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={inout} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={light} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={puzzle} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={simon} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={sorting} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={tape} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={ziping} className="normal-act" alt=''/>
        </div>


   </div>
  )
}

export default Activities