import React from "react";

export default function DeactivateAccount() {
  return (
    <div className="h-auto p-5 bg-white border-gray-200 rounded-lg shadow-md max-w-l dark:bg-gray-200 dark:border-gray-700">
      <form className="" action="#">
        <h4 className="text-2xl font-medium text-gray-900 dark:text-white">
          Deactivate your account
        </h4>
        <p className="mt-1 text-sm text-gray-400 font-montserrat">
          Your account will be disable and the other user cannot search or view
          your profile
        </p>
        <span className="mt-4 before:content-['*'] after:ml-0.5 before:text-red-500 block text-base font-medium text-slate-700">
          Please enter your password to confirm account deactivate
        </span>
        <div>
          <div className="grid grid-cols-2 mt-3">
            <div className="col-span-1">
              <label className="block">
                <span className="block text-xs font-medium text-slate-700">
                  PASSWORD
                </span>
                <input
                  type="password"
                  name="password"
                  className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                  placeholder="••••••••"
                />
              </label>
            </div>
            <div className="col-span-1 ml-1">
              <label className="block">
                <span className="block text-xs font-medium text-slate-700">
                COMFIRM PASSWORD
                </span>
                <input
                  type="password"
                  name="password"
                  className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                  placeholder="••••••••"
                />
              </label>
            </div>
          
          </div>

          <div className="mt-5 mb-4">
            <button
              type="button"
              className="py-2 text-sm font-medium text-center text-white bg-red-500 rounded-full shadow-md w-28"
            >
              Deactivate
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
