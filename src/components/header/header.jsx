import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Transatron</h1>
      <nav className="nav">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/seat-allocation" className="nav-button">Seat Allocation</Link>
        <Link to="/live-tracking" className="nav-button">Live Tracking</Link>
        <Link to="/uts" className="nav-button">UTS</Link>
        <Link to="/ai-chatbot" className="nav-button">AI Chatbot</Link>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
};

export default Header;
