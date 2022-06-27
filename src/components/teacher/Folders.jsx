import React from 'react'
import { FaEllipsisV, FaFolderMinus } from "react-icons/fa";

export default function Folders() {
  return (
    <div className="flex mt-3 mr-4">
    <button className="flex p-2 border border-collapse rounded-md shadow-xl h-max border-bordergray w-60">
      <div className="">
        <FaFolderMinus />
      </div>
      <span className="ml-2 text-sm truncate font-regular">HTML numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit</span>
      <div className="ml-auto"><FaEllipsisV /></div>
    </button>
  </div>
  )
}
