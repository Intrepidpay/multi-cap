import { useState, useEffect, useRef } from 'react' import{ useParams, Link } from 'react-router-dom' import{ useCart } from '../../contexts/CartContext' import{ getProductById } from '../../data/mockProducts' import'./ProductDetail.css'

const ProductDetail = () => { const { id } = useParams() const { addToCart, getItemQuantity } = useCart() const [product, setProduct] = useState(null) const [currentImage, setCurrentImage] = useState(0) const [touchStart, setTouchStart] = useState(0) const [touchEnd, setTouchEnd] = useState(0) const thumbnailsRef = useRef(null)

useEffect(() => { const productData = getProductById(parseInt(id)) setProduct(productData) }, [id])

useEffect(() => { if (!product) return;

}, [product]);

const handleThumbnailScroll = (direction) => { if (thumbnailsRef.current) { const scrollAmount = 90; // Width of thumbnail + gap thumbnailsRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' }); } };

const handleTouchStart = (e) => { setTouchStart(e.targetTouches[0].clientX); };

const handleTouchMove = (e) => { setTouchEnd(e.targetTouches[0].clientX); };

const handleTouchEnd = () => { if (!product) return;

};

if (!product) { return ( <div className="product-detail-page"> <div className="product-detail-container"> <div className="product-detail-loading">Loading product...</div> </div> </div> ) }

const cartQuantity = getItemQuantity(product.id) const isOutOfStock = product.quantity <= 0 || product.sold const isMaxQuantity = cartQuantity >= product.quantity const showScrollButtons = product.images.length > 4

return ( <div className="product-detail-page"> <div className="product-detail-container"> <nav className="product-detail-breadcrumb"> <Link to="/">Home</Link> &gt; <Link to="/">Products</Link> &gt; <span>{product.name}</span> </nav>

) }

export default ProductDetail
