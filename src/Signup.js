import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

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
  return (
    <div>
      <form action=''>
        <div>
          <label htmlFor='username'>Full Name</label>
          <input type='text' value={userRegisteration.username} autoComplete='off' onChange={handleInput} name='username' id='username'/>
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' value={userRegisteration.email} autoComplete='off' onChange={handleInput} name='email' id='email'/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' value={userRegisteration.password} autoComplete='off' onChange={handleInput} name='password' id='password'/>
        </div>

        <Button>Registeration</Button>
      </form>
    </div>

    
  )
}

export default Signup