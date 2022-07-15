import React from "react";
import { FaEllipsisV, FaFolderMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchallClassworkFolder, removeFolder } from "../../service/folderService";
import { useDispatch } from "react-redux/es/exports";
import EditFolder from "./EditFolder";
import { fetchAllfolderSlice } from "../../slices/folders/folderSlice";

export default function FolderCard({ data, link, onDelete }) {
  const dataFolder = data;
  const dispatch = useDispatch();  

  return (
    <div className="flex mt-3 mr-4">
      <div className="flex p-2 border border-collapse rounded-md shadow-md cursor-pointer h-max border-bordergray w-60">
        <Link
          to={{ pathname: link }}
          className="flex flex-row flex-grow flex-nowrap"
        >
          <div className="">
            <FaFolderMinus />
          </div>
          <div className="block ml-2 text-sm truncate font-regular ">
            {dataFolder.folder_name}
          </div>
        </Link>
        <div className="flex-shrink ml-auto dropdown">
          <label tabindex="0" className="cursor-pointer">
            <FaEllipsisV />
          </label>
          <div
            tabindex="0"
            className="w-24 text-sm font-medium shadow w-z-20 dropdown-content menu bg-base-100 rounded-box "
          >
            <label
              for="my-modal-edit-folder"
              className="py-2 pl-4 cursor-pointer hover:bg-gray-200 hover:rounded-t-lg"
            >
              Edit
            </label>
            <label
              className="py-2 pl-4 text-red-500 border-t cursor-pointer hover:rounded-b-lg hover:bg-gray-200"
              onClick={() => {
                onDelete(dataFolder.folder_id);
              }}
            >
              Delete
            </label>
          </div>
        </div>
      </div>

      <EditFolder />
    </div>
  );
}
