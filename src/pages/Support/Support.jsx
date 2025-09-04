import { useState } from 'react'
import './Support.css'

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq')

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse our products, add items to your cart, and proceed to checkout. You'll be redirected to WhatsApp to complete your purchase."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, mobile money, and credit/debit cards. Details will be provided during the WhatsApp checkout process."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-5 business days within the city and 5-10 business days for other locations. Express shipping options are also available."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in original condition with all tags attached. Some exclusions apply."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, we'll provide you with a tracking number via WhatsApp. You can use this to monitor your package's journey."
    }
  ]

  const contactMethods = [
    {
      method: "WhatsApp",
      details: "+1 (555) 123-4567",
      description: "Message us directly for quick assistance with orders and inquiries."
    },
    {
      method: "Email",
      details: "support@premiumretail.com",
      description: "Send us an email and we'll respond within 24 hours."
    },
    {
      method: "Phone",
      details: "+1 (555) 123-HELP",
      description: "Call us during business hours (9AM-6PM EST, Monday-Friday)."
    }
  ]

  return (
    <div className="support">
      <div className="container">
        <h2>Customer Support</h2>
        <p className="support-intro">
          We're here to help you with any questions or concerns you may have.
        </p>
        
        <div className="support-tabs">
          <button 
            className={activeTab === 'faq' ? 'active' : ''}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
          <button 
            className={activeTab === 'contact' ? 'active' : ''}
            onClick={() => setActiveTab('contact')}
          >
            Contact Us
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'faq' && (
            <div className="faq-section">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'contact' && (
            <div className="contact-section">
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <div key={index} className="contact-method">
                    <h3>{method.method}</h3>
                    <p className="contact-details">{method.details}</p>
                    <p className="contact-description">{method.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="contact-form">
                <h3>Send us a Message</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5"></textarea>
                  </div>
                  
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Support