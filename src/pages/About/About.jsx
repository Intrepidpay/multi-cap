import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>Multicapital Warehouse</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome to Multicapital Warehouse your trusted destination for premium cars, home appliances, rare collectibles, fine art, vintage pieces, accessories etc. We are dedicated to delivering an exceptional shopping experience, offering a carefully curated selection of products that embody quality, authenticity, and lasting value.
            </p>
            
            <p>
              Founded in 2023, our mission is to make quality products accessible to all. Every item in our collection is thoughtfully selected to meet rigorous quality standards and provide genuine value to our customers.
            </p>
            
            <h3>Values</h3>
            <ul>
              <li><strong>Quality:</strong> We never compromise on the quality of our listed products.</li>
              <li><strong>Customer Satisfaction:</strong> Your happiness is our top priority.</li>
              <li><strong>Innovation:</strong> We continuously seek to improve our offerings and services.</li>
              <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
            </ul>
            
            <h3>Why Choose Us?</h3>
            <p>
              With thousands of satisfied customers and a growing collection of quality products, 
              we've established ourselves as a trusted retailer. Our dedicated customer support team 
              is always ready to assist you, and our streamlined WhatsApp checkout process makes 
              purchasing simple and secure.
            </p>
          </div>
          
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Premium Retail Store" />
          </div>
        </div>
        
        <div className="team-section">
          <h3>Our Team</h3>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Team Member" />
              </div>
              <h4>Robert Tooley</h4>
              <p>Founder & CEO</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Team Member" />
              </div>
              <h4>Emily Coleman</h4>
              <p>Head of Operations</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Team Member" />
              </div>
              <h4>Oliver Tooley</h4>
              <p>Sales/Customer Experience Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
