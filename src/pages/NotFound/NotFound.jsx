import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-label">Error 404</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <div className="decorative-line"></div>
        <p className="not-found-text">
          The page you are looking for seems to have wandered off our curated
          collection. Perhaps it was never meant for these grounds, or it may
          have been moved to another realm.
        </p>
        <div className="not-found-actions">
          <Button to="/" variant="outline">
            Return Home
          </Button>
          <Button to="/products" variant="primary">
            Explore Collection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
