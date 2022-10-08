import React from 'react'
import hero from "./Images/hero.jpg";
import art from "./autistic/indoor/art.svg"
import dance from "./autistic/indoor/dance.svg"
import match from "./autistic/indoor/match.svg"
import roll from "./autistic/indoor/roll.svg"
import structure from "./autistic/indoor/structure.svg"
import tech from "./autistic/indoor/tech.svg"
import treasure from "./autistic/indoor/treasure.svg"
import './styles/Autistic.css'

const Autistic = () => {
  return (

    
    <div className='autistic-main'>

    <div className="hero-image">
    <img src={hero} alt="hero image" />
  </div>


  <div>
  <img src={art} className="autistic-act" alt=''/>
        </div>
        
  <div>
  <img src={dance} className="autistic-act" alt=''/>
        </div>
        
  <div>
  <img src={match} className="autistic-act" alt=''/>
        </div>
        
  <div>
  <img src={roll} className="autistic-act" alt=''/>
        </div>
        
  <div>
  <img src={structure} className="autistic-act" alt=''/>
        </div>
        
  <div>
  <img src={tech} className="autistic-act" alt=''/>
        </div>
        
  <div>
  <img src={treasure} className="autistic-act" alt=''/>
        </div>


  </div>
  )
}

export default Autistic