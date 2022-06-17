import React from "react";
import logo from "../assets/images/logo/TnakRean2.png";

export default function () {
  return (
    <div className="pt-6 ">
      <form class=" w-full bg-smoke px-14 pb-16 shadow-lg max-w-730px max-h">
        {/* Closing button */}
        <div className="flex justify-end">
          <button
            type="button"
            class="flex justify-end rounded-md   text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* End closing button */}
        <div className="flex justify-center">
          <img src={logo} className="w-20 h-20" />
        </div>

        <h1 className="pb-6 text-3xl font-semibold text-center">
          <span className=" text-mygreen">Tnak</span>
          <span className=" text-myorange">Rean</span>
        </h1>
        <h1 className="text-3xl font-semibold divide-x">Registeration</h1>
        
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700   mb-2 text-lg font-medium"
              for="grid-first-name"
            >
              Name <span className="text-red-600 ">*</span>
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700  border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-lg font-medium mb-2"
              for="grid-state"
            >
              Gender <span className="text-red-600 ">*</span>
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Male</option>
                <option>Female</option>
              
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-lg font-medium mb-2"
              for="grid-password"
            >
              Password <span className="text-red-600 ">*</span>
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-lg font-medium mb-2"
              for="grid-first-name"
            >
              Username <span className="text-red-600 ">*</span>
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="@Username"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-lg font-medium mb-2"
              for="grid-state"
            >
              Classroom <span className="text-red-600 ">*</span>
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Phnom Penh</option>
                <option>M11</option>
                <option>SR</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Login Button */}
        <div className="space-y-1">
          <div className="flex justify-center">
            <button
              type="button"
              className="py-2 space-x-2 text-xl font-semibold text-white rounded-full bg-mygreen w-420px"
            >
              Login
            </button>
            </div>
            <h1 className="py-4 font-bold text-center">OR</h1>
            <div className="flex justify-center">
            <button
              type="button"
              className="py-2 mx-auto space-x-2 text-xl font-medium text-black border rounded-full w-420px"
            >
              Continue with Google
            </button>
            </div>
         
          </div>
        
        {/* End button */}
      </form>
    </div>
  );
}
