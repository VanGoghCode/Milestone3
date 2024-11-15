import React from 'react';
import './duoLogin.css';
import Logo from '../../Assets/logo.png';

function DuoLogin() {
    return (
        <div className="duo-login-page">
            <h1 className="auth-heading">Choose an authentication method</h1>
            <div className="duo-auth-container">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="auth-content">
                    <h2>DUO SECURITY</h2>
                    <p>TWO-FACTOR AUTHENTICATION</p>
                    <button className="auth-button">Send Me a Push</button>
                    <button className="auth-button">Call Me</button>
                    <button className="auth-button">Passcode</button>
                    <a href="/help" className="help-link">What is this? Add a new device</a>
                    <a href="/settings" className="settings-link">My Settings & Devices</a>
                </div>
            </div>
            <div className="additional-options">
                <div>
                    <a href="/help" className="help-text">Need help?</a>
                </div>
                <label className="remember-checkbox">
                    <input type="checkbox" /> Remember me for 7 days
                </label>
            </div>
            <p className="secured-text">Secured by Duo</p>
        </div>
    );
}

export default DuoLogin;
