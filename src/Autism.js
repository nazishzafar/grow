import React, { useState } from "react";
import "./styles/Home.css";
const questionaires = [
  {
    question: "Relating to people",
    example: "Limited  eye contact and engagement with others",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
  },
  {
    question: "imitation",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example: "Require persistance in order to obtain imitation",
  },
  {
    question: "Emotional Response",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example: "Limited response to the emotions of others",
  },
  {
    question: "Body Use",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example:
      "Unusal ways of moving fingers, fingers, hands, arms, legs; or spins or rocks body",
  },
  {
    question: "Object Use",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example: "Plays with toys in a repetitive way",
  },
  {
    question: "Adaption to change",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example:
      "Insists on certain routines and wants things to happen just as expected",
  },
  {
    question: "Visual Response",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example:
      "Limited eye contact and inconsistence visual attention i.e.(Not looking at what he is doing) ",
  },
  {
    question: "Listening Response",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example: "Some sensitivities to loud noise reported",
  },
  {
    question: "Taste,Smell,Touch Response",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example: [
      "Is a picky eater",
      "Puts non-edible things in his mouth",
      "overly sensitive smells texture",
    ],
  },
  {
    question: "Fear or nervousness",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example: "Does not like the dark (age appropraite fear)",
  },
  {
    question: "Verbal Communication",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example: "Significant delay in overall communication development",
  },
  {
    question: "Non-Verbal Communication",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example: "Immature use of body language and communicative gestures",
  },
  {
    question: "Activity Level",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example: "Switches quickly between activities at times",
  },
  {
    question: "Level of consistency of intellectual Response",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example: "Demonstrate delay in cognitive development",
  },
  {
    question: "General impressions",
    option: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
    example: "",
  },
];

export default function Autism() {
  const [assessments, setAssessments] = useState(questionaires);
  const [OptionArray, setOptionArray] = useState([]);
  const [total, setTotals] = useState([]);
  const [dietRecomendation, setDietRecomendation] = useState(false);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const optionInput = [...OptionArray];
    optionInput.push(Number(value));
    setOptionArray(optionInput);

    console.log(value);
    setAssessments({ ...assessments, [name]: value });
    console.log(OptionArray, "optionArray");
  };
  const [bool, setBool] = useState(false);
  const handleSubmit = () => {
    const totalAutism = OptionArray.reduce((a, b) => (a += b));
    var status = "";
    if (totalAutism >= 15 && totalAutism <= 29) {
      status = "Minimal to no symptoms";
    } else if (totalAutism >= 30 && totalAutism <= 36.5) {
      status = "Mild to moderate";
    } else if (totalAutism >= 37) {
      status = "Severe symptoms";
    }
    console.log(totalAutism, "submitted");
    console.log(OptionArray, "optio2");
    alert(`Your Score is : ${totalAutism}   Your status is:  ${status}`);
    setDietRecomendation(true);
  };

  return (
    <div className="navbarPadding">
      <div className="container">
        <form action="submit" className="option">
          {questionaires.map((assessment, index) => (
            <div key={assessment.question} className="questions">
              <div>
                {index + 1}.{assessment.question}
              </div>

              <select onChange={handleInput}>
                {[
                  { name: "no", ratio: 1 },
                  { name: "moderate", ratio: 1.5 },
                  { name: "yes", ratio: 2 },
                  { name: "wow", ratio: 2.5 },
                ].map((o) => (
                  <option value={o.ratio} key={o.name}>
                    {o.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <button
            style={{ marginTop: "10px" }}
            type="button"
            onClick={handleSubmit}
          >
            Show Result
          </button>
        </form>
        {dietRecomendation? 
        <div style={{display:'flex', gap:"10px"}}>
            <button>Recommendation</button>
            <button>Activities</button>
        </div>:""}
       
      </div>
    </div>
  );
}
