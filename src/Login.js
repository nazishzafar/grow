import React ,{ useState } from 'react'
import { Button } from 'react-bootstrap';
import "./styles/Login.css"
import axios from 'axios';
import {FaEnvelope, FaLock,  FaUser} from 'react-icons/fa'

const Login = () => {
  const [userLogin, setUserLogin]=useState({
   
    email:'',
    password:''
  });

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserLogin({...userLogin,[name]: value})

  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const {data}=await axios.post("http://127.0.0.1:8000/api/user/register/",{...userLogin}).then((response)=>{
        console.log(response)
      })
    } catch (error) {
      // alert(error.message)
      console.log(error.message)
    }
  }
  return (
    
    <form onSubmit={handleSubmit}  className='login-card-container'>
   <h1>SignIn</h1>

    <div className='log-input-feild'>
      <label htmlFor='email'><FaEnvelope/>  Email</label>
      <input  type='email'  value={userLogin.email} autoComplete='off' onChange={handleInput} name='email' id='email' required/>
    </div>
    <div className='log-input-feild'>
      <label htmlFor='password'><FaLock/>  Password</label>
      <input  type='password' autoComplete='off' name='password' id='password' required/>
    </div>

    <Button type='submit'>Registeration</Button>
  </form> 
  )
}

export default Login