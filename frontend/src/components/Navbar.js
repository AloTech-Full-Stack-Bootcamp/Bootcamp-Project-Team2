import React from "react";
import "./Navbar.css";
import {  Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__header">
        <h3>Admin Panel</h3>
      </div>

      <div className="navbar__link">
        <h5>
          <Link className="text_link" to="/">
            Home
          </Link>
        </h5>
        <h5>
          <Link className="text_link" to="/process">
            Process
          </Link>
        </h5>
      </div>
    </div>
  );
}

export default Navbar;
