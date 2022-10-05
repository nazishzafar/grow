import React, { useState } from "react";
import adhd from "./Images/adhd.jpg";
import "./styles/Home.css";
import book from "./Images/read.png"
import play from "./Images/playtime.png"
import life from "./Images/life.png"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Psychlogical()  {
    const navigate = useNavigate();
  return (
    <div>
    <div className="hero-image">
        <img src={adhd} alt="hero image" />
      </div>
      <div className="offer-container">
        
        <Button className="feature" style={{ backgroundColor: "#F5561D" }} onClick={()=>navigate("/Assessment")}>
        <div style={{ backgroundImage: `url(${play})`}} className="feature-img">

</div>
          <h3>ADHD</h3>
          <p>
            Spending time together with your baby helps form a lasting bond.
            Here are some games and activities you'll both enjoy
          </p>
        </Button>

        <Button className="feature" style={{ backgroundColor: "#44cbd8"  }} onClick={()=>navigate("/Autism")}>
        <div style={{ backgroundImage: `url(${life})`}} className="feature-img" ></div>
          <h3>Autism</h3>
          <p>
            Parenting is challenging and rewarding! Read about postpartum life,
            finding support, and experiences from other parents
          </p>
        </Button>
      </div>



      </div>
  )
}
