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
     else if(userDiet.gender === "Female") {
      BEE =
      65.51 + (9.563 * userDiet.weight) + (1.850 * userDiet.height) - (4.676 * userDiet.age);
    }
    console.log(BEE);

    if (BMI < 18.5) {
      console.log("You're underweight");
      setBMI(1);

    }
     else if (BMI > 18.5 && BMI < 24.9) {
      console.log("Your weight is normal");
      setBMI(2);
    } 
    else if (BMI > 25 && BMI < 29.9) {
      console.log("You're overweight");
      setBMI(3);
    }
     else {
      console.log("You're obese");
      setBMI(4);
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

          <Button type="submit">Submit</Button>
        </form>



      ) : BMI === 1 ? (
        <div className="container">
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

      ) : (
        <div>You're obese</div>
      )}
      
    </div>
  );
};

export default Diet;
