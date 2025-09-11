import { useCart } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/helpers'
import './Cart.css'

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  const handleCheckout = () => {
    // Format message for WhatsApp
    const message = `Hello! I would like to purchase the following items:%0A%0A${items.map(item => 
      `- ${item.name} (Qty: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}`
    ).join('%0A')}%0A%0ATotal: ${formatPrice(getCartTotal())}%0A%0APlease let me know how to proceed.`
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/18257468686?text=${message}`, '_blank')
  }

  if (items.length === 0) {
    return (
      <div className="cart">
        <div className="container">
          <h2>Shopping Cart</h2>
          <div className="empty-cart">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5V7M9 5V7M3 9H21M3 7L3 17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7L4.5 5H19.5L21 7" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>Your cart is empty</p>
            <a href="/" className="continue-shopping">Continue Shopping</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart">
      <div className="container">
        <h2>Shopping Cart</h2>
        
        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => {
              const isMaxQuantity = item.quantity >= item.availableQuantity
              
              return (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-category">{item.category}</p>
                    <p className="item-price">{formatPrice(item.price)}</p> {/* Updated */}
                    {item.availableQuantity && (
                      <p className="item-stock">
                        {item.availableQuantity} available
                      </p>
                    )}
                  </div>
                  
                  <div className="item-quantity">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >-</button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={isMaxQuantity}
                      aria-label="Increase quantity"
                    >+</button>
                  </div>
                  
                  <div className="item-total">
                    {formatPrice(item.price * item.quantity)} {/* Updated */}
                  </div>
                  
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              )
            })}
          </div>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal ({items.reduce((total, item) => total + item.quantity, 0)} items)</span>
              <span>{formatPrice(getCartTotal())}</span> {/* Updated */}
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>$TBD</span>
            </div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>{formatPrice(getCartTotal())}</span> {/* Updated */}
            </div>
            
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
            
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
