import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

export default function ListGradeStudent() {
  return (
    <div className="px-32 pb-40 mb-40 bg-white">
    <div className="flex text-lg">
      <div className="p-1 text-mygreen"><IoChevronBackCircle /></div>
      <div>Back</div>
    </div>
    <div className="mt-3 text-3xl text-black">
      Phnom Penh Classroom
    </div>
    <div className="text-xl font-light">Homework 001</div>
    <div className="w-full mt-5 text-black border rounded-md p-9 h-96 card">
      <div className="flex">
      <div className="p-1 text-white rounded-full text-AboutIcon bg-mygreen">
      <TiTick/>
      </div>
      <div className="mx-3 text-2xl font-semibold">Student Submitted Work
      </div>
      </div>
      <p className="mt-2 w-36 myhr "></p>
      {/* for map */}
      <div className="flex justify-between mt-6 border-b border-b-gray ">
        <div className="text-xl">
          <p>Chea Phanith</p>
        </div>
        <div className="">
        <NavLink className="w-20 px-2 py-1 text-white rounded-full bg-mygreen" to="/viewfile">Grade</NavLink>
        </div>
      </div>
      
      <div className="flex justify-between mt-6 border-b border-b-gray ">
        <div className="text-xl">
          <p>Chea Phanith</p>
        </div>
        <div className="">
        <NavLink className="w-20 px-2 py-1 text-white rounded-full bg-mygreen" to="/teacher">Grade</NavLink>
        </div>
      </div>
    </div>
    </div>
  );
}
