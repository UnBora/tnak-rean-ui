import React from "react";
import { NavLink } from "react-router-dom";
import ViewComment from "./ViewComment";
import { FaEllipsisV } from "react-icons/fa";
import { deleteClasswork, deleteFile } from "../swal/Delete";

export default function FilesCard() {
  return (
    <div className="flex flex-wrap h-40 p-4 mb-5 mr-8 border border-collapse rounded-md shadow-xl border-bordergray bg-smoke w-[265px]">
      <div className="text-lg font-semibold">React JS</div>
      <div className="mt-1 ml-auto dropdown">
        <label tabindex="0" className="cursor-pointer">
          <FaEllipsisV />
        </label>
        <div
          tabindex="0"
          class="w-24 text-sm font-medium shadow w-z-20 dropdown-content menu bg-base-100 rounded-box"
        >
          <label for="my-modal-2" className="py-2 pl-4 cursor-pointer hover:bg-gray-200 hover:rounded-t-lg">Edit</label>
          <label className="py-2 pl-4 text-red-500 border-t cursor-pointer hover:rounded-b-lg hover:bg-gray-200"
            onClick={() => {
              deleteFile();
            }}
          >
            Delete
          </label>
          {/* <li>
              <label for="my-modal-2">Edit</label>
            </li> */}

          {/* <li className="text-red-500">
              <label onClick={()=>{deleteClasswork()}}>Delete</label>
            </li> */}
        </div>
      </div>
      <div className="mt-2 text-xs font-medium line-clamp-2">
        React JS Chapter1: talk about basic React JS prepared
      </div>
      <div className="flex mt-4">
        <NavLink
          to="/viewfile"
          type="link"
          className="px-4 py-1 text-base text-center text-white rounded shadow-md bg-mygreen font-regular h-max"
        >
          View
        </NavLink>
        <div className="mt-2 ml-auto text-sm underline font-regular dropdown dropdown-right">
          <label
            tabindex="0"
            className="ml-16 underline dropdown dropdown-right"
          >
            <span>2</span> comments
          </label>
          <div tabindex="0" className="mt-2 dropdown-content rounded-box">
            <ViewComment />
          </div>
        </div>
      </div>
    </div>
  );
}
