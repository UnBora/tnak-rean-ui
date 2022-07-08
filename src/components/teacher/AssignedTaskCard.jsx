import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { Link } from "react-router-dom";
import { fetchAllCommentByClassMaterial } from "../../service/commentService";
import { deleteClasswork } from "../swal/Delete";
import AssignClasswork from "./AssignClasswork";
import { useState } from "react";
import ViewComment from "./ViewComment";

export default function AssignedTaskCard({ data }) {
  const dataTask = data;
  const [comment, setComment] = useState([]);

  function onHandleComment(classMaterialId) {
    fetchAllCommentByClassMaterial(classMaterialId).then((r) => {
      console.log('====================================');
      console.log(r.data);
      console.log('====================================');
      setComment(r.data);
    });
  }

  return (
    <div className="flex flex-wrap max-w-sm p-4 border rounded-md shadow-xl mr-7 mb-7 h-52 border-bordergray">
      <div className="flex w-full ">
        <div className="flex text-2xl">
          <MdOutlineAssignment />
          <span className="ml-2 text-lg font-medium">{dataTask.title}</span>
        </div>
        <div className="mt-1 ml-auto dropdown">
          <label tabindex="0" className="cursor-pointer">
            <FaEllipsisV />
          </label>
          <div
            tabindex="0"
            class="w-24 text-sm font-medium shadow w-z-20 dropdown-content menu bg-base-100 rounded-box"
          >
            <label className="py-2 pl-4 hover:bg-gray-200 hover:rounded-t-lg">
              <label for="my-modal-2" className="cursor-pointer">
                Edit
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
      <div className="w-full mt-2 text-base font-medium">
        {dataTask.description}
      </div>

      <div className="text-xs font-medium">
        <div className="mb-2">
          Point: <span>{dataTask.score}</span>
        </div>
        <div className="mt-1 text-xs font-regular text-myred ">
          <p>
            <span>Due</span> <span>{dataTask.deadline}</span>
          </p>
        </div>
      </div>
      <div className="flex mt-auto">
        <Link
          to="/work-submit"
          type="link"
          className="px-4 py-1 text-base text-center text-white shadow-md bg-mygreen font-regular rounded-xl h-max"
        >
          View
        </Link>
        <div
          className="mt-2 ml-40 text-sm underline font-regular dropdown dropdown-right"
          onClick={()=>onHandleComment(data.material_id)}
        >
          <label tabindex="0" className="underline dropdown dropdown-right hover:cursor-pointer">
            <span>{dataTask.total_comment}</span> comments
          </label>
          <div tabindex="0" className="mt-2 dropdown-content rounded-box">
            <ViewComment comment={comment} />
          </div>
        </div>
      </div>
      <AssignClasswork />
    </div>
  );
}
