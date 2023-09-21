import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate(); // Get the navigate function

    // Function to handle the logout action
    const handleLogout = () => {
        // Implement your logout logic here
        // For example, clear user session, JWT token, or perform any other necessary actions.
        // Then, navigate to the sign-in page
        // In this example, the sign-in page is assumed to be '/signin'
        // Replace '/signin' with the actual URL of your sign-in page.
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="contain">
                <div className="logo">
                    <Link to="/">Your Logo</Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                {/* Logout Button */}
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
