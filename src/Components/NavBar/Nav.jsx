// import React from 'react'
import "./Nav.css";
import logo from "./logo.png";
import { BiMenuAltRight } from "react-icons/bi";
const Nav = () => {
  return (
    <>
    {/* Desktop view */}
      <nav className="desktop-view ">
        <ul className="desk-ul disp-flex">
          <li
            style={{
              width: "25vw",
            }}
          >
            <img
              src={logo}
              alt={"LOGO"}
              style={{
                width: "8rem",
                paddingLeft: "1rem",
              }}
            />
          </li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Technology</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>EN</li>
        </ul>
      </nav>
    {/* Mobile view  */}
      <nav className="mobile-view">
        <ul className="disp-flex">
          <li
            style={{
              width: "30vw",
            }}
          >
            <img
              src={logo}
              alt={"LOGO"}
              style={{
                width: "8rem",
                paddingLeft: "1rem",
              }}
            />
          </li>
          <li>
            <BiMenuAltRight
              style={{
                fontSize: "2rem",
              }}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
