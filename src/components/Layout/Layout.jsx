import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

/**
 * Layout component - wraps pages with consistent header/footer
 * @param {ReactNode} children - Page content
 * @param {string} className - Additional CSS classes
 */
const Layout = ({ children, className = "" }) => {
  return (
    <div className={`layout ${className}`}>
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: "",
};

export default Layout;
