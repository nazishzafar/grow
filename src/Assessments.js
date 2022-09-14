import React, { useState } from "react";
import adhd from "./Images/adhd.svg";
import "./styles/Home.css";
import "./styles/Assessments.css";

const initialValue = [
  {
    blocks:[false,false,false,true],
    answer: null,
    options: [0, 1, 2, 3],

    question: "Inattentive,easily distracted",
  },
  {
    blocks:[true,false,false,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Angry and resentful",
  },
  {
    blocks:[false,true,false,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Difficulty doing or completing home work",
  },
  {
    blocks:[false,false,true,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Is always 'on the go' or act as if driven by motor",
  },
  {
    blocks:[false,false,false,true],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Short attention span",
  },
  {
    blocks:[true,false,false,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Argues with adults",
  },
  {
    blocks:[false,true,false,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Fidgets with hands or feet or squirms in seat",
  },
  {
    blocks:[false,false,true,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Fails to complete assignments",
  },
  {
    blocks:[true,false,false,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Hard to control in malls or grocery shopping",
  },
  {
    blocks:[false,true,false,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Messy or disorganized at home or school",
  },
  {
    blocks:[false,false,false,true],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Loss temper",
  },
  {
    blocks:[false,false,true,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Needs close supervision to get through assignments",
  },
  {
    blocks:[false,false,false,true],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Only attends if it is something he/she is very interested in",
  },
  {
    question:
      "Runs about or climbs excessively in situations where it is inapproprait",
    blocks:[true,false,false,false],
      answer: null,
    options: [0, 1, 2, 3],
  },
  {
    blocks:[false,true,false,true],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Distractibility or attention span a problem",
  },
  {
    blocks:[false,false,true,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Irritable",
  },
  {
    question:
      "Avoids, express reluctance about, or has difficulties engaging in tasks that require sustained mental effort (such as \n school work or homework",

    blocks:[false,false,false,true],
      answer: null,
    options: [0, 1, 2, 3],
  },
  {
    blocks:[true,false,false,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Restless is the squirmy sense",
  },
  {
    blocks:[false,true,false,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Gets distracted when given instructions to do something",
  },
  {
    blocks:[false,false,true,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Actively defies or refuses to comply with adults' requests",
  },
  {
    blocks:[false,false,false,true],
    answer: null,
    options: [0, 1, 2, 3],
    question: "has trouble concentrating in class",
  },
  {
    question:
      "has difficulty waiting in lines or awaiting turn in games or ground instructions",

    blocks:[true,false,false,false],
      answer: null,
    options: [0, 1, 2, 3],
  },
  {
    question:
      "Leaves seat in classroom or in other situations in which remaining seated is expected",

    blocks:[false,true,false,true],
      answer: null,
    options: [0, 1, 2, 3],
  },
  {
    blocks:[false,false,true,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Deliberately does things that annoy other people",
  },
  {
    question:
      "Does not follow through on instruction and fails to finish schoolwork,chores or duties inthe workspace (not due to oppositional behaviour or failures tounderstand instructions)",

    blocks:[false,false,true,false],
      answer: null,
    options: [0, 1, 2, 3],
  },
  {
    question:
      "Has difficulty playing or engaging in leisure activities quietly",

    blocks:[true,false,false,false],
      answer: null,
    options: [0, 1, 2, 3],
  },
  {
    blocks:[true,false,false,false],
    answer: null,
    options: [0, 1, 2, 3],
    question: "Easily frustrated in efforts",
  },
];

const Assessments = () => {
  const [assessments, setAssessments] = useState(initialValue);
  const [bool, setBool] = useState(false);

  const handleChange = (e, index) => {
    setAssessments((prev) =>
      prev.map((assessment, id) =>
        id === index ? { ...assessment, answer: e.target.value } : assessment
      )
    );
  };

  const handleSubmit = () => {
      const verify=assessments.find((assessment)=>assessment.answer===null);
      if(verify){
        alert("Please fill all options");
      }
      else{
        setBool(true)
      }
  };

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
              <div
                style={{ fontSize: "1rem", fontWeight: "bold" }}
                key={option}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        {assessments.map((assessment, index) => (
          <div key={assessment.question} className="questions">
            <div>
              {index + 1}. {assessment.question}
            </div>
            <form className="options">
              {assessment.options.map((option) => (
                <div key={option} className="radio-label">
                  {bool ? (
                    assessment.blocks[option]?<div style={{backgroundColor:"grey",color:"white",width:"3rem",textAlign:"center"}}>{assessment.answer!==null?assessment.answer:"null"}</div>:<div style={{backgroundColor:"black",color:"white",width:"3rem",textAlign:"center"}}>null</div>
                  ) : ( 
                    <input
                      onChange={(e) => handleChange(e, index)}
                      type="radio"
                      value={option}
                      name="options"
                      id="options"
                    />
                  )}
                </div>
              ))}
            </form>
          </div>
        ))}
        <button onClick={handleSubmit} type="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Assessments;
