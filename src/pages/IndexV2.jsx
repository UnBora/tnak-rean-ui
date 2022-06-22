import React from "react";
import { FcGoogle } from "react-icons/fc";
import Register from "../components/Register";
import logo from "../assets/images/logo/TnakRean2.png";
import RegisterV2 from "../components/RegisterV2";

export default function IndexV2() {
  return (
    <div>
      <div class="hero ">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <div class="card flex-shrink-0 w-full max-w-md shadow-xl bg-smoke ">
            <div className="flex flex-col max-w-md p-6 pt-12 rounded-sm shadow-sm sm:p-10 bg-smoke">
              <div className="object-cover mb-8 text-center rounded-md xl:col-span-3 ">
                <h1 className="flex my-3 text-4xl font-semibold">Login</h1>
                <p className="flex pt-1 text-md dark:text-gray-400">
                  Don't have an account? Register
                </p>
              </div>
              <form
                novalidate=""
                action=""
                className="space-y-12 ng-untouched ng-pristine ng-valid "
              >
                <div className="space-y-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Username or Email"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <div className="pb-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder={
                       "Password"
                      }
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-md hover:underline dark:text-gray-400"
                  >
                    Forgot password
                  </a>
                </div>

                <div>
                  <button
                    type="button"
                    className="w-full px-8 py-2 space-x-2 font-semibold text-white rounded-full text-md bg-mygreen"
                  >
                    Login
                  </button>
                  <p className="py-2 font-bold text-center">Or</p>

                  <button
                    aria-label="Login with Google"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-2 space-x-2 text-black border rounded-full font-md medium focus:ring-offset-1"
                  >
                    <FcGoogle />
                    <p>Continue with Google</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="max-w-3xl">
            <div className="font-extrabold text-Welcome">
              <h1>Welcome to</h1>
              <h1>
                <span className=" text-Welcome text-mygreen">Tnak</span>
                <span className=" text-Welcome text-myorange">Rean</span>
              </h1>
            </div>

            <div className="pt-12 pb-6 text-Quote ">
              <p>
                “Education is the passport to the future,for tomorrow belongs to
                those who prepare for it today ”
              </p>
              <p className="pt-4 myhr w-28"></p>
            </div>
          </div>
        </div>
      </div>
      {/* ========== */}

      <RegisterV2 />
      {/* =============== */}
    </div>
  );
}
