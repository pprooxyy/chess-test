import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li className="nav-item">
          <img
            className="elbrus-logo"
            src="./assets/navbar-icons/elbrus-logo.png"
            alt="elbrus-logo"
          />
        </li>
        <li className="nav-item">
          <h3>Elbrus Chess</h3>
        </li>
        <li className="nav-item">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/king.png"
            alt="elbrus-logo"
          />
          Play
        </li>
        <li className="nav-item">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/queen.png"
            alt="elbrus-logo"
          />
          Profile
        </li>
        <li className="nav-item">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/bishop.png"
            alt="elbrus-logo"
          />
          Leaderboard
        </li>
        <li className="nav-item">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/knight.png"
            alt="elbrus-logo"
          />
          Social
        </li>
        <li className="nav-item">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/rook.png"
            alt="elbrus-logo"
          />
          History
        </li>
        <li className="nav-item log-out">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/pawn.png"
            alt="elbrus-logo"
          />
          Logout
        </li>
      </ul>
    </div>
  );
}
