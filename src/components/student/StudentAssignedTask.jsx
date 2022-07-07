import React from "react";
import StudentComment from "./StudentComment";
import { MdOutlineAssignment } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function StudentAssignedTask({ assignedTask }) {
  return (
    <div className="flex flex-wrap max-w-sm p-4 border rounded-md shadow-xl mr-7 mb-7 h-52 border-bordergray">
      <div className="justify-between">
        <div className="flex text-2xl text-black">
          <MdOutlineAssignment />
          <span className="ml-2 text-lg font-medium">{assignedTask.title}</span>
        </div>
      </div>
      <div className="mt-2 text-base font-medium">
        <p className="max-w-[22rem] truncate text-black">
          {assignedTask.description}
        </p>
      </div>

      <div className="text-xs font-medium">
        <div className="mb-2">
          Point: <span>1/100</span>
        </div>
        <div className="mt-1 text-xs font-regular text-myred ">
          <p>{assignedTask.deadline}</p>
        </div>
      </div>
      <div className="flex mt-auto">
        <NavLink
          to="/work-submit"
          type="link"
          className="px-4 py-1 text-base text-center text-white shadow-md bg-mygreen font-regular rounded-xl h-max"
        >
          View
        </NavLink>
        <div className="mt-2 ml-40 text-sm underline font-regular dropdown dropdown-right">
          <label tabindex="0" className="underline dropdown dropdown-right">
            <span>2</span> comments
          </label>
          <div tabindex="0" className="mt-2 dropdown-content rounded-box">
            <StudentComment />
          </div>
        </div>
      </div>
    </div>
  );
}
