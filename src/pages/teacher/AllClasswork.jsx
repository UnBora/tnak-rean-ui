import React, { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import AssignedTaskCard from "../../components/teacher/AssignedTaskCard";
import { BsFolderPlus } from "react-icons/bs";
import {
  MdOutlineHomeWork,
  MdOutlineAssignment,
  MdOutlineQuiz,
} from "react-icons/md";
import CreateFolder from "../../components/teacher/CreateFolder";
import AssignClasswork from "../../components/teacher/AssignClasswork";
import FolderCard from "../../components/teacher/FolderCard";
import NavbarT from "../../components/NavbarT";
import { fetchClassworks } from "../../service/classMaterial";
import { fetchallClassworkFolder } from "../../service/folderService";
import EditFolder from "../../components/teacher/EditFolder";
import { FaEllipsisV, FaFolderMinus } from "react-icons/fa";
import { deleteFolder } from "../../components/swal/Delete";

function AllClasswork() {
  const [allClasswork, setallClasswork] = useState([]);
  const [allFolder, setallFolder] = useState([]);
  useEffect(() => {
    fetchClassworks().then((r) => {
      setallClasswork(r.data);
      console.log("all assign task", r.data);
    });

    fetchallClassworkFolder().then((r) => {
      setallFolder(r.data);
    });
  }, []);

  console.log("all folder", allFolder);
  console.log("all folder", allFolder);

  return (
    <div>
      <NavbarT />
      <div className="mt-10 mx-100px">
        <div className="">
          <div className="flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-mygreen">
              <MdWork className="flex m-auto mt-2 text-white align-middle" />
            </div>
            <p className="mb-3 text-2xl font-semibold">Classwork</p>
          </div>
          {/* <div className="text-sm breadcrumbs">
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
        </div> */}

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
              <div className="text-lg">
                <label
                  for="my-modal-1"
                  className="flex py-2 cursor-pointer hover:bg-gray-300 hover:rounded"
                >
                  <BsFolderPlus className="mx-4 mt-1" />
                  Folder
                </label>
              </div>
              <div className="text-lg">
                <label
                  for="my-modal-2"
                  className="flex py-2 cursor-pointer hover:bg-gray-300 hover:rounded"
                >
                  <MdOutlineHomeWork className="mx-4 mt-1" />
                  Homework
                </label>
              </div>
              <div className="text-lg">
                <label
                  for="my-modal-2"
                  className="flex py-2 cursor-pointer hover:bg-gray-300 hover:rounded"
                >
                  <MdOutlineAssignment className="mx-4 mt-1" />
                  Assignment
                </label>
              </div>
              <div className="text-lg">
                <label
                  for="my-modal-2"
                  className="flex py-2 cursor-pointer hover:bg-gray-300 hover:rounded"
                >
                  <MdOutlineQuiz className="mx-4 mt-1" />
                  Quiz
                </label>
              </div>
            </div>
          </div>
          <p className="mt-3 ml-1 text-xl font-semibold">Folder</p>
          {/* <p className="mb-2 border-b"></p> */}
          <div className="flex flex-wrap">
            {allFolder?.map((index) => {
              return (
                // /classroom/${dataClass.id}/students
                // <Link to={{pathname:`/all-classwork/${index.folder_id}`}} >
                //   <FolderCard key={index.id} data={index} />
                // </Link>
                <div className="flex mt-3 mr-4 ">
                  <div className="flex p-2 border border-collapse rounded-md shadow-md cursor-pointer h-max border-bordergray w-60">
                    <Link
                      to={{ pathname: `/all-classwork/${index.folder_id}` }}
                    >
                      <div className="ml-2 text-sm truncate font-regular">
                        <FaFolderMinus />

                        <span className="ml-2 text-sm truncate font-regular">
                          {index.folder_name}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="ml-1​​ mt-12 text-xl font-semibold">Assigned task</p>
          <p className="mb-4 border-b"></p>
          <div className="flex flex-wrap">
            {allClasswork?.map((index) => {
              return <AssignedTaskCard key={index.id} data={index} />;
            })}
          </div>
          {/* pop up */}
          <CreateFolder />
          <AssignClasswork />
        </div>
      </div>
    </div>
  );
}

export default AllClasswork;
