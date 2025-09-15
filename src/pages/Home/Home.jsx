import { useState, useEffect, useRef } from "react"
import { useFeed } from "../../contexts/FeedContext"
import ProductCard from "../../components/ProductCard/ProductCard"
import SearchFilter from "../../components/SearchFilter/SearchFilter"
import "./Home.css"

const Home = () => {
  const { products, loading, filters, setFilters } = useFeed()
  const [visible, setVisible] = useState(20)
  const isLoadingMore = useRef(false)
  const hasRestoredScroll = useRef(false)
  const prevFiltersRef = useRef(JSON.stringify(filters))
  const isNavigatingBackRef = useRef(false)

  // Check if we're navigating back to the page
  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        isNavigatingBackRef.current = true
      }
    }
    
    window.addEventListener('pageshow', handlePageShow)
    return () => window.removeEventListener('pageshow', handlePageShow)
  }, [])

  // Reset visible products only when filters actually change
  useEffect(() => {
    const currentFilters = JSON.stringify(filters)
    if (prevFiltersRef.current !== currentFilters) {
      setVisible(20)
      prevFiltersRef.current = currentFilters
      hasRestoredScroll.current = false
    }
  }, [filters])

  // 👇 Infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 200 &&
        visible < products.length &&
        !isLoadingMore.current
      ) {
        isLoadingMore.current = true
        
        // Save current scroll position before loading more
        const scrollPosition = window.scrollY
        const scrollHeight = document.documentElement.scrollHeight
        
        setVisible((prev) => {
          const newVisible = prev + 20
          
          // After state update, restore scroll position
          setTimeout(() => {
            const newScrollHeight = document.documentElement.scrollHeight
            window.scrollTo(0, scrollPosition + (newScrollHeight - scrollHeight))
            isLoadingMore.current = false
          }, 0)
          
          return newVisible
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [visible, products.length])

  // Handle scroll restoration when navigating back
  useEffect(() => {
    if (isNavigatingBackRef.current && !hasRestoredScroll.current && visible > 20) {
      // Wait for products to render
      setTimeout(() => {
        // Try to restore the previous scroll position
        const savedScrollPosition = sessionStorage.getItem('homeScrollPosition')
        if (savedScrollPosition) {
          window.scrollTo(0, parseInt(savedScrollPosition, 10))
        }
        hasRestoredScroll.current = true
        isNavigatingBackRef.current = false
      }, 100)
    }
  }, [visible, loading])

  // Save scroll position before leaving the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('homeScrollPosition', window.scrollY)
    }
    
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      sessionStorage.setItem('homeScrollPosition', window.scrollY)
    }
  }, [])

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
          <div className="home-products-grid">
            {products.slice(0, visible).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="home-no-products">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5V7M9 5V7M3 9H21M3 7L3 17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7L4.5 5H19.5L21 7"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 12H14"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p>No products found. Try a different search or filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
