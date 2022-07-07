import React from "react";
import { NavLink } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import Ckeditor from "../../components/Ckeditor";
import StudentNavBar from "../../components/StudentNavbar";

export default function ViewFiles() {
  return (
    <div>
      <StudentNavBar />
      <div className="mt-10 mb-40 lg:mx-32 sm:mx-5 md:mx-12">
        <div className="flex">
          <NavLink to="/stu-course" className="text-AboutIcon text-mygreen">
            <IoChevronBackCircle />
          </NavLink>
          <NavLink to="/stu-course" className="ml-2 font-medium">
            Back
          </NavLink>
        </div>
        <div className="">
          <p className="mt-6 text-2xl font-bold text-mygreen">React JS</p>
          <p className="w-16 mt-1 mb-4 myhr"></p>
        </div>
        <Ckeditor />
      </div>
    </div>
  );
}
