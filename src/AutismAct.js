import React from 'react'

import emotional from "./autistic/emotional.svg";
import match from "./autistic/match.svg";
import roll from "./autistic/roll.svg";
import Actnormal from "./Images/Actnormal.svg";
import structure from "./autistic/structure.svg";
import throwing from "./autistic/throwing.svg";
import "./styles/NormalAct.css";
const AutismAct = () => {
  return (
<div className="navbarPadding">
      <div style={{ maxWidth: "1440px", objectFit: "contain" }}>
        <img width="100%" height="100%" src={Actnormal} alt="hero-img" />
      </div>

   <div>
        <img src={emotional} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={match} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={roll} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={structure} className="normal-act" alt=''/>
        </div>
        <div>
        <img src={throwing} className="normal-act" alt=''/>
        </div>
       


   </div>
  )
}

export default AutismAct