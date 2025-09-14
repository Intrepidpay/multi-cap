import './SearchFilter.css'

const SearchFilter = ({ filter, setFilter, sort, setSort, searchQuery, setSearchQuery }) => {
  const categories = [
    'all', 'trucks', 'cars', 'motorcycles', 'bicycles', 'tv', 
  'home appliances', 'laptops', 'desktops', cameras, 'game consoles', 'collectable' , 'art' , 'fashion' , 'accessories', 'rare'  , 'other'
]

  return (
    <div className="search-filter">
      <div className="search-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="filter-controls">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
          aria-label="Filter by category"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="sort-select"
          aria-label="Sort by"
        >
          <option value="random">Random</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  )
}

export default SearchFilter
