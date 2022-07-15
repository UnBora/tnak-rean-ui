import React, { useState } from "react";
import StudentComment from "./StudentComment";
import { MdOutlineAssignment } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { fetchAllCommentByClassMaterialDetail } from "../../service/commentService";

export default function StudentUpcomingTask({ assignedTask }) {
  const [comment, setComment] = useState([]);
  const dataTask = assignedTask;
  function onHandleComment(classMaterialDetailId) {
    console.log(classMaterialDetailId);
    console.log('ass task',assignedTask);
    fetchAllCommentByClassMaterialDetail(classMaterialDetailId).then((r) => {
      console.log(classMaterialDetailId);
      setComment(r.data)
    });
  }

  return (
    <div className="flex flex-wrap max-w-sm p-4 border rounded-md shadow-md mr-7 mb-7 h-52 border-bordergray">
      <div className="flex w-full">
        <div className="flex text-2xl cursor-default ">
          <MdOutlineAssignment />
          <span className="ml-2 text-lg font-medium">{dataTask?.title}</span>
        </div>
      </div>
      <div className="w-full">
      <div className="max-w-[22rem] truncate mt-2 text-base font-medium block">
        {dataTask?.description}
      </div>
      </div>
      <div className="text-xs font-medium ">
        <div className="mb-2">
          Point: <span>{dataTask?.score}</span>
        </div>
        <div className="mt-1 text-xs font-regular text-myred ">
          <p>
            <span>Due: </span> <span>{dataTask?.deadline}</span>
          </p>
        </div>
      </div>
      <div className="flex mt-auto">
        <Link
          to={{ pathname: `/submit/${assignedTask.class_materials_detail_id}`}}
          type="link"
          className="px-4 py-1 text-base text-center text-white shadow-md bg-mygreen font-regular rounded-xl h-max"
        >
          View
        </Link>
        <div
          className="mt-2 ml-40 text-sm underline font-regular dropdown dropdown-right"
          onClick={()=>onHandleComment(dataTask?.class_materials_detail_id)}
        >
          <label 
          tabindex="0" 
          className="underline dropdown dropdown-right hover:cursor-pointer"
          >
            <span>{dataTask?.total_comment}</span> comments
          </label>
          <div tabindex="0" className="mt-2 dropdown-content rounded-box">
            <StudentComment comment={comment} />
          </div>
        </div>
      </div>
    </div>
  );
}
