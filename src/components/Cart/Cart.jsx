import { useCart } from '../../contexts/CartContext' import'./Cart.css'

const Cart = () => { const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

const handleCheckout = () => { // Format message for WhatsApp const message = Hello! I would like to purchase the following items:%0A%0A${items.map(item => 
      - ${item.name} (Qty: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
    ).join('%0A')}%0A%0ATotal: $${getCartTotal().toFixed(2)}%0A%0APlease let me know how to proceed.

}

if (items.length === 0) { return ( <div className="cart"> <div className="container"> <h2>Shopping Cart</h2> <div className="empty-cart"> <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15 5V7M9 5V7M3 9H21M3 7L3 17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7L4.5 5H19.5L21 7" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg> <p>Your cart is empty</p> <a href="/" className="continue-shopping">Continue Shopping</a> </div> </div> </div> ) }

return ( <div className="cart"> <div className="container"> <h2>Shopping Cart</h2>

) }

export default Cart
