// src/contexts/FeedContext.jsx
import { createContext, useContext, useState, useEffect } from "react"
import { getProducts } from "../data/mockProducts"

const FeedContext = createContext()

export function FeedProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    filter: "all",
    sort: "random",
    searchQuery: "",
  })
  const [scrollY, setScrollY] = useState(0) // 👈 store scroll position

  // Load filters from sessionStorage on first render
  useEffect(() => {
    const saved = sessionStorage.getItem("filterState")
    if (saved) {
      setFilters(JSON.parse(saved))
    }
  }, [])

  // Save filters whenever they change
  useEffect(() => {
    sessionStorage.setItem("filterState", JSON.stringify(filters))
  }, [filters])

  // Load products whenever filters change
  useEffect(() => {
    setLoading(true)
    const filteredProducts = getProducts(
      filters.filter,
      filters.sort,
      filters.searchQuery
    )
    setProducts(filteredProducts)
    setLoading(false)
  }, [filters])

  // Save scroll on unmount/navigation
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("feedScrollY", window.scrollY.toString())
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      sessionStorage.setItem("feedScrollY", window.scrollY.toString())
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  // Restore scroll when coming back to Home
  useEffect(() => {
    const savedY = sessionStorage.getItem("feedScrollY")
    if (savedY) {
      window.scrollTo(0, parseInt(savedY, 10))
    }
  }, [])

  return (
    <FeedContext.Provider
      value={{ products, loading, filters, setFilters, scrollY, setScrollY }}
    >
      {children}
    </FeedContext.Provider>
  )
}

export function useFeed() {
  return useContext(FeedContext)
      }
