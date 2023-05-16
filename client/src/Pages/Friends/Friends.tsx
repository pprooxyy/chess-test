import React, { useState } from "react";
import "./Friends.css";
import Navbar from "../../Components/Navbar/Navbar";
import Friends from "../../Components/Friends/Friends";

function FriendPage() {
  return (
    <div className="main-page-wrapper">
      <Navbar />
      <Friends />
    </div>
  );
}

export default FriendPage;
