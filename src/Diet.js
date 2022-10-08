import React from "react";
import { useState } from "react";
import nutrition from "./Images/Nutrition.jpg";
import { Button } from "react-bootstrap";
import "./styles/Home.css";
import "./styles/Diet.css";
import { DietPlan } from "./data/DietPlan";
import Chart from "react-apexcharts";
import axios from 'axios';
const Diet = () => {
  const [userDiet, setUserDiet] = useState({
    name: "",
    age: 0,
    weight: 0,
    height: 0,
    gender: "",
  
  });

  const [BMI, setBMI] = useState(0);
  const [tempBMI, setTempBMI] = useState(0);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserDiet({ ...userDiet, [name]: value });
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    const BMI = userDiet.weight / Math.pow(userDiet.height / 100, 2);
    
 
    setTempBMI(BMI);

    if (BMI < 18.5 && userDiet.age >= 12) {
      console.log("You're underweight");

      setBMI(1);
    } else if (BMI > 18.5 && BMI < 24.9 && userDiet.age >= 12) {
      console.log("Your weight is normal");
      setBMI(2);
    } else if (BMI > 25 && BMI < 29.9 && userDiet.age >= 12) {
      console.log("You're overweight");
      setBMI(3);
    } else if (BMI >= 30 && userDiet.age >= 12) {
      console.log("You're obese");
      setBMI(4);
    } else if (userDiet.age > 0 && userDiet.age < 12) {
      console.log("Your age is less than 12");
      setBMI(5);
    }
  //   try {
  //     console.log(localStorage.getItem('token'))
  //     const config = {
  //       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  //   };
  //   const {data}= axios.post("http://127.0.0.1:8000/user_adhd_result/ ",{...userDiet,tempBMI},config).then((response)=>{
      
  //     console.log(userData)
  //     console.log(localStorage.getItem('token'))

  //   })
  // } catch (error) {
    
  //   // alert(error.message)
  //   console.log(error.message)
  // }

   
  


  };

  return (
    <div>
      <div className="hero-image" >
        <img src={nutrition} alt="hero image" />
      </div>

      <div className="diet-bar">
        <Chart
        type="bar"
        width='500'
        series={
          [{
            name:"Weight category",
            data:[65,34,56,12,34]
          }]
        }
        options={{
          title:{
            text:"Weight category",
            style:{
              fontSize:30,
            
            }
          },
          xaxis: {
            categories: [
              "Kids","Under Weight","Normal/Healthy Weight","Over weight","Obese"
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
              text:"Weight Category",
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
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              autoComplete="off"
              name="name"
              id="name"
              onChange={handleInput}
              value={userDiet.name}
              required
            />
          </div>

          <div className="DietInput-feild">
            <label htmlFor="age"> Age</label>
            <input
              type="number"
              autoComplete="off"
              name="age"
              id="age"
              onChange={handleInput}
              value={userDiet.age}
              required
            />
          </div>
          <div className="DietInput-feild">
            <label htmlFor="weight"> Weight in kg:</label>
            <input
              type="number"
              autoComplete="off"
              name="weight"
              id="weight"
              onChange={handleInput}
              value={userDiet.weight}
              required
            />
          </div>

          <div className="DietInput-feild">
            <label htmlFor="Height"> Height in cm:</label>
            <input
              type="number"
              autoComplete="off"
              name="height"
              id="height"
              onChange={handleInput}
              value={userDiet.height}
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

        
          <Button type="submit">Submit</Button>
        </form>
      ) : BMI === 1 ? (
        <div className="container">
          <h4>Your BMI is {tempBMI}</h4>
          <h3>You are Under weight </h3>

          <div>
            <h2>Water Requirement</h2>
          </div>
          {DietPlan.underweight.Water_Requirement.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Exercise</h2>
          </div>
          {DietPlan.underweight.Exercise.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Recommendations</h2>
          </div>
          {DietPlan.underweight.Recommendation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Breakfast</h2>
          </div>
          {DietPlan.underweight.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Breakfast Calories</h2>
          </div>
          {DietPlan.underweight.BreakCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

          <div>
            <h2>Snack</h2>
          </div>
          {DietPlan.underweight.Snack2.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Snack Calories</h2>
          </div>
          {DietPlan.underweight.Snack2Cal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch</h2>
          </div>
          {DietPlan.underweight.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch Calories</h2>
          </div>
          {DietPlan.underweight.LunchCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Evening Snack</h2>
          </div>
          {DietPlan.underweight.EveningSnack3.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Evening Snack Calories</h2>
          </div>
          {DietPlan.underweight.EveSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Dinner</h2>
          </div>
          {DietPlan.underweight.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Dinner Calories</h2>
          </div>
          {DietPlan.underweight.DinnerCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack</h2>
          </div>
          {DietPlan.underweight.BedTimeSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack Calories</h2>
          </div>
          {DietPlan.underweight.bedTimeCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Total Calories of the diet</h2>
          </div>
          {DietPlan.underweight.Total_Cal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      ) : BMI === 2 ? (
        <div className="container">
          <h4>Your BMI is {tempBMI}</h4>
          <h3>Your weight is normal/Healthy </h3>

          <div>
            <h2>Water Requirement</h2>
          </div>
          {DietPlan.normalweight.Water_Requirement.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Recommendation</h2>
          </div>
          {DietPlan.normalweight.Recommendation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Breakfast</h2>
          </div>
          {DietPlan.normalweight.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Breakfast Calories</h2>
          </div>
          {DietPlan.normalweight.BreakCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Morning Snack</h2>
          </div>
          {DietPlan.normalweight.MorningSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Morning Snack Calories</h2>
          </div>
          {DietPlan.normalweight.MornSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch</h2>
          </div>
          {DietPlan.normalweight.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch Calories</h2>
          </div>
          {DietPlan.normalweight.LunchCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Evening Snack</h2>
          </div>
          {DietPlan.normalweight.EveningSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Evening Snack Calories</h2>
          </div>
          {DietPlan.normalweight.ESnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Dinner</h2>
          </div>
          {DietPlan.normalweight.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Dinner Calories</h2>
          </div>
          {DietPlan.normalweight.DinnerCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack</h2>
          </div>
          {DietPlan.normalweight.BedTimeSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack Calories</h2>
          </div>
          {DietPlan.normalweight.BedTimeSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2> Exercise</h2>
          </div>
          {DietPlan.normalweight.Exercise.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2> Total Calories</h2>
          </div>
          {DietPlan.normalweight.Total_Cal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      ) : BMI === 3 ? (
        <div className="container">
          <h4>Your BMI is {tempBMI}</h4>
          <h3>You are Over weight </h3>

          <div>
            <h2>Water Requirement</h2>
          </div>
          {DietPlan.overweight.Water_Requirement.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Recommendation</h2>
          </div>
          {DietPlan.overweight.Recommendation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Exercise</h2>
          </div>
          {DietPlan.overweight.Exercise.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

          <div>
            <h2>Breakfast</h2>
          </div>
          {DietPlan.overweight.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Breakfast Calories</h2>
          </div>
          {DietPlan.overweight.BreakCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

          <div>
            <h2>Morning Snack</h2>
          </div>
          {DietPlan.overweight.Morning_Snack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Morning Snack Calories</h2>
          </div>
          {DietPlan.overweight.MornSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch</h2>
          </div>
          {DietPlan.overweight.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch Calories</h2>
          </div>
          {DietPlan.overweight.LunchCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Evening Snack</h2>
          </div>
          {DietPlan.overweight.EveSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Evening Snack Calories</h2>
          </div>
          {DietPlan.overweight.EveSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Dinner</h2>
          </div>
          {DietPlan.overweight.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Dinner Calories</h2>
          </div>
          {DietPlan.overweight.DinnerCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack</h2>
          </div>
          {DietPlan.overweight.BedTimeSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack Calories</h2>
          </div>
          {DietPlan.overweight.BedSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Total Calories of the diet</h2>
          </div>
          {DietPlan.overweight.Total_Cal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      ) : BMI === 4 ? (
        <div className="container">
          <h4>Your BMI is {tempBMI}</h4>
          <h3>Your are obese </h3>

          <div>
            <h2>Water Requirement</h2>
          </div>
          {DietPlan.Obese.Water_Requirement.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Recommendation</h2>
          </div>
          {DietPlan.Obese.Recommendation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Exercise</h2>
          </div>
          {DietPlan.Obese.Exercise.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

          <div>
            <h2>Breakfast</h2>
          </div>
          {DietPlan.Obese.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Breakfast Calories</h2>
          </div>
          {DietPlan.Obese.BreakCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

          <div>
            <h2>Morning Snack</h2>
          </div>
          {DietPlan.Obese.Morning_Snack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Morning Snack Calories</h2>
          </div>
          {DietPlan.Obese.MornSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch</h2>
          </div>
          {DietPlan.Obese.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch Calories</h2>
          </div>
          {DietPlan.Obese.LunchCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Evening Snack</h2>
          </div>
          {DietPlan.Obese.EveSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Evening Snack Calories</h2>
          </div>
          {DietPlan.Obese.EveSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Dinner</h2>
          </div>
          {DietPlan.Obese.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Dinner Calories</h2>
          </div>
          {DietPlan.Obese.DinnerCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack</h2>
          </div>
          {DietPlan.Obese.BedTimeSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack Calories</h2>
          </div>
          {DietPlan.Obese.BedSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Total Calories of the diet</h2>
          </div>
          {DietPlan.Obese.Total_Cal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      ) : (
        <div className="container">
          <h4>Your BMI is {tempBMI}</h4>
          <h3>Healthy Diet Plan for kids of age 6 to 12 years</h3>
          <div>
            <h2>Recommendation</h2>
          </div>
          {DietPlan.Kids.Recommendation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Exercise</h2>
          </div>
          {DietPlan.Kids.Exercise.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

          <div>
            <h2>Breakfast</h2>
          </div>
          {DietPlan.Kids.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Breakfast Calories</h2>
          </div>
          {DietPlan.Kids.BreakCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

          <div>
            <h2>Morning Snack</h2>
          </div>
          {DietPlan.Kids.Morning_Snack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Morning Snack Calories</h2>
          </div>
          {DietPlan.Kids.MornSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Pre Lunch</h2>
          </div>
          {DietPlan.Kids.PreLunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Pre Lunch Calories</h2>
          </div>
          {DietPlan.Kids.PreLunchCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}


          <div>
            <h2>Lunch</h2>
          </div>
          {DietPlan.Kids.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Lunch Calories</h2>
          </div>
          {DietPlan.Kids.LunchCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Evening Snack</h2>
          </div>
          {DietPlan.Kids.EveSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Evening Snack Calories</h2>
          </div>
          {DietPlan.Kids.EveSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Dinner</h2>
          </div>
          {DietPlan.Kids.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Dinner Calories</h2>
          </div>
          {DietPlan.Kids.DinnerCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack</h2>
          </div>
          {DietPlan.Kids.BedTimeSnack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Bed Time Snack Calories</h2>
          </div>
          {DietPlan.Kids.BedSnackCal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div>
            <h2>Total Calories of the diet</h2>
          </div>
          {DietPlan.Kids.Total_Cal.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Diet;
