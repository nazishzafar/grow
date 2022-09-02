import React from 'react'
import {form} from './data/form'

const Assessments = () => {
  return (
    <div>
    <div>
            {
           form.assessment.Question.map((item,index)=>(
                <p key={item.Question1} href={item.Question1}>{item.Question1}</p>
            ))
        }
    </div>

{/* 
      <div>
      {
     form.assessment.options.map((item,index)=>(
          <p key={item.option} href={item.option}>{item.option}</p>
      ))
  }
</div> */}
</div>
  );
}

export default Assessments