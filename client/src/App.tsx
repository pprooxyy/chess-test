import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import History from "./Pages/History/History";
import { Route, Routes } from "react-router-dom";
import StartPage from "./Pages/StartPage/StartPage";
import MainPage from "./Pages/MainPage/MainPage";
import Profile from "./Pages/profile/Profile";
import FriendPage from "./Pages/Friends/Friends";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/friends" element={<FriendPage/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
