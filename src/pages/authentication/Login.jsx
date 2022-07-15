import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { login } from "../../service/authService";
import Register from "../../components/Register";
import ForgetPassword from "../../components/ForgetPassword";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cryptoDecrypt, encryptToken } from "../../utils/tokenEnDe";
import { getUserSlice } from "../../slices/users/userSlice";
import { showLoading } from "../../components/swal/Loading";
import Navbar from "../../components/Navbar";
import OneSignal from "react-onesignal"
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

// import Navbartest from "../../components/Navbartest";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("user is required"),
    password: Yup.string().required("password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState, setError } = useForm({
    formOptions,
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    
    login(data).then((u) => {console.log('data', u);
      dispatch(getUserSlice(u));
      if (u?.id !== undefined) {
        console.log(
          'asdasdas aaSDAsD ;Q:We:qw:E d'
        );
        OneSignal.setExternalUserId(u?.id);
        dispatch(getUserSlice(u));
        if (u.role[0] === "Teacher") {
          console.log(u?.role[0]);
          console.log(
            "decryp: " + cryptoDecrypt(localStorage.getItem("token"), "Phanith")
          );
          navigate("/teacher", { replace: true });
        } else if (u?.role[0] === "Student") {
          navigate("/student", { replace: true });
        }
      }else{
        setError("password", {
              type: "custom",
              message: "please check your password or username",
            });
      }
      // if (u?.status === 403) {
      //   setError("userName", {
      //     type: "custom",
      //     message: "please check your password or username",
      //   });
      // } else if (u?.status !== 500 && u?.id !== null) {
      //   OneSignal.setExternalUserId(u?.id);
      //   if (u.role[0] === "Teacher") {
      //     console.log(u.role[0]);
      //     console.log(
      //       "decryp: " + cryptoDecrypt(localStorage.getItem("token"), "Phanith")
      //     );
      //     navigate("/teacher", { replace: true });
      //   } else if (u.role[0] === "Student") {
      //     navigate("/student", { replace: true });
      //   }
      // }
    }).then((u) => {
      try {
        
      } catch (error) {
        console.log(error);
      }
    })
      .then(showLoading);
  }

  const user = useSelector((state) => {
    console.log("Here are the value of the state : ", state);
  });

  // let signin = (e) => {
  //   e.preventDefault();
  //   let user = {
  //     username: username,
  //     password: password,
  //   };

  // login(user)
  //   .then((u) => {
  //     // OneSignal.setExternalUserId(u.id);
  //     if (u.role[0] === "Teacher") {
  //       console.log(u.role[0]);
  //       console.log(
  //         "decryp: " + cryptoDecrypt(localStorage.getItem("token"), "Phanith")
  //       );
  //       navigate("/teacher", { replace: true });
  //     } else if (u.role[0] === "Student") {
  //       navigate("/student", { replace: true });
  //     }

  //     try {
  //       dispatch(getUserSlice(u));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })
  //   .then(showLoading);
  // try {
  //   dispatch(getUserSlice(u));
  // } catch (error) {
  //   console.log(error);
  // }
  // };

  // useEffect(() => {
  //   const user = getCurrentUser;
  //   if (user) {
  //     if (user.role[0] === "Teacher") {
  //       return <Navigate to="/teacher" />;
  //     } else if (user.role[0] === "Student") {
  //       return <Navigate to="/stu-index" />;
  //     }
  //   }
  // }, []);

  return (
    <div>
      <Navbar />
      {/* <Navbartest/> */}
      <div className="grid flex-col mx-auto mt-5 mb-28 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 hero-content lg:flex-row-reverse">
        <div className="col-span-1 md:mx-0 sm:mx-9">
          <div className="text-center lg:text-left sm:mx-auto">
            <div className="font-extrabold lg:text-[90px] text-5xl">
              <p className="text-black">Welcome to</p>
              <span className="text-mygreen">Tnak</span>
              <span className="text-myorange">Rean</span>
            </div>
            <div className="mt-0 ">
              <p className="text-lg leading-relaxed text-black lg:mt-7 lg:text-2xl">
                “Education is the passport to the future, for tomorrow belongs
                to those who prepare for it today.”
              </p>
              <p className="w-full sm:mr-auto lg:pt-4 md:pt-2 sm:pt-1 myhr md:m-auto lg:ml-auto "></p>
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-0 sm:mt-3">
          <div className="flex flex-shrink-0 w-full max-w-md mx-auto shadow-lg card bg-smoke">
            <div className="flex flex-col max-w-md p-6 rounded-sm shadow-sm sm:p-10 ">
              <div className="object-cover mt-0 mb-8 text-center text-black rounded-md xl:col-span-3">
                <p className="flex my-3 text-3xl font-semibold">Login</p>
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
                    <input {...register("username")} autoFocus
                      type="text"
                      id="username"
                      placeholder="Username or Email"
                      className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none"
                    // onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="ml-4 text-sm invalid-feedback text-myred ">
                      {errors.username?.message}
                    </div>
                  </div>
                  <div className="pb-2">
                    <input {...register("password")}
                      type="password"
                      id="password"
                      placeholder={"Password"}
                      className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none"
                    />
                    <div className="ml-4 text-sm invalid-feedback text-myred mb-3">
                      {errors.password?.message}
                    </div>
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
                    onClick={handleSubmit(onSubmit)}
                  >
                    Login
                  </button>
                  {/* <p className="py-2 font-semibold text-center text-black">
                    Or
                  </p> */}

                  {/* <button
                    aria-label="Login with Google"
                    type="button"
                    className="flex items-center justify-center w-full px-8 py-2 space-x-2 text-black border rounded-full font-md medium focus:ring-offset-1"
                  >
                    <FcGoogle />
                    <p className="font-semibold">Continue with Google</p>
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>

        <ForgetPassword />
        <Register />
        {/* =============== */}
      </div>
    </div>
  );
}
