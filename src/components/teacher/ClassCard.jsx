import React from "react";
import "../../App.css";
import { FiMoreVertical } from "react-icons/fi";
import { ImUsers } from "react-icons/im";
import EditClass from "./EditClass";
import { classDelete } from "../swal/Delete";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
export default function ClassCard({ data }) {
  // delete class alert
  // ==================
  const dataClass = data;

  return (
    <div className="text-black">
        <div className="flex justify-end">
          <div
            tabindex="0"
            className="absolute z-10 flex m-5 border rounded-full cursor-pointer dropdown dropdown-right w-7 h-7 text-myygreen "
          >
            <label className="mt-1 ml-1 cursor-pointer bg-none">
              <FiMoreVertical className="text-white"/>
            </label>
            <div
              tabindex="0"
              className="w-24 text-sm font-medium shadow w-z-20 dropdown-content menu bg-base-100 rounded-box"
            >
              <p className="py-2 pl-4">
                <label for="my-modal-2">Edit</label>
              </p>
              <p className="py-2 pl-4 text-red-500 border-t">
                <button onClick={() => classDelete()}>Delete</button>
              </p>
            </div>
          </div>
        </div>
        <Link
          to="/classroom/students"
          className="w-48 h-32 m-2 shadow-2xl card md:w-72 md:h-48"
        >
          <img
            src="https://i.pinimg.com/564x/99/e3/e5/99e3e56b1b95911f9f9d4a8e0a469312.jpg"
            className="absolute z-0 object-cover w-full h-full" alt="Class"
          />
          <div className="z-20 h-10 mt-auto bg-black md:h-16 bg-opacity-30">
            <div className="flex justify-between px-1 mt-2 md:px-3 md:mt-5 ">
              <h1 className="text-lg font-medium text-white">
                {dataClass.class_name}
              </h1>
              <div className="flex text-white">
                <span className="pr-2">20</span>
                <ImUsers className="mt-1" />
              </div>
            </div>
          </div>
        </Link>
        <EditClass />
      </div>
  );
}
