import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import "./styles/Signup.css"
import {FaEnvelope, FaLock,  FaUser} from 'react-icons/fa'
import axios from 'axios';


import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [userRegisteration, setUserRegisteration]=useState({
    name:'',
    email:'',
    password:'',
    tc:false
  });
const navigate=useNavigate();
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserRegisteration({...userRegisteration,[name]: value})

  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const {data}=await axios.post("http://127.0.0.1:8000/api/user/register/",{...userRegisteration}).then((response)=>{
        console.log(response)
        alert('Login Successfuly');
        navigate("/");
      })
    } catch (error) {
      // alert(error.message)
      console.log(error.message)
      alert("May already exist");
    }
  }


  return (
    // <React.Fragment>
    // <form  onSubmit={handleSubmit}  className='Signup-card-container'>
    //     <div className='user-input-field'>
    //       <label htmlFor='name'><FaUser/> Full Name</label>
    //       <input type='text' value={userRegisteration.name} autoComplete='off' onChange={handleInput} name='name' id='name' required/>
    //     </div>

    //     <div className='user-input-field'>
    //       <label htmlFor='email'><FaEnvelope/>  Email</label>
    //       <input type='email' value={userRegisteration.email} autoComplete='off' onChange={handleInput} name='email' id='email' required/>
    //     </div>
    //     <div className='user-input-field'>
    //       <label htmlFor='password'><FaLock/>  Password</label>
    //       <input type='password' value={userRegisteration.password} autoComplete='off' onChange={handleInput} name='password' id='password' required/>
    //     </div>

    //     <Button type='submit'  >Registeration</Button>
    //   </form> 
    //   </React.Fragment>  

<div className="navbarPadding">
    <div class="container mt-3">
  <h3>Sign Up</h3>
  
    
  <form  class="was-validated" onSubmit={handleSubmit}>
    <div class="mb-3 mt-3">
    <label htmlFor='name' class="form-label"><FaUser/> Full Name</label>
          <input type='text' class="form-control" value={userRegisteration.name} autoComplete='off' onChange={handleInput} name='name' id='name' placeholder='Enter your Full Name' required/>
    </div>
    <div class="mb-3 mt-3">
    <label htmlFor='email' class="form-label"><FaEnvelope/>  Email: </label>
      <input  type='email' class="form-control" value={userRegisteration.email} autoComplete='off' onChange={handleInput} name='email' id='email' placeholder='Enter Email' required/>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="mb-3">
    <label htmlFor='password' class="form-label"><FaLock/>  Password:</label>
      <input  type='password' autoComplete='off' class="form-control" name='password' onChange={handleInput} placeholder="Enter your password" id='password' required/>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</div>
    
  )
}

export default Signup