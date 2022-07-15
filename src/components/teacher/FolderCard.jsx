import React from "react";
import { FaEllipsisV, FaFolderMinus } from "react-icons/fa";
import { useDispatch } from "react-redux/es/exports";
import EditFolder from "./EditFolder";

//use
export default function FolderCard({ data }) {
  const dispatch = useDispatch();
  function deleteFolder(folderId) {
    
     dispatch(deleteFolder(folderId));
    
  }
  const dataFolder = data;
  
  return (
    <div className="flex mt-3 mr-4">
      <button className="flex p-2 border border-collapse rounded-md shadow-md cursor-pointer h-max border-bordergray w-60">
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
              deleteFolder(dataFolder.id);
            }}
          >
            Delete
          </label>
        </div>
        </div>
      </button>
      <EditFolder />
    </div>
    
  );
}
