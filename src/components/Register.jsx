import React from "react";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/images/logo/TnakRean2.png";
import swal from "sweetalert";
// import { useState } from "react";
export default function Register() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(4, "Name must be at least 6 characters")
      .matches(/^[a-zA-Z0-9 ]+$/, "Only alphabets are allowed for Name "),
    userName: Yup.string()
      .required("Username is required")
      .min(4)
      .matches(/^[a-zA-Z0-9 ]+$/, "Only alphabets are allowed for Username "),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState, setError } =
    useForm(formOptions);
  const { errors } = formState;
  const [classes, setClass] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    studentRegister(data).then((r) => {
      console.log("reponse message: ", r.data);
      if (r.data?.username === "exist") {
        setError("userName", {
          type: "custom",
          message: r.responseMsg,
        });
      } else if (r.data?.email === "exist") {
        setError("email", {
          type: "custom",
          message: r.responseMsg,
        });
      }

      if (r.responseCode === 200) {
        swal("register successfully", "", "success");
      } else {
        
      }
    });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="text-black modal">
        <div className="flex-shrink-0 mb-10 shadow-xl card bg-smoke">
          <label
            for="my-modal-3"
            className="absolute z-10 btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>

          {/* Register card */}
          <section className="p-6 ">
            <form
              novalidate=""
              action=""
              className="flex flex-col max-w-lg mx-auto space-y-2 ng-untouched ng-pristine ng-valid"
            >
              <div className="flex justify-center">
                <img
                  src={logo}
                  className="w-12 h-12 bg-gray-200 rounded-full"
                  alt="logo TnakRean"
                />
              </div>
              <h1 className="text-2xl font-semibold text-center ">
                <span className=" text-mygreen">Tnak</span>
                <span className=" text-myorange">Rean</span>
              </h1>
              <h1 className="text-2xl font-semibold ">Registration</h1>
              <p className="w-full pt-1 myhr"></p>
              <fieldset className="grid grid-cols-4 gap-6 py-4 ">
                <div className="grid grid-cols-6 gap-4 col-span-full md:col-span-4">
                  {/* Name */}
                  <div className="col-span-full sm:col-span-3">
                    <label for="name" className="text-sm font-medium">
                      Name <span className="text-red-600 ">*</span>
                    </label>
                    <input
                      id="name"
                      type="name"
                      placeholder="Enter name"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
                    />
                  </div>
                  {/* Username*/}
                  <div className="col-span-full sm:col-span-3">
                    <label for="username" className="text-sm font-medium">
                      Username <span className="text-red-600 ">*</span>
                    </label>
                    <input
                      id="username"
                      type="username"
                      placeholder="Enter username"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen 0 focus:outline-none focus:bg-white"
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
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
                    >
                      <option className="p-6 text-md">Male</option>
                      <option className="p-6 text-md">Female</option>
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
                      placeholder="Enter email"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
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
                      placeholder="School"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
                    >
                      <option className="p-6 text-md">KSHRD</option>
                      <option className="p-6 text-md">RUPP</option>
                      <option className="p-6 text-md">Setec</option>
                    </select>
                  </div>
                  {/* Classroom */}
                  <div className="col-span-full sm:col-span-3">
                    <label for="username" className="text-sm font-medium">
                      Class <span className="text-red-600 ">*</span>
                    </label>
                    <select
                      id="username"
                      type="text"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
                    >
                      <option className="p-6 text-md">Phnom Penh</option>
                      <option className="p-6 text-md">M11</option>
                      <option className="p-6 text-md">SR</option>
                    </select>
                  </div>

                  {/* Password */}
                  <div className="col-span-full sm:col-span-3">
                    <label for="password" className="text-sm font-medium">
                      Password <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
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
                      className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
            <div className="mt-4 space-y-1">
              <div className="flex justify-center">
                <button
                  type="button"
                  className="py-1 space-x-2 text-lg font-semibold text-white rounded-full bg-mygreen w-350px"
                  onClick={() => register()}
                >
                  Register
                </button>
              </div>
              {/* <h2 className="py-1 font-semibold text-center">Or</h2>
              <div className="flex justify-center font-medium">
                <button
                  aria-label="Login with Google"
                  type="button"
                  className="flex items-center justify-center p-4 py-1 space-x-2 text-lg border rounded-full w-350px focus:ring-offset-1"
                >
                  <FcGoogle />
                  <p>Login with Google</p>
                </button>
              </div> */}
            </div>
          </section>
          {/* End card */}
        </div>
      </div>
    </div>
  );
}
