import React from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import cloud from '../../Assets/cloud.svg';
import Logo from '../../Assets/logo.png';


function Signup() {
    const Navigate = useNavigate();

    return (
        <div className='signup-main'>
            <h1 className='heading'>
                <div className="logo">
                    <img src={Logo} alt="Logo" /></div>INITECH SOLUTIONS</h1>
            <div className='image'>
                <img src={cloud} alt="Background" />
            </div>
            <div className="signup-container">
                <h2>SignUp</h2>
                <form className="signup-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                    <button type="submit" onClick={() => {Navigate('/searchforassets')}}>Sign Up</button>
                </form>
                <p>
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
