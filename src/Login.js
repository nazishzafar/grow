import React from 'react'
import { Button } from 'react-bootstrap';
import {FaEnvelope, FaLock,  FaUser} from 'react-icons/fa'

const Login = () => {
  return (
    
    <form  className='card-container'>
   <h1>SignIn</h1>

    <div className='input-field'>
      <label htmlFor='email'><FaEnvelope/>  Email</label>
      <input type='email'  autoComplete='off'  name='email' id='email'/>
    </div>
    <div className='input-field'>
      <label htmlFor='password'><FaLock/>  Password</label>
      <input type='password' autoComplete='off' name='password' id='password'/>
    </div>

    <Button  type='submit'>Registeration</Button>
  </form> 
  )
}

export default Login