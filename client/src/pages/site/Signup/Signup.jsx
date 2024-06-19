
import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4400/register', { name, email, password })
            .then(res => {console.log(res)
            
            if (res.data === 'Success') {
                navigate('/login');
            }}
        )
            .catch(err => console.log(err));
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                           
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="button_log">
                    <button type="submit" className="btn">Submit</button>
                    </div>
                    
                    <p>Have an account? <Link to="/login"><span>Login here</span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
