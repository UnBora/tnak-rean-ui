import React from "react";
import { deleteaccount } from "../swal/Delete";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { deleteAccount } from "../../service/authService";

export default function DeleteAccount() {
  const validationSchema = Yup.object().shape({
    password: Yup.string().required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState, setError } = useForm({
    formOptions,
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    deleteAccount(data.password,data.password)
    console.log(data);
    // if(data.responseCode===400){
    //   alert("not match")
    // }else{
    //   alert("done")
    // }
  };
  return (
    <div className="h-auto p-5 bg-white border-gray-200 rounded-lg shadow-md max-w-l ">
      <form className="" action="#">
        <h4 className="text-2xl font-medium text-gray-900 ">
          Delete your account
        </h4>
        <p className="mt-1 text-sm text-gray-400 font-montserrat">
          Your account will be deleted permanently and you won't be able to
          recovery and lost data.
        </p>
        <span className="mt-4 before:content-['*'] after:ml-0.5 before:text-red-500 block text-base font-medium text-slate-700">
          Please enter your password to confirm account deletion
        </span>
        <div>
          <div className="flex flex-row mt-4">
            <div className="col-span-1 ">
              <label className="block">
                <span className="block text-xs font-medium text-slate-700">
                  PASSWORD
                </span>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
                  placeholder="••••••••"
                />
              </label>
            </div>
            <div className="col-span-1 ml-3 ">
              <label className="block">
                <span className="block text-xs font-medium text-slate-700">
                  COMFIRM PASSWORD
                </span>
                <input
                  {...register("confirmPassword")}
                  type="password"
                  name="password"
                  className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
                  placeholder="••••••••"
                />
              </label>
            </div>
          </div>
          <div className="mt-5 mb-4">
            <button
              type="button"
              className="w-24 py-2 text-sm font-medium text-center text-white rounded-full shadow-md bg-myred "
              onClick={handleSubmit(onSubmit)}
            >
              Delete
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
