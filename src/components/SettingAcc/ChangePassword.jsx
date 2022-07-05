import React from "react";
import { changepassword } from "../swal/Success";

export default function () {
  return (
    <div className="h-auto p-5 bg-white border-gray-200 rounded-lg shadow-md w-80 ">
      <form className="" action="#">
        <h4 className="mb-6 text-2xl font-medium text-gray-900 ">
          Change your password
        </h4>
        <div className="">
          <label
            for="password"
            className="block mb-2 text-xs font-medium text-gray-900 "
          >
            OLD PASSWORD
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
            placeholder="••••••••"
            required
          ></input>
        </div>
        <div className="mt-4">
          <label
            for="password"
            className="block mb-2 text-xs font-medium text-white-900 "
          >
            NEW PASSWORD
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
            required
          ></input>
        </div>
        <div className="mt-4">
          <label
            for="password"
            class="block mb-2 text-xs font-medium text-gray-900 "
          >
            COMFIRM NEW PASSWORD
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
            required
          ></input>
        </div>

        <div className="mt-5 mb-3">
          <button
            type="button"
            className="w-20 py-2 text-sm font-semibold text-center text-white rounded-full shadow-md bg-mygreen"
            onClick={()=>{changepassword()}}
          >
            Save
          </button>
          <button
            type="button"
            className="w-20 py-2 ml-3 text-sm font-semibold text-center text-white rounded-full shadow-md bg-myorange"
          >
            Cancel
          </button>
        </div>
      </form></div>
  );
}
