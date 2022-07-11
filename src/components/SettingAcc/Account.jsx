import React from "react";
import { accountupdate } from "../swal/Success";

export default function Account() {
  return (
    <div className="w-auto h-auto p-4 border-gray-200 rounded-lg shadow-md ">
     <form className="" action="#">
      <h4 className="text-2xl font-medium text-gray-900 ">
        General info
      </h4>
      <div className="grid w-full lg:grid-cols-2 sm:grid-cols-14 ">
        <label className="block mt-4 ">
          <span className="block mb-2 text-xs font-medium text-slate-700">
            FULL NAME
          </span>
          <input
            type="name"
            name="name"
            className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
            placeholder="Dayan"
          />
        </label>
        <div>
          <label className="block mt-4 ml-2">
            <span className="block mb-2 text-xs font-medium text-slate-700">
              GENDER
            </span>
            <select
              id="gender"
              className="block w-full p-2 text-sm bg-white border rounded-md shadow-sm border-slate-300 text-slate-400 focus:ring-mygreen focus:border-mygreen "
            >
              <option>Male</option>
              <option>Female</option>
            </select>
           
          </label>
        </div>
        <label className="block mt-4">
          <span className="block mb-2 text-xs font-medium text-slate-700">
            EMAIL
          </span>
          <input
            type="email"
            name="email"
            className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
            placeholder="dayan@gmail.com"
          />
        </label>
        <label className="block mt-4 ml-2">
          <span className="block mb-2 text-xs font-medium text-slate-700">
            USERNAME
          </span>
          <input
            type="username"
            name="username"
            className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
            placeholder="@dayan"
          />
        </label>
      </div>
      <div class="mt-5 mb-3">
        <button
          type="button"
          class="py-2 text-white bg-mygreen w-20 text-center text-sm font-medium shadow-md rounded-full "
          onClick={()=>{accountupdate()}}
        >
          Save
        </button>
        <button
          type="button"
          class="py-2 text-white bg-myorange w-20 text-center text-sm font-semibold shadow-md rounded-full ml-3"
          
        >
          Cancel
        </button>
      </div>
      </form>
    </div>
  );
}
