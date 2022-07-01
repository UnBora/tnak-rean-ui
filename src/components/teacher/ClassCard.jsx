import React from "react";
import "../../App.css";
import { FiMoreVertical } from "react-icons/fi";
import { ImUsers } from "react-icons/im";
import EditClass from "./EditClass";
import { classDelete } from "../swal/Delete";
import { Link } from "react-router-dom";
export default function ClassCard() {
  // delete class alert
  // ==================
  return (
    <div>
      <div>
        <div className="flex justify-end">
        <div
          tabindex="0"
          className="absolute z-10 flex m-5 border rounded-full cursor-pointer dropdown dropdown-right w-7 h-7 text-myygreen "
        >
          <label className="mt-1 ml-1 cursor-pointer">
            <FiMoreVertical className="text-white" />
          </label>
          <ul
            tabindex="0"
            className="z-20 p-1 font-medium shadow dropdown-content menu bg-base-100 rounded-box w-52 0 "
          >
            <li className="focus:bg-mygreen">
              <label for="my-modal-2">Edit</label>
            </li>
            <li className="text-red-500">
              <button onClick={() => classDelete()}>Delete</button>
            </li>
          </ul>
        </div>
        </div>
        <Link
          to="/classroom/students"
          className="w-48 h-32 m-2 shadow-2xl card md:w-72 md:h-48 "
        >
          <img
            src="https://i.pinimg.com/564x/99/e3/e5/99e3e56b1b95911f9f9d4a8e0a469312.jpg"
            className="absolute z-0 object-cover w-full h-full"
          />
          <div className="z-20 h-10 mt-auto bg-black md:h-16 bg-opacity-30">
            <div className="flex justify-between px-1 mt-2 md:px-3 md:mt-5">
              <h1 className="text-lg font-semibold text-white ">PP classroom</h1>
              <div className="flex text-white">
                <span className="pr-2">20</span>
                <ImUsers className="mt-1" />
              </div>
            </div>
          </div>
        </Link>
      </div>
      <EditClass />
    </div>
  );
}
