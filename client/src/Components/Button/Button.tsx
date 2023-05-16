import React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  p?: string;
  icon?: string;
  width?: string;
  height?: string;
  className?: string;
};

function Button({ text, icon, p, width, height, className }: ButtonProps) {
  const buttonStyle = {
    width,
    height,
  };

  const iconStyles = {
    width: 50,
    height: 50,
  };

  return (
    <button className={`button-19 ${className}`} style={buttonStyle}>
      {icon && <img style={iconStyles} src={icon} alt="icon" />}
      <div className="button-text-wrapper">
        <h2>{text}</h2>
        <p>{p}</p>
      </div>
    </button>
  );
}

export default Button;
