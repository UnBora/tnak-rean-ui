import React, { useState } from "react";
import logo from "../../assets/images/logo/TnakRean.png";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import "../../App.css";
import ClassCard from "./ClassCard";
import ProfileCard from "../ProfileCard";
import Notification from "../Notification";
import AccountDropdown from "../AccountDropdown";
import { Link, NavLink } from "react-router-dom";
const NavbarT = () => {
  const current = localStorage.getItem("currentTab");
  const [currentTab, setCurrentTab] = useState(current);

  const handleSetCurrentTab = (tabName) => {
    localStorage.setItem("currentTab", tabName);
    setCurrentTab(tabName);
  };
  return (
    <div>
      <header className="border-b border-mygray ">
        <div className="flex justify-between mx-100px h-mynav">
          <NavLink
            as={Link}
            to="/"
            rel="noopener noreferrer"
            aria-label="Back to homepage"
            className=""
          >
            <img src={logo} alt="" className="scale-75 " />
          </NavLink>
          <ul className="items-stretch hidden space-x-10 lg:flex">
            <li className="flex mylink">
              <NavLink
                onClick={() => handleSetCurrentTab("/")}
                rel="noopener noreferrer"
                as={Link}
                to="/"
                className={
                  currentTab === "/"
                    ? "flex items-center font-medium  border-b-2 border-myorange"
                    : "flex items-center font-medium  mylink"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="flex">
              <NavLink
              onClick={() => handleSetCurrentTab("/classroom")}
                rel="noopener noreferrer"
                as={Link}
                to="/classwork"
                className={
                  currentTab === "/classroom"
                    ? "flex items-center font-medium  border-b-2 border-myorange"
                    : "flex items-center font-medium  mylink"
                }
              >
                Classwork
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                onClick={() => handleSetCurrentTab("/course")}
                rel="noopener noreferrer"
                as={Link}
                to="/course"
                className={
                  currentTab === "/course"
                    ? "flex items-center font-medium  border-b-2 border-myorange"
                    : "flex items-center font-medium  mylink"
                }
              >
                Course
              </NavLink>
            </li>
          </ul>

          <div className="items-center flex-shrink-0 hidden space-x-5 lg:flex">
            {/* Profile */}
            <div className="dropdown dropdown-left dropdown-hover ">
              <label tabindex="0" className="flex m-1 space-x-4">
                <div className="avatar online">
                  <div className="rounded-full w-9 ">
                    <img src="https://api.lorem.space/image/face?hash=28212" />
                  </div>
                </div>
                <p className="mt-2 font-medium">Dayan</p>
              </label>
              <div
                tabindex="0"
                className="p-1 dropdown-content mt-9 rounded-box "
              >
                <ProfileCard />
              </div>
            </div>
            {/* ================== */}

            <div className="dropdown dropdown-left">
              <label tabindex="0">
                <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
              </label>
              <div
                tabindex="0"
                className="p-1 dropdown-content mt-9 rounded-box "
              >
                <Notification />
              </div>
            </div>

            <div className="dropdown dropdown-left">
              <label tabindex="0">
                <MdOutlineArrowDropDownCircle className="text-2xl" />
              </label>
              <div
                tabindex="0"
                className="p-1 dropdown-content mt-9 rounded-box "
              >
                <AccountDropdown />
              </div>
            </div>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavbarT;
