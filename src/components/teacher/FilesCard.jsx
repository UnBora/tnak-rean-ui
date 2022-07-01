import React from 'react'
import { NavLink } from 'react-router-dom'
import ViewComment from './ViewComment'
import { FaEllipsisV } from "react-icons/fa";
import { deleteClasswork } from "../swal/Delete";

export default function FilesCard() {
  return (
    <div className='flex flex-wrap h-40 p-4 mb-5 mr-8 border border-collapse rounded-md shadow-xl border-bordergray bg-smoke w-[265px]'>
      <div className='text-lg font-medium'>React JS</div>
      <div className="mt-1 ml-auto dropdown">
          <label tabindex="0" className="cursor-pointer">
            <FaEllipsisV />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-medium"
          >
            <li>
              <label for="my-modal-2">Edit</label>
            </li>

            <li className="text-red-500">
              <label onClick={()=>{deleteClasswork()}}>Delete</label>
            </li>
          </ul>
        </div>
      <div className='mt-2 text-xs line-clamp-2'>React JS Chapter1: talk about basic React JS prepared by. T.SSH from PP class Korea software hrd center 10th generation 2022</div>
      <div className="flex mt-4">
        <NavLink
          to="/viewfile"
          type="link"
          className="px-4 py-1 text-base text-center text-white shadow-md bg-mygreen font-regular rounded-xl h-max"
        >
          View
        </NavLink>
        <div className="mt-2 ml-auto text-sm underline font-regular dropdown dropdown-right">
          <label tabindex="0" className="ml-16 underline dropdown dropdown-right">
            <span>2</span> comments
          </label>
          <div tabindex="0" className="mt-2 dropdown-content rounded-box">
            <ViewComment />
          </div>
        </div>
      </div>
    </div>
  )
}
