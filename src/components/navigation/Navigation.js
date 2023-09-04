import React, { useState } from 'react';
import logo from '../../assets/Logo.png'
import {Link} from "react-router-dom";


function Navigation() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Moshi Moshi Spa" />
            </div>
            <div className={`menu-icon ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/treatments">Treatments</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/our-story">Our Story</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="actions">
                {loggedIn ? (
                    <button className="profile-button">Profile</button>
                ) : (
                    <div>
                        <button className="book-now-button">Book Now</button>
                        <button className="login-button">Log In</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navigation;