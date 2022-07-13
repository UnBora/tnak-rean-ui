import React from "react";

const AddLink = () => {

  


  return (
    <div>
      {/* Add link */}
      <input type="checkbox" id="my-modal-link" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="relative max-w-sm p-6 rounded-md bg-smoke">
          <label
            for="my-modal-link"
            className="absolute btn btn-xs btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="mb-2 text-lg font-bold">Add link</h3>

          <div className="col-span-full sm:col-span-3">
            <input
              id="username"
              type="text"
              placeholder="Add link"
              className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:mygreen focus:outline-none focus:bg-white"
            />
          </div>
          <div className="modal-action">
            <label
              for="my-modal-link"
              className="px-4 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
            >
              Add
            </label>
          </div>
        </div>
      </div>
      {/* ========== */}
    </div>
  );
};

export default AddLink;
