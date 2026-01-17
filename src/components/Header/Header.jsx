import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import Navbar from './Navbar'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getCartItemsCount } = useCart()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <Logo />
        <Navbar />
        
        <div className="header-actions">
          <Link to="/cart" className="cart-icon">
            <span>🛒</span>
            <span className="cart-count">{getCartItemsCount()}</span>
          </Link>
          
          <button 
            className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      <HamburgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  )
}

export default Header
