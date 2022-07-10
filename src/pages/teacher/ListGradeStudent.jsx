import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";

export default function ListGradeStudent() {
  return (
    <div>
      <div className="flex">
        <Link to="/stu-classwork" className="text-AboutIcon text-mygreen">
          <IoChevronBackCircle />
        </Link>
        <Link className="ml-2 font-medium">Back</Link>
        <div className="text-base">Homework 001</div>
      </div>
    </div>
  );
}
