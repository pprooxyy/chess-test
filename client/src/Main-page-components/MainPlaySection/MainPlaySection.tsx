import React from "react";
import Button from "../../Components/Button/Button";
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
      <div className="text-buttons-wrapper-main">
        <div className="text-wrapper">
          <h1>Play Chess Online</h1>
          <p>Choose a game mode:</p>
        </div>
        <div className="buttons-wrapper">
          <Button
            text="Play Online"
            p="Play with someone from Elbrus"
            icon="/assets/browser.png"
<<<<<<< HEAD:client/src/Main-page-components/MainPlaySection/MainPlaySection.tsx
            width="300px"
=======
            width="100px"
>>>>>>> 327ec991f3524abcab2ed24c32ade4e2fd749a44:client/src/Components/MainPlaySection/MainPlaySection.tsx
            height="100px"
            className="play-online"
          />
          <Button
            text="Play Computer"
            p="Play vs customizable training bots"
            icon="/assets/bot.png"
<<<<<<< HEAD:client/src/Main-page-components/MainPlaySection/MainPlaySection.tsx
            width="300px"
=======
            width="100px"
>>>>>>> 327ec991f3524abcab2ed24c32ade4e2fd749a44:client/src/Components/MainPlaySection/MainPlaySection.tsx
            height="100px"
            className="play-bot"
          />
        </div>
      </div>
    </div>
  );
}

export default MainPlaySection;
