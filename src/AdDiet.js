import React from 'react'
import articles from "./Images/articles.svg"
import "./styles/Home.css"
import { Adhd } from "./data/AdhdDiet";

 const AdDiets = () => {
  return (
    <div>
    <div className='hero-image'>
   <img  src={articles} alt="hero image"/>
   </div>

   <div>
            <h2>Water Requirement</h2>
          </div>
    
 </div>
  
  )
}
export default  AdDiets;
