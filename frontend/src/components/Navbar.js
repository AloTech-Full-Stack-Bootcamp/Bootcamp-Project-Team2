import React from "react";
import "./Navbar.css";
import {  Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__header">
        <h2>Admin Panel</h2>
      </div>

      <div className="navbar__link">
        <h4>
          <Link className="text_link" to="/">
            Home
          </Link>
        </h4>
        <h4>
          <Link className="text_link" to="/process">
            Process
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default Navbar;
