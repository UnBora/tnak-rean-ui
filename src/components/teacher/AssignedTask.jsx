import React from 'react'
import { FaEllipsisV } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function AssignedTask() {
  return (
    <div className="flex flex-wrap max-w-sm p-4 border rounded-md shadow-xl mr-7 mb-7 h-52 border-bordergray">
    <div className="flex w-full ">
      <div className="flex text-2xl">
        <MdOutlineAssignment />
        <span className="ml-2 text-lg font-medium">JAVA assignment 1</span>
      </div>
      <div className="mt-1 ml-auto cursor-pointer">
      <FaEllipsisV />
    </div>
    </div>
    <div className="mt-2 text-base font-medium">
      <p className="max-w-[22rem] truncate">
        Create firt project Java Using Intellij hii am Kimhab form
        ppclassdffdf what do you wanthjtyjughfthyfgfhgfg lfgrfhdturtfhgfhggfh
      </p>
    </div>

    <div className="text-xs font-medium">
      <div className="mb-2">Point: <span>1/100</span></div>
      <div className="mt-1 text-xs font-regular text-myred ">
        <p>Due 31 june 2022 13:00</p>
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
          {/* <StudentComment /> */}
        </div>
      </div>
    </div>
  </div>
  )
}
