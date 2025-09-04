import { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-container">
      <div className="cookie-consent-modal">
        <div className="cookie-header">
          <div className="cookie-icon"></div>
          <h3>Your Privacy Matters</h3>
          <button 
            className="cookie-close-btn"
            onClick={handleReject}
            aria-label="Close cookie consent"
          >
            &times;
          </button>
        </div>
        
        <div className="cookie-content">
          <p>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies.
          </p>
          
          <div className="cookie-features">
            <div className="cookie-feature">
              <span className="feature-icon">✓</span>
              <span>Essential site functionality</span>
            </div>
            <div className="cookie-feature">
              <span className="feature-icon">✓</span>
              <span>Personalized content and recommendations</span>
            </div>
            <div className="cookie-feature">
              <span className="feature-icon">✓</span>
              <span>Traffic analysis and optimization</span>
            </div>
          </div>
        </div>
        
        <div className="cookie-actions">
          <button className="cookie-btn reject-btn" onClick={handleReject}>
            Reject Non-Essential
          </button>
          <button className="cookie-btn accept-btn" onClick={handleAccept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;