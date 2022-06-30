import React from "react";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/images/logo/TnakRean2.png";
import swal from "sweetalert";
export default function Register() {
  const register = () => {
    swal("register successfully", "", "success");
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal  ">
        <div class="card flex-shrink-0  shadow-xl bg-smoke  ">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2 z-10"
          >
            ✕
          </label>

          {/* Register card */}
          <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form
              novalidate=""
              action=""
              className="flex flex-col max-w-lg mx-auto space-y-2 ng-untouched ng-pristine ng-valid"
            >
              <div className="flex justify-center">
                <img
                  src={logo}
                  className="w-12 h-12 bg-gray-200 rounded-full"
                />
              </div>
              <h1 className="text-2xl font-semibold text-center ">
                <span className=" text-mygreen">Tnak</span>
                <span className=" text-myorange">Rean</span>
              </h1>
              <h1 className="text-2xl font-semibold ">Registration</h1>
              <p className="w-full pt-1 myhr"></p>
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                <div className="grid grid-cols-6 gap-4 col-span-full md:col-span-4">
                  {/* Name */}
                  <div className="col-span-full sm:col-span-3">
                    <label for="name" className="text-sm font-medium">
                      Name <span className="text-red-600 ">*</span>
                    </label>
                    <input
                      id="name"
                      type="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring focus:ring-opacity-75 f focus:outline-none focus:bg-white"
                    />
                  </div>
                  {/* Password */}
                  <div className="col-span-full sm:col-span-3">
                    <label for="username" className="text-sm font-medium">
                      Username <span className="text-red-600 ">*</span>
                    </label>
                    <input
                      id="username"
                      type="username"
                      placeholder="Enter Username"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring focus:ring-opacity-75 0 focus:outline-none focus:bg-white"
                    />
                  </div>
                  {/* Gender */}
                  <div className="col-span-full sm:col-span-3">
                    <label for="gender" className="text-sm font-medium">
                      Gender <span className="text-red-600 ">*</span>
                    </label>
                    <select
                      id="gender"
                      type="text"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring focus:ring-opacity-75 focus:outline-none focus:bg-white"
                    >
                      {" "}
                      <option className="p-6 text-xl ">Male</option>
                      <option className="p-6 text-xl ">Female</option>
                    </select>
                  </div>
                  {/* Email */}

                  <div className="col-span-full sm:col-span-3">
                    <label for="username" className="text-sm font-medium">
                      Email <span className="text-red-600 ">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring focus:ring-opacity-75 focus:outline-none focus:bg-white"
                    />
                  </div>

                  {/* Class */}
                  <div className="col-span-full sm:col-span-3">
                    <label for="school" className="text-sm font-medium">
                      School <span className="text-red-600 ">*</span>
                    </label>
                    <select
                      id="school"
                      type="text"
                      placeholder="Username"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring focus:ring-opacity-75 focus:outline-none focus:bg-white"
                    >
                      {" "}
                      <option className="p-6 text-xl ">KSHRD</option>
                      <option className="p-6 text-xl ">RUPP</option>
                      <option className="p-6 text-xl ">Sectec</option>
                    </select>
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="username" className="text-sm font-medium">
                      Classroom <span className="text-red-600 ">*</span>
                    </label>
                    <select
                      id="username"
                      type="text"
                      placeholder="Username"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring focus:ring-opacity-75 focus:outline-none focus:bg-white"
                    >
                      {" "}
                      <option className="p-6 text-xl ">Phnom Penh</option>
                      <option className="p-6 text-xl ">M11</option>
                      <option className="p-6 text-xl ">SR</option>
                    </select>
                  </div>

                  {/* Password */}
                  <div className="col-span-full sm:col-span-3">
                    <label for="password" className="text-sm font-medium">
                      Password <span className="text-red-600 ">*</span>
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring focus:ring-opacity-75 focus:outline-none focus:bg-white"
                    />
                  </div>
                  {/* cf password */}
                  <div className="col-span-full sm:col-span-3">
                    <label for="password" className="text-sm font-medium">
                      Confirm password <span className="text-red-600 ">*</span>
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Confirm password"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring focus:ring-opacity-75 focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
            <div className="space-y-1">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="py-1 space-x-2 text-xl font-medium text-white rounded-full bg-mygreen w-350px"
                  onClick={() => register()}
                >
                  Register
                </button>
              </div>
              <h2 className="py-1 font-semibold text-center">OR</h2>
              <div className="flex justify-center font-medium">
                <button
                  aria-label="Login with Google"
                  type="button"
                  className="flex items-center justify-center p-4 py-1 space-x-2 text-xl border rounded-full w-350px focus:ring-offset-1"
                >
                  <FcGoogle />
                  <p>Login with Google</p>
                </button>
              </div>
            </div>
          </section>
          {/* End card */}
        </div>
      </div>
    </div>
  );
}
