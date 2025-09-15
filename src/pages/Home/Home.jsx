import { FixedSizeGrid as Grid } from "react-window";
import { useFeed } from "../../contexts/FeedContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import "./Home.css";

const Home = () => {
  const { products, loading, filters, setFilters } = useFeed();

  if (loading) return <p>Loading...</p>;

  // how many columns you want in your grid
  const columnCount = 4; // adjust: 3, 4, etc.
  const rowCount = Math.ceil(products.length / columnCount);

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

        <Grid
          columnCount={columnCount}
          columnWidth={250}   // width of each card
          height={800}        // scrollable height
          rowCount={rowCount}
          rowHeight={350}     // height of each row
          width={1000}        // total grid width
        >
          {({ columnIndex, rowIndex, style }) => {
            const index = rowIndex * columnCount + columnIndex;
            if (index >= products.length) return null;

            return (
              <div style={style}>
                <ProductCard product={products[index]} />
              </div>
            );
          }}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
