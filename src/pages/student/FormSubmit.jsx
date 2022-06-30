import Ckeditor from "../../components/Ckeditor";
import React from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function FormSubmit() {
  // const [textarea, setTextarea] = useState();

  // const handleChange = (event) => {
  //   setTextarea(event.target.value);
  // };
  return (
    <div className="mx-32 mt-10 mb-40">
      <div className="flex">
        <NavLink to="/work-submit" className="text-AboutIcon text-mygreen">
          <IoChevronBackCircle />
        </NavLink>
        <NavLink to="/work-submit" className="ml-2 font-medium">
          Back
        </NavLink>
      </div>
      <p className="mt-5 text-2xl font-semibold">Phnom Penh Classroom</p>
      <p className="mt-2 text-sm font-normal">Homework 001, Chea Phanith</p>
      <div className="mx-8 mt-12 mb-12">
        <div className="text-2xl font-semibold text-center">
          <p>Answer Sheet</p>
          <p className="w-20 m-auto mt-1 myhr"></p>
        </div>
      </div>
      <Ckeditor />
      <div class="mt-5 flex flex-row">
        <button
          type="button"
          className="w-20 py-2 ml-auto text-sm font-medium text-center text-white rounded-full shadow-md bg-mygreen "
        >
          Submit
        </button>
        <button
          type="button"
          className="w-20 py-2 ml-3 text-sm font-semibold text-center text-white rounded-full shadow-md bg-myorange"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
