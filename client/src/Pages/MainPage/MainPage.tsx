import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MainPlaySection from "../../Main-page-components/MainPlaySection/MainPlaySection";

import "./MainPage.css";
import MainPuzzles from "../../Main-page-components/MainPuzzles/MainPuzzles";
import MainNews from "../../Main-page-components/MainNews/MainNews";

function MainPage() {
  return (
    <>
      <Navbar />
      <div className="main-page-wrapper">
        <MainPlaySection />
        <MainPuzzles />
        <MainNews />
      </div>
    </>
  );
}

export default MainPage;
