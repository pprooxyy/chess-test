import React from "react";
import "./StartPage.css";

export default function StartPage() {
  return (
    <div id="startPageContainer">
      <div id="startPageLeftContainer">
        <h1 id="startPageBigTitle">Elbrus Chess</h1>
        <h3 id="startPageSmallTitle">Where strategy meets art</h3>
        <img
          id="startPagePurplePieces"
          src="./assets/startPage/purplePieces.png"
          alt="purplePieces"
        />
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>

      <img
        id="startPageGameboard"
        src="./assets/startPage/boardStartPage.png"
        alt="purplePieces"
      />
      <img
        id="startPageKnightBG"
        src="./assets/startPage/bigKnightBG.png"
        alt="purplePieces"
      />
    </div>
  );
}
