import React, { useState } from "react";

function CreateFolder() {
  const [isActive, setIsActive] = useState(1);
  return (
    <div>
      {/* Add new folder */}
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="relative max-w-sm p-6 rounded-md bg-smoke">
          <label
            for="my-modal-1"
            className="absolute btn btn-xs btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="mb-1 text-lg font-bold">New Folder</h3>
          <div className="col-span-full sm:col-span-3">
            <input
              id="folder"
              type="text"
              placeholder="Enter folder name"
              className="w-full px-4 py-2 mb-4 leading-tight text-gray-700 bg-white border rounded-md shadow-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
            />
          </div>
          <div class="w-full">
    </div>
          {/* dropdown select class */}
          {/* <div className="w-full mb-6 md:w-full md:mb-0 ">
            <p className="font-medium ">Classroom</p>
            <select
              id="class"
              type="text"
              className="w-full px-2 py-3 text-sm leading-tight text-gray-700 bg-white border rounded-md shadow-md focus:ring-1 focus:ring-mygreen focus:outline-none"
            >
              <option className="p-6 text-sm">All classes</option>
              <option className="p-6 text-sm">PP</option>
              <option className="p-6 text-sm">M5</option>
              <option className="p-6 text-sm">BTB</option>
            </select>
          </div> */}
          <div className="modal-action">
            <label
              for="my-modal-1"
              className="px-4 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
            >
              Create
            </label>
          </div>
        </div>
      </div>
      {/* ========== */}
    </div>
  );
}

export default CreateFolder;
