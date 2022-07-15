import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { Link } from "react-router-dom";
import { fetchAllCommentByClassMaterial, fetchAllCommentByClassMaterialDetail } from "../../service/commentService";
import { deleteClasswork } from "../swal/Delete";
import AssignClasswork from "./AssignClasswork";
import { useState } from "react";
import ViewComment from "./ViewComment";

export default function AssignedTaskCard({ data }) {
  const dataTask = data;
  const [comment, setComment] = useState([]);
  // const dataClass = data;

  function onHandleComment(classMaterialDetailId) {
    fetchAllCommentByClassMaterialDetail(classMaterialDetailId).then((r) => {
      console.log('View Comment ', r.data);
      setComment(r.data);
    });
  }
  console.log('teacher assigntask',dataTask);

  return (
    <div className="flex flex-wrap max-w-sm p-4 border rounded-md shadow-md mr-7 mb-7 h-52 border-bordergray ">
      <div className="flex w-full">
        <div className="flex text-2xl cursor-default ">
          <MdOutlineAssignment />
          <span className="ml-2 text-lg font-medium">{dataTask.title}</span>
        </div>
        <div className="mt-1 ml-auto dropdown ">
          <label tabindex="0" className="cursor-pointer">
            <FaEllipsisV />
          </label>
          <div
            tabindex="0"
            className="w-24 text-sm font-medium rounded-lg shadow w-z-20 dropdown-content menu bg-base-100"
          >
            <label className="py-2 pl-4 hover:bg-gray-200 hover:rounded-t-lg">
              <label for="my-modal-2" className="cursor-pointer">
                Edit
              </label>
            </label>
            <label className="py-2 pl-4 border-t hover:bg-gray-200">
              <label for="my-modal-2" className="cursor-pointer">
                Share
              </label>
            </label>
            <label className="py-2 pl-4 text-red-500 border-t hover:rounded-b-lg hover:bg-gray-200">
              <label
                onClick={() => {
                  deleteClasswork();
                }}
                className="cursor-pointer"
              >
                Delete
              </label>
            </label>
          </div>
        </div>
      </div>
      <div className="w-full">
      <div className="max-w-[22rem] truncate mt-2 text-base font-medium block">
        {dataTask?.description}
      </div>
      </div>
      <div className="text-xs font-medium ">
        <div className="mb-2">
          Point: <span>{dataTask.score}</span>
        </div>
        <div className="mt-1 text-xs font-regular text-myred ">
          <p>
            <span>Due: </span> <span>{dataTask.deadline}</span>
          </p>
        </div>
      </div>
      <div className="flex mt-auto">
        <Link
          to={{ pathname: `/classroom/${data.class_id}/classworks/${data.material_id}/list`}}
          type="link"
          className="px-4 py-1 text-base text-center text-white shadow-md bg-mygreen font-regular rounded-xl h-max"
        >
          Grade
        </Link>
        <div
          className="mt-2 ml-40 text-sm underline font-regular dropdown dropdown-right"
          onClick={()=>onHandleComment(data.class_materials_detail_id)}
        >
          <label 
          tabindex="0" 
          className="underline dropdown dropdown-right hover:cursor-pointer"
          >
            <span>{dataTask.total_comment}</span> comments
          </label>
          <div tabindex="0" className="mt-2 dropdown-content rounded-box scrollbar-thumb-zinc-400 scrollbar-none">
            <ViewComment comment={comment} />
          </div>
        </div>
      </div>
      <AssignClasswork />
    </div>
  );
}
