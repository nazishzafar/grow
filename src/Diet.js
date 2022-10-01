import React from "react";
import { useState } from "react";
import nutrition from "./Images/Nutrition.jpg";
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
    activity: "",
    temperature: "",
    stress: "",
  });

  const [BMI, setBMI] = useState(0);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserDiet({ ...userDiet, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const BMI = userDiet.weight / Math.pow(userDiet.height / 100, 2);
    var BEE = 0;
    if (userDiet.gender === "Male") {
      BEE =
        66.5 +
        13.75 * userDiet.weight +
        5.003 * userDiet.height -
        6.775 * userDiet.age;
    } else if (userDiet.gender === "Female") {
      BEE =
        65.51 +
        9.563 * userDiet.weight +
        1.85 * userDiet.height -
        4.676 * userDiet.age;
    }
    console.log("Your BEE is "+BEE);

    var TEE =
      Number(userDiet.activity * userDiet.stress * userDiet.temperature) * BEE;
    console.log("Your TEE is "+TEE);
    console.log("Your BMI is"+BMI);

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
  };

  return (
    <div>
      <div className="hero-image" style={{marginTop:"2.9rem"}}>
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
              required
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
              required
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
              required
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
              required
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

          <div className="input-field">
            <label htmlFor="activity">Activity</label>
            <select onChange={handleInput} name="activity">
              {[
                { name: "Bed_ridden", ratio: 1.2 },
                { name: "Heavily_Active", ratio: 2.25 },
                { name: "Moderate_to_Active", ratio: 1.76 },
                { name: "Light_or_Sedentary", ratio: 1.53 },
              ].map((o) => (
                <option value={o.ratio} key={o.name}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="stress">Stress</label>
            <select onChange={handleInput} name="stress">
              {(userDiet.gender === "Male"
                ? [
                    { name: "None ", ratio: 1.0 },
                    { name: "Solid Tumor ", ratio: 1.15 },
                    { name: "Leukemia/Lymphoma", ratio: 1.27 },
                    { name: "Inflammatory bowel disease", ratio: 1.11 },
                    { name: "Liver disease", ratio: 1.07 },
                    { name: "Burns", ratio: 1.64 },
                    { name: "Pancreatic disease", ratio: 1.13 },
                    { name: "General surgery", ratio: 1.2 },
                    { name: " Transplantation", ratio: 1.19 },
                    { name: "Sepsis", ratio: 1.33 },
                    { name: "Abscess", ratio: 1.12 },
                    { name: "Other infection", ratio: 1.16 },
                  ]
                : [
                    { name: "None ", ratio: 1.0 },
                    { name: "Solid Tumor ", ratio: 1.25 },
                    { name: "Leukemia/Lymphoma", ratio: 1.37 },
                    { name: "Inflammatory bowel disease", ratio: 1.12 },
                    { name: "Liver disease", ratio: 1.11 },
                    { name: "Burns", ratio: 1.52},
                    { name: "Pancreatic disease", ratio: 1.21 },
                    { name: "General surgery", ratio: 1.39},
                    { name: " Transplantation", ratio: 1.27},
                    { name: "Sepsis", ratio: 1.27 },
                    { name: "Abscess", ratio: 1.39 },
                    { name: "Other infection", ratio: 1.39 },
                  ]
              ).map((o) => (
                <option value={o.ratio} key={o.name}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>

          <div className="input-field">
            <label htmlFor="temperature">Temperature</label>
            <select onChange={handleInput} name="temperature">
              {[
                { name: "Normal", ratio: 1.0 },
                { name: ">=100.4F OR 38°C", ratio: 1.1 },
                { name: " >=102.2 OR 39°C", ratio: 1.2 },
                { name: ">=104 OR 40°C", ratio: 1.3 },
                { name: ">=105.8 OR 41°C", ratio: 1.4 },
              ].map((o) => (
                <option value={o.ratio} key={o.name}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      ) : BMI === 1 ? (
        <div className="container">
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
          <h3>Your are obese </h3>

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
      ) : (
        <div>
          <h2>Your age is less than 12</h2>
        </div>
      )}
    </div>
  );
};

export default Diet;
