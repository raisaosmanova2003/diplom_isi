import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"
const Login = () => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate("")
  const handleSubmit= (e)=>{
  e.preventDefault();
  axios.post("http://localhost:4400/login",{email,password})
  .then(res => {console.log(res)
            
    if (res.data === 'Success') {
        navigate('/');
    }}
)
  .catch(err=>console.log(err))
  }
return (
<div className="signup-container">
<div className="signup-form">
    <h3>Login</h3>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input 
                type="email" 
                id="exampleInputEmail1" aria-describedby="emailHelp"
  onChange={(e)=>setEmail(e.target.value)}
                required 
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="exampleInputPassword1"
  onChange={(e)=>setPassword(e.target.value)}
                required 
            />
        </div>
        <div className="button_log">
                    <button type="submit" className="btn">Submit</button>
                    </div>
        <p>Have not account? <Link to="/register"><span>Go</span></Link></p>
    </form>
</div>
</div>
)
}

export default Login

