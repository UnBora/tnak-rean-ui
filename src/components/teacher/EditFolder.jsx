import React from "react";

const EditFolder = () => {
  return (
    <div>
      {/* Add new folder */}
      <input type="checkbox" id="my-modal-edit-folder" className="modal-toggle" />
      {/* modal-bottom sm:modal-middle */}
      <div className="modal ">
        <div className="relative max-w-sm p-6 rounded-md bg-smoke">
          <label
            for="my-modal-edit-folder"
            className="absolute btn btn-xs btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="mb-2 text-lg font-bold">Edit Folder</h3>

          <div className="col-span-full sm:col-span-3">
            <input
              id="folder"
              type="text"
              placeholder="Edit folder name"
              className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring focus:ring-opacity-75 focus:mygreen focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full mb-6 md:w-full md:mb-0 ">
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
          </div>
          <div className="modal-action">
            <label
              for="my-modal-edit-folder"
              className="px-4 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
            >
              Save
            </label>
          </div>
        </div>
      </div>
      {/* ========== */}
    </div>
  );
};

export default EditFolder;
