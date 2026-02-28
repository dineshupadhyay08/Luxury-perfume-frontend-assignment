import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/productUtils";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.shortDescription}</p>
        <div className="product-footer">
          <span className="product-price">{formatPrice(product.price)}</span>
          <Link to={`/product/${product.id}`} className="product-link">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
