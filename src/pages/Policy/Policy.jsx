import './Policy.css';

const Policy = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <h1>Company Policies</h1>
        
        <div className="policy-content">
          <section className="policy-section">
            <h2>Privacy Policy</h2>
            <p className="last-updated">Last Updated: January 1, 2024</p>
            
            <h3>1. Introduction</h3>
            <p>
              Welcome to PremiumRetail. We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains how we collect, use, and share your personal information when you use our services.
            </p>
            
            <h3>2. Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Payment information</li>
              <li>Browser and device information</li>
              <li>Usage data and analytics</li>
            </ul>
            
            <h3>3. How We Use Your Information</h3>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Process your transactions and manage your orders</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>Cookie Policy</h2>
            
            <h3>1. What Are Cookies</h3>
            <p>
              Cookies are small text files that are placed on your device by websites you visit. They are widely used to make 
              websites work more efficiently and provide information to the website owners.
            </p>
            
            <h3>2. How We Use Cookies</h3>
            <p>We use cookies for several purposes:</p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be switched off.
              </li>
              <li>
                <strong>Analytics cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.
              </li>
              <li>
                <strong>Marketing cookies:</strong> These are used to track visitors across websites to display relevant advertisements.
              </li>
            </ul>
            
            <h3>3. Managing Cookies</h3>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. 
              If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>
          
          <section className="policy-section">
            <h2>Terms of Service</h2>
            
            <h3>1. Account Registration</h3>
            <p>
              You may be required to register with us to access certain services. You agree to provide accurate, current, 
              and complete information during the registration process.
            </p>
            
            <h3>2. Product Information</h3>
            <p>
              We strive to ensure that product descriptions are accurate. However, we do not warrant that product descriptions 
              or other content is accurate, complete, reliable, current, or error-free.
            </p>
            
            <h3>3. Pricing and Payment</h3>
            <p>
              All prices are shown in the applicable currency and exclude taxes. We reserve the right to change prices at any time.
            </p>
            
            <h3>4. Returns and Refunds</h3>
            <p>
              Our return policy is detailed on our Returns page. Please review it carefully before making a purchase.
            </p>
          </section>
          
          <section className="policy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these policies, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@premiumretail.com<br />
              <strong>Address:</strong> 123 Commerce Street, Business District, City, Country
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Policy;