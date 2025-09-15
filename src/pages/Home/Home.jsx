import { useFeed } from "../../contexts/FeedContext"
import ProductCard from "../../components/ProductCard/ProductCard"
import SearchFilter from "../../components/SearchFilter/SearchFilter"
import "./Home.css"
import { useState, useEffect, useMemo } from 'react'

const Home = () => {
  const { products, loading, filters, setFilters } = useFeed()
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  // Memoize the products to prevent unnecessary re-renders
  const productList = useMemo(() => products, [products])

  useEffect(() => {
    if (productList.length > 0) {
      setDisplayedProducts(productList)
      setIsInitialLoad(false)
    }
  }, [productList])

  // Add CSS to prevent flash of unstyled content
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .home-products-grid {
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .home-products-grid.visible {
        opacity: 1;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Show products with a slight delay to prevent flashing
  useEffect(() => {
    const gridElement = document.querySelector('.home-products-grid')
    if (gridElement && displayedProducts.length > 0) {
      setTimeout(() => {
        gridElement.classList.add('visible')
      }, 50)
    }
  }, [displayedProducts])

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

        {loading && isInitialLoad ? (
          <div className="home-loading">
            <div className="home-loading-spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : (
          <div className="home-products-grid">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && displayedProducts.length === 0 && (
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
