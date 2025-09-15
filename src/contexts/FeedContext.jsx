// src/contexts/FeedContext.jsx - OPTIMIZED
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react"
import { getProducts } from "../data/mockProducts"

const FeedContext = createContext()

export function FeedProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]) // Store all products
  const [products, setProducts] = useState([]) // Filtered products
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    filter: "all",
    sort: "random",
    searchQuery: "",
  })
  const [scrollY, setScrollY] = useState(0)

  // Load initial products and filters
  useEffect(() => {
    const saved = sessionStorage.getItem("filterState")
    if (saved) {
      setFilters(JSON.parse(saved))
    }
    
    // Load all products once
    const allProductsData = getProducts("all", "random", "")
    setAllProducts(allProductsData)
    setProducts(allProductsData)
    setLoading(false)
  }, [])

  // Save filters when they change
  useEffect(() => {
    sessionStorage.setItem("filterState", JSON.stringify(filters))
  }, [filters])

  // Memoized filtering and sorting
  const filteredProducts = useMemo(() => {
    if (!filters.filter && !filters.sort && !filters.searchQuery) {
      return allProducts;
    }
    
    return getProducts(
      filters.filter,
      filters.sort,
      filters.searchQuery
    );
  }, [allProducts, filters.filter, filters.sort, filters.searchQuery]);

  // Update products only when filteredProducts changes
  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

  // Save scroll position
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

  // Restore scroll position
  useEffect(() => {
    const savedY = sessionStorage.getItem("feedScrollY")
    if (savedY) {
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(savedY, 10))
      });
    }
  }, [])

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    products, 
    loading, 
    filters, 
    setFilters, 
    scrollY, 
    setScrollY
  }), [products, loading, filters, scrollY]);

  return (
    <FeedContext.Provider value={contextValue}>
      {children}
    </FeedContext.Provider>
  )
}

export function useFeed() {
  return useContext(FeedContext)
}
