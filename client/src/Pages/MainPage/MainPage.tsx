import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MainPlaySection from "../../Components/MainPlaySection/MainPlaySection";

import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page-wrapper">
      <Navbar />
      <MainPlaySection />
    </div>
  );
}

export default MainPage;
