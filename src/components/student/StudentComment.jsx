import React from "react";

export default function StudentComment() {
  return (
    <div className="z-50 p-3 bg-white border shadow-md border-mygray w-max card">
      {/* <div class="dropdown dropdown-right">
  <label tabindex="0" class="m-1">Click</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div> */}
      <div className="flex mb-2">
        <img
          className="flex object-cover rounded-full h-9 w-9 jsutify-left"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />

        <div className="ml-2">
          <div className="flex">
            <p className="font-medium"> Dayan</p>
            <p className="mt-1 ml-3 text-xs">just now</p>
          </div>
          <label className="block text-sm">
            Noted with thanks teacher
          </label>
        </div>
      </div>
      <div className="flex mb-2">
        <img
          className="flex object-cover rounded-full h-9 w-9 jsutify-left"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />

        <div className="ml-2 ">
          <div className="flex">
            <p className="font-medium"> Dayan</p>
            <p className="mt-1 ml-auto text-xs">just now</p>
          </div>
          <label className="block text-sm">Teacher did you have an Chapter2 slide teacher.</label>
        </div>
      </div>
      <div className="flex">
        <img
          className="flex object-cover rounded-full h-9 w-9 jsutify-left"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <div class="mb-3 xl:w-96">
          <input
            type="text"
            class="w-max
          form-control
          block
          px-2
          py-1
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          ml-2
          rounded-3xl
          transition
          ease-in-out m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
            id="exampleFormControlInput4"
            placeholder="Form control sm"
          />
        </div>
      </div>
    </div>
  );
}
