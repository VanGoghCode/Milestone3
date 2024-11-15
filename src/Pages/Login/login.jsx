import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import cloud from '../../Assets/cloud.svg';
import Logo from '../../Assets/logo.png';


function Login() {
  return (
    <div className='login-main'>
      <h1 className='heading'>

        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>INITECH SOLUTIONS</h1>
      <div className='image-login'>
        <img src={cloud} alt="Background" />
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>

          <div className="login-links">
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </Link>
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
