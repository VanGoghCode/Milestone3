import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import './header.css';

function Header() {
    const location = useLocation();

    return (
        <div className='header-main-container'>
            <div className="logo-container">
                <img src={Logo} alt="Logo" />
            </div>
        <header className="header">
            <h1 className="company-name">INITECH SOLUTIONS</h1>
            <nav className="nav-links">
                <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
                <Link to="/searchforassets" className={location.pathname === '/searchforassets' ? 'active-link' : ''}>Search</Link>
                <Link to="/request" className={location.pathname === '/request' ? 'active-link' : ''}>Request</Link>
                <Link to="/track-request" className={location.pathname === '/track-request' ? 'active-link' : ''}>Track Request</Link>
                <Link to="/contact-us" className={location.pathname === '/contact-us' ? 'active-link' : ''}>Contact Us</Link>
                <Link to="/profile" className={location.pathname === '/profile' ? 'active-link' : ''}>Profile</Link>
            </nav>
        </header>
        </div>
    );
}

export default Header;
