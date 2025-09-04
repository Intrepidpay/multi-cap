import { Link } from 'react-router-dom'
import './HamburgerMenu.css'

const HamburgerMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>✕</button>
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
  )
}

export default HamburgerMenu