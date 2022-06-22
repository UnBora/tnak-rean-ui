import React from "react";
import logo from "../assets/images/logo/TnakRean.png";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Register from "./Register";

export default function Navbar() {
  // const [isShowingRegister, setIsShowingRegister] = useState(false); old pop up

  const current = localStorage.getItem("currentTab");
  const [currentTab, setCurrentTab] = useState(current);

  const handleSetCurrentTab = (tabName) => {
    localStorage.setItem("currentTab", tabName);
    setCurrentTab(tabName);
  };



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
                onClick={() => handleSetCurrentTab("home")}
                rel="noopener noreferrer"
                as={Link}
                to="/"
                className={
                  currentTab === "home"
                    ? "flex items-center border-b-2 border-myorange"
                    : "flex items-center mylink"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                onClick={() => handleSetCurrentTab("about")}
                rel="noopener noreferrer"
                as={Link}
                to="/about"
                className={
                  currentTab === "about"
                    ? "flex items-center border-b-2 border-myorange"
                    : "flex items-center mylink"
                }
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
