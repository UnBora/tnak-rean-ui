import React from "react";
import { FaEllipsisV, FaFolderMinus } from "react-icons/fa";
import { deleteFolder } from "../swal/Delete";
import EditFolder from "./EditFolder";

export default function Folders() {
  return (
    <div className="flex mt-3 mr-4">
      <div className="flex p-2 border border-collapse rounded-md shadow-xl h-max border-bordergray w-60">
        <div className="">
          <FaFolderMinus />
        </div>
        <span className="ml-2 text-sm truncate font-regular">
          HTML numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
          praesentium optio, eaque rerum! Provident similique accusantium nemo
          autem. Veritatis obcaecati tenetur iure eius earum ut molestias
          architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!
          Impedit sit
        </span>
        <div className="ml-auto dropdown">
          <label tabindex="0" className="cursor-pointer">
            <FaEllipsisV />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-medium"
          >
            <li>
              <label for="my-modal-1">Edit</label>
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
    </div>
  );
}
