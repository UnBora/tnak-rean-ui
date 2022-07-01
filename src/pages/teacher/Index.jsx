import React, { useState } from "react";
export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let signin=()=>{
    let user={
      username:username,
      password:password,
      
    }
    Login(user).then(()=>{console.log();})
  }
  return (
    <section className="flex justify-between my-5 mx-100px">
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

        <div className="flex flex-col max-w-md p-6 rounded-md shadow-lg sm:p-10 bg-smoke">
          <div className="object-cover mb-8 text-center rounded-md xl:col-span-3 ">
            <h1 className="flex my-3 text-4xl font-semibold">Login</h1>
            <p className="flex text-md ">
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
                  onChange={(e) => setUsername(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Username or Email"
                  className="w-full px-3 py-2 border rounded-md "
                />
              </div>
              <div className="pb-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md "
                />
              </div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-md hover:underline "
              >
                Forgot password
              </a>
            </div>

            <div>
              <button
              onClick={signin}
                type="button"
                className="w-full px-8 py-2 space-x-2 font-semibold text-white rounded-full text-md bg-mygreen"
              >
                Login
              </button>
              <h1 className="py-2 font-bold text-center">OR</h1>
              <button
                type="button"
                className="w-full px-8 py-2 space-x-2 text-black border rounded-full font-md medium text-"
              >
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
// icon use with placeholder
