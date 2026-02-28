import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <span className="products-label">Our Collection</span>
          <h1 className="products-title">Fragrances</h1>
          <div className="decorative-line"></div>
          <p className="products-description">
            Explore our complete collection of meticulously crafted fragrances,
            each one a unique expression of luxury and artistry
          </p>
        </div>
      </div>

      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
