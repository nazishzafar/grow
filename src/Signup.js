import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import "./styles/Signup.css"


const Signup = () => {
  const [userRegisteration, setUserRegisteration]=useState({
    username:'',
    email:'',
    password:''
  });

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserRegisteration({...userRegisteration,[name]: value})

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("hdf",userRegisteration);
  }


  return (
    
    <form  onSubmit={handleSubmit}  className='card-container'>
        <div className='input-field'>
          <label htmlFor='username'>Full Name</label>
          <input type='text' value={userRegisteration.username} autoComplete='off' onChange={handleInput} name='username' id='username'/>
        </div>

        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input type='email' value={userRegisteration.email} autoComplete='off' onChange={handleInput} name='email' id='email'/>
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input type='password' value={userRegisteration.password} autoComplete='off' onChange={handleInput} name='password' id='password'/>
        </div>

        <Button  type='submit'>Registeration</Button>
      </form>   
    
  )
}

export default Signup