import { Carousel } from 'react-bootstrap'
import React from 'react'
import '../styles/Slider.css'

export default function Slider() {
  return (

     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}
