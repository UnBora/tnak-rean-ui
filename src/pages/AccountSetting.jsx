import React from "react";
import { BsPerson, BsPersonX } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiTrashAlt } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function AccountSetting() {
  return (
    <div class="mx-36 mt-9 mb-40">
      <div class="">
        <div className="text-3xl font-semibold">Account Setting</div>
        <div className="mt-3 text-xl font-light">
          Change your profile and account setting
        </div>
      </div>
      <div className="grid mt-12 lg:grid-cols-12 lg:flex sm:grid-cols-1 ">
        {/* sidebar */}
        <div className="col-span-5">
          <div className="flex">
            <img
              className="flex object-cover w-20 h-20 rounded-full jsutify-left"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
            <div className="mt-3 ml-5 ">
              <p className="text-2xl font-medium"> Dayan</p>
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
              className="flex items-center p-2 my-1 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 focus:bg-gray-200"
              as={Link}
              to="/setting/account"
            >
              <BsPerson className="text-lg" />
              <span className="mx-4 text-lg font-normal">Account</span>
              <span className="flex-grow text-right"></span>
            </NavLink>

            <NavLink
              className="flex items-center p-2 my-1 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 "
              as={Link}
              to="/setting/change-password"
            >
              <RiLockPasswordLine />
              <span className="mx-4 text-lg font-normal">Password</span>
              <span className="flex-grow text-right"></span>
            </NavLink>
            <NavLink
              className="flex items-center p-2 text-gray-800 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-100 dark:bg-gray-600"
              as={Link}
              to="/setting/deactivate-account"
            >
              <BsPersonX />
              <span className="mx-4 text-lg font-normal">
                Deactivate Account
              </span>
              <span className="flex-grow text-right"></span>
            </NavLink>
            <NavLink
              className="flex items-center p-2 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 "
              as={Link}
              to="/setting/delete-account"
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
  );
}
