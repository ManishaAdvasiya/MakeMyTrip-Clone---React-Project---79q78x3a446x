
import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth';

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login}  = useAuth();

  const submitHandler=(e)=>{
    e.preventDefault();
    //hashed data 
    login(username + password);
    
    
  };
  return (
    <form onSubmit={submitHandler}>
    <h2>Login Page</h2>
    <div className='inputdivise'>
      <label htmlFor='username'>Username:</label>
      <input type='username'
       id='username'
       value={username}
       onChange={(e) => setUsername(e.target.value)}/>
    </div>
   
    <div className='inputdivise'>
      <label htmlFor='password'>Password:</label>
      <input type='password'
      id='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <button type='submit'>Submit</button>
   </form>
  )
}

