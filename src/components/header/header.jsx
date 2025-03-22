import React from "react";
import "./header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Transatron</h1>
      <nav className="nav">
        <button className="nav-button">Live Tracking</button>
        <button className="nav-button">UTS </button>
        <button className="nav-button">Seat Allocation</button>
        <button className="nav-button">AI Chatbot</button>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
};

export default Header;
