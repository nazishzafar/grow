import React from 'react'
import {assessment} from './data/form'
import {teacherForm} from './data/teacher'
import adhd from "./Images/adhd.svg"
import "./styles/Home.css"
import "./styles/Assessments.css"
import { teacher } from './data/teacher'


const Assessments = () => {
  return (
    <div>
      <div className='hero-image'>
      <img  src={adhd} alt="hero image"/>
      </div>


      <div className='container'>
    
            {
           assessment.map((item,index)=>(
            <div className='questions'>
                <div key={item.Question} href={item.Question}>{index+1}. {item.Question}</div>
                <div className='options'>
                {
                  [1,2,3,4].map((option)=><div className='radio-label'>
      <input type='radio' name='options' id='options' />
        <label key={option} href={option}>{option}</label>
       
                  </div>)
                }
                </div>
            </div>
            ))
        }
   


      <div>
 

</div>
</div>


<div className='container'>
    
    {
   teacherForm.map((item,index)=>(
    <div className='questions'>
        <div key={item.Question} href={item.Question}>{index+1}. {item.Question}</div>
        <div className='options'>
        {
          [1,2,3,4].map((option)=><div className='radio-label'>
<input type='radio' name='options' id='options' />
<label key={option} href={option}>{option}</label>

          </div>)
        }
        </div>
    </div>
    ))
}



<div>


</div>
</div>


</div>
  );
}

export default Assessments