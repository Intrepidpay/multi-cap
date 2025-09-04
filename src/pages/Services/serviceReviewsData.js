// serviceReviewsData.js
export const serviceReviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    rating: 5,
    comment: "Exceptional quality products and fast shipping. Will definitely shop here again!",
    date: "2024-01-15T10:30:00Z",
    replies: [
      {
        id: 1,
        text: "Thank you for your kind words, Sarah! We're thrilled you had a great experience.",
        date: "2024-01-15T14:45:00Z",
        isAdmin: true
      }
    ]
  },
  {
    id: 2,
    author: "Michael Chen",
    rating: 4,
    comment: "Good products but shipping took longer than expected. Otherwise happy with my purchase.",
    date: "2024-01-10T16:20:00Z",
    replies: [
      {
        id: 2,
        text: "We appreciate your feedback, Michael. We're working to improve our delivery times.",
        date: "2024-01-11T09:15:00Z",
        isAdmin: true
      }
    ]
  },
  {
    id: 3,
    author: "Emma Rodriguez",
    rating: 5,
    comment: "The customer support team was incredibly helpful when I had an issue with my order.",
    date: "2024-01-08T11:45:00Z",
    replies: [
      {
        id: 3,
        text: "We're glad our team could assist you, Emma! Don't hesitate to reach out if you need anything else.",
        date: "2024-01-08T13:20:00Z",
        isAdmin: true
      }
    ]
  },
  {
    id: 4,
    author: "David Wilson",
    rating: 5,
    comment: "Premium quality at reasonable prices. The warranty gives me peace of mind.",
    date: "2024-01-05T14:30:00Z",
    replies: []
  },
  {
    id: 5,
    author: "Lisa Thompson",
    rating: 3,
    comment: "Products are good but the return process was a bit complicated.",
    date: "2024-01-03T09:15:00Z",
    replies: [
      {
        id: 4,
        text: "We're sorry to hear about your experience, Lisa. We've simplified our return process based on feedback like yours.",
        date: "2024-01-03T11:30:00Z",
        isAdmin: true
      }
    ]
  },
  {
    id: 6,
    author: "James Miller",
    rating: 5,
    comment: "Fast shipping and the product exceeded my expectations. Highly recommend!",
    date: "2023-12-28T15:40:00Z",
    replies: []
  },
  {
    id: 7,
    author: "Olivia Parker",
    rating: 4,
    comment: "Good overall experience. Would love to see more payment options in the future.",
    date: "2023-12-22T12:25:00Z",
    replies: [
      {
        id: 5,
        text: "Thanks for the suggestion, Olivia! We're exploring additional payment methods to offer more flexibility.",
        date: "2023-12-22T14:10:00Z",
        isAdmin: true
      }
    ]
  }
];

// Function to add a new review (for user submissions)
export const addReview = (review) => {
  const newReview = {
    id: Date.now(),
    ...review,
    date: new Date().toISOString(),
    replies: []
  };
  
  serviceReviews.push(newReview);
  return newReview;
};

// Function to add an admin reply
export const addAdminReply = (reviewId, replyText) => {
  const review = serviceReviews.find(r => r.id === reviewId);
  if (review) {
    const newReply = {
      id: Date.now(),
      text: replyText,
      date: new Date().toISOString(),
      isAdmin: true
    };
    
    review.replies.push(newReply);
    return newReply;
  }
  return null;
};