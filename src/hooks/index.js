/**
 * Custom hooks for the application
 */
import { useEffect } from "react";

/**
 * Scrolls to top of page on route change
 * @returns {null} - Renders nothing
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};
