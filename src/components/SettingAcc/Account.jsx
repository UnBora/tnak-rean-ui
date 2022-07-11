import React from "react";
import { accounupdate } from "../swal/Success";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Account() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      // .transform((currentValue, originalValue) => {
      //   return originalValue === "" ? null : currentValue;
      // })
      // .nullable()
      .min(4, "Name must be at least 6 characters")
      .max(15)
      .matches(/^[a-zA-Z0-9 ]+$/, "Only alphabets are allowed for Name "),
    username: Yup.string()
      .nullable(true)
      .min(4)
      .max(15)
      .matches(/^[a-zA-Z0-9 ]+$/, "Only alphabets are allowed for Username "),
    email: Yup.string().email("Email is invalid").nullable(true),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState, setError } =
    useForm(formOptions);
  const { errors } = formState;


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-auto h-auto p-4 border-gray-200 rounded-lg shadow-md ">
      <form className="" action="#">
        <h4 className="text-2xl font-medium text-gray-900 ">General info</h4>
        <div className="grid w-full lg:grid-cols-2 sm:grid-cols-14 ">
          <label className="block mt-4 ">
            <span className="block mb-2 text-xs font-medium text-slate-700">
              FULL NAME
            </span>
            <input
              {...register("name")}
              type="name"
              name="name"
              className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
              placeholder="Dayan"
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </label>
          <div>
            <label className="block mt-4 ml-2">
              <span className="block mb-2 text-xs font-medium text-slate-700">
                GENDER
              </span>
              <select
                id="gender"
                className="block w-full p-2 text-sm bg-white border rounded-md shadow-sm border-slate-300 text-slate-400 focus:ring-mygreen focus:border-mygreen "
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </label>
          </div>
          <label className="block mt-4">
            <span className="block mb-2 text-xs font-medium text-slate-700">
              EMAIL
            </span>
            <input
              {...register("email")}
              type="email"
              name="email"
              className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
              placeholder="dayan@gmail.com"
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </label>
          <label className="block mt-4 ml-2">
            <span className="block mb-2 text-xs font-medium text-slate-700">
              USERNAME
            </span>
            <input
              {...register("username")}
              type="username"
              name="username"
              className="block w-64 px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-mygreen focus:ring-mygreen sm:text-sm focus:ring-1"
              placeholder="@dayan"
            />
            <div className="invalid-feedback">{errors.username?.message}</div>
          </label>
        </div>
        <div class="mt-5 mb-3">
          <button
            type="button"
            class="py-2 text-white bg-mygreen w-20 text-center text-sm font-medium shadow-md rounded-full "
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </button>
          <button
            type="button"
            class="py-2 text-white bg-myorange w-20 text-center text-sm font-semibold shadow-md rounded-full ml-3"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
