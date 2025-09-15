// src/pages/Home/Home.jsx
import { useState, useEffect, useRef } from "react"
import { useFeed } from "../../contexts/FeedContext"
import ProductCard from "../../components/ProductCard/ProductCard"
import SearchFilter from "../../components/SearchFilter/SearchFilter"
import "./Home.css"

const Home = () => {
  const { products, loading, filters, setFilters } = useFeed()

  // restore visible from sessionStorage if present (so we render enough items before restoring scroll)
  const [visible, setVisible] = useState(() => {
    const saved = sessionStorage.getItem("home-visible")
    return saved ? parseInt(saved, 10) : 20
  })

  // ensure we only try to restore once per mount
  const restoredRef = useRef(false)

  // Infinite scroll: load more when user approaches bottom (unchanged logic, trigger earlier)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const triggerPoint = document.documentElement.scrollHeight - 600 // earlier trigger

      if (scrollPosition >= triggerPoint && visible < products.length) {
        setVisible((prev) => prev + 20) // load 20 more
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [visible, products.length])

  // Persist visible count whenever it changes
  useEffect(() => {
    try {
      sessionStorage.setItem("home-visible", String(visible))
    } catch (e) {
      // ignore storage errors (e.g. quota)
    }
  }, [visible])

  // Temporarily disable browser auto scroll restoration while on this page
  useEffect(() => {
    let prev = undefined
    if (typeof window !== "undefined" && window.history && "scrollRestoration" in window.history) {
      prev = window.history.scrollRestoration
      window.history.scrollRestoration = "manual"
    }
    return () => {
      if (typeof window !== "undefined" && window.history && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = prev || "auto"
      }
    }
  }, [])

  // Restore scroll after products have loaded and DOM is tall enough.
  // We retry for a short while (requestAnimationFrame loop) so we don't restore too early.
  useEffect(() => {
    if (loading) return
    if (restoredRef.current) return

    const savedScroll = sessionStorage.getItem("home-scroll")
    if (!savedScroll) return

    const target = parseInt(savedScroll, 10)
    let attempts = 0
    const maxAttempts = 60 // ~1 second at 60fps

    const tryRestore = () => {
      attempts++
      // If the document is tall enough to reach the target scroll, restore.
      // OR if we've retried long enough, restore anyway (fallback).
      if (document.documentElement.scrollHeight > target || attempts >= maxAttempts) {
        window.scrollTo(0, target)
        restoredRef.current = true
      } else {
        requestAnimationFrame(tryRestore)
      }
    }

    tryRestore()
  }, [loading, products.length, visible])

  // Save scroll position (and visible) on unmount / before page unload
  useEffect(() => {
    const saveState = () => {
      try {
        sessionStorage.setItem("home-scroll", String(window.scrollY))
        sessionStorage.setItem("home-visible", String(visible))
      } catch (e) {
        // ignore
      }
    }

    window.addEventListener("beforeunload", saveState)
    return () => {
      // Save immediately on component unmount (covers SPA navigation)
      saveState()
      window.removeEventListener("beforeunload", saveState)
    }
  }, [visible])

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
