import React, { useState } from "react";
import adhd from "./Images/adhd.jpg";
import "./styles/Home.css";
import "./styles/Assessments.css";
import { Profile } from "./data/Profile";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";


const initialValue = [
  {
    answer: null,
    blocks: [0, 0, 0, -1],
    options: [0, 1, 2, 3],
    question: "Inattentive,easily distracted",
  },
  {
    answer: null,
    blocks: [-1, 0, 0, 0],
    options: [0, 1, 2, 3],
    question: "Angry and resentful",
  },
  {
    answer: null,
    blocks: [0, -1, 0, 0],
    options: [0, 1, 2, 3],
    question: "Difficulty doing or completing home work",
  },
  {
    answer: null,
    blocks: [0, 0, -1, 0],
    options: [0, 1, 2, 3],
    question: "Is always 'on the go' or act as if driven by motor",
  },
  {
    answer: null,
    blocks: [0, 0, 0, -1],
    options: [0, 1, 2, 3],
    question: "Short attention span",
  },
  {
    answer: null,
    blocks: [-1, 0, 0, 0],
    options: [0, 1, 2, 3],
    question: "Argues with adults",
  },
  {
    answer: null,
    blocks: [0, 0, 0, -1],
    options: [0, 1, 2, 3],
    question: "Fidgets with hands or feet or squirms in seat",
  },
  {
    answer: null,
    blocks: [0, -1, 0, 0],
    options: [0, 1, 2, 3],
    question: "Fails to complete assignments",
  },
  {
    answer: null,
    blocks: [0, 0, -1, 0],
    options: [0, 1, 2, 3],
    question: "Hard to control in malls or grocery shopping",
  },
  {
    answer: null,
    blocks: [0, 0, 0, -1],
    options: [0, 1, 2, 3],
    question: "Messy or disorganized at home or school",
  },
  {
    answer: null,
    blocks: [-1, 0, 0, 0],
    options: [0, 1, 2, 3],
    question: "Loss temper",
  },
  {
    answer: null,
    blocks: [0, -1, 0, 0],
    options: [0, 1, 2, 3],
    question: "Needs close supervision to get through assignments",
  },
  {
    answer: null,
    blocks: [0, 0, 0, -1],
    options: [0, 1, 2, 3],
    question: "Only attends if it is something he/she is very interested in",
  },
  {
    question:
      "Runs about or climbs excessively in situations where it is inapproprait",

    answer: null,
    blocks: [0, 0, -1, 0],
    options: [0, 1, 2, 3],
  },
  {
    answer: null,
    blocks: [0, 0, 0, -1],
    options: [0, 1, 2, 3],
    question: "Distractibility or attention span a problem",
  },
  {
    answer: null,
    blocks: [-1, 0, 0, 0],
    options: [0, 1, 2, 3],
    question: "Irritable",
  },
  {
    question:
      "Avoids, express reluctance about, or has difficulties engaging in tasks that require sustained mental effort (such as \n school work or homework",

    answer: null,
    blocks: [0, -1, 0, -1],
    options: [0, 1, 2, 3],
  },
  {
    answer: null,
    blocks: [0, 0, -1, 0],
    options: [0, 1, 2, 3],
    question: "Restless is the squirmy sense",
  },
  {
    answer: null,
    blocks: [0, 0, 0, -1],
    options: [0, 1, 2, 3],
    question: "Gets distracted when given instructions to do something",
  },
  {
    answer: null,
    blocks: [-1, 0, 0, 0],
    options: [0, 1, 2, 3],
    question: "Actively defies or refuses to comply with adults' requests",
  },
  {
    answer: null,
    blocks: [0, -1, 0, -1],
    options: [0, 1, 2, 3],
    question: "has trouble concentrating in class",
  },
  {
    question:
      "has difficulty waiting in lines or awaiting turn in games or ground instructions",

    answer: null,
    blocks: [0, 0, -1, 0],
    options: [0, 1, 2, 3],
  },
  {
    question:
      "Leaves seat in classroom or in other situations in which remaining seated is expected",

    answer: null,
    blocks: [0, 0, 0, -1],
    options: [0, 1, 2, 3],
  },
  {
    answer: null,
    blocks: [-1, 0, -1, 0],
    options: [0, 1, 2, 3],
    question: "Deliberately does things that annoy other people",
  },
  {
    question:
      "Does not follow through on instruction and fails to finish schoolwork,chores or duties inthe workspace (not due to oppositional behaviour or failures tounderstand instructions)",

    answer: null,
    blocks: [0, -1, 0, -1],
    options: [0, 1, 2, 3],
  },
  {
    question:
      "Has difficulty playing or engaging in leisure activities quietly",

    answer: null,
    blocks: [0, 0, -1, 0],
    options: [0, 1, 2, 3],
  },
  {
    answer: null,
    blocks: [0, 0, 0, -1],
    options: [0, 1, 2, 3],
    question: "Easily frustrated in efforts",
  },
];

