import React from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? 'active' : ''}`}>
      <div className="menu-header">
        <button className="close-btn" onClick={onClose} aria-label="Close menu">
          <span></span>
          <span></span>
        </button>
      </div>
      
      <nav className="mobile-nav">
        <ul>
          <li>
            <Link to="/" onClick={onClose}>Home</Link>
          </li>
          <li>
            <Link to="/products" onClick={onClose}>Products</Link>
          </li>
          <li>
            <Link to="/about" onClick={onClose}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={onClose}>Contact</Link>
          </li>
          <li>
            <Link to="/cart" onClick={onClose}>Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
