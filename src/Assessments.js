import React, { useState } from "react";
import { assessment } from "./data/form";
import { teacherForm } from "./data/teacher";
import adhd from "./Images/adhd.svg";
import "./styles/Home.css";
import "./styles/Assessments.css";

const initialValue=assessment.map((a)=>0);

const Assessments = () => {
  const [answers,setAnswers]=useState(initialValue)

  const handleChange=(option,index)=>{
    console.log(index,option)
    const newAnswers=[...answers].map((a,id)=>id===index?option:a)
    console.log(newAnswers)
    setAnswers(newAnswers)
  }


  return (
    <div>
      <div className="hero-image">
        <img src={adhd} alt="hero image" />
      </div>

      <div className="container">
        <div className="questions">
          <div></div>
          <div className="options ">
            {[
              "Never, Seldom",
              "Occasionally",
              "Often, Quite a Bit",
              "Very Often, Very Frequent",
            ].map((option) => (
              <div style={{ fontSize: "1rem",fontWeight:"bold" }} key={option}>
                {option}
              </div>
            ))}
          </div>
        </div>
        {assessment.map((item, index) => (
          <div key={item.Question} className="questions">
            <div>
              {index + 1}. {item.Question}
            </div>
            <form className="options">
              {[1, 2, 3, 4].map((option) => (
                <div key={option} className="radio-label">
                  <input onChange={()=>handleChange(option,index)} type="radio" value={option} name="options" id="options" />
                </div>
              ))}
            </form>
          </div>
        ))}

        <div></div>
      </div>

      {/* <div className="container">
        {teacherForm.map((item, index) => (
          <div className="questions">
            <div key={item.Question} href={item.Question}>
              {index + 1}. {item.Question}
            </div>
            <div className="options">
              {[1, 2, 3, 4].map((option) => (
                <div className="radio-label">
                  <input type="radio" name="options" id="options" />
                  <label key={option} href={option}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div></div>
      </div> */}
    </div>
  );
};

export default Assessments;
