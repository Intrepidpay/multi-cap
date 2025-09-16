import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { getProductById } from '../../data/mockProducts'
import { formatPrice } from '../../utils/helpers'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart, getItemQuantity } = useCart()
  const [product, setProduct] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const thumbnailsRef = useRef(null)

  useEffect(() => {
    const productData = getProductById(parseInt(id))
    setProduct(productData)
  }, [id])

  useEffect(() => {
    if (!product) return;

    // Create structured data for Google
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.name,
      "image": product.images,
      "description": product.description,
      "sku": product.sku,
      "brand": {
        "@type": "Brand",
        "name": product.brand || "Multicapital"
      },
      "offers": {
        "@type": "Offer",
        "url": window.location.href,
        "priceCurrency": "USD",
        "price": product.price,
        "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        "availability": product.quantity > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "seller": {
          "@type": "Organization",
          "name": "Multicapital Warehouse"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating.value,
        "reviewCount": product.rating.count
      },
      "review": product.reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating
        },
        "reviewBody": review.comment
      }))
    };

    // Add structured data to the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [product]);

  const handleThumbnailScroll = (direction) => {
    if (thumbnailsRef.current) {
      const scrollAmount = 90; // Width of thumbnail + gap
      thumbnailsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!product) return;
    
    if (touchStart - touchEnd > 50) {
      // Swipe left - next image
      setCurrentImage(prev => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }

    if (touchEnd - touchStart > 50) {
      // Swipe right - previous image
      setCurrentImage(prev => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="product-detail-container">
          <div className="product-detail-loading">Loading product...</div>
        </div>
      </div>
    )
  }

  const cartQuantity = getItemQuantity(product.id)
  const isOutOfStock = product.quantity <= 0 || product.sold
  const isMaxQuantity = cartQuantity >= product.quantity
  const showScrollButtons = product.images.length > 4

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <nav className="product-detail-breadcrumb">
          <Link to="/">Home</Link> &gt; <Link to="/">Products</Link> &gt; <span>{product.name}</span>
        </nav>
        
        <div className="product-detail-content">
          <div className="product-detail-gallery">
            <div 
              className="product-detail-main-image"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img src={product.images[currentImage]} alt={product.name} />
              {/* Watermark added here */}
              <div className="product-watermark">
                <img src="/watermark.png" alt="Watermark" />
              </div>
            </div>
            
            {product.images.length > 1 && (
              <div className="product-detail-thumbnails-container">
                {showScrollButtons && (
                  <button 
                    className="product-detail-thumbnail-scroll-btn left"
                    onClick={() => handleThumbnailScroll('left')}
                  >
                    &lt;
                  </button>
                )}
                <div 
                  className="product-detail-thumbnails"
                  ref={thumbnailsRef}
                >
                  {product.images.map((image, index) => (
                    <img 
                      key={index} 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className={index === currentImage ? 'product-detail-active' : ''}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
                {showScrollButtons && (
                  <button 
                    className="product-detail-thumbnail-scroll-btn right"
                    onClick={() => handleThumbnailScroll('right')}
                  >
                    &gt;
                  </button>
                )}
              </div>
            )}
          </div>
          
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-detail-category">{product.category}</p>
            <p className="product-detail-price">{formatPrice(product.price)}</p>
            
            <div className="product-detail-stock-info">
              <div className={`product-detail-status ${isOutOfStock ? 'product-detail-sold' : 'product-detail-available'}`}>
                {isOutOfStock ? 'Sold Out' : 'In Stock'}
              </div>
              {product.highDemand && (
                <div className="product-detail-demand-tag">High Demand</div>
              )}
              {!isOutOfStock && (
                <div className="product-detail-quantity">
                  {product.quantity} left in stock
                </div>
              )}
            </div>
            
            {/* Enhanced Star Rating */}
            <div className="product-detail-rating">
              <div className="product-detail-stars">
                <div 
                  className="product-detail-stars-inner" 
                  style={{ width: `${(product.rating.value / 5) * 100}%` }}
                ></div>
              </div>
              <span className="product-detail-review-count">
                ({product.rating.count} reviews)
              </span>
            </div>
            
            <p className="product-detail-description">
              {product.description || 'No description available for this product.'}
            </p>
            
            {!isOutOfStock && (
              <button 
                className={`product-detail-add-to-cart-btn ${isMaxQuantity ? 'product-detail-disabled' : ''}`}
                onClick={() => addToCart(product)}
                disabled={isMaxQuantity}
              >
                {isMaxQuantity 
                  ? 'Maximum Quantity Added' 
                  : cartQuantity > 0 
                    ? `Added: ${cartQuantity}` 
                    : 'Add to Cart'
                }
              </button>
            )}
            
            <div className="product-detail-meta">
              <div className="product-detail-meta-item">
                <span className="product-detail-meta-label">SKU:</span>
                <span className="product-detail-meta-value">{product.sku || 'N/A'}</span>
              </div>
              <div className="product-detail-meta-item">
                <span className="product-detail-meta-label">Category:</span>
                <span className="product-detail-meta-value">{product.category}</span>
              </div>
              <div className="product-detail-meta-item">
                <span className="product-detail-meta-label">Brand:</span>
                <span className="product-detail-meta-value">{product.brand}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
