import React from "react";
import { NavLink , Link} from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";

export default function Classwork() {
  return (
    <div className="mt-10 mb-40 lg:mx-32 sm:mx-5 md:mx-12">
      <div className="flex">
        <NavLink to="/classwork" className="text-AboutIcon text-mygreen">
          <IoChevronBackCircle />
        </NavLink>
        <NavLink to="/classwork" className="ml-2 font-medium">
          Back
        </NavLink>
      </div>
      <p className="mt-5 font-semibold lg:text-2xl sm:text-medium md:text-base">
        Phnom Penh Classroom
      </p>
      <p className="w-16 mt-1 myhr"></p>
      <div className="grid gap-3 lg:mx-10 lg:grid-cols-5 mt-9 sm:grid-cols-1 sm:mx-0 md:mx-0 md:grid-cols-5 ">
        <div className="col-span-3 p-5 border-gray-200 rounded-lg shadow-md bg-smoke">
          <div className="flex ">
            <label className="p-2 text-white rounded-full bg-mygreen text-AccountIcon">
              <MdOutlineAssignment />
            </label>
            <label className="ml-3 text-xl">Java Assignment</label>
            <label className="mt-2 ml-auto text-sm">Due 30 June 2022</label>
          
          </div>
          <p className="ml-12 text-myorange">100 point</p>
        </div>
        {/* card for submit */}
        <div className="col-span-2 p-5 ml-2 rounded-lg shadow-md border-mygreen bg-smoke">
          <label className="text-lg">Your work</label>
          <div className="justify-center px-2 py-3 mt-3 text-center border-2 border-dotted rounded-md border-mygreen">
            <label
              htmlFor="file-upload"
              className="relative font-medium bg-white rounded-md cursor-pointer hover:text-mygreen focus-within:outline-none "
            >
              <span>Upload file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
          </div>
          <span className="ml-2 mt-3 before:content-['*'] after:ml-0.5 before:text-red-500 block text-xs font-medium text-slate-700">
          Support for file word only
        </span>
        <div className="mx-auto mt-6 text-center"><button
            type="button"
            className="w-20 py-2 mx-auto text-sm font-medium text-white rounded-lg shadow-md bg-mygreen "
          >
            Submit
          </button>
          </div>
          <Link to="/formsubmit" className="flex justify-center mt-3 text-sm underline text-mygreen">Do it with form</Link>
        </div>
      </div>
    </div>
  );
}
