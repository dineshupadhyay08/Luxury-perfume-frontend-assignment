import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  to,
  href,
  type = "button",
  onClick,
  className = "",
  disabled = false,
  "aria-label": ariaLabel,
}) => {
  const classNames = ["btn", `btn-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  // Internal router link
  if (to) {
    return (
      <Link to={to} className={classNames} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a href={href} className={classNames} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  // Native button
  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
