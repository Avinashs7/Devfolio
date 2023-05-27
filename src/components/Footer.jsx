import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faMeta,
//   faInstagram
// } from "@fortawesome/free-brands-svg-icons";

var year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="white-section" id="footer">
      <div className="container-fluid">
        {/* <FontAwesomeIcon icon={faTwitter} className="fa-2x footer-icon" />
        <FontAwesomeIcon icon={faMeta} className="fa-2x footer-icon" />
        <FontAwesomeIcon icon={faInstagram} className="fa-2x footer-icon" /> */}
        <p>© Copyright {year}</p>
      </div>
    </footer>
  );
}

export default Footer;