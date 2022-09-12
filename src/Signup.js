import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import "./styles/Signup.css"
import {FaEnvelope, FaLock,  FaUser} from 'react-icons/fa'
import axios from 'axios';



const Signup = () => {
  const [userRegisteration, setUserRegisteration]=useState({
    name:'',
    email:'',
    password:''
  });

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserRegisteration({...userRegisteration,[name]: value})

  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      // const {data}=await axios.post("http://127.0.0.1:8000/api/user/register/",{...userRegisteration,password2:userRegisteration.emailpassword})
    } catch (error) {
      alert(error.message)
    }
  }


  return (
    
    <form  onSubmit={handleSubmit}  className='card-container'>
        <div className='input-field'>
          <label htmlFor='name'><FaUser/> Full Name</label>
          <input type='text' value={userRegisteration.name} autoComplete='off' onChange={handleInput} name='name' id='name'/>
        </div>

        <div className='input-field'>
          <label htmlFor='email'><FaEnvelope/>  Email</label>
          <input type='email' value={userRegisteration.email} autoComplete='off' onChange={handleInput} name='email' id='email'/>
        </div>
        <div className='input-field'>
          <label htmlFor='password'><FaLock/>  Password</label>
          <input type='password' value={userRegisteration.password} autoComplete='off' onChange={handleInput} name='password' id='password'/>
        </div>

        <Button  type='submit'>Registeration</Button>
      </form>   
    
  )
}

export default Signup