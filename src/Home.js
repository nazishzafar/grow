import React from 'react'
import hero from "./Images/hero.jpg"
import "./styles/Home.css"


const Home = () => {
  return (
    <div>
      <div className='hero-image'>
      <img  src={hero} alt="hero image"/>
      </div>
     

    </div>
  )
}

export default Home