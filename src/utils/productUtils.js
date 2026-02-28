import { products } from "../data/products";

// Handle edge cases when parsing product ID
const parseProductId = (id) => {
  if (id === null || id === undefined) return null;
  const parsed = parseInt(id, 10);
  return isNaN(parsed) ? null : parsed;
};

export const getProductById = (id) => {
  const numericId = parseProductId(id);
  if (numericId === null) return undefined;

  return products.find((product) => product.id === numericId);
};

export const getFeaturedProducts = (count = 4) => {
  const validCount = Math.max(0, Math.min(count, products.length));
  return products.slice(0, validCount);
};

export const getAllProducts = () => {
  return [...products];
};

export const formatPrice = (price) => {
  if (typeof price !== "number" || isNaN(price)) {
    return "₹0";
  }
  return `₹${price.toLocaleString("en-IN")}`;
};

export const productExists = (id) => {
  return getProductById(id) !== undefined;
};
