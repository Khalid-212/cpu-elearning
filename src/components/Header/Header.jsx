import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
function Header() {
  return (
    <div>
      <header>
        <nav className="nav">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navItems">
            <Link to="/">
              <div className="navItem">Home</div>
            </Link>
            <Link to="/courses">
              <div className="navItem">Courses</div>
            </Link>
            {/* <Link to="/instruc">
              <div className="navItem">Instructors</div>
            </Link> */}
            <Link to="/">
              <div className="navItem">About us</div>
            </Link>
          </div>
          <a href="/login">
            <div className="signInButton">Login</div>
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
