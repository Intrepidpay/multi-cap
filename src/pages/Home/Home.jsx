// src/pages/Home/Home.jsx
import { useEffect } from "react"
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

  // 👇 Infinite scroll + save scrollY
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY) // save scroll position

      const scrollPosition = window.innerHeight + window.scrollY
      const triggerPoint = document.documentElement.scrollHeight - 400

      if (scrollPosition >= triggerPoint && visible < products.length) {
        setVisible((prev) => prev + 20)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // restore saved scroll position on mount
    window.scrollTo(0, scrollY)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [visible, products.length, scrollY, setScrollY, setVisible])

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
            {/* empty state */}
            <p>No products found. Try a different search or filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
