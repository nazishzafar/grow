import React from "react";
import { useState } from "react";
import nutrition from "./Images/Nutrition.svg";
import { Button } from "react-bootstrap";
import "./styles/Home.css";
import { DietPlan } from "./data/DietPlan";





const Diet = () => {
  const [userDiet, setUserDiet] = useState({
    name: "",
    age: 0,
    weight: 0,
    height: 0,
    gender: "",

  });

  const [userActivity, setActivity] = useState({
    Bed_ridden: 1.2,
    Light_or_sedentary: 1.53,
    Moderate_to_active: 1.76,
    Heavily_active: 2.25
  });
  console.log(userActivity)
  const [userStress,setStress]=useState({
    None:1.0,
Solid_tumor	:1.15,
Leukemia_or_Lymphoma	:1.27,
Inflammatory_bowel_disease	:1.11,
Liver_disease	:1.07,
Burns	:1.64,
Pancreatic_disease:	1.13,
General_surgery:	1.2	,
Transplantation	:1.19,
Sepsis	:1.33,
Abscess:1.12,
Other_infection:	1.16

  });

  const[userTemp,setTemp]=useState({
    Normal:1.0,
Greater_100:	1.1,
Greater_102:1.2,
Greater_104:1.3,
Greater_105:	1.4
  });

  const [BMI, setBMI] = useState(0);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserDiet({ ...userDiet, [name]: value });
  };


 
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const BMI = userDiet.weight / Math.pow(userDiet.height / 100, 2);
    var BEE = 0;
    if (userDiet.gender === "Male") {
      BEE =
        66.5 + (13.75 * userDiet.weight) + (5.003 * userDiet.height) - (6.775 * userDiet.age);
    }
    else if (userDiet.gender === "Female") {
      BEE =
        65.51 + (9.563 * userDiet.weight) + (1.850 * userDiet.height) - (4.676 * userDiet.age);
    }
    console.log(BEE);

    var TEE=0;
    TEE=userStress*userTemp*userActivity*BEE;
    console.log(TEE)

    if (BMI < 18.5 && userDiet.age>=12) {
      console.log("You're underweight");
      setBMI(1);

    }
    else if (BMI > 18.5 && BMI < 24.9 && userDiet.age>=12) {
      console.log("Your weight is normal");
      setBMI(2);
    }
    else if (BMI > 25 && BMI < 29.9 && userDiet.age>=12) {
      console.log("You're overweight");
      setBMI(3);
    }
    else if (BMI>=30 && userDiet.age>=12) {
      console.log("You're obese");
      setBMI(4);
    }
    else if(userDiet.age<12){
      console.log("Youre age is less than 12")
      setBMI(5);
    }
  };

  return (
    <div>
      <div className="hero-image">
        <img src={nutrition} alt="hero image" />
      </div>
      {BMI === 0 ? (
        <form onSubmit={handleSubmit} className="card-container">
          <div className="input-field">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              autoComplete="off"
              name="name"
              id="name"
              onChange={handleInput}
              value={userDiet.name}
            />
          </div>

          <div className="input-field">
            <label htmlFor="age"> Age</label>
            <input
              type="number"
              autoComplete="off"
              name="age"
              id="age"
              onChange={handleInput}
              value={userDiet.age}
            />
          </div>
          <div className="input-field">
            <label htmlFor="weight"> Weight in kg:</label>
            <input
              type="number"
              autoComplete="off"
              name="weight"
              id="weight"
              onChange={handleInput}
              value={userDiet.weight}
            />
          </div>

          <div className="input-field">
            <label htmlFor="Height"> Height in cm:</label>
            <input
              type="number"
              autoComplete="off"
              name="height"
              id="height"
              onChange={handleInput}
              value={userDiet.height}
            />
          </div>
          <div className="input-field">
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

          <div className= "input-field">
            <label htmlFor="activity">Activity</label>
            <select value={userActivity.value} onChange={e=>{setActivity(e.target.value)}}>
              <option value={userActivity.Bed_ridden}>Bed_ridden</option>
              <option value={userActivity.Light_or_sedentary}>Light_or_sedentary</option>
              <option value={userActivity.Moderate_to_active}>Moderate_to_active</option>
              <option value={userActivity.Heavily_active}>Heavily_active</option>

            </select>

          </div>
          <div className= "input-field">
            <label htmlFor="Stress">Stress</label>
            <select value={userStress.value} onChange={e=>{setStress(e.target.value)}}>
              <option value={userStress.None}>None</option>
              <option value={userStress.Solid_tumor}>Solid_tumor</option>
              <option value={userStress.Leukemia_or_Lymphoma}>Leukemia/Lymphoma</option>
              <option value={userStress.Inflammatory_bowel_disease}>Inflammatory_bowel_disease</option>
              <option value={userStress.Liver_disease}>Liver_disease</option>
              <option value={userStress.Burns}>Burns</option>
              <option value={userStress.Pancreatic_disease}>Pancreatic_disease</option>
              <option value={userStress.General_surgery}>General_surgery</option>
              <option value={userStress.Transplantation}>Transplantation</option>
              <option value={userStress.Sepsis}>Sepsis</option>
              <option value={userStress.Abscess}>Abscess</option>
              <option value={userStress.Other_infection}>Other_infection</option>
            

            </select>

          </div>

          <div className= "input-field">
            <label htmlFor="Temperature">Temperature</label>
            <select value={userTemp.value} onChange={e=>{setTemp(e.target.value)}}>
            <option value={userTemp.Normal}> Normal</option>
              <option value={userTemp.Greater_100}> 100.4°F or 38°C</option>
              <option value={userTemp.Greater_102}>102.2°F or 39°C</option>
              <option value={userTemp.Greater_104}>104°F or 40°C</option>
              <option value={userTemp.Greater_105}>105.8°F or 41°C</option>

            </select>

          </div>

          <Button type="submit">Submit</Button>
        </form>



      ) : BMI === 1  ? (
        <div className="container">
          <h3>You are Under weight </h3>
      
          <div><h2>Water Requirement</h2></div>
          {DietPlan.underweight.Water_Requirement.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Pre Breakfast</h2></div>
          {DietPlan.underweight.Pre_Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Breakfast</h2></div>
          {DietPlan.underweight.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Snack2</h2></div>
          {DietPlan.underweight.Snack2.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Lunch</h2></div>
          {DietPlan.underweight.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Snack3</h2></div>
          {DietPlan.underweight.Snack3.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Dinner</h2></div>
          {DietPlan.underweight.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

        </div>


      ) : BMI === 2 ? (
        <div className="container">
        <h3>Your weight is normal/Healthy </h3>
        
          <div><h2>Water Requirement</h2></div>
          {DietPlan.normalweight.Water_Requirement.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Recommendation</h2></div>
          {DietPlan.normalweight.Recommendation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Breakfast</h2></div>
          {DietPlan.normalweight.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Snack1</h2></div>
          {DietPlan.normalweight.Snack1.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Lunch</h2></div>
          {DietPlan.normalweight.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Snack</h2></div>
          {DietPlan.normalweight.Snack2.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Dinner</h2></div>
          {DietPlan.normalweight.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Snack</h2></div>
          {DietPlan.normalweight.Snack3.map((item, index) => (
            <div key={index}>{item}</div>
          ))}


        </div>



      ) : BMI === 3 ? (
        <div className="container">
        <h3>You are Over weight </h3>
         

          <div><h2>Water Requirement</h2></div>
          {DietPlan.overweight.Water_Requirement.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Recommendation</h2></div>
          {DietPlan.overweight.Recommendation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Digestion boosting tea</h2></div>
          {DietPlan.overweight.Digestion_boosting_tea.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Pre Breakfast</h2></div>
          {DietPlan.overweight.Pre_Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Breakfast</h2></div>
          {DietPlan.overweight.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Snack1</h2></div>
          {DietPlan.overweight.Snack1.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Lunch</h2></div>
          {DietPlan.overweight.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Snack2</h2></div>
          {DietPlan.overweight.Snack2.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Dinner</h2></div>
          {DietPlan.overweight.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Snack3</h2></div>
          {DietPlan.overweight.Snack3.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

        </div>

      ) : BMI === 5 ? (
        <div className="container">
          <h3>You are under 12 </h3>
      
         
        
          
          <div><h2>Breakfast</h2></div>
          {DietPlan.kids.Breakfast.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Snack</h2></div>
          {DietPlan.kids.Snack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Lunch</h2></div>
          {DietPlan.kids.Lunch.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Snack</h2></div>
          {DietPlan.kids.Snack2.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <div><h2>Dinner</h2></div>
          {DietPlan.kids.Dinner.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
             <div><h2>Desserts</h2></div>
          {DietPlan.kids.Desserts.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

        </div>

      ): (
        <div>You're obese</div>
      )
      }

    </div>
  );
};

export default Diet;
