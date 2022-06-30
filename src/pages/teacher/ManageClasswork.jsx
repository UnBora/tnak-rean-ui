import React, { useState } from "react";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import AssignedTask from "../../components/teacher/AssignedTask";
import Folders from "../../components/teacher/Folders";
import { BsFolderPlus } from "react-icons/bs";
import {
  MdOutlineHomeWork,
  MdOutlineAssignment,
  MdOutlineQuiz,
  MdOutlineAddLink,
} from "react-icons/md";
import CreateFolder from "../../components/CreateFolder";
import ReactPlayer from "react-player";
import AssignClasswork from "../../components/teacher/AssignClasswork";

function ManageClasswork() {
  return (
    <div>
      <div className="flex space-x-2">
        <div className="w-8 h-8 rounded-full bg-mygreen">
          <MdWork className="flex m-auto mt-2 text-white align-middle" />
        </div>
        <p className="mb-3 text-2xl font-semibold">Classwork</p>
      </div>
      <div className="text-sm breadcrumbs">
        <ul>
      
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Create
          </li>
        </ul>
      </div>

      <div className="dropdown dropdown-right">
        <label
          tabindex="0"
          className="px-5 my-4 ml-1 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
        >
          Create
        </label>
        <ul
          tabindex="0"
          className="p-2 shadow dropdown-content menu rounded-box w-52 bg-smoke"
        >
          <li>
            <label for="my-modal-1">
              <BsFolderPlus />
              Folder
            </label>
          </li>
          <li>
            <label for="my-modal-2">
              <MdOutlineHomeWork />
              Homework
            </label>
          </li>
          <li>
            <label>
              <MdOutlineAssignment />
              Assignment
            </label>
          </li>
          <li>
            <Link to="#">
              <MdOutlineQuiz />
              Quiz
            </Link>
          </li>
        </ul>
      </div>
      <p className="ml-1 text-lg font-bold ">Folder</p>
      <p className="mb-2 border-b"></p>
      <div className="flex flex-wrap">
        <Link to="#">
          <Folders />
        </Link>
        <Link to="#">
          <Folders />
        </Link>
        <Link to="#">
          <Folders />
        </Link>
      </div>

      <p className="ml-1​​ mt-4 text-lg font-bold">Assigned task</p>
      <p className="mb-4 border-b"></p>
      <div className="flex flex-wrap">
        <AssignedTask />
        <AssignedTask />
        <AssignedTask />
      </div>
      {/* pop up */}
      <CreateFolder />
      <AssignClasswork/>
    </div>
  );
}

export default ManageClasswork;
