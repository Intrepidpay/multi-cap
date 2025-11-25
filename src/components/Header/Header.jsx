import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import Navbar from './Navbar'
import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'; // adjust path if your file structure differs
import './Header.css'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getCartItemsCount } = useCart()
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <Navbar />
      
        <div className="header-actions">
          <Link to="/cart" className="cart-icon">
            <span>🛒</span>
            <span className="cart-count">{getCartItemsCount()}</span>
          </Link>
        
          <button
            className="hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}
export default Header
