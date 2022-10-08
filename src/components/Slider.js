import { Carousel } from 'react-bootstrap'
import React from 'react'
import '../styles/Slider.css'

export default function Slider({start}) {
  return (

     <Carousel fade>
      {start.map((item)=>(
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={item}
            alt="First slide"
          />
            </Carousel.Item>

      ))

      }
    </Carousel>
  );
}
