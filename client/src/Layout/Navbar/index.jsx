import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss"

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbarContents">
          <div className="Logo">
            Nitro
            <span>.</span>
          </div>
          <div className="Bars">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>About Us</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Services</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Testimonials</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/addpage"}>Add page</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
