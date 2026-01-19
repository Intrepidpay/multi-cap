import { useEffect, useState, useRef } from "react"
import { useFeed } from "../../contexts/FeedContext"
import ProductCard from "../../components/ProductCard/ProductCard"
import SearchFilter from "../../components/SearchFilter/SearchFilter"
import "./Home.css"

const Home = () => {
  const {
    products,
    loading,
    filters,
    setFilters,
    visible,
    setVisible,
    scrollY,
    setScrollY,
  } = useFeed()

  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isScrollingToTop, setIsScrollingToTop] = useState(false)
  const scrollTimeoutRef = useRef(null)
  const tickingRef = useRef(false)

  // 👇 Optimized infinite scroll with iOS fixes
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingToTop) return; // Don't save scroll position while scrolling to top
      
      const currentScrollY = window.scrollY
      
      // Show scroll-to-top button when scrolled down 300px
      setShowScrollTop(currentScrollY > 300)
      
      // Debounce scrollY updates to improve performance
      clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = setTimeout(() => {
        setScrollY(currentScrollY)
      }, 100)
      
      // Use requestAnimationFrame for smoother performance on iOS
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.innerHeight + window.scrollY
          const triggerPoint = 
            document.documentElement.scrollHeight - window.innerHeight * 2
          
          if (scrollPosition >= triggerPoint && visible < products.length) {
            setVisible(prev => Math.min(prev + 20, products.length))
          }
          tickingRef.current = false
        })
        tickingRef.current = true
      }
    }

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Check if iOS to apply specific fixes
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    
    // Restore scroll position with delay to ensure DOM is ready
    if (!isScrollingToTop && scrollY > 0) {
      const restoreTimeout = setTimeout(() => {
        if (!isIOS) { // iOS has issues with programmatic scrolling
          window.scrollTo(0, scrollY)
        }
      }, isIOS ? 100 : 0) // Longer delay for iOS
      
      return () => {
        clearTimeout(restoreTimeout)
        clearTimeout(scrollTimeoutRef.current)
        window.removeEventListener("scroll", handleScroll)
      }
    }

    return () => {
      clearTimeout(scrollTimeoutRef.current)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [visible, products.length, scrollY, setScrollY, setVisible, isScrollingToTop])

  // Scroll to top function - Optimized for iOS
  const scrollToTop = () => {
    setIsScrollingToTop(true)
    
    // Use CSS smooth scrolling for iOS compatibility
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    
    if (isIOS) {
      // iOS-specific smooth scroll
      const startY = window.scrollY
      const duration = 500
      const startTime = performance.now()
      
      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeProgress = progress < 0.5 
          ? 2 * progress * progress 
          : -1 + (4 - 2 * progress) * progress
        
        window.scrollTo(0, startY * (1 - easeProgress))
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        } else {
          setIsScrollingToTop(false)
          setScrollY(0)
        }
      }
      
      requestAnimationFrame(animateScroll)
    } else {
      // Standard smooth scroll for other devices
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
      
      // Reset after scroll completes
      setTimeout(() => {
        setIsScrollingToTop(false)
        setScrollY(0)
      }, 500)
    }
  }

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-header">
          <h2>Featured Products</h2>
          <SearchFilter
            filter={filters.filter}
            setFilter={(f) => setFilters({ ...filters, filter: f })}
            sort={filters.sort}
            setSort={(s) => setFilters({ ...filters, sort: s })}
            searchQuery={filters.searchQuery}
            setSearchQuery={(q) => setFilters({ ...filters, searchQuery: q })}
          />
        </div>

        {loading ? (
          <div className="home-loading">
            <div className="home-loading-spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : (
          <>
            <div className="home-products-grid">
              {products.slice(0, visible).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* 👇 Smooth "loading more" indicator before footer */}
            {visible < products.length && (
              <div className="home-loading-more">
                <div className="spinner"></div>
                <p>Loading more...</p>
              </div>
            )}
          </>
        )}

        {!loading && products.length === 0 && (
          <div className="home-no-products">
            <p>No products found. Try a different search or filter.</p>
          </div>
        )}
      </div>

      {/* Scroll to Top Button - RESTORED */}
      <div 
        className={`home-scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 4l-8 8h6v8h4v-8h6z"/>
        </svg>
      </div>
    </div>
  )
}

export default Home
