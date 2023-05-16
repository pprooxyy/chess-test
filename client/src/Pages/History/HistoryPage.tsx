import React from "react";
import History from "../../Components/History/History";
import Navbar from "../../Components/Navbar/Navbar";

import "./HistoryPage.css";

export default function HistoryPage() {
  return (
    <div className="history-page-wrapper">
      <Navbar />
      <History />
    </div>
  );
}
