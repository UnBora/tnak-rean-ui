import React from 'react'

function EditFolder() {
  return (
    <div>      
    {/* Add new folder */}
  <input type="checkbox" id="my-modal-3" className="modal-toggle" />
  <div className="modal modal-bottom sm:modal-middle">
    <div className="relative max-w-sm p-6 rounded-md bg-smoke">
      <label
        for="my-modal-3"
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
      <div className="modal-action">
        <label
          for="my-modal-3"
          className="px-4 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
        >
          Add
        </label>
      </div>
    </div>
  </div>
  {/* ========== */}
  </div>
  )
}

export default EditFolder