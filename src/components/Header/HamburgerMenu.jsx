import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './HamburgerMenu.css'

const HamburgerMenu = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setIsClosing(false)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 200)
  }

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen && !isClosing) return null

  return (
    <>
      <div 
        className={`hamburger-menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={handleClose}
        aria-hidden="true"
      />
      <div className={`hamburger-menu ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
        <button 
          className="close-btn" 
          onClick={handleClose}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <ul>
            <li><Link to="/" onClick={handleClose}>Home</Link></li>
            <li><Link to="/services" onClick={handleClose}>Services</Link></li>
            <li><Link to="/support" onClick={handleClose}>Support</Link></li>
            <li><Link to="/about" onClick={handleClose}>About</Link></li>
            <li><Link to="/cart" onClick={handleClose}>Cart</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default HamburgerMenu
