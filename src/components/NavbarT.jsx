import React, { useState } from "react";
import logo from "../assets/images/logo/TnakRean.png";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import "../App.css";
import ProfileCard from "./ProfileCard";
import Notification from "./Notification";
import AccountDropdown from "./AccountDropdown";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { root } from "postcss";
const NavbarT = ({ userData }) => {
  const  user = useSelector((state) => state?. user?.value);
  console.log("user is ",user);
  const  users = useSelector((state) => state?. persistedReducer?.value);
  console.log("users ",users);
  const current = localStorage.getItem("currentTab");
  const [currentTab, setCurrentTab] = useState(current);
  const handleSetCurrentTab = (tabName) => {
    localStorage.setItem("currentTab", tabName);
    setCurrentTab(tabName);
  };
  console.log("====================================");
  console.log("user", user);
  console.log("====================================");

  return (
    <nav className="sticky top-0 z-50 flex w-full bg-white border-b lg:px-20 border-mygray ">
      <div className="justify-between lg:flex navbar-start"> 
        <div className="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52"
          >
            <button className="py-3 ml-3">
              <NavLink
                onClick={() => handleSetCurrentTab("/")}
                rel="noopener noreferrer"
                as={Link}
                to="/teacher"
                className={
                  currentTab === "/"
                    ? "flex items-center font-medium border-b-2 border-myorange"
                    : "flex items-center font-medium mylink"
                }
              >
                Home
              </NavLink>
            </button>
            <button className="py-3 ml-3">
              <NavLink
                class="justify-between"
                onClick={() => handleSetCurrentTab("/classroom")}
                rel="noopener noreferrer"
                as={Link}
                to="/all-classwork"
                className={
                  currentTab === "/classroom"
                    ? "flex items-center font-medium border-b-2 border-myorange"
                    : "flex items-center font-medium mylink"
                }
              >
                Classwork
              </NavLink>
            </button>
            <button className="py-3 ml-3">
              <NavLink
                onClick={() => handleSetCurrentTab("/course")}
                rel="noopener noreferrer"
                as={Link}
                to="/all-course"
                className={
                  currentTab === "/course"
                    ? "flex items-center font-medium border-b-2 border-myorange"
                    : "flex items-center font-medium mylink"
                }
              >
                Course
              </NavLink>
            </button>
          </div>
        </div>
        <div className="hidden w-full lg:flex ">
        <NavLink
          as={Link}
          to="/teacher"
          rel="noopener noreferrer"
          aria-label="Back to homepage"
          className="justify-start text-xl normal-case"
        >
          <img src={logo} alt="logo" className="scale-75" />
        </NavLink>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex ">
        <div class="menu menu-horizontal p-0">
          <label className="flex">
            <NavLink
              onClick={() => handleSetCurrentTab("/")}
              rel="noopener noreferrer"
              as={Link}
              to="/teacher"
              className={
                currentTab === "/"
                  ? "flex items-center font-medium border-b-4 border-myorange "
                  : "flex items-center font-medium mylink"
              }
            >
              Home
            </NavLink>
          </label>
          <label className="flex px-9 ">
            <NavLink
              onClick={() => handleSetCurrentTab("/classroom")}
              rel="noopener noreferrer"
              as={Link}
              to="/all-classwork"
              className={
                currentTab === "/classroom"
                  ? "flex items-center font-medium border-b-4 border-myorange"
                  : "flex items-center font-medium mylink"
              }
            >
              Classwork
            </NavLink>
          </label>
          <label className="flex ">
            <NavLink
              onClick={() => handleSetCurrentTab("/course")}
              rel="noopener noreferrer"
              as={Link}
              to="/all-course"
              className={
                currentTab === "/course"
                  ? "flex items-center font-medium border-b-4 border-myorange"
                  : "flex items-center font-medium mylink"
              }
            >
              Course
            </NavLink>
          </label>
        </div>
      </div>
      <div class="navbar-end flex justify-end">
        <div className="items-center flex-shrink-0 space-x-5 lg:flex">
          <div className="dropdown dropdown-left">
            <label tabindex="0" 
            className="flex m-1 cursor-pointer ">
              <div className="avatar online">
                <div className="rounded-full w-9 ">
                  <img src={users.img} alt="profile" />
                </div>
              </div>
              <p className="mt-2 font-medium">{userData?.name}</p>
            </label>
            <div
              tabindex="0"
              className="p-1 dropdown-content rounded-box "
            >
              <ProfileCard data={users} />
            </div>
          </div>
          <div className="dropdown dropdown-left">
            <label tabindex="0">
              <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
            </label>
            <div
              tabindex="0"
              className="p-1 overflow-y-auto border rounded-xl h-80 dropdown-content mt-9 scrollbar-thumb-zinc-400 bg-smoke scrollbar-none"
            >
              <Notification />
            </div>
          </div>
          <div className="dropdown dropdown-left ">
            <label tabindex="0">
              <MdOutlineArrowDropDownCircle className="text-2xl cursor-pointer" />
            </label>
            <div
              tabindex="0"
              className="p-1 mt-8 border dropdown-content rounded-box bg-smoke"
            >
              <AccountDropdown data={users} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarT;
