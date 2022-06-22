import React from "react";
// import {BiUser} from 'react-icons'


export default function Index() {
  return (
    <section className="flex pt-100px mx-100px">
      <div className="grid gap-6 text-right lg:grid-cols-2 ">
        <div className=" sm:px-12 md:px-14">
          <div className="font-extrabold text-Welcome">
            <h1>Welcome to</h1>
            <h1>
              <span className=" text-Welcome text-mygreen">Tnak</span>
              <span className=" text-Welcome text-myorange">Rean</span>
            </h1>
          </div>

          <div className="pb-6 border-b-4 text-Quote pt-14 border-myorange">
            <p>
              “Education is the passport to the future,for tomorrow belongs to
              those who prepare for it today ”
            </p>
          </div>
        </div>
        {/* Login form */}

        <div className="flex flex-col max-w-lg p-6 rounded-md shadow-lg sm:p-10 bg-smoke">
          <div className="object-cover mb-8 text-center rounded-md xl:col-span-3 ">
            <h1 className="flex my-3 text-5xl font-semibold">Login</h1>
            <p className="flex text-xl dark:text-gray-400">
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
                  className="w-full px-3 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="pb-2">
    
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xl hover:underline dark:text-gray-400 p"
                  >
                    Forgot password
                  </a>
            </div>
            <div className="space-y-1">
              <div>

              <button type="button" className="w-full px-8 py-2 space-x-2 text-xl font-semibold text-white rounded-full bg-mygreen">Login</button>
              <h1 className="py-4 font-bold text-center">OR</h1>
              <button type="button" className="w-full px-8 py-2 space-x-2 text-xl font-medium text-black border rounded-full">Continue with Google</button>
              </div>
             
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
// icon use with placeholder


