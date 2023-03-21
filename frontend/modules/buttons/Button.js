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

  return (
    <div className={`button-container ${classNameSelect()}`}>
      <button
        className={`button-base ${classNameSelect()}`}
        disabled={isDisabled}
        to={to}
        onClick={() => clickEvent}
      >
        <p className={`button-text ${classNameSelect()}`}>{children}</p>
      </button>
      <div className={`button-animatebg ${classNameSelect()}`}></div>
    </div>
  );
};

export default Button;
