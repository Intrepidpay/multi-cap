import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error)
    return []
  }
}

// Save cart to localStorage
const saveCartToStorage = (items) => {
  try {
    localStorage.setItem('cartItems', JSON.stringify(items))
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error)
  }
}

const cartReducer = (state, action) => {
  let newState;
  
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      // Check if product is available and not exceeding quantity
      if (action.payload.quantity <= 0) {
        return state; // Don't add if out of stock
      }
      
      if (existingItem) {
        // Don't exceed available quantity
        const newQuantity = Math.min(
          existingItem.quantity + 1,
          action.payload.quantity
        )
        
        newState = {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: newQuantity }
              : item
          )
        }
      } else {
        newState = {
          ...state,
          items: [...state.items, { 
            ...action.payload, 
            quantity: 1,
            availableQuantity: action.payload.quantity 
          }]
        }
      }
      break;
    
    case 'REMOVE_FROM_CART':
      newState = {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
      break;
    
    case 'UPDATE_QUANTITY':
      const itemToUpdate = state.items.find(item => item.id === action.payload.id)
      
      if (!itemToUpdate) return state;
      
      // Don't allow quantity to exceed available stock or go below 1
      const newQuantity = Math.max(
        1,
        Math.min(action.payload.quantity, itemToUpdate.availableQuantity || itemToUpdate.quantity)
      )
      
      newState = {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: newQuantity }
            : item
        )
      }
      break;
    
    case 'CLEAR_CART':
      newState = {
        ...state,
        items: []
      }
      break;
    
    case 'LOAD_CART':
      // When loading from storage, set items directly without validation
      // Validation will happen in a separate useEffect
      newState = {
        ...state,
        items: action.payload
      }
      break;
    
    case 'VALIDATE_CART_ITEMS':
      // Validate cart items against current product data
      const currentProducts = action.payload; // Array of current products
      const validatedItems = state.items.map(item => {
        const currentProduct = currentProducts.find(p => p.id === item.id);
        return {
          ...item,
          availableQuantity: currentProduct ? currentProduct.quantity : 0
        };
      }).filter(item => item.availableQuantity > 0); // Remove items that are no longer available
      
      newState = {
        ...state,
        items: validatedItems
      }
      break;
    
    default:
      return state
  }
  
  // Save to localStorage after each action
  if (newState) {
    saveCartToStorage(newState.items)
  }
  
  return newState || state
}

export const CartProvider = ({ children, products = [] }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedItems = loadCartFromStorage()
    if (savedItems.length > 0) {
      dispatch({ type: 'LOAD_CART', payload: savedItems })
    }
  }, [])

  // Validate cart items against current products when products change
  useEffect(() => {
    if (products.length > 0 && state.items.length > 0) {
      dispatch({ type: 'VALIDATE_CART_ITEMS', payload: products })
    }
  }, [products, state.items.length])

  const addToCart = (product) => {
    if (product.quantity > 0) {
      dispatch({ type: 'ADD_TO_CART', payload: product })
    }
  }

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartItemsCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0)
  }

  const getItemQuantity = (id) => {
    const item = state.items.find(item => item.id === id)
    return item ? item.quantity : 0
  }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemsCount,
        getItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}