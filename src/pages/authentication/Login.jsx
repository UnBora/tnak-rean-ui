import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { getCurrentUser, login } from "../../service/authService";
import Register from "../../components/Register";
import cryptoJs from "crypto-js";
import ForgetPassword from "../../components/ForgetPassword";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let signin = (e) => {
    e.preventDefault();
    let user = {
      username: username,
      password: password,
    };

    login(user).then((user) => {
      console.log("user", user);
      let encryptToken = cryptoJs.AES.encrypt(user.token, password).toString();
      console.log("encryptToken", encryptToken);
      localStorage.setItem("token", encryptToken);

      if (user.role[0] === "Teacher") {
        console.log(user.role[0]);
        navigate("/teacher", { replace: true });
      } else if (user.role[0] === "Student") {
        navigate("/stu-index", { replace: true });
      }
    });
  };

  useEffect(() => {
    const user = getCurrentUser;
    if (user) {
      console.log(user);
    }
  }, []);

  return (
    <div className="grid flex-col mx-auto mt-5 mb-28 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 hero-content lg:flex-row-reverse">
      <div className="col-span-1 md:mx-0 sm:mx-9">
        <div className="text-center lg:text-left sm:mx-auto">
          <div className="text-3xl font-extrabold lg:text-Welcome md:text-4xl">
            <p className="text-black lg:mb-14">Welcome to</p>
            <p className="">
              <span className="text-mygreen">
                Tnak
              </span>
              <span className="text-myorange">
                Rean
              </span>
            </p>
          </div>
          <div className="pb-6 lg:pt-12 md:pt-3 sm:pt-4">
            <p className="leading-relaxed text-black sm:text-md md:text-lg lg:text-Quote">
              “Education is the passport to the future, for tomorrow belongs to
              those who prepare for it today.”
            </p>
            <p className="ml-auto lg:pt-4 md:pt-2 sm:pt-1 myhr w-28"></p>
          </div>
        </div>
      </div>
      <div className="col-span-1 ">
        <div className="flex flex-shrink-0 w-full max-w-md mx-auto shadow-xl card bg-smoke">
          <div className="flex flex-col max-w-md p-6 rounded-sm shadow-sm sm:p-10 ">
            <div className="object-cover mt-0 mb-8 text-center text-black rounded-md xl:col-span-3">
              <p className="flex my-3 font-semibold lg:text-4xl md:text-2xl sm:text-xl">
                Login
              </p>
              <p className="flex pt-1 lg:text-md md:text-base sm:text-sm">
                Don't have an account?
                <label
                  for="my-modal-3"
                  className="flex items-center ml-2 cursor-pointer mylink"
                >
                  Register
                </label>
              </p>
            </div>
            <form
              novalidate=""
              action=""
              className="space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <input
                    name="email"
                    type="email"
                    id="username"
                    placeholder="Username or Email"
                    className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="pb-2">
                  <input
                    type="password"
                    id="password"
                    placeholder={"Password"}
                    className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <label
                  for="my-modal-4"
                  className="text-black cursor-pointer text-md hover:underline"
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
                <p className="py-2 font-semibold text-center text-black">Or</p>

                <button
                  aria-label="Login with Google"
                  type="button"
                  className="flex items-center justify-center w-full px-8 py-2 space-x-2 text-black border rounded-full font-md medium focus:ring-offset-1"
                >
                  <FcGoogle />
                  <p className="font-semibold">Continue with Google</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="flex-shrink-0 w-full max-w-md shadow-xl card bg-smoke ">
            <div className="flex flex-col max-w-md p-6 pt-12 rounded-sm shadow-sm sm:p-10 bg-smoke">
              <div className="object-cover mb-8 text-center rounded-md xl:col-span-3 ">
                <p className="flex my-3 font-semibold lg:text-4xl md:text-2xl sm:text-xl">
                  Login
                </p>
                <p className="flex pt-1 lg:text-md md:text-base sm:text-sm">
                  Don't have an account?
                  <label
                    for="my-modal-3"
                    className="flex items-center ml-2 cursor-pointer mylink"
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
                      name="email"
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
          <div className="lg:max-w-3xl md:max-w-3xl">
            <div className="font-extrabold lg:text-Welcome md:text-5xl sm:text-2xl">
              <p className="">Welcome to</p>
              <p className="">
                <span className="lg:text-Welcome text-mygreen md:text-5xl sm:text-2xl">
                  Tnak
                </span>
                <span className="lg:text-Welcome text-myorange md:text-5xl sm:text-2xl">
                  Rean
                </span>
              </p>
            </div>
            <div className="pb-6 lg:pt-12 lg:text-Quote md:text-xl md:pt-3 sm:pt-4 sm:text-base">
              <p>
                “Education is the passport to the future, for tomorrow belongs
                to those who prepare for it today.”
              </p>
              <p className="lg:pt-4 md:pt-2 sm:pt-1 myhr w-28"></p>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      {/* ========== */}

      <ForgetPassword />
      <Register />
      {/* =============== */}
    </div>
  );
}
