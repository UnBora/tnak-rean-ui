import React from "react";
import logo from "../assets/images/logo/TnakRean.png";
import "../App.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <div>
      <header className="border-b border-mygray">
        <div className="justify-center h-mynav mx-100px md:flex md:justify-between">
          <a
            rel="noopener noreferrer"
            aria-label="Back to homepage"
            className=""
          >
            <img src={logo} alt="" className="scale-75 " />
          </a>
          <ul className="flex items-stretch font-semibold space-x-25px text-mygreen ">
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                as={Link}
                to="/login"
                className="flex items-center mylink"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                as={Link}
                to="/about"
                className="flex items-center mylink"
              >
                About
              </NavLink>
            </li>
            <li className="flex">
           
                <label for="my-modal-3"  className="flex items-center cursor-pointer mylink">Register</label>
           
            </li>
          </ul>
        </div>
      </header>

      {/* {isShowingRegister ? <Register /> : "this is false"}  old popup*/}
    </div>
  );
}
