import React, { useState } from "react";
import adhd from "./Images/adhd.jpg";
import "./styles/Home.css";
import "./styles/Assessments.css";
import { Profile } from "./data/Profile";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

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
    name: "",
    age: 4,
    school_grade: 0,
    parent_id: 0,
    gender: "",
    today_date: "12/06/2021",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const navigate = useNavigate();

  const [status, setStatus] = useState();
  const [assessments, setAssessments] = useState(initialValue);
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

  const handleSubmit = () => {
    const verify = assessments.find((assessment) => assessment.answer === null);
    let value = 0;

    if (verify) {
      alert("Please fill all options");
    } else {
      const a = assessments
        .map((assessment) => assessment.blocks[0])
        .reduce((total, num) => total + num);
      const b = assessments
        .map((assessment) => assessment.blocks[1])
        .reduce((total, num) => total + num);
      const c = assessments
        .map((assessment) => assessment.blocks[2])
        .reduce((total, num) => total + num);
      const d = assessments
        .map((assessment) => assessment.blocks[3])
        .reduce((total, num) => total + num);
      setTotals([a, b, c, d]);

      if (totals.length > 0) {
        if (userData.age >= 3 && userData.age <= 5) {
          Profile.map((p, index) => {
            if (p.adhdindex[0] === totals[3]) {
              value = 90 - index;
            }
            return p;
          });
        } else if (userData.age >= 6 && userData.age <= 8) {
          Profile.map((p, index) => {
            if (p.adhdindex[1] === totals[3]) {
              value = 90 - index;
            }
            return p;
          });
        } else if (userData.age >= 9 && userData.age <= 11) {
          Profile.map((p, index) => {
            if (p.adhdindex[2] === totals[3]) {
              value = 90 - index;
            }
            return p;
          });
        } else if (userData.age >= 12 && userData.age <= 14) {
          Profile.map((p, index) => {
            if (p.adhdindex[3] === totals[3]) {
              value = 90 - index;
            }
            return p;
          });
        } else if (userData.age >= 15 && userData.age <= 17) {
          Profile.map((p, index) => {
            if (p.adhdindex[4] === totals[3]) {
              value = 90 - index;
            }
            return p;
          });
        }

        if (value < 40) {
          setStatus(0);
        } else if (value >= 40 && value <= 60) {
          setStatus(1);
        } else if (value >= 60 && value < 65) {
          setStatus(1);
        } else if (value >= 65 && value < 70) {
          setStatus(1);
        } else if (value >= 70) {
          setStatus(1);
        }
      }
      setBool(true);
      console.log(status);
    }
  };

  return (
    <div>
      <div className="hero-image">
        <img src={adhd} alt="hero image" />
      </div>
      <div className="heading">
        <h1>Conners' Parent Rating Scale-Revised (S)</h1>
        <h4> by C. Keith Conners, Ph.D.</h4>
      </div>
      <div className="conner-cotainer">
        <form>
          <div className="conner-input-field">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              autoComplete="off"
              name="name"
              id="name"
              onChange={handleInput}
              value={userData.name}
            />
          </div>

          <div className="conner-input-field">
            <label htmlFor="age"> Age</label>
            <input
              type="number"
              autoComplete="off"
              name="age"
              id="age"
              onChange={handleInput}
              value={userData.age}
            />
          </div>

          <div className="conner-input-field">
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

          <div className="conner-input-field">
            <label htmlFor="parent_id">Parent ID</label>
            <input
              type="number"
              autoComplete="off"
              name="parent_id"
              id="parent_id"
              onChange={handleInput}
              value={userData.parent_id}
            />
          </div>
          <div className="conner-input-field">
            <label htmlFor="school_grade">School Grade</label>
            <input
              type="number"
              autoComplete="off"
              name="school_grade"
              id="school_grade"
              onChange={handleInput}
              value={userData.school_grade}
            />
          </div>
          <div className="conner-input-field">
            <label htmlFor="today_date">Today Date</label>
            <input
              type="date"
              autoComplete="off"
              name="today_date"
              id="today_date"
              onChange={handleInput}
              value={userData.today_date}
            />
          </div>
        </form>
      </div>
      <div className="accordion">
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>Instructions</Accordion.Header>
            <Accordion.Body
              style={{ backgroundColor: "#437f86", color: "white" }}
            >
              Below are a number of common problems that children have in
              school. Please rate each item according to how much of a problem
              it has been in the last month. For each item, ask yourself“How
              much ofa problem has this been in the last month'?”, and circle
              the best answer for each one. If none, not at all, seldom, or very
              infrequently. you would circle 0. If very much true, or it occurs
              very often or frequently, you would Circle 3. You would Cll'CiC l
              or 2 for ratings in between. Please respond to all the items.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="form-container">
        <div className="adhd-questions">
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
                onClick={() => navigate("/adDiets")}
              >
                Recommendations
              </Button>

              <button onClick={() => navigate("/adhdActivities")}
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

        <button onClick={handleSubmit} type="button">
          Submit
        </button>

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
  );
};

export default Assessments;
