import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { login } from "../../service/authService";
import Register from "../../components/Register";
import cryptoJs from 'crypto-js'

export default function Login() {
  const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let signin =(e)=>{
        e.preventDefault()
        let user={
            username:username,
            password:password,
        }
        login(user).then((token)=>{
            console.log("token",token);
            let encryptToken= cryptoJs.AES.encrypt(token,password).toString()
            console.log("encryptToken",encryptToken);
            localStorage.setItem("token",encryptToken)
        })
    }

  return (
    <div>
      <div className="hero">
        <div className="flex-col hero-content lg:flex-row-reverse ">
          <div className="flex-shrink-0 w-full max-w-md shadow-xl card bg-smoke ">
            <div className="flex flex-col max-w-md p-6 pt-12 rounded-sm shadow-sm sm:p-10 bg-smoke">
              <div className="object-cover mb-8 text-center rounded-md xl:col-span-3 ">
                <h1 className="flex my-3 text-4xl font-semibold">Login</h1>
                <p className="flex pt-1 text-md ">
                  Don't have an account?
                  <label
                    for="my-modal-3"
                    className="flex items-center ml-3 cursor-pointer mylink"
                  >
                    Register
                  </label>
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
                      id="username"
                      placeholder="Username or Email"
                      className="w-full px-3 py-2 border rounded-md "
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="pb-2">
                    <input
                      type="password"
                      id="password"
                      placeholder={"Password"}
                      className="w-full px-3 py-2 border rounded-md "
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <label
                    for="my-modal-4"
                    className="cursor-pointer text-md hover:underline "
                  >
                    Forgot password
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-2 space-x-2 font-semibold text-white rounded-full text-md bg-mygreen"
                    onClick={signin}
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

      <Register />

      {/* =============== */}
    </div>
  );
}
