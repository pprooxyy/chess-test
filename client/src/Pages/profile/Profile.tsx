import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MainProfilePage from "../../Components/Profile/MainProfilepage";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="Profile-wrapper">
    
      <Navbar />
      <MainProfilePage />
    </div>
  );
}
