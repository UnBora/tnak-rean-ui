import React from "react";
import logo from "../assets/images/logo/TnakRean.png";
import "../App.css";

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
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center mylink"
              >
                Home
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center mylink"
              >
                About
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center mylink"
              >
                Register
              </a>
            </li>
          </ul>

        </div>
      </header>
    </div>
  );
}
