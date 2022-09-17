import React, { useState } from "react";
import adhd from "./Images/adhd.svg";
import "./styles/Home.css";
import "./styles/Assessments.css";
import { Profile } from "./data/Profile";

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
      setBool(true);
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
          <div style={{ display: "flex", gap: "1rem", fontWeight: "500" }}>
            Result:{" "}
            {totals.map((total, id) => (
              <div key={id}>{total}</div>
            ))}
          </div>
        )}
        <button onClick={handleSubmit} type="button">
          Submit
        </button>
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
              {p.a.map((v, j) => (
                <div>{v}</div>
              ))}
              {p.b.map((v, j) => (
                <div>{v}</div>
              ))}
              {p.c.map((v, j) => (
                <div>{v}</div>
              ))}
              {p.d.map((v, j) => (
                <div>{v}</div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Assessments;
