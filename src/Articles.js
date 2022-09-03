import React from 'react'
import articles from "./Images/articles.svg"
import "./styles/Home.css"

const Articles = () => {
  return (
    <div>
       <div className='hero-image'>
      <img  src={articles} alt="hero image"/>
      </div>
    </div>
  )
}

export default Articles