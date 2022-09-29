import React from 'react'
const questionaires=[
    {
        question:"Relating to people",
        example:"Limited  eye contact and engagement with others",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
    
    },
    {
        question:"imitation",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Require persistance in order to obtain imitation"

    },
    {
        question:"Emotional Response",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Limited response to the emotions of others",
    },
    {
        question:"Body Use",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Unusal ways of moving fingers, fingers, hands, arms, legs; or spins or rocks body",
    },
    {
        question:"Object Use",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Plays with toys in a repetitive way",
    },
    {
        question:"Adaption to change",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Insists on certain routines and wants things to happen just as expected",
    },
    {
        question:"Visual Response",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Limited eye contact and inconsistence visual attention i.e.(Not looking at what he is doing) "
    },
    {
        question:"Listening Response",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Some sensitivities to loud noise reported",
    },
    {
        question:"Taste,Smell,Touch Response",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:["Is a picky eater","Puts non-edible things in his mouth","overly sensitive smells texture"],
    },
    {
        question:"Fear or nervousness",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Does not like the dark (age appropraite fear)",
    },
    {
        question:"Verbal Communication",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Significant delay in overall communication development",
    },
    {
        question:"Non-Verbal Communication",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Immature use of body language and communicative gestures",
    },
    {
        question:"Activity Level",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Switches quickly between activities at times",
        
    },
    {
        question:"Level of consistency of intellectual Response",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"Demonstrate delay in cognitive development",
    },
    {
        question:"General impressions",
        options:[1,1.5,2,2.5,3,3.5,4,4.5],
        example:"",
    }
]
    

export const Autism = () => {
    const [assessments, setAssessments] = useState(questionaires);

 return(
    <div className="questions">
          
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

          {assessments.map((assessment, index) => (
          <div key={assessment.question} className="questions">
            <div>
              {index + 1}. {assessment.question}
            </div>

            <form className="options">
              {assessment.options.map((option) => (
                <div key={option} className="drop-label">
                 
                   
                    <input
                      onChange={(e) => handleChange(e, index)}
                      type="drop-down"
                      value={option}
                      name="options"
                      id="options"
                    />
                  
                </div>
              ))}
            </form>
          </div>
        ))}
        </div>
      
 )
}
