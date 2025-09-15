import { useState, useEffect } from 'react'
import { getProducts } from '../data/mockProducts'

const useProducts = (filter, sort, searchQuery) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      const filteredProducts = getProducts(filter, sort, searchQuery)
      setProducts(filteredProducts)
      setLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [filter, sort, searchQuery])

  return { products, loading }
}

export default useProducts
