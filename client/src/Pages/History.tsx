import React from "react";
import "./History.css";

export default function History() {
  return (
    <>
      <h1 className="history-title">History</h1>
      <div className="history-item">
        <div className="names-and-date">
          <h1>YOU VS OPONENT</h1>
          <h1>15.03.2023 18:00</h1>
        </div>
        <img className="board-img" src="./assets/board.png" alt="board" />
        <div className="game-status-and-duration">
          <h1>WIN</h1>
          <h1>DURATION: 17 min</h1>
        </div>
      </div>
    </>
  );
}
