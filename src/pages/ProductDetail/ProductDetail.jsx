import { Link, useParams } from "react-router-dom";
import { getProductById, formatPrice } from "../../utils/productUtils";
import Button from "../../components/Button/Button";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="error-container">
          <div className="container">
            <div className="error-content">
              <h1>404</h1>
              <h2>This Fragrance Cannot Be Found</h2>
              <p>
                The scent you're searching for may have been discontinued or the
                link is no longer valid. Return to the collection and discover a
                new signature fragrance.
              </p>
              <Button to="/products" variant="primary">
                View All Fragrances
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { fragranceNotes } = product;

  return (
    <div className="product-detail-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Collections</Link>
          <span>/</span>
          <span className="current">{product.name}</span>
        </nav>

        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-info">
            <span className="product-detail-category">{product.category}</span>
            <h1 className="product-detail-name">{product.name}</h1>
            <span className="product-detail-price">
              {formatPrice(product.price)}
            </span>

            <div className="product-detail-description">
              <p>{product.fullDescription}</p>
            </div>

            <div className="product-specs">
              <h3>Fragrance Notes</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Top Notes</span>
                  <span className="spec-value">{fragranceNotes?.topNotes}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Heart Notes</span>
                  <span className="spec-value">
                    {fragranceNotes?.heartNotes}
                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Base Notes</span>
                  <span className="spec-value">
                    {fragranceNotes?.baseNotes}
                  </span>
                </div>
              </div>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">Longevity</span>
                <span className="meta-value">{product.longevity}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Ideal For</span>
                <span className="meta-value">{product.occasion}</span>
              </div>
            </div>

            <Button variant="primary" className="add-to-cart">
              Add to Collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
