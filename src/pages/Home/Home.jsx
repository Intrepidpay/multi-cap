import { FixedSizeList as List } from "react-window";
import { useFeed } from "../../contexts/FeedContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import "./Home.css";

const Home = () => {
  const { products, loading, filters, setFilters } = useFeed();

  if (loading) return <p>Loading...</p>;

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

        <List
          height={600} // height of scrollable area
          itemCount={products.length}
          itemSize={320} // height of each row (tune per your card CSS)
          width={"100%"}
        >
          {({ index, style }) => (
            <div style={style}>
              <ProductCard product={products[index]} />
            </div>
          )}
        </List>
      </div>
    </div>
  );
};

export default Home;
