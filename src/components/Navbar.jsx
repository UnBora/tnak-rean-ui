import React from "react";
import logo from "../assets/images/logo/TnakRean.png";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import Register from "./Register";
import { useState } from "react";

export default function Navbar() {
  const current = localStorage.getItem("currentTab");
  const [currentTab, setCurrentTab] = useState(current);
  const handleSetCurrentTab = (tabName) => {
    localStorage.setItem("currentTab", tabName);
    setCurrentTab(tabName);
  };
  return (
    <div>
      <header className="border-b border-mygray">
        <div className="justify-center h-mynav mx-100px md:flex md:justify-between">
            <img src={logo} alt="" className="scale-75 " />
          <ul className="flex items-stretch font-semibold space-x-25px text-mygreen ">
            <li className="flex">
              <NavLink
               onClick={() => handleSetCurrentTab("/")}
                rel="noopener noreferrer"
                as={Link}
                to="/"
                className={
                  currentTab === "/"
                    ? "flex items-center font-bold  border-b-2 border-myorange"
                    : "flex items-center font-bold  mylink"
                }
              >
                Login
              </NavLink>
            </li>
         
            <li className="flex">
                <label for="my-modal-3"  className="flex items-center font-bold cursor-pointer mylink">Register</label>
            </li>
            <li className="flex">
              <NavLink
                onClick={() => handleSetCurrentTab("/about")}
                rel="noopener noreferrer"
                as={Link}
                to="/about"
                className={
                  currentTab === "/about"
                    ? "flex items-center font-bold  border-b-2 border-myorange"
                    : "flex items-center font-bold  mylink"
                }
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
