import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({
  children,
  className,
  isDisabled,
  to,
  clickEvent,
  styleKey,
}) => {
  const classNameSelect = () => {
    switch (styleKey) {
      case "img":
        return "img";
      case "filled":
        return "filled";
      case "clearWBorder":
        return "clear-with-border";
      default:
        return "clear";
    }
  };

  return (
    <button
      className={`button-base ${classNameSelect()} ${className}`}
      disabled={isDisabled}
      to={to}
      onClick={clickEvent}
    >
      {typeof children === "string" ? (
        <p className={`button-content ${classNameSelect()}`}>{children}</p>
      ) : (
        <div className={`button-content ${classNameSelect()}`}>{children}</div>
      )}
      <div className={`button-animatebg ${classNameSelect()}`}></div>
    </button>
  );
};

export default Button;
