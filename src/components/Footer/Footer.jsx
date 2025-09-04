import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PremiumRetail</h3>
            <p>Your one-stop shop for premium products at competitive prices.</p>
          </div>
          
          <div className="footer-section">
            <h4>Company policy</h4>
            <ul>
              <li><Link to="/policy">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: support@premiumretail.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 PremiumRetail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer