import React from "react";
import { FaEllipsisV, FaFolderMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { removeFolder } from "../../service/folderService";
import { deleteFolder } from "../swal/Delete";
import EditFolder from "./EditFolder";

//use
// export default function FolderCard({ data, link }) {
//   const dataFolder = data;
//   return (
//     <div className="flex mt-3 mr-4">
//       <Link to={{pathname: link}} className="flex p-2 border border-collapse rounded-md shadow-md cursor-pointer h-max border-bordergray w-60">
//         <div className="">
//           <FaFolderMinus />
//         </div>
//         <span className="ml-2 text-sm truncate font-regular">
//           {dataFolder.folder_name}
//         </span>
//       </Link>
//       <div className="ml-auto dropdown">
//         <label tabindex="0" className="cursor-pointer">
//           <FaEllipsisV />
//         </label>
//         <div
//           tabindex="0"
//           className="w-24 text-sm font-medium shadow w-z-20 dropdown-content menu bg-base-100 rounded-box "
//         >
//           <label
//             for="my-modal-edit-folder"
//             className="py-2 pl-4 cursor-pointer hover:bg-gray-200 hover:rounded-t-lg"
//           >
//             Edit
//           </label>
//           <label
//             className="py-2 pl-4 text-red-500 border-t cursor-pointer hover:rounded-b-lg hover:bg-gray-200"
//             onClick={() => {
//               deleteFolder();
//             }}
//           >
//             Delete
//           </label>
//         </div>
//       </div>
//       <EditFolder />
//     </div>
//   );
// }

// testing: fix css

export default function FolderCard({ data, link }) {
  const dataFolder = data;

  function onDeleteFolder(id) {
    removeFolder(id);
  } 
  return (
    <div className="flex mt-3 mr-4">
      <div className="flex p-2 border border-collapse rounded-md shadow-md cursor-pointer h-max border-bordergray w-60">
        <Link to={{ pathname: link }} className="flex flex-row flex-grow flex-nowrap">
          <div className="">
            <FaFolderMinus />
          </div>
          <span className="ml-2 text-sm truncate font-regular">
            {dataFolder.folder_name}
          </span>
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
                onDeleteFolder(dataFolder.folder_id)
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
