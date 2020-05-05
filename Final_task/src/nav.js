import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-wrapper green darken-3">
      <div className="container">
        <a href="/" className="brand-logo">
          Yantraksh Logistics
        </a>
        <ul className="right">
          <li>
            <a href="/">Player</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
          <li>
            <a href="/">Admin</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
