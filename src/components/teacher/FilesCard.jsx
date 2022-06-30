import React from 'react'
import { NavLink } from 'react-router-dom'
import ViewComment from './ViewComment'

export default function FilesCard() {
  return (
    <div className='h-40 p-4 mb-5 mr-8 border border-collapse rounded-md shadow-xl border-bordergray bg-smoke w-[265px]'>
      <div className='text-lg font-medium'>React JS</div>
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
          <label tabindex="0" className="underline dropdown dropdown-right">
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
