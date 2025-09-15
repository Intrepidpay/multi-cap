import { useState, useEffect, useCallback } from 'react'
import { getProducts } from '../data/mockProducts'

const useProducts = (filter, sort, searchQuery) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Memoize the filter function to prevent unnecessary recalculations
  const filterProducts = useCallback(() => {
    return getProducts(filter, sort, searchQuery)
  }, [filter, sort, searchQuery])

  useEffect(() => {
    setLoading(true)
    
    // Use requestAnimationFrame for smoother UI updates
    let mounted = true
    let timer = null
    
    const loadProducts = () => {
      const filteredProducts = filterProducts()
      if (mounted) {
        setProducts(filteredProducts)
        setLoading(false)
      }
    }
    
    // Use a shorter timeout for better perceived performance
    timer = setTimeout(loadProducts, 300)
    
    return () => {
      mounted = false
      if (timer) clearTimeout(timer)
    }
  }, [filter, sort, searchQuery, filterProducts])

  return { products, loading }
}

export default useProducts
