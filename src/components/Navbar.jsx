import React from "react";
import logo from "../assets/images/logo/TnakRean.png";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Register from "./Register";

export default function Navbar() {
  // const [isShowingRegister, setIsShowingRegister] = useState(false); old pop up

  return (
    <div>
      <header className="border-b border-mygray">
        <div className="flex justify-between h-mynav mx-100px">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className=""
          >
            <img src={logo} alt="" className="scale-75 " />
          </a>
          <ul className="items-stretch hidden font-semibold space-x-25px md:flex text-mygreen">
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                as={Link}
                to="/index"
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
              <button
                rel="noopener noreferrer"
                className="flex items-center mylink"
              >
                <label for="my-modal-3">Register</label>
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* {isShowingRegister ? <Register /> : "this is false"}  old popup*/}
    </div>
  );
}
