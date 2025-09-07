import { useState, useEffect } from 'react';
import { serviceReviews, addReview } from './serviceReviewsData';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Products",
      description: "We offer only the highest quality products from trusted brands and suppliers.",
      icon: "⭐"
    },
    {
      title: "Fast Shipping",
      description: "Enjoy quick delivery with our efficient shipping partners across The United Starts and Canada.",
      icon: "🚚"
    },
    {
      title: "Secure Payment",
      description: "Your transactions are protected and confidential for your privacy.",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Our customer service team is available around the clock to assist you.",
      icon: "📞"
    },
    {
      title: "Easy Returns",
      description: "Not satisfied? Return eligible items within 30 days for a full refund.",
      icon: "🔄"
    },
    {
      title: "Warranty Protection",
      description: "All products are covered by a company-funded full refund guarantee for one year, provided the warranty policy is maintained.",
      icon: "🛡️"
    }
  ];

  // State for reviews and form inputs
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    author: '',
    comment: '',
    rating: 0,
  });

  // Load and shuffle reviews on component mount
  useEffect(() => {
    shuffleAndSelectReviews();
  }, []);

  // Function to shuffle and select 5 reviews
  const shuffleAndSelectReviews = () => {
    const shuffled = [...serviceReviews].sort(() => 0.5 - Math.random());
    setDisplayedReviews(shuffled.slice(0, 10));
  };

  // Handle input changes for new review
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle rating change
  const handleRatingChange = (rating) => {
    setNewReview(prev => ({
      ...prev,
      rating
    }));
  };

  // Submit new review
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.rating === 0 || !newReview.author || !newReview.comment) {
      alert('Please complete all fields and provide a rating');
      return;
    }

    addReview(newReview);
    setNewReview({ author: '', comment: '', rating: 0 });
    shuffleAndSelectReviews();
  };

  // Star Rating Component
  const StarRating = ({ rating, onRatingChange, editable = false }) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${editable ? 'editable' : ''} ${star <= rating ? 'filled' : ''}`}
            onClick={() => editable && onRatingChange(star)}
          >
            {star <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="services">
      <div className="container">
        <h2>Services</h2>
        <p className="services-intro">
          At Multicaptal Warehouse, we're committed to providing exceptional service at every step of your shopping journey.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          <p className="reviews-intro">
            Client Experiences with Our Services
          </p>

          {/* Review Form */}
          <div className="review-form-card">
            <h3>Share Your Experience</h3>
            <form onSubmit={handleSubmitReview}>
              <div className="form-group">
                <label htmlFor="author">Name</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={newReview.author}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Rating</label>
                <StarRating 
                  rating={newReview.rating} 
                  onRatingChange={handleRatingChange} 
                  editable={true} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="comment">Review</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="4"
                  value={newReview.comment}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-review-btn">
                Submit Review
              </button>
            </form>
          </div>

          {/* Reviews Display */}
          <div className="reviews-container">
            <h3>Customer Feedback</h3>
            <div className="reviews-scrollable">
              {displayedReviews.length > 0 ? (
                displayedReviews.map((review) => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h4>{review.author}</h4>
                        <StarRating rating={review.rating} />
                        <span className="review-date">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                    
                    {/* Replies Section - Only show if there are replies */}
                    {review.replies && review.replies.length > 0 && (
                      <div className="replies-section">
                        {review.replies.map((reply) => (
                          <div key={reply.id} className="reply-card">
                            <div className="reply-header">
                              <strong className="admin-badge">{reply.isAdmin ? 'Admin Response' : reply.author}</strong>
                              <span className="reply-date">
                                {new Date(reply.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p>{reply.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="no-reviews">No reviews yet. Be the first to review our services!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
