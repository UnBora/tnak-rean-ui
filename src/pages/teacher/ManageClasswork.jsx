import React, { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { BsFolderPlus } from "react-icons/bs";
import {
  MdOutlineHomeWork,
  MdOutlineAssignment,
  MdOutlineQuiz,
} from "react-icons/md";
import CreateFolder from "../../components/teacher/CreateFolder";
import AssignClasswork from "../../components/teacher/AssignClasswork";
import FolderCard from "../../components/teacher/FolderCard";
import AssignedTaskCard from "../../components/teacher/AssignedTaskCard";
import { fetchAllclasswork } from "../../service/classMaterial";
import { fetchClassworkFolder } from "../../service/folderService";
import NavbarT from "../../components/NavbarT";

function ManageClasswork() {
  const [folder, setFolder] = useState([]);
  const [classwork, setClasswork] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchClassworkFolder(id, 1).then((r) => {
      setFolder(r.data);
    });
    fetchAllclasswork(1, id).then((r) => {
      setClasswork(r.data);
      console.log("classwork", r);
    });
  }, []);
  return (
    <div className="">
      {/* <NavbarT /> */}
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
        <div
          tabindex="0"
          className="p-2 shadow dropdown-content menu rounded-box w-52 bg-smoke"
        >
          <div>
            <label for="my-modal-1">
              <BsFolderPlus />
              Folder
            </label>
          </div>
          <li>
            <label for="my-modal-2">
              <MdOutlineHomeWork />
              Homework
            </label>
          </li>
          <li>
            <label for="my-modal-2">
              <MdOutlineAssignment />
              Assignment
            </label>
          </li>
          <li>
            <label for="my-modal-2">
              <MdOutlineQuiz />
              Quiz
            </label>
          </li>
        </div>
      </div>
      <p className="mt-3 ml-1 text-xl font-semibold">Folder</p>
      <p className="mb-2 border-b"></p>
      <div className="flex flex-wrap">
        {folder?.map((index) => {
          return <FolderCard key={index.id} data={index} />;
        })}
      </div>

      <p className="ml-1​​ mt-12 text-xl font-semibold">Assigned task</p>
      <p className="mb-4 border-b"></p>
      <div className="flex flex-wrap">
        {classwork?.map((index) => {
          return <AssignedTaskCard key={index.id} data={index} />;
        })}
      </div>
      {/* pop up */}
      <CreateFolder />
      <AssignClasswork />
    </div>
  );
}

export default ManageClasswork;