const Assessments = () => {
  const [userData, setUserData] = useState({
    child_name: "",
    age: 3,
    school_Grade: 0,

    gender: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
   
    setUserData({ ...userData, [name]: value });
  };
  const navigate = useNavigate();

  
  const [assessments, setAssessments] = useState(initialValue);
  const totalArray = [];
  const [totals, setTotals] = useState([]);
  const [bool, setBool] = useState(false);

  const handleChange = (e, index) => {
    const newBlock = assessments[index].blocks.map((block) =>
      block === -1 ? Number(e.target.value) : block
    );
    setAssessments((prev) =>
      prev.map((assessment, id) =>
        id === index
          ? { ...assessment, blocks: newBlock, answer: Number(e.target.value) }
          : assessment
      )
    );
  };

  var tscore;
  var adhd_status;

  const handleSubmit = (e) => {
    e.preventDefault();
    const verify = assessments.find((assessment) => assessment.answer === null);

    console.log(verify, assessments);

    if (verify) {
      alert("Please fill all options");
    } else {
      let opposite = assessments
        .map((assessment) => assessment.blocks[0])
        .reduce((total, num) => total + num);
      totalArray[0] = opposite;
      let cognitive = assessments
        .map((assessment) => assessment.blocks[1])
        .reduce((total, num) => total + num);
      totalArray[1] = cognitive;
      let hyperactive = assessments
        .map((assessment) => assessment.blocks[2])
        .reduce((total, num) => total + num);
      totalArray[2] = hyperactive;
      let adhd = assessments
        .map((assessment) => assessment.blocks[3])
        .reduce((total, num) => total + num);
      totalArray[3] = adhd;
      console.log(totalArray, "totalArray");
      setTotals(totalArray);
      console.log(opposite, cognitive, hyperactive, adhd);
      if (userData.age >= 3 && userData.age <= 5) {
        Profile.map((p, index) => {
          if (p.adhdindex[0] === totalArray[3]) {
            tscore = 90 - index;
          }
          return p;
        });
      } else if (userData.age >= 6 && userData.age <= 8) {
        Profile.map((p, index) => {
          if (p.adhdindex[1] === totalArray[3]) {
            tscore = 90 - index;
          }
          return p;
        });
      } else if (userData.age >= 9 && userData.age <= 11) {
        Profile.map((p, index) => {
          if (p.adhdindex[2] === totalArray[3]) {
            tscore = 90 - index;
          }
          return p;
        });
      } else if (userData.age >= 12 && userData.age <= 14) {
        Profile.map((p, index) => {
          if (p.adhdindex[3] === totalArray[3]) {
            tscore = 90 - index;
          }
          return p;
        });
      } else if (userData.age >= 15 && userData.age <= 17) {
        Profile.map((p, index) => {
          if (p.adhdindex[4] === totals[3]) {
            tscore = 90 - index;
          }
          return p;
        });
      }
    

     

      if (tscore < 40) {
        adhd_status="No adhd";
      } else if (tscore >= 40 && tscore <= 60) {
       adhd_status="slightly";
      } else if (tscore >= 60 && tscore < 65) {
        adhd_status="moderate";
      } else if (tscore >= 65 && tscore < 70) {
        adhd_status="heavly";
      } else if (tscore >= 70) {
        adhd_status="severe";
      }

    

        try {
          console.log(localStorage.getItem('token'))
          const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            
        };
        
        const {data}= axios.post("http://127.0.0.1:8000/user_adhd_result/ ",{...userData,opposite,cognitive,hyperactive,adhd,tscore,adhd_status},config).then((response)=>{

          console.log(userData)
          alert("Your T score is " + tscore + " Your adhd_status is "+ adhd_status)
          console.log(localStorage.getItem('token'))

        })
      } catch (error) {

         alert(error.message)
        console.log(error.message)
      }

      setBool(true);
     
    }
  };

  return (
    <div className="navbarPadding">
      <div style={{ maxWidth: "1440px", objectFit: "contain" }}>
        <img width="100%" height="100%" src={adhd} alt="hero-img" />
      </div>

      <div
        class="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1.5rem",
        }}
      >
        <h1>Conners' Parent Rating Scale-Revised (S)</h1>
        <h4> by C. Keith Conners, Ph.D.</h4>
      
      </div>

    
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
            onChange={handleInput}
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
            onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
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
            onChange={handleInput}
            value={userData.school_Grade}
            required
          />
        </div>
      </form>
        </div>
      </div>

        <div style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'30px'}}>
        <div className="instruction">
        <h2>Instructions</h2>
        <p>
          Below are a number of common problems that children have in school.
          Please rate each item according to how much of a problem it has been
          in the last month. For each item, ask yourself???How much ofa problem
          has this been in the last month'????, and circle the best answer for
          each one. If none, not at all, seldom, or very infrequently. you would
          circle 0. If very much true, or it occurs very often or frequently,
          you would Circle 3. You would Circle l or 2 for ratings in between.
          Please respond to all the items.
        </p>
      </div>
        </div>




        
      
        <div style={{display:"flex", justifyContent:"center", alignItems:'center'}}>
        <div className="form-container">
        <div className="">
          <div className="adhd-options ">
            {[
              "1. Never, Seldom",
              "2. Occasionally",
              "3. Often, Quite a Bit",
              "4. Very Often, Very Frequent",
            ].map((option) => (
              <div
                style={{
                
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginLeft: "3rem",
                  flexWrap: "wrap",
                }}
                key={option}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        {assessments.map((assessment, index) => (
          <div key={assessment.question} className="adhd-questions">
            <div>
              {index + 1}. {assessment.question}
            </div>
            <form className="adhd-options" id="adhd-form">
              {assessment.options.map((option) => (
                <div
                  key={option}
                  className="adhd-radio-label"
                  style={{
                    color: "white",
                    width: "3rem",
                    textAlign: "center",
                  }}
                >
                  {bool ? (
                    <div
                      style={{
                        backgroundColor: "grey",
                        color: "white",
                        width: "3rem",
                        textAlign: "center",
                      }}
                    >
                      {assessment.blocks[option]}
                    </div>
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
        {!bool && (
          <button onClick={handleSubmit} type="button">
            Submit
          </button>
        )}
       
        {bool && (
          <div>
            <div style={{ display: "flex", gap: "1rem", fontWeight: "500" }}>
              Result:
              {[
                " 1. Opposite: ",
                "2. Cognitive/Inattentive ",
                "3. Hyperactivity ",
                "4. ADHD Index ",
              ]}
              {totals.map((total, id) => (
                <div key={id}>{total}</div>
              ))}
            </div>
         

            <div className="recomm" style={{ display: "flex", gap: "5rem" }}>
              <Button
                style={{
                  backgroundColor: "#437f86",
                  width: "20rem",
                  height: "5rem",
                  marginTop: "3rem",
                }}
                onClick={() => navigate("/AdDiets")}
              >
                Recommendations
              </Button>

              <button
                onClick={() => navigate("/AdhdActivities")}
                style={{
                  backgroundColor: "#437f86",
                  width: "20rem",
                  height: "5rem",
                  marginTop: "3rem",
                }}
              >
                Activities
              </button>
            </div>
          </div>
        )}

        {/* 
        {totals &&
          Profile.map((p, i) => (
            <div
              style={{
                display: "flex",
                gap: "1rem",
                width: "50%",
                justifyContent: "space-between",
              }}
              key={i}
            >
              {p.oppositional.map((v, j) => (
                <div>{v}</div>
              ))}
              {p.inattention.map((v, j) => (
                <div>{v}</div>
              ))}
              {p.hyperactivity.map((v, j) => (
                <div>{v}</div>
              ))}
              {p.adhdindex.map((v, j) => (
                <div>{v}</div>
              ))}
            </div>
          ))} */}
      </div>
        </div>
     

    </div>
  );
};

export default Assessments;
