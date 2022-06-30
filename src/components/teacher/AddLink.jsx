import React from "react";

const AddLink = () => {
  return (
    <div>
      {/* Add link */}
      <input type="checkbox" id="my-modal-link" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class=" bg-smoke max-w-sm p-6 rounded-md relative">
          <label
            for="my-modal-link"
            class="btn btn-xs btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg mb-2">Add link</h3>

          <div className="col-span-full sm:col-span-3">
            <input
              id="username"
              type="text"
              placeholder="Enter folder name"
              className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring focus:ring-opacity-75 focus:mygreen dark:border-gray-700 focus:outline-none focus:bg-white"
            />
          </div>
          <div class="modal-action">
            <label
              for="my-modal-link"
              class="border-none rounded-full btn btn-sm px-4 bg-mygreen hover:bg-myhovergreen"
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
