import React, { useState } from "react";
import "./StartPage.css";
import RegisterModal from "../../Components/StartPage/RegisterModal/RegisterModal";
import LoginModal from "../../Components/StartPage/LoginModal/LoginModal";
import Button from "../../Components/Button/Button";

export default function StartPage() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <>
      <div id="startPageContainer">
        <div id="startPageLeftSide">
          <h1 id="startPageBigTitle">Elbrus Chess</h1>
          <h3 id="startPageSmallTitle">Where strategy meets art</h3>
          <img
            id="startPagePurplePieces"
            src="./assets/startPage/purplePieces.png"
            alt="purplePieces"
          />
          <div>
            {/* <button onClick={() => setShowLoginModal(true)}>Login</button>
            <button onClick={() => setShowRegisterModal(true)}>Register</button> */}
            <div id="button-container">
              <Button
                text="Login"
                width="150px"
                height="60px"
                onClick={() => setShowLoginModal(true)}
              />
              <Button
                text="Register"
                width="150px"
                height="60px"
                onClick={() => setShowRegisterModal(true)}
              />
            </div>
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
      {showRegisterModal && (
        <RegisterModal setShowRegisterModal={setShowRegisterModal} />
      )}
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
    </>
  );
}
