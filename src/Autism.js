import React, { useState } from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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


  const [userData, setUserData] = useState({
    child_name: "",
    age: 3,
    school_Grade: 0,
  
    gender: "",
  });
  const handleInputform = (e) => {
    const name = e.target.name;
    const value = e.target.value;
   
    setUserData({ ...userData, [name]: value });
  };
  const navigate = useNavigate();
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
    const autism_score = OptionArray.reduce((a, b) => (a += b));
    var autism_status = "";
    if (autism_score >= 15 && autism_score <= 29) {
      autism_status = "Minimal to no symptoms";
    } else if (autism_score >= 30 && autism_score <= 36.5) {
      autism_status = "Mild to moderate";
    } else if (autism_score >= 37) {
      autism_status = "Severe symptoms";
    }
    console.log(autism_score, "submitted");
    console.log(OptionArray, "optio2");
    alert(`Your Score is : ${autism_score}   Your autism_status is:  ${autism_status}`);
    setDietRecomendation(true);


    try {
      console.log(localStorage.getItem('token'))
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        
    };
    
    const {data}= axios.post("http://127.0.0.1:8000/user_autism_result/",{...userData,autism_score,autism_status},config).then((response)=>{

      console.log(userData)
      
      console.log(localStorage.getItem('token'))

      

    })

    const {getData}= axios.get("http://127.0.0.1:8000/user_autism_result/",{...userData,autism_score,autism_status},config).then((response)=>{

      console.log(userData)
      
      console.log(localStorage.getItem('token'))
  })
  } catch (error) {

     alert(error.message)
    console.log(error.message)
  }


  };

  return (
    <div className="navbarPadding">


<div style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'30px', boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.4)"}}>
        <div style={{maxWidth:"600px",backgroundColor:"",width:"100%"}}>
        <form >
        <div class="mb-3 mt-3 form-group">
          <label htmlFor="child_name" class="form-label">
            Full Name:{" "}
          </label>
          <input
            type="text"
            
            autoComplete="off"
            class="form-control"
            name="child_name"
            id="child_name"
            onChange={handleInputform }
            value={userData.child_name}
            required
          />
        </div>
        <div class="mb-3 mt-3 form-group">
          <label htmlFor="age" class="form-label">
            {" "}
            Age
          </label>
          <input
            type="number"
            autoComplete="off"
            max={17}
            min={3}
            name="age"
            id="age"
            class="form-control"
            onChange={handleInputform }
            value={userData.age}
            required
          />
        </div>

        <div class="mb-3 mt-3" style={{display:'flex',gap:"10px"}}>
         {/* <form > */}
           <span>Gender: </span>
           
            <input
              type="radio"
              autoComplete="off"
              onChange={handleInputform }
              name="gender"
              id="Male"
              value="Male"
              class="form-check-input"
            />
             <label htmlFor="Male">
              Male
            </label>
            
            <input
              type="radio"
              autoComplete="off"
              onChange={handleInputform }
              name="gender"
              id="Female"
              value="Female"
              class="form-check-input"
            />
             <label htmlFor="Female" >
              Female
            </label>
          
            {/* </form> */}
        </div>

        <div class="mb-3 mt-3 form-group">
          <label htmlFor="school_Grade" class="form-label">
            School Grade
          </label>
          <input
            type="number"
            autoComplete="off"
            name="school_Grade"
            id="school_Grade"
            class="form-control"
            onChange={handleInputform }
            value={userData.school_Grade}
            required
          />
        </div>
      </form>
        </div>
      </div>




      <div className="container">
      
        <div className="" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'30px',}}>
        <h3 >Autism Childhood rating Scale</h3>
        <form action="submit" className="option" style={{ boxShadow:'2px', backgroundColor:'#437f86'}}>
          {questionaires.map((assessment, index) => (
            <div key={assessment.question} className="questions" style={{padding:"10px"}}>
              <div style={{padding:'5px'}}>
                {index + 1}. {assessment.question}
              </div>

              <select defaultValue= {0} onChange={handleInput} style={{width:'100%', border:'1px solid #437f86', borderRadius:'10px',outline:'none'}}>
                {[
                  { name: "Not agree", ratio: 1 },
                  { name: "Normal to midly", ratio: 1.5 },
                  { name: "Mildly abnormal", ratio: 2 },
                  {name: "Mild to moderately", ratio: 2.5},
                  { name: "Moderate", ratio: 3.5 },
                  { name: "Moderate to severe", ratio: 4 },
                ].map((o) => (
                  <option value={o.ratio} key={o.name}>
                    {o.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}> 
          <button
            style={{ marginTop: "10px",backgroundColor:'white' , borderRadius:'20px',padding:'5px', width:'200px', margin:'10px'}}
            type="button"
            onClick={handleSubmit}
          >
            Show Result
          </button></div>
         
        </form>
        {dietRecomendation? 
        <div style={{display:'flex', gap:"10px",padding:'5px'}}>
           
            <button style={{borderRadius:'20px', backgroundColor:'#437f86',padding:'10px',width:'100px'}}><Link style={{color:'white'}} to="/AutismAct" onClick={() => navigate("/AutismAct")}>Activities</Link></button>
        </div>:""}
        </div>
      </div>
    </div>
  );
}
