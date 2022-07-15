import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { fetchAllCommentByClassMaterial } from '../../service/commentService';
import StudentComment from './StudentComment'

export default function StudentFiles({data}) {
  const [comment, setComment] = useState([]);
  function onHandleComment(classMaterialId) {
    fetchAllCommentByClassMaterial(classMaterialId).then((r) => {
      console.log('====================================');
      console.log(r.data);
      console.log('====================================');
      setComment(r.data);
    });
  }
  const dataFile = data;
  return (
    <div className="flex flex-wrap h-40 p-4 mb-5 mr-8 border border-collapse rounded-md shadow-md border-bordergray bg-smoke w-[265px] cursor-default">
      <div className="text-lg font-semibold">{dataFile?.title}</div>
      <div className="mt-2 text-xs font-medium line-clamp-2">
        {dataFile?.description}
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
        onClick={()=>onHandleComment(data.class_materials_detail_id)}>
          <label
            tabindex="0"
            className="ml-16 underline cursor-pointer dropdown dropdown-right"
          >
            <span>{dataFile.total_comment}</span> comments
          </label>
          <div tabindex="0" className="h-40 mt-2 dropdown-content rounded-box scrollbar-thumb-zinc-400 scrollbar-none">
            <StudentComment comment={comment} />
          </div>
        </div>
      </div>
    </div>
  )
}
