import React, { useState } from "react";
import StudentComment from "./StudentComment";
import { MdOutlineAssignment } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { fetchAllCommentByClassMaterial } from "../../service/commentService";

export default function StudentAssignedTask({ assignedTask }) {
  const [comment, setComment] = useState([]);
  // const dataTask = assignedTask;
  function onHandleComment(classMaterialId) {
    fetchAllCommentByClassMaterial(classMaterialId).then((r) => {
      console.log('====================================');
      console.log(r.data);
      console.log('====================================');
      setComment(r.data);
    });
  }
  return (
    <div className="flex flex-wrap w-full max-w-sm p-4 border rounded-md shadow-xl mr-7 mb-7 h-52 border-bordergray">
     <div className="w-full">
     <div className="flex text-2xl text-black cursor-default">
          <MdOutlineAssignment />
          <span className="ml-2 text-lg font-medium">{assignedTask?.title}</span>
        </div>
      <div className="mt-2 text-base font-medium">
        <p className="max-w-[22rem] truncate text-black">
          {assignedTask?.description}
        </p>
      </div>
      <div className="text-xs font-medium">
        <div className="mb-2">
          Point: <span>{assignedTask?.score}</span>
        </div>
        <div className="mt-1 text-xs font-regular text-myred ">
          <p> <span>Due: </span> <span>{assignedTask?.deadline}</span></p>
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
        <div
          className="mt-2 ml-40 text-sm underline font-regular dropdown dropdown-right"
          onClick={()=>onHandleComment(assignedTask.material_id)}
        >
          <label tabindex="0" className="underline dropdown dropdown-right hover:cursor-pointer">
            <span>{assignedTask.total_comment}</span> comments
          </label>
          <div tabindex="0" className="mt-2 dropdown-content rounded-box">
            <StudentComment comment={comment} />
          </div>
        </div>
        {/* <div className="mt-2 ml-40 text-sm underline font-regular dropdown dropdown-right">
          <label tabindex="0" className="underline dropdown dropdown-right">
            <span>2</span> comments
          </label>
          <div tabindex="0" className="mt-2 dropdown-content rounded-box">
            <StudentComment comment={comment}/>
          </div>
        </div> */}
      </div>
     </div>
    </div>
  );
}
