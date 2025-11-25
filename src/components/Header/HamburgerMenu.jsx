import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Dark backdrop */}
      <div
        className={`menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />

      {/* Sidebar Menu */}
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={onClose} aria-label="Close menu">
          ✕
        </button>

        <nav className="mobile-nav">
          <ul>
            <li><Link to="/" onClick={onClose}>Home</Link></li>
            <li><Link to="/services" onClick={onClose}>Services</Link></li>
            <li><Link to="/support" onClick={onClose}>Support</Link></li>
            <li><Link to="/about" onClick={onClose}>About</Link></li>
            <li><Link to="/cart" onClick={onClose}>Cart</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
