import React from "react";
import "./App.css";
import StartPage from "./Pages/StartPage/StartPage";
import Navbar from "./Components/Navbar/Navbar";
import History from "./Pages/History";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StartPage />
      <History />
    </div>
  );
}



export default App;
