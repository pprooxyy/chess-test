import React from "react";
import Leaderboard from "../../Components/Leaderboard/Leaderboard";
import Navbar from "../../Components/Navbar/Navbar";

import "./LeaderboardPage.css";

export default function LeaderboardPage() {
  return (
    <div className="leaders-page-wrapper">
      <Navbar />
      <Leaderboard />
    </div>
  );
}
