import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/" className="brand" aria-label="MultiCapital home">
      <div className="brand-text">
        <span className="brand-name">MULTICAPITAL</span>
        <span className="brand-tagline">WAREHOUSE</span>
      </div>
    </Link>
  );
};

export default Logo;