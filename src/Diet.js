import React from 'react'
import nutrition from "./Images/Nutrition.svg"
import { Button } from 'react-bootstrap';
import "./styles/Home.css"

const Diet = () => {
  var name='';
  var age=0;
  var weight=0;
  var height=0;
  var gender='';
  return (
    <div>
      <div className='hero-image'>
      <img  src={nutrition} alt="hero image"/>
      </div>
      

      <div>
     

      <form   className='card-container'>

        <div className='input-field'>
          <label htmlFor='username'>Full Name</label>
          <input type='text' autoComplete='off'  name='username' id='username' value={name}/>
        </div>

        <div className='input-field'>
          <label htmlFor='age'> Age</label>
          <input type='number' autoComplete='off'  name='age' id='age' value={age}/>
        </div>
        <div className='input-field'>
          <label htmlFor='weight'>  Weight</label>
          <input type='number'  autoComplete='off'  name='weight' id='weight' value={weight}/>
        </div>

        <div className='input-field'>
          <label htmlFor='Height'>  Height</label>
          <input type='number'  autoComplete='off'  name='height' id='height' value={height}/>
        </div>
        <div className='input-field'>
          <label htmlFor='gender'> Gender</label>
          <input type='radio'  autoComplete='off'  name='gender' id='male' value='Male'/>Male
          <input type='radio'  autoComplete='off'  name='gender' id='female' value='Female'/>Female
        </div>

        <Button  type='submit'>Submit</Button>
      </form>  
      </div>
    </div>
  )
}

export default Diet