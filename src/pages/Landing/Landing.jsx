import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../data/products";
import "./Landing.css";

const Landing = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tagline">Maison de Parfums</span>
          <h1 className="hero-title">LUMIÈRE</h1>
          <p className="hero-subtitle">
            Where every note tells a story of timeless elegance
          </p>
          <Link to="/products" className="btn btn-primary hero-cta">
            Discover Collection
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&q=80"
            alt="Luxury Perfume"
          />
        </div>
      </section>

      {/* Brand Intro Section */}
      <section className="brand-intro section">
        <div className="container">
          <div className="brand-intro-content">
            <span className="brand-intro-label">Our Philosophy</span>
            <h2 className="brand-intro-title">The Art of French Perfumery</h2>
            <div className="decorative-line"></div>
            <p className="brand-intro-text">
              For over a century, Lumière has crafted extraordinary fragrances
              that transcend time. Each creation is a meticulous blend of rare
              ingredients, sourced from the finest purveyors around the world.
              Our master perfumers weave stories through scent, creating
              unforgettable moments that linger long after the first spray.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products section">
        <div className="container">
          <div className="section-title">
            <span>Curated Selection</span>
            <h2>Featured Fragrances</h2>
            <div className="decorative-line"></div>
            <p>
              Discover our most cherished creations, each one a testament to the
              art of perfumery
            </p>
          </div>

          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="featured-cta">
            <Link to="/products" className="btn btn-outline">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <blockquote className="quote-content">
            <p>"Perfume is the key to our memories."</p>
            <cite>— Auguste Laporte, Founder</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Landing;
