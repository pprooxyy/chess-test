import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import StartPage from "./Pages/StartPage/StartPage";
import MainPage from "./Pages/MainPage/MainPage";
import Profile from "./Pages/profile/Profile";

import FriendPage from "./Pages/Friends/Friends";

import HistoryPage from "./Pages/History/HistoryPage";
import LeaderboardPage from "./Pages/LeaderboardPage/LeaderboardPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/friends" element={<FriendPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/leaders" element={<LeaderboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
