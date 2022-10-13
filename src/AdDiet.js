import React from 'react'
import articles from "./Images/articles.svg"
import "./styles/Home.css"
import { AdhdDiet } from "./data/AdhdDiet";
import adhdRec from "./Images/adhdRec.svg";

 const AdDiet = () => {
  return (
    
    <div className="navbarPadding">


      <div style={{ maxWidth: "1440px", objectFit: "contain" }}>
        <img width="100%" height="100%" src={adhdRec} alt="hero-img" />
      </div>

   <div className="container">
         
         
          <div>
            <h2>Recommendations</h2>
          </div>
          {AdhdDiet.AdhdDiets.specificDiet.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Recommendations</h2>
          </div>
          {AdhdDiet.AdhdDiets.Recommendation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
              <h2>Avoids</h2>
          </div>
          {AdhdDiet.AdhdDiets.Avoids.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          </div>
         
</div>
        
  )
}
export default  AdDiet;
