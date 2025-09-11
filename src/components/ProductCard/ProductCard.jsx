import { Link } from 'react-router-dom' import{ useCart } from '../../contexts/CartContext' import'./ProductCard.css'

const ProductCard = ({ product }) => { const { addToCart, getItemQuantity } = useCart() const cartQuantity = getItemQuantity(product.id)

const handleAddToCart = (e) => { e.preventDefault() e.stopPropagation() addToCart(product) }

const isOutOfStock = product.quantity <= 0 || product.sold const isMaxQuantity = cartQuantity >= product.quantity

return ( <div  className={product-card ${product.highDemand ? 'product-card-highlight' : ''}} itemScope  itemType="https://schema.org/Product" > <Link to={/product/${product.id}} itemProp="url"> <div className="product-card-image"> <img  src={product.images[0]}  alt={product.name}  loading="lazy"  itemProp="image" /> {product.highDemand && <span className="product-card-demand-badge">High Demand</span>} {isOutOfStock && <span className="product-card-sold-badge">Sold</span>} </div>

) }

export default ProductCard
