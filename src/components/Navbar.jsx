import React from "react";
import logo from "../assets/images/logo/TnakRean.png";
import "../App.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header className="border-b border-mygray">
        <div className="flex justify-between h-mynav mx-100px">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img src={logo} alt="" />
          </a>

          <ul className="items-stretch hidden font-semibold space-x-50px md:flex text-mygreen">
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                as={Link} to="/index"
                className="flex items-center mylink"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                as={Link} to="/about"
                className="flex items-center mylink"
              >
                About
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                as={Link} to="/register"
                className="flex items-center mylink"
              >
                Register
              </NavLink>
            </li>
          </ul>

        </div>
      </header>
    </div>
  );
}
