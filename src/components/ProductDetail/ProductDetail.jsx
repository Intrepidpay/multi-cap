import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { getProductById } from '../../data/mockProducts'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart, getItemQuantity } = useCart()
  const [product, setProduct] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const productData = getProductById(parseInt(id))
    setProduct(productData)
  }, [id])

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

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <nav className="product-detail-breadcrumb">
          <Link to="/">Home</Link> &gt; <Link to="/">Products</Link> &gt; <span>{product.name}</span>
        </nav>
        
        <div className="product-detail-content">
          <div className="product-detail-gallery">
            <div className="product-detail-main-image">
              <img src={product.images[currentImage]} alt={product.name} />
            </div>
            
            {product.images.length > 1 && (
              <div className="product-detail-thumbnails">
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
            )}
          </div>
          
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-detail-category">{product.category}</p>
            <p className="product-detail-price">${product.price.toFixed(2)}</p>
            
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail