import React from "react";
import { NavLink } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";

export default function ViewFiles() {
  return (
    <div className="mt-10 mb-40 lg:mx-32 sm:mx-5 md:mx-12">
      <div className="flex">
        <NavLink to="/stu-classwork" className="text-AboutIcon text-mygreen">
          <IoChevronBackCircle />
        </NavLink>
        <NavLink to="/stu-classwork" className="ml-2 font-medium">
          Back
        </NavLink>
      </div>
      <div className=""> 
        <p className="mt-6 text-2xl font-bold ml-7 text-mygreen">React JS</p>
        <p className="w-16 mt-1 ml-7 myhr"></p>  
      </div>
    </div>
  );
}
