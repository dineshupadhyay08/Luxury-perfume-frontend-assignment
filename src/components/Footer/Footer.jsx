import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            LUMIÈRE
          </Link>
          <p className="footer-tagline">
            Crafting moments of luxury through scent since 1920
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Discover</h4>
            <Link to="/products">Collections</Link>
            <Link to="/products">New Arrivals</Link>
            <Link to="/products">Best Sellers</Link>
          </div>

          <div className="footer-column">
            <h4>Maison</h4>
            <a href="#">Our Story</a>
            <a href="#">Craftsmanship</a>
            <a href="#">Sustainability</a>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <a href="#">Gift Wrapping</a>
            <a href="#">Personal Consultation</a>
            <a href="#">Store Locator</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; 2026 Lumière Parfums. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
