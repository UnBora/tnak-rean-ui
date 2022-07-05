import React from "react";
import { FaEllipsisV, FaFolderMinus } from "react-icons/fa";
import { deleteFolder } from "../swal/Delete";
import EditFolder from "./EditFolder";

export default function Folders({data}) {
  const dataFolder = data;
  return (
    <div className="flex mt-3 mr-4">
      <div className="flex p-2 border border-collapse rounded-md shadow-xl h-max border-bordergray w-60">
        <div className="">
          <FaFolderMinus />
        </div>
        <span className="ml-2 text-sm truncate font-regular">
        {dataFolder.folder_name}
        </span>
        <div className="ml-auto dropdown">
          <label tabindex="0" className="cursor-pointer">
            <FaEllipsisV />
          </label>
          <ul
            tabindex="0"
            className="w-40 p-1 font-medium shadow dropdown-content menu bg-base-100 rounded-box"
          >
            <li>
              <label
                // data-bs-toggle="modal"
                // data-bs-target="#exampleModalScrollable"
                for="my-modal-3"
              >
                Edit
              </label>
            </li>

            <li className="text-red-500">
              <label
                onClick={() => {
                  deleteFolder();
                }}
              >
                Delete
              </label>
            </li>
          </ul>
        </div>
      </div>
      <EditFolder />
    </div>
  );
}
