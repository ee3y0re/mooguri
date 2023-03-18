import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ children, isDisabled, to, clickEvent, styleKey }) => {
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
  console.log(classNameSelect())

  return (
    <button
      className={`button ${classNameSelect()}`}
      disabled={isDisabled}
      to={to}
      onClick={() => clickEvent}
    >
      {children}
    </button>
  );
};

export default Button;
