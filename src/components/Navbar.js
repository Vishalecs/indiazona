import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ selectedOption }) => {
  const [language, setLanguage] = useState("EN");
  const [username] = useState("Admin");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <h1>{selectedOption ? selectedOption : 'Welcome!'}</h1>
      </div>

      <div className="navbar-right">
        <div className="notification-icon">
          <img
            src="../image/Group3.png"
            alt="Notification Bell"
            width={50}
            height={50}
          />
        </div>

        <select
          className="language-select"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="EN">ENG</option>
          <option value="FR">FRN</option>
          <option value="ES">ESP</option>
        </select>

        <div className="user-profile">
          <div className="user-logo">
            <img src="../image/logo.png" alt="User Logo" />
          </div>
          <div className="user-info">
            <p>Name</p>
            <p>{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
