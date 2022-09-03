import React from 'react'
import nutrition from "./Images/Nutrition.svg"
import "./styles/Home.css"

const Diet = () => {
  return (
    <div>
      <div className='hero-image'>
      <img  src={nutrition} alt="hero image"/>
      </div>
    </div>
  )
}

export default Diet