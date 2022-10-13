import React from "react";
import { useState, useEffect } from "react";
import nutrition from "./Images/Nutrition.jpg";
import { Button } from "react-bootstrap";
import "./styles/Home.css";
import "./styles/Diet.css";
import { DietPlan } from "./data/DietPlan";
import Chart from "react-apexcharts";
import axios from 'axios';
const Diet = () => {
  const [userDiet, setUserDiet] = useState({
    fullname: "",
    age: 0,
    weight_in_kg: 0,
    height_in_cm: 0,
    gender: "",
  
  });
  const[responseData,setResponseData]=useState([]);

  const [BMI, setBMI] = useState(0);
  const [category_weight, setCategory_weight] = useState('');
  const [bmiCal, setBmiCal] = useState('');

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserDiet({ ...userDiet, [name]: value });
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    let category_weight;
    let bmiCal;
    bmiCal = userDiet.weight_in_kg / Math.pow(userDiet.height_in_cm / 100, 2);

    if (bmiCal < 18.5 && (userDiet.age >=1 && userDiet.age<=6)) {
      category_weight="Under Weight";

      setBMI(1);
    } else if (bmiCal >= 18.5 && bmiCal < 24.9 && (userDiet.age >= 1 && userDiet.age<=6)) {
      category_weight="Normal weight";
      setBMI(2);
    } else if (bmiCal >= 25 && (userDiet.age >= 1 && userDiet.age<=6)) {
      category_weight="Over weight";
      setBMI(3);
    }
    
    
    else if (bmiCal < 18.5 && (userDiet.age >= 7 && userDiet.age<=12)) {
     category_weight="Under Weight"
      setBMI(4);
    } else if (bmiCal >= 18.5 && bmiCal < 24.9 && (userDiet.age >= 7 && userDiet.age<=12)) {
      category_weight="Normal weight"
      setBMI(5);
    }
    else if (bmiCal >= 25 && (userDiet.age >=7  && userDiet.age<=12)) {
      category_weight="Over weight"
      setBMI(6);
    }









    try {
      console.log(localStorage.getItem('token'))
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };


    setBmiCal(bmiCal)
    setCategory_weight(category_weight)
    const data= axios.post("http://127.0.0.1:8000/user_dietplan/ ",{...userDiet,bmiCal},config).then((response)=>{
      
      console.log(userDiet, bmiCal)
      console.log(localStorage.getItem('token'))
  
      

      console.log(responseData);

    })
  } catch (error) {
    
     alert(error.message)
    console.log(error.message)
  }

  try {
    console.log(localStorage.getItem('token'))
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  };


  const data= axios.get("http://127.0.0.1:8000/user_dietplan/ ",config).then((response)=>{
    
    // console.log(userDiet, bmiCal)
    // console.log(localStorage.getItem('token'))
    console.log("Response data ..........",response.data)

    setResponseData(response.data['data']);

  })
} catch (error) {
  
   alert(error.message)
  console.log(error.message)
  }
  };

  useEffect(() => {
    console.log('State ',responseData)
  }, [responseData]);

  return (
    <div className="navbarPadding">
      
      <div style={{ maxWidth: "1440px", objectFit: "contain" }}>
        <img width="100%" height="100%" src={nutrition} alt="hero image" />
      </div>



      <div className="diet-bar">
       
       <Chart 
       type="bar"
       width="500px"
       series={
         [{
           name:category_weight,
           data:[responseData['age'],responseData['weight_in_kg'],responseData['height_in_cm'],parseInt(responseData['bmiCal'])]
         }]
       }
       options={{
         title:{
           text:"Previous Performance",
           style:{
             fontSize:30,
           
           }
         },
         plotOptions:{
     bar:{
       barHeight:"50%",
       columnWidth:"70%"
     }
         },
         xaxis: {
           categories: [
             "age","weight","height","BMI"
           ]
         },
         legend: {
           position: "right",
           verticalAlign: "top",
           containerMargin: {
             left: 35,
             right: 60
           }
         },
         responsive: [
           {
             breakpoint: 1000,
             options: {
               plotOptions: {
                 bar: {
                   horizontal: false
                 }
               },
               legend: {
                 position: "bottom"
               }
             }
           }
         ],
     
         chart: {
           animations: {
               enabled: true,
               easing: 'easeinout',
               speed: 850,
               animateGradually: {
                   enabled: true,
                   delay: 150
               },
               dynamicAnimation: {
                   enabled: true,
                   speed: 350
               }
           }
       },
       
       
         colors:["#436f87"],
         theme:{mode:"dark"},
         axis:{
           
           title:{
             text:"Body Index",
             style:{
               colors:"#436f87"
             }
           }
         }
       }
     
       }
       />
     
     
     
           </div>











      <div className="diet-bar">
       
  <Chart 
  type="bar"
  width="500px"
  series={
    [{
      name:category_weight,
      data:[userDiet.age,userDiet.weight_in_kg,userDiet.height_in_cm, parseInt(bmiCal)]
    }]
  }
  options={{
    title:{
      text:"Weight category",
      style:{
        fontSize:30,
      
      }
    },
    plotOptions:{
bar:{
  barHeight:"50%",
  columnWidth:"70%"
}
    },
    xaxis: {
      categories: [
        "age","weight","height","BMI"
      ]
    },
    legend: {
      position: "right",
      verticalAlign: "top",
      containerMargin: {
        left: 35,
        right: 60
      }
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ],

    chart: {
      animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 850,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      }
  },
  
  
    colors:["#436f87"],
    theme:{mode:"dark"},
    axis:{
      
      title:{
        text:"Body Index",
        style:{
          colors:"#436f87"
        }
      }
    }
  }

  }
  />



      </div>

      {BMI === 0 ? (
        <form onSubmit={handleSubmit} className="Dietcard-container">
          <div className="DietInput-feild">
            <label htmlFor="fullname">Full Name</label>
            <input style={{borderRadius:'10px',outline:'none', border:'none'}}
              type="text"
              autoComplete="off"
              name="fullname"
              id="fullname"
              onChange={handleInput}
              value={userDiet.fullname}
              required
            />
          </div>

          <div className="DietInput-feild">
            <label htmlFor="age"> Age</label>
            <input  style={{borderRadius:'10px',outline:'none', border:'none'}}
              type="number"
              autoComplete="off"
              name="age"
              id="age"
              max={12}
              min={1}    
              onChange={handleInput}
              value={userDiet.age}
              required
            />
          </div>
          <div className="DietInput-feild">
            <label htmlFor="weight_in_kg"> Weight in kg:</label>
            <input  style={{borderRadius:'10px', outline:'none', border:'none'}}
              type="number"
              autoComplete="off"
              name="weight_in_kg"
              id="weight_in_kg"
              onChange={handleInput}
              value={userDiet.weight_in_kg}
              required
            />
          </div>

          <div className="DietInput-feild">
            <label htmlFor="height_in_cm">Height in cm:</label>
            <input  style={{borderRadius:'10px',outline:'none', border:'none'}}
              type="number"
              autoComplete="off"
              name="height_in_cm"
              id="height_in_cm"
              onChange={handleInput}
              value={userDiet.height_in_cm}
              required
            />
          </div>
          <div className="DietInput-feild">
            <label htmlFor="gender"> Gender</label>
            <input  
              type="radio"
              autoComplete="off"
              onChange={handleInput}
              name="gender"
              id="Male"
              value="Male"


            />
            Male
            <input

              type="radio"
              autoComplete="off"
              onChange={handleInput}
              name="gender"
              id="Female"
              value="Female"
            />
            Female
          </div>

        
          <button style={{borderRadius:'10px'}} type="submit">Submit</button>





        </form>
      ) : BMI === 1 ? (
        <div className="container" style={{display:"flex",flexDirection:"column",flexWrap:"wrap", justifyContent:"center",alignItems:"center",boxSizing:"border-box",boxShadow:"0px 4px 8px 0px rgba(0,0,0,0.4)",borderRadius:"5px"}}>
         
         
         
         
          <h4>Your BMI is {bmiCal}</h4>
          <h3>You fall in the category of {category_weight}</h3>

          <div>
            <h2>Water Requirement</h2>
         

          </div>
          {DietPlan.underweight1_6.Water_Requirement.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
         
          <div>
            <h2>Recommendations</h2>
          </div>
          {DietPlan.underweight1_6.Recommendation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Breakfast</h2>
          </div>
          {DietPlan.underweight1_6.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
         

          <div>
            <h2>Snack</h2>
          </div>
          {DietPlan.underweight1_6.Snack2.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch</h2>
          </div>
          {DietPlan.underweight1_6.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          
          <div>
            <h2>Evening Snack</h2>
          </div>
          {DietPlan.underweight1_6.EveningSnack3.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
         
          <div>
            <h2>Dinner</h2>
          </div>
          {DietPlan.underweight1_6.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack</h2>
          </div>
          {DietPlan.underweight1_6.BedTimeSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          
        </div>
      ) : BMI === 2 ? (
        <div className="container">
        <h4>Your BMI is {bmiCal}</h4>
        <h3>You fall in the category of {category_weight} </h3>

        <div>
          <h2>Water Requirement</h2>
        </div>
        {DietPlan.normalweight1_6.Water_Requirement.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
       
        <div>
          <h2>Recommendations</h2>
        </div>
        {DietPlan.normalweight1_6.Recommendation.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div>
          <h2>Breakfast</h2>
        </div>
        {DietPlan.normalweight1_6.Breakfast.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
       

        <div>
          <h2>Snack</h2>
        </div>
        {DietPlan.normalweight1_6.Snack2.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div>
          <h2>Lunch</h2>
        </div>
        {DietPlan.normalweight1_6.Lunch.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        
        <div>
          <h2>Evening Snack</h2>
        </div>
        {DietPlan.normalweight1_6.EveningSnack3.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
       
        <div>
          <h2>Dinner</h2>
        </div>
        {DietPlan.normalweight1_6.Dinner.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div>
          <h2>Bed Time Snack</h2>
        </div>
        {DietPlan.normalweight1_6.BedTimeSnack.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
       
      </div>
      ) : BMI === 3 ? (
        <div className="container">
        <h4>Your BMI is {bmiCal}</h4>
        <h3>You fall in the category of {category_weight} </h3>

        <div>
          <h2>Water Requirement</h2>
        </div>
        {DietPlan.overweight1_6.Water_Requirement.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
       
        <div>
          <h2>Recommendations</h2>
        </div>
        {DietPlan.overweight1_6.Recommendation.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div>
          <h2>Breakfast</h2>
        </div>
        {DietPlan.overweight1_6.Breakfast.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
       

        <div>
          <h2>Snack</h2>
        </div>
        {DietPlan.overweight1_6.Snack2.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div>
          <h2>Lunch</h2>
        </div>
        {DietPlan.overweight1_6.Lunch.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        
        <div>
          <h2>Evening Snack</h2>
        </div>
        {DietPlan.overweight1_6.EveningSnack3.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
       
        <div>
          <h2>Dinner</h2>
        </div>
        {DietPlan.overweight1_6.Dinner.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div>
          <h2>Bed Time Snack</h2>
        </div>
        {DietPlan.overweight1_6.BedTimeSnack.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
       
      </div>
      ) : BMI === 4 ? (
        <div className="container">
          <h4>Your BMI is {bmiCal}</h4>
          <h3>You fall in the category of {category_weight} </h3>

          <div>
            <h2>Water Requirement</h2>
          </div>
          {DietPlan.underweigh7_12.Water_Requirement.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
         
          <div>
            <h2>Recommendations</h2>
          </div>
          {DietPlan.underweigh7_12.Recommendation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Breakfast</h2>
          </div>
          {DietPlan.underweigh7_12.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
         

          <div>
            <h2>Snack</h2>
          </div>
          {DietPlan.underweigh7_12.Snack2.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch</h2>
          </div>
          {DietPlan.underweigh7_12.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          
          <div>
            <h2>Evening Snack</h2>
          </div>
          {DietPlan.underweigh7_12.EveningSnack3.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
         
          <div>
            <h2>Dinner</h2>
          </div>
          {DietPlan.underweigh7_12.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack</h2>
          </div>
          {DietPlan.underweigh7_12.BedTimeSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          
        </div>
      ) : BMI === 5 ? (
        <div className="container">
          <h4>Your BMI is {bmiCal}</h4>
          <h3>You fall in the category of {category_weight} </h3>

          <div>
            <h2>Water Requirement</h2>
          </div>
          {DietPlan.normalweight7_8.Water_Requirement.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
         
          <div>
            <h2>Recommendations</h2>
          </div>
          {DietPlan.normalweight7_8.Recommendation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Exercise</h2>
          </div>
          {DietPlan.normalweight7_8.Exercise.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Pre Breakfast</h2>
          </div>
          {DietPlan.normalweight7_8.Morning_Snack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
            <div>
            <h2> Breakfast</h2>
          </div>
          {DietPlan.normalweight7_8.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
         

          <div>
            <h2>Snack</h2>
          </div>
          {DietPlan.normalweight7_8.PreLunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch</h2>
          </div>
          {DietPlan.normalweight7_8.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          
          <div>
            <h2>Evening Snack</h2>
          </div>
          {DietPlan.normalweight7_8.EveSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
         
          <div>
            <h2>Dinner</h2>
          </div>
          {DietPlan.normalweight7_8.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack</h2>
          </div>
          {DietPlan.normalweight7_8.BedTimeSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          
        </div>
      ): (
        <div className="container">
        <h4>Your BMI is {bmiCal}</h4>
        <h3>You fall in the category of {category_weight} </h3>

        <div>
          <h2>Water Requirement</h2>
        </div>
        {DietPlan.overweight7_12.Water_Requirement.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
       
        <div>
          <h2>Recommendations</h2>
        </div>
        {DietPlan.overweight7_12.Recommendation.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div>
          <h2>Breakfast</h2>
        </div>
        {DietPlan.overweight7_12.Breakfast.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
       

        <div>
          <h2>Snack</h2>
        </div>
        {DietPlan.overweight7_12.Snack2.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div>
          <h2>Lunch</h2>
        </div>
        {DietPlan.overweight7_12.Lunch.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        
        <div>
          <h2>Evening Snack</h2>
        </div>
        {DietPlan.overweight7_12.EveningSnack3.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
       
        <div>
          <h2>Dinner</h2>
        </div>
        {DietPlan.overweight7_12.Dinner.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div>
          <h2>Bed Time Snack</h2>
        </div>
        {DietPlan.overweight7_12.BedTimeSnack.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        
      </div>
      )}
    </div>
  );
};

export default Diet;
