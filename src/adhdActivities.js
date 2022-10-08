import React from 'react'
import brain from "./ADHD/brain.svg"
import checker from "./ADHD/checker.svg"
import drum from "./ADHD/drum.svg"
import head from "./ADHD/head.svg"
import loud from "./ADHD/loud.svg"
import Sudoku from "./ADHD/Sudoku.svg"
import uKloo from "./ADHD/uKloo.svg"
import hero from "./Images/hero.jpg";
import "./styles/AdAct.css";

const AdhdActivities = () => {
  return (
    <div className='act-main'>
       <div className="hero-image">
        <img src={hero} alt="hero image" />
      </div>

          <div>
        <img src={brain} className="adhdact" alt='Brain activities'/>
        </div>
        <div>
        <img src={checker} className="adhdact" alt='cheker activities'/>
        </div>  
        <div>
        <img src={drum} className="adhdact" alt='drum activities'/>
        </div>  
        <div>
        <img src={head} className="adhdact" alt='head activities'/>
        </div>  
        <div>
        <img src={loud} className="adhdact" alt='loud activities'/>
        </div>  
        <div>
        <img src={Sudoku} className="adhdact" alt='skudoko activities'/>
        </div>  
        <div>
        <img src={uKloo} className="adhdact" alt='uKloo activities'/>
        </div>  
    
    </div>
  )
}

export default AdhdActivities