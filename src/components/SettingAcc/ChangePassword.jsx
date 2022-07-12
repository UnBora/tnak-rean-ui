import React from "react";
import { changepassword } from "../swal/Success";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { changePassword } from "../../service/authService";
export default function () {
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .min(6, "oldPassword must be at least 6 characters")
      .required("oldPassword is required"),
    newpassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newpassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState, setError } =
    useForm(formOptions);
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
    
  };
  return (
    <div className="h-auto p-5 bg-white border-gray-200 rounded-lg shadow-md w-80 ">
      <form className="" action="#">
        <h4 className="mb-6 text-2xl font-medium text-gray-900 ">
          Change your password
        </h4>
        <div className="">
          <label className="block mb-2 text-xs font-medium text-gray-900 ">
            OLD PASSWORD
          </label>
          <input
            {...register("oldpassword")}
            type="password"
            name="password"
            id="password"
            className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
            placeholder="••••••••"
          ></input>
          {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
        </div>
        <div className="mt-4">
          <label
            for="password"
            className="block mb-2 text-xs font-medium text-white-900 "
          >
            NEW PASSWORD
          </label>
          <input
            {...register("newpassword")}
            type="password"
            placeholder="••••••••"
            className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
          ></input>
          {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
        </div>
        <div className="mt-4">
          <label
            for="password"
            class="block mb-2 text-xs font-medium text-gray-900 "
          >
            COMFIRM NEW PASSWORD
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
          ></input>
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="mt-5 mb-3">
          <button
          type="submit"
            className="w-20 py-2 text-sm font-semibold text-center text-white rounded-full shadow-md bg-mygreen"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </button>
          <button className="w-20 py-2 ml-3 text-sm font-semibold text-center text-white rounded-full shadow-md bg-myorange">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
