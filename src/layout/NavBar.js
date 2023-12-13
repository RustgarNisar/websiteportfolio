import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const logoName = "<RN/>";
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <nav>
        <div className="container">
          <div className="nav-left">
            <NavLink className="logo" to="">
              {logoName}
            </NavLink>
          </div>
          <div className="nav-right">
            <NavLink style={navLinkStyles} className="a" to="">
              Home
            </NavLink>
            <NavLink style={navLinkStyles} className="a" to="/education">
              Education
            </NavLink>
            <NavLink style={navLinkStyles} className="a" to="/experience">
              Experience
            </NavLink>
            <NavLink style={navLinkStyles} className="a" to="/contact">
              Contact Me
            </NavLink>
          </div>
          <div
            onClick={handleClick}
            className={isClicked ? "hamburger active" : "hamburger"}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div
          className={`nav-mobile ${
            isClicked ? "active" : ""
          }`}
          style={{
            maxHeight: isClicked ? "500px" : "0",
            overflow: "hidden",
            transition: "max-height 0.5s ease-in-out",
          }}
        >
          <NavLink
            style={navLinkStyles}
            className="a"
            to=""
            onClick={handleClick}
          >
            Home
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className="a"
            to="/education"
            onClick={handleClick}
          >
            Education
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className="a"
            to="/experience"
            onClick={handleClick}
          >
            Experience
          </NavLink>
          <NavLink
            style={navLinkStyles}
            className="a"
            to="/contact"
            onClick={handleClick}
          >
            Contact Me
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
