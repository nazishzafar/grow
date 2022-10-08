import React ,{ useState } from 'react'
import { Button } from 'react-bootstrap';
import "./styles/Login.css"
import axios from 'axios';
import {FaEnvelope, FaLock,  FaUser} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userLogin, setUserLogin]=useState({
   
    email:'',
    password:'',
    token: localStorage.getItem('token')
  });
  const navigate = useNavigate();
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserLogin({...userLogin,[name]: value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const {data}=await axios.post("http://127.0.0.1:8000/api/user/login/",{...userLogin}).then((response)=>{
        localStorage.setItem('token', response.data.token.access)
        console.log(localStorage.getItem('token'))
        navigate("/")
        localStorage.setItem('token', null)
      })
    } catch (error) {
      // alert(error.message)
      console.log(error.message)
    }
  }
  return (
    
 


<div class="container mt-3">
  <h3>Sign in</h3>
  
    
  <form  class="was-validated" onSubmit={handleSubmit}>
    <div class="mb-3 mt-3">
    <label htmlFor='email' class="form-label"><FaEnvelope/>  Email: </label>
      <input  type='email' class="form-control" value={userLogin.email} autoComplete='off' onChange={handleInput} name='email' id='email' placeholder='Enter Email' required/>
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


  )
}

export default Login