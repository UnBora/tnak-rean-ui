import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaUser, FaClipboardList } from "react-icons/fa";
import { MdWork, MdLibraryBooks } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import AllStudent from "./AllStudent";
import StudentRequest from "./StudentRequest";
import Classwork from "./ResultList";
import { Result } from "postcss";
import ResultList from "./ResultList";

export default function ManageClass() {
  return (
    <div className="flex mx-100px">
      <div className="bg-white dark:bg-gray-800 ">
        <div className="flex sm:flex-row ">
          <div className="w-72 ">
            <div className="flex items-center justify-start mt-10">
              <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                PP classroom
              </span>
            </div>
            <p className="mt-2 myhr"></p>
            <nav className="mt-8 ">
              <NavLink
                className="flex items-center p-2 my-1 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 "
                href="#"
                as={Link}
                to="/"
              >
                <FaUserFriends className="text-lg" />
                <span className="mx-4 text-lg font-normal">All student</span>
                <span className="flex-grow text-right"></span>
              </NavLink>

              <NavLink
                className="flex items-center p-2 my-1 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 "
                href="#"
                as={Link}
                to="#"
              >
                <FaUser />
                <span className="mx-4 text-lg font-normal">Request</span>
                <span className="flex-grow text-right">
                  <button
                    type="button"
                    className="w-6 h-6 text-xs text-white bg-red-500 rounded-full"
                  >
                    <span className="p-1">7</span>
                  </button>
                </span>
              </NavLink>
              <NavLink
                className="flex items-center p-2 text-gray-800 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-100 dark:bg-gray-600"
              
                as={Link}
                to="#"
              >
                <MdWork />
                <span className="mx-4 text-lg font-normal">Classwork</span>
                <span className="flex-grow text-right"></span>
              </NavLink>
              <NavLink
                className="flex items-center p-2 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 "
                href="#"
                as={Link}
                to="#"
              >
                <GiBookCover />
                <span className="mx-4 text-lg font-normal">Course</span>
                <span className="flex-grow text-right"></span>
              </NavLink>
              <NavLink
                className="flex items-center p-2 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 "
                href="#"
                as={Link}
                to="#"
              >
                <FaClipboardList />
                <span className="mx-4 text-lg font-normal">Result</span>
                <span className="flex-grow text-right"></span>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-10 ml-20 ">
        <ResultList/>
      </div>
    </div>
  );
}
