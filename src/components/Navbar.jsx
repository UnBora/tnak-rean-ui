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
    <nav className="z-50 flex w-full bg-white border-b lg:px-20 border-mygray sm:px-52 ">
      <div className="w-full">
       <div className="flex justify-between"> 
       <div className="">
          <img src={logo} alt="logo" className="scale-75 " />
        </div>
      
        <div className="flex items-stretch font-semibold space-x-25px text-mygreen ">
            <label className="flex">
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
            </label>
            <div className="flex">
              <label
                for="my-modal-3"
                className="flex items-center font-bold cursor-pointer mylink"
              >
                Register
              </label>
            </div>
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
          </div>
        </div>
        <Register />
      </div>
    </nav>
  );
}
