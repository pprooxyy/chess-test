import React from "react";
import Button from "../Button/Button";
import "./MainPlaySection.css";

function MainPlaySection() {
  const boardStyles = {
    width: 496,
    height: 496,
  };

  return (
    <div className="main-play-section">
      <div className="image-wrapper">
        <img style={boardStyles} src="/assets/board-main.png" alt="board" />
      </div>
      <div className="buttons-wrapper">
        <h1>Play Chess Online</h1>
        <p>Choose a game mode:</p>
        <Button text="Create Game" width="200px" className="register" />
        <Button text="Play with Bot" width="200px" className="register" />
      </div>
    </div>
  );
}

export default MainPlaySection;
