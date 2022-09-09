import React from 'react'
import  { useState } from 'react'
import nutrition from "./Images/Nutrition.svg"
import { Button } from 'react-bootstrap';
import "./styles/Home.css"
import {DietPlan} from './data/DietPlan'

const Diet = () => {
  

  const [userDiet, setUserDiet]=useState({
     name:'',
     age:0,
     weight:0,
     height:0,
     gender:''
  });

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserDiet({...userDiet,[name]: value})

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const BMI=userDiet.weight/Math.pow((userDiet.height/100),2)
    var BEE;
    if(userDiet.gender==="Male")
    {
       BEE=66.5 + (13.7* userDiet.weight) + (5.0* userDiet.height) - (6.8 * userDiet.age)
    }else{
       BEE=655.1 + (9.6* userDiet.weight) + (1.850 * ((userDiet.height)*100)) - (4.7 *userDiet.age)
    }

    if(BMI<18.5){
      console.log("underweight")
      return(
      <div className='container'>
      <p>Snack</p>
      {
         DietPlan.underweight.Pre_Breakfast.map((item,index)=>(
              <div key={item} >{item}</div>
          ))
      }
      
      </div>

     
      )
    }

    else if(BMI>18.5 && BMI <24.9){
      console.log("Your weight is normal");
    }

    else if(BMI >25 && BMI < 29.9){
      console.log("You're overweight");
    }

    else{
      console.log("You're obese");
    }
  
    console.log(userDiet)
    console.log(BMI)
    console.log(BEE)
  }

  return (
    <div>
      
      <div className='hero-image'>
      <img  src={nutrition} alt="hero image"/>
      </div>
      

     
     

      <form onSubmit={handleSubmit}   className='card-container'>

        <div className='input-field'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' autoComplete='off'  name='name' id='name' onChange={handleInput} value={userDiet.name}/>
        </div>

        <div className='input-field'>
          <label htmlFor='age'> Age</label>
          <input type='number' autoComplete='off'  name='age' id='age'  onChange={handleInput} value={userDiet.age}/>
        </div>
        <div className='input-field'>
          <label htmlFor='weight'>  Weight in kg:</label>
          <input type='number'  autoComplete='off'  name='weight' id='weight' onChange={handleInput} value={userDiet.weight}/>
        </div>

        <div className='input-field'>
          <label htmlFor='Height'>  Height in cm:</label>
          <input type='number'  autoComplete='off'  name='height' id='height' onChange={handleInput} value={userDiet.height}/>
        </div>
        <div className='input-field'>
          <label htmlFor='gender'> Gender</label>
          <input type='radio'  autoComplete='off' onChange={handleInput}   name='gender' id='male' value='Male'/>Male
          <input type='radio'  autoComplete='off' onChange={handleInput}  name='gender' id='female' value='Female'/>Female
        </div>

        <Button  type='submit'>Submit</Button>
      </form>  
      </div>
   
  )
}

export default Diet