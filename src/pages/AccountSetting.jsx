import React from "react";
import { BsPerson, BsPersonX } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiTrashAlt } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function AccountSetting() {
  return (
    <div class="mx-36 mt-9 mb-40 ">
      {/* const style = { color : "white", fontSize: "1.5em"} */}
      <div class="">
        <div className="text-3xl font-semibold">Account Setting</div>
        <div className="mt-3 text-xl font-light ">
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
              <label class="block">
                {/* <span class="sr-only">Choose profile photo</span> */}
                {/* <input
                  type="file"
                  class="block w-full text-sm 
                  file:bg-white file:border-0 file:text-sm file:font-semibold file:text-blue-600  hover:file:bg-violet-100"
                /> */}
               {/* <input id="file-upload" name="file-upload" type="file" className="text-xs sr-only " />Choose profile photo */}
              </label>
              
              <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Choose profile photo</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                        
                        </div>
                        
              
              
            </div>
          </div>
          <div className="mt-10 ml-6 text-xl">
            <div className="flex">
              <NavLink
                className="mr-5 text-AccountIcon text-mygreen"
                as={Link}
                to="/setting/account"
              >
                <BsPerson />
              </NavLink>
              <NavLink
                className="text-lg font-normal focus:font-medium "
                as={Link}
                to="/setting/account"
              >
                Account
              </NavLink>
            </div>
            <div className="flex mt-5">
              <NavLink
                className="mr-5 text-AccountIcon"
                as={Link}
                to="/setting/change-password"
              >
                <RiLockPasswordLine />
              </NavLink>
              <NavLink
                className="text-lg font-normal focus:font-medium"
                as={Link}
                to="/setting/change-password"
              >
                Password
              </NavLink>
            </div>
            <div className="flex mt-5">
              <NavLink
                className="ml-1 mr-4 text-AccountIcon"
                as={Link}
                to="/setting/deactivate-account"
              >
                <BsPersonX />
              </NavLink>
              <NavLink
                className="text-lg font-normal focus:font-medium"
                as={Link}
                to="/setting/deactivate-account"
              >
                Deactivate Account
              </NavLink>
            </div>
            <div className="flex mt-5">
              <NavLink
                className="mr-5 text-AccountIcon focus:text-mygreen"
                as={Link}
                to="/setting/delete-account"
              >
                <BiTrashAlt />
              </NavLink>
              <NavLink
                className="text-lg font-normal focus:font-medium"
                as={Link}
                to="/setting/delete-account"
              >
                Delete Account
              </NavLink>
            </div>
          </div>
        </div>
        {/* div right component */}
        <div class="col-span-7 ml-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
