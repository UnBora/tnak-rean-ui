import React, { useState } from "react";
import { BsPerson, BsPersonX } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiTrashAlt } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";
import NavbarT from "../components/NavbarT";
import { useSelector } from "react-redux";
import StudentNavBar from "../components/StudentNavbar";

export default function AccountSetting({data}) {
  const role = useSelector((state) => state.persistedReducer.value.role[0]);
  // const  user = useSelector((state) => state?. user?.value);
  const  users = useSelector((state) => state?. persistedReducer?.value);
  console.log(role);
  console.log("userdata",users);
  console.log(data);
  const [isActive, setIsActive] = useState(1);
  return (
    <div>
      {role === "Teacher" ? (
        <NavbarT />
      ) : role === "Student" ? (
        <StudentNavBar />
      ) : (
        <h1>asd</h1>
      )}

      <div class="mx-36 mt-9 mb-40">
        <div class="">
          <div className="text-3xl font-semibold ">
            Account Setting
          </div>
          <div className="mt-1 text-xl font-light ">
            Change your profile and account setting
          </div>
        </div>
        <div className="grid mt-12 lg:grid-cols-12 lg:flex sm:grid-cols-1 ">
          {/* sidebar */}
          <div className="col-span-5">
            <div className="flex">
              <img
                className="flex object-cover w-20 h-20 rounded-full jsutify-left"
                src={
                  users?.img !== null
                  ? users?.img
                  : "https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png"
              }
              alt="profile"
              />
              <div className="mt-3 ml-5 ">
                <p className="text-2xl font-medium">{users?.name}</p>
                <label class="block"></label>

                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 "
                  >
                    <span>Choose profile photo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
            <nav className="mt-8">
              <NavLink
                onClick={() => {
                  setIsActive(1);
                }}
                as={Link}
                to="/setting/account"
                className={({ isActive }) => [
                  "flex items-center p-2 my-1 transition-colors duration-200 rounded-lg ",
                  isActive ? " text-white shadow-lg w-full bg-mygreen" : null,
                ]}
              >
                <BsPerson className="text-lg" />
                <span className="mx-4 text-lg font-normal">Account</span>
                <span className="flex-grow text-right"></span>
              </NavLink>

              <NavLink
                onClick={() => {
                  setIsActive(1);
                }}
                as={Link}
                to="/setting/change-password"
                className={({ isActive }) => [
                  "flex items-center p-2 my-1 transition-colors duration-200 rounded-lg ",
                  isActive ? " text-white shadow-lg w-full bg-mygreen" : null,
                ]}
              >
                <RiLockPasswordLine />
                <span className="mx-4 text-lg font-normal">Password</span>
                <span className="flex-grow text-right"></span>
              </NavLink>
              <NavLink
                onClick={() => {
                  setIsActive(1);
                }}
                as={Link}
                to="/setting/deactivate-account"
                className={({ isActive }) => [
                  "flex items-center p-2 my-1 transition-colors duration-200 rounded-lg ",
                  isActive ? " text-white shadow-lg w-full bg-mygreen" : null,
                ]}
              >
                <BsPersonX />
                <span className="mx-4 text-lg font-normal">
                  Deactivate Account
                </span>
                <span className="flex-grow text-right"></span>
              </NavLink>
              <NavLink
                onClick={() => {
                  setIsActive(1);
                }}
                as={Link}
                to="/setting/delete-account"
                className={({ isActive }) => [
                  "flex items-center p-2 my-1 transition-colors duration-200 rounded-lg ",
                  isActive ? " text-white shadow-lg w-full bg-mygreen" : null,
                ]}
              >
                <BiTrashAlt />
                <span className="mx-4 text-lg font-normal">Delete Account</span>
                <span className="flex-grow text-right"></span>
              </NavLink>
            </nav>
          </div>

          {/* div right component */}
          <div class="col-span-7 ml-14">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
