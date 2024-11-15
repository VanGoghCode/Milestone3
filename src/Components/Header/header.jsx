import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import './header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="company-name">INITECH SOLUTIONS</h1>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/search-assets">Search</Link>
                <Link to="/request">Request</Link>
                <Link to="/track-request">Track Request</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
}

export default Header;
