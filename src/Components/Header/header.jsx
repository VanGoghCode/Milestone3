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
                <Link to="/assetinventory" className={location.pathname === '/assetinventory' ? 'active-link' : ''}>Check Assets</Link>
                <Link to="/issueassets" className={location.pathname === '/issueassets' ? 'active-link' : ''}>Issue Assets</Link>
                <Link to="/addretire" className={location.pathname === '/addretire' ? 'active-link' : ''}>Add/Retire Asset</Link>
                <Link to="/trackrequest" className={location.pathname === '/trackrequest' ? 'active-link' : ''}>Track Request</Link>
                <Link to="/fulfillrequest" className={location.pathname === '/fulfillrequest' ? 'active-link' : ''}>Fulfill Request</Link>
                <Link to="/contact-us" className={location.pathname === '/contact-us' ? 'active-link' : ''}>Contact Us</Link>
                <Link to="/profile" className={location.pathname === '/profile' ? 'active-link' : ''}>Profile</Link>
            </nav>
        </header>
        </div>
    );
}

export default Header;
