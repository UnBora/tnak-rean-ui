import React from "react";
import logo from "../assets/images/logo/TnakRean.png";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import Register from "./Register";

export default function Navbar() {
  return (
    <div>
      <header className="border-b border-mygray">
        <div className="justify-center h-mynav mx-100px md:flex md:justify-between">
            <img src={logo} alt="" className="scale-75 " />
          <ul className="flex items-stretch font-semibold space-x-25px text-mygreen ">
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                as={Link}
                to="/"
                className="flex items-center mylink"
              >
                Login
              </NavLink>
            </li>
            <li className="flex">
                <label for="my-modal-3"  className="flex items-center cursor-pointer mylink">Register</label>
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
          </ul>
        </div>
      </header>
      <Register/>
      {/* {isShowingRegister ? <Register /> : "this is false"}  old popup*/}
    </div>
  );
}
