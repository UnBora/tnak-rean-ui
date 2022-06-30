import React from "react";

export default function ViewComment() {
  return (
    <div className="z-50 p-3 bg-white border shadow-md border-mygray w-max card">
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
          <label className="block text-sm">Noted with thanks teacher</label>
        </div>
      </div>
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
            Teacher did you have an Chapter2 slide teacher.
          </label>
        </div>
      </div>
      {/* <div className="flex">
        <img
          className="flex object-cover rounded-full h-9 w-9 jsutify-left"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
        <div class="flex justify-start items-center relative ml-2">
          <input
            class="text-sm leading-none text-left text-gray-600 px-4 py-2 w-max border rounded-full border-gray-300  outline-none my-2"
            type="text"
            placeholder="Comment"
          />
          <svg
            class="absolute right-1 z-10 cursor-pointer  p-1 h-6 w-6 rounded-full text-white"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <svg
              class="h-8 w-8 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />{" "}
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </svg>
        </div>
      </div> */}
    </div>
  );
}