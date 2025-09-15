import { VirtuosoGrid } from "react-virtuoso";
import { useFeed } from "../../contexts/FeedContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import "./Home.css";

const Home = () => {
  const { products, loading, filters, setFilters } = useFeed();

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
        ) : products.length > 0 ? (
          <VirtuosoGrid
            style={{ height: "80vh" }}
            totalCount={products.length}
            itemContent={(index) => (
              <ProductCard key={products[index].id} product={products[index]} />
            )}
            listClassName="home-products-grid"
          />
        ) : (
          <div className="home-no-products">
            <p>No products found. Try a different search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
