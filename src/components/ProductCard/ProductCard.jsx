// src/components/ProductCard/ProductCard.jsx
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart, getItemQuantity } = useCart()
  const cartQuantity = getItemQuantity(product.id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  const isOutOfStock = product.quantity <= 0 || product.sold
  const isMaxQuantity = cartQuantity >= product.quantity

  return (
    <div className={`product-card ${product.highDemand ? 'product-card-highlight' : ''}`}>
      <Link to={`/product/${product.id}`}>
        <div className="product-card-image">
          {/* 👇 Added `loading="lazy"` here */}
          <img 
            src={product.images[0]} 
            alt={product.name} 
            loading="lazy" 
          />
          {product.highDemand && <span className="product-card-demand-badge">High Demand</span>}
          {isOutOfStock && <span className="product-card-sold-badge">Sold</span>}
        </div>
        
        <div className="product-card-info">
          <h3>{product.name}</h3>
          <p className="product-card-category">{product.category}</p>
          <p className="product-card-price">${product.price.toFixed(2)}</p>
          <div className="product-card-meta">
            <p className={`product-card-status ${isOutOfStock ? 'product-card-sold' : 'product-card-available'}`}>
              {isOutOfStock ? 'Sold Out' : 'Available'}
            </p>
            {!isOutOfStock && (
              <p className="product-card-quantity">
                {product.quantity} left in stock
              </p>
            )}
          </div>
        </div>
      </Link>
      
      {!isOutOfStock && (
        <button 
          className={`product-card-add-to-cart-btn ${isMaxQuantity ? 'product-card-disabled' : ''}`}
          onClick={handleAddToCart}
          disabled={isMaxQuantity}
        >
          {isMaxQuantity 
            ? 'Max Quantity' 
            : cartQuantity > 0 
              ? `Add to Cart (${cartQuantity})` 
              : 'Add to Cart'
          }
        </button>
      )}
    </div>
  )
}

export default ProductCard