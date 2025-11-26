import { useEffect, useState } from "react"
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

  // 👇 Infinite scroll + save scrollY + show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY) // save scroll position

      // Show scroll-to-top button when scrolled down 300px
      setShowScrollTop(currentScrollY > 300)

      const scrollPosition = window.innerHeight + currentScrollY
      const triggerPoint =
        document.documentElement.scrollHeight - window.innerHeight * 2

      if (scrollPosition >= triggerPoint && visible < products.length) {
        setVisible((prev) => prev + 20)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // restore saved scroll position on mount
    window.scrollTo(0, scrollY)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [visible, products.length, scrollY, setScrollY, setVisible])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
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

      {/* Scroll to Top Button - Only on Home Page */}
      <div 
        className={`home-scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Scroll to top"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 4l-8 8h6v8h4v-8h6z"/>
        </svg>
      </div>
    </div>
  )
}

export default Home
