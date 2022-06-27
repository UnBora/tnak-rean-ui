import React from "react";

export default function DeleteAccount() {
  return (
      <div className="h-auto p-5 bg-white border-gray-200 rounded-lg shadow-md max-w-l dark:bg-gray-200 dark:border-gray-700">
        <form className="" action="#">
          <h4 className="text-2xl font-medium text-gray-900 dark:text-white">
            Delete your account
          </h4>
          <p className="mt-1 text-sm text-gray-400 font-montserrat">
            Your account will be deleted permanently and you won't be able to
            recovery and lost data.
          </p>
          <span className="mt-4 before:content-['*'] after:ml-0.5 before:text-red-500 block text-base font-medium text-slate-700">
            Please enter your password to confirm account deletion
          </span>
          <div>
            <div className="flex flex-row mt-4">
              <div className="col-span-1 ">
                <label className="block">
                  <span className="block text-xs font-medium text-slate-700">
                    PASSWORD
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
                    placeholder="••••••••"
                  />
                </label>
              </div>
              <div className="col-span-1 ml-3 ">
                <label className="block">
                  <span className="block text-xs font-medium text-slate-700">
                    COMFIRM PASSWORD
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
                    placeholder="••••••••"
                  />
                </label>
              </div>
            </div>
            <div className="mt-5 mb-4">
              <button
                type="button"
                className="w-24 py-2 text-sm font-medium text-center text-white rounded-full shadow-md bg-mygreen "
              >
                Delete
              </button>
              <button
                type="button"
                className="w-20 py-2 ml-4 text-sm font-semibold text-center text-white rounded-full shadow-md bg-mygreen"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    
  );
}
