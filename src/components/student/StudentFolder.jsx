import React from "react";
import { FaFolderMinus } from "react-icons/fa";

export default function StudentFolder() {
  return (
    <div className="flex mt-2 mb-3 mr-4">
      <button className="flex p-2 border border-collapse rounded-md shadow-xl h-max border-bordergray w-60">
        <div className="">
          <FaFolderMinus />
        </div>
        <span className="ml-2 text-sm truncate font-regular">
          HTML Lorem ipsum dolor
        </span>
      </button>
    </div>
  );
}
