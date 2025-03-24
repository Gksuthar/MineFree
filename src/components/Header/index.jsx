import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-highlight">O</span>biztec
      </div>

      <div className="navbar-links">
        <div className="dropdown">
          <a href="#" className="dropdown-toggle">
            Home
            <FaChevronDown className="dropdown-arrow" />
          </a>
        </div>

        <div className="dropdown">
          <a href="#" className="dropdown-toggle">
            Pages
            <FaChevronDown className="dropdown-arrow" />
          </a>
        </div>

        <div className="dropdown">
          <a href="#" className="dropdown-toggle">
            Services
            <FaChevronDown className="dropdown-arrow" />
          </a>
        </div>

        <div className="dropdown">
          <a href="#" className="dropdown-toggle">
            Portfolio
            <FaChevronDown className="dropdown-arrow" />
          </a>
        </div>

        <div className="dropdown">
          <a href="#" className="dropdown-toggle">
            Blog
            <FaChevronDown className="dropdown-arrow" />
          </a>
        </div>

        <a href="#" className="nav-link">Contact Us</a>
        <a href="#" className="nav-link">About Us</a>
        <a href="#" className="nav-link">Our Approach</a>
      </div>

      <button className="navbar-button">Start A Project</button>
    </nav>
  );
};

export default Navbar;