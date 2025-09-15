// src/pages/Home/Home.jsx - OPTIMIZED
import React, { useMemo } from "react";
import { useFeed } from "../../contexts/FeedContext"
import ProductCard from "../../components/ProductCard/ProductCard"
import SearchFilter from "../../components/SearchFilter/SearchFilter"
import "./Home.css"

const Home = () => {
  const { products, loading, filters, setFilters } = useFeed()

  // Memoize the filter handler functions
  const setFilter = useCallback((f) => setFilters(prev => ({ ...prev, filter: f })), []);
  const setSort = useCallback((s) => setFilters(prev => ({ ...prev, sort: s })), []);
  const setSearchQuery = useCallback((q) => setFilters(prev => ({ ...prev, searchQuery: q })), []);

  // Virtualization - only render visible products
  const visibleProducts = useMemo(() => {
    // In a real implementation, you would use a library like react-window
    // For now, we'll just return all products
    return products;
  }, [products]);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-header">
          <h2>Featured Products</h2>
          <SearchFilter
            filter={filters.filter}
            setFilter={setFilter}
            sort={filters.sort}
            setSort={setSort}
            searchQuery={filters.searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        
        <div className="products-grid">
          {visibleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {visibleProducts.length === 0 && (
          <div className="no-products">No products found matching your criteria.</div>
        )}
      </div>
    </div>
  )
}

export default React.memo(Home)
