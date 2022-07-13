import React from "react";
import { NavLink } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import Ckeditor from "../../components/Ckeditor";
import NavbarT from "../../components/NavbarT";
// import Ckeditor from "../../components/Ckeditor";
// import { Textarea } from "@material-tailwind/react";

export default function GradeStudentWork() {
  return (
    <div>
      <NavbarT />
      <div className="px-32 pb-40 mt-10 mb-40 bg-white">
        <div className="flex text-lg">
          <div className="p-1 text-mygreen">
            <IoChevronBackCircle />
          </div>
          <div>Back</div>
        </div>
        <div className="mt-3 text-3xl text-black">Phnom Penh Classroom</div>
        <div className="text-xl font-light text-gray-600">Homework 001</div>
        <div className="mb-8 mt-7">
          <p className="text-2xl text-center text-black">Answer Sheet</p>
          <p className="m-auto mt-2 w-36 myhr"></p>
        </div>
        {/* <div>
        <Textarea className="h-[300px] mt-9 focus:border-mygreen "></Textarea>
      </div> */}
        <Ckeditor />
        <div className="flex justify-end mt-8">
          <div className="flex">
            <label
              for="score"
              class="block mb-2 font-medium text-black text-base mt-1"
            >
              Student score
            </label>
            <input
              type="number"
              id="score"
              placeholder="Score"
              className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none"
            />
          </div>
          
        </div>
        <div className="flex justify-end mt-3">
            <button className="px-3 py-1 text-white rounded-full bg-mygreen ">
              Send
            </button>
          </div>
      </div>
    </div>
  );
}
