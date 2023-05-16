import React from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  width?: string;
  height?: string;
  className?: string;
};

function Button({ text, width, height, className }: ButtonProps) {
  const buttonStyle = {
    width,
    height,
  };

  return (
    <button className={`button-19 ${className}`} style={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;
