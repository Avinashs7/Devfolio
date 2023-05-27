import React from "react";

function Header({ onRegisterClick }) {
  return (
    <header>
      <div className="header-right">
        <div className="search-bar-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="search-button">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <button className="register-button" onClick={onRegisterClick}>
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;