import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
          <Link to="/">Elbrus Chess</Link>
        </li>
        <li className="nav-item">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/king.png"
            alt="elbrus-logo"
          />
          <Link to="/home">Play</Link>
        </li>
        <li className="nav-item">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/queen.png"
            alt="elbrus-logo"
          />
          <Link to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/bishop.png"
            alt="elbrus-logo"
          />
          <Link to="/">Leaderboard</Link>
        </li>
        <li className="nav-item">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/knight.png"
            alt="elbrus-logo"
          />
          <Link to="/friends">Social</Link>
        </li>
        <li className="nav-item">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/rook.png"
            alt="elbrus-logo"
          />
          <Link to="/history">History</Link>
        </li>
        <li className="nav-item log-out">
          <img
            className="navbar-icon"
            src="./assets/navbar-icons/pawn.png"
            alt="elbrus-logo"
          />
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
