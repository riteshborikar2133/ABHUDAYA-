import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You can style your navbar here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ScholarEase</Link> {/* Replace ScholarEase with your portal name */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/scholarships">Scholarships</Link>
        </li>
        <li>
          <Link to="/apply">Apply Now</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login" className="login-btn">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
