import React, { useState, useEffect } from "react";
import adhd from "./Images/adhd.jpg";
import "./styles/Home.css";

import play from "./Images/playtime.png"
import life from "./Images/life.png"
import { Button, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";


export default function Psychlogical()  {

  // const[adhdStatus,setAdhdStatus]=useState([]);
  // const[Model,setModel]=useState([]);

  // useEffect(()=>{
  //   const getData=async()=>{
  //     const adhdStatus=[];
  //     const getModel=[];
  //     const reqData=await axios("url");
  //     const resData=await reqData.json;
  //      for(let i=0; i<resData.length;i++){
  //       adhdStatus.push(resData[i].status);
  //       getModel.push(resData[i].Model);
  //      }
  //      setAdhdStatus(adhdStatus);
  //      setModel(getModel);
 
  //   }
  // },[])
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
<div>
<div className="container-fluid mt-3 mb-3">
  <Chart
  width={1349}
  height={550}
  type="donut" 
  series={[56,89,45]}

  options={{
    labels:["With ADHD" ,"No Adhd","Moderate"  ],
    title:{
      text:"ADHD Model" 
    },
    plotOptions:{
      pie:{
        donut:{
          labels:{
            show:true,
            total:{
              show:true,
              fontSize:30,
              color:"#436f87" ,

            }
          }
        }
      }
    },
    dataLabels:{
      enabled:true
    }
  }}
  />
</div>

<div className="container-fluid mt-3 mb-3">
  <Chart
  width={1349}
  height={550}
  type="pie" 
  series={[56,89,45]}

  options={{
    labels:["With Autism" ,"No Autism","Moderate"  ],
    title:{
      text:"Autism Model" 
    },
    noData:{
      text:"Empty Data" 
    },
    plotOptions:{
      pie:{
        donut:{
          labels:{
            show:true,
            total:{
              show:true,
              fontSize:30,
              color:"#436f87" ,

            }
          }
        }
      }
    },
    dataLabels:{
      enabled:true
    }
  }}
  />
</div>

</div>

      </div>
  )
}
