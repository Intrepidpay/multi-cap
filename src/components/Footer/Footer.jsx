import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-brand" aria-label="MultiCapital home">
              <div className="footer-brand-text">
                <span className="footer-brand-name">MULTICAPITAL</span>
                <span className="footer-brand-tagline">WAREHOUSE</span>
              </div>
            </Link>
            <p>Your one-stop shop for premium products at competitive prices.</p>
          </div>
          
          <div className="footer-section">
            <h4>Company Policies</h4>
            <ul>
              <li><Link to="/policy">Policy</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacts</h4>
            <p>
              Address: <a href="https://maps.google.com/?q=1918+Collingsworth+St,+Houston,+TX,+USA" target="_blank" rel="noopener noreferrer">1918 Collingsworth St, Houston, TX, USA</a>
            </p>
            
            <p>
              Address: <a href="https://maps.google.com/?q=509+Richards+St,+Vancouver,+BC,+Canada" target="_blank" rel="noopener noreferrer">509 Richards St, Vancouver, BC, Canada</a>
            </p>
            
            <p>Email: <a href="mailto:support@multicapital.online">support@multicapital.online</a></p>
        
          
          </div>
          
          <div className="footer-section">
            <h4>Socials</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/multicapital.warehouse">Facebook</a>
              <a href="https://wa.me/18257468686">Whatsapp</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy;2025 Multicapital Warehouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
