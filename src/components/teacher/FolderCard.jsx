import React from "react";
import { FaEllipsisV, FaFolderMinus } from "react-icons/fa";
import { deleteFolder } from "../swal/Delete";
import EditFolder from "./EditFolder";

export default function FolderCard({data}) {
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
          <div
            tabindex="0"
            className="w-24 text-sm font-medium shadow w-z-20 dropdown-content menu bg-base-100 rounded-box"
          >
            <label className="py-2 pl-4 cursor-pointer hover:rounded-t-lg hover:bg-gray-200">
              <label for="my-modal-edit-folder" className="cursor-pointer">
                Edit
              </label>
            </label>
            <label className="py-2 pl-4 text-red-500 border-t hover:rounded-b-lg hover:bg-gray-200">
              <button onClick={() => deleteFolder()}>Delete</button>
            </label>
          </div>
        </div>
      </div>
      <EditFolder />
    </div>
  );
}
