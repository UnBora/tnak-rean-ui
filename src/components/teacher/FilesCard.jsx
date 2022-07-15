import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ViewComment from "./ViewComment";
import { FaEllipsisV } from "react-icons/fa";
import { deleteClasswork, deleteFile } from "../swal/Delete";
import AssignClasswork from "./AssignClasswork";
import EditCourse from "./EditCourse";
import { fetchAllCommentByClassMaterial } from "../../service/commentService";

export default function FilesCard({data}) {
  const [comment, setComment] = useState([]);
  const dataCourse = data;
  function onHandleComment(classMaterialId) {
    fetchAllCommentByClassMaterial(classMaterialId).then((r) => {
      console.log('====================================');
      console.log(r.data);
      console.log('====================================');
      setComment(r.data);
    });
  }
  return (
    <div className="flex flex-wrap h-40 p-4 mb-5 mr-8 border border-collapse rounded-md shadow-md border-bordergray bg-smoke w-[265px] cursor-default">
      <div className="text-lg font-semibold">{dataCourse?.title}</div>
      <div className="mt-2 text-xs font-medium line-clamp-2">
        {dataCourse?.description}
      </div>
      <div className="flex mt-4">
        <NavLink
          to="/viewfile"
          type="link"
          className="px-4 py-1 text-base text-center text-white shadow-md bg-mygreen font-regular h-max rounded-xl"
        >
          View
        </NavLink>
        <div className="mt-2 ml-auto text-sm underline font-regular dropdown dropdown-right" 
        onClick={()=>onHandleComment(data.material_id)}>
          <label
            tabindex="0"
            className="ml-16 underline cursor-pointer dropdown dropdown-right"
          >
            <span>{dataCourse.total_comment}</span> comments
          </label>
          <div tabindex="0" className="h-40 mt-2 dropdown-content rounded-box scrollbar-thumb-zinc-400 scrollbar-none">
            <ViewComment comment={comment} />
          </div>
        </div>
      </div>
      <EditCourse/>
    </div>
  );
}
