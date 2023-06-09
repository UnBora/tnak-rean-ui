import React, { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { BsFolderPlus } from "react-icons/bs";
import {
  MdOutlineHomeWork,
  MdOutlineAssignment,
  MdOutlineQuiz,
} from "react-icons/md";
import AssignClasswork from "../../components/teacher/AssignClasswork";
import FolderCard from "../../components/teacher/FolderCard";
import AssignedTaskCard from "../../components/teacher/AssignedTaskCard";
import { fetchAllclasswork } from "../../service/classMaterial";
import { fetchClassworkFolder, removeFolder } from "../../service/folderService";
import CreateFolderPerClass from "../../components/teacher/CreateFolderPerClass";
import folderClassworkSlice, { fetchAllfolderClassworkSlice } from "../../slices/folders/folderClassworkSlice";
import { useDispatch, useSelector } from "react-redux";

function ManageClasswork() {
  const allFolder = useSelector((state) => state.folderClasswrok.value);
  const dispatch=useDispatch();
  const [folder, setFolder] = useState([]);
  const [classwork, setClasswork] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchClassworkFolder(id, 1).then((r) => {
      dispatch(fetchAllfolderClassworkSlice(r.data))
      console.log("folder of teacher", r.data);
    });
    fetchAllclasswork(1, id).then((r) => {
      setClasswork(r.data);
      console.log("classwork of teacher", r.data);
    });
 
  }, []);
  function onDeleteFolder(id) {
    removeFolder(id).then((r) => {
      fetchClassworkFolder(id, 1).then((r) => {
        dispatch(fetchAllfolderClassworkSlice(r.data));
        console.log(r.data);
      });
    });
  }
  return (
    <div className="">
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
          <div className="text-lg">
            <label
              for="my-modal-folder"
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
      <p className="mb-2 border-b"></p>
      <div className="flex flex-wrap">
        {allFolder?.map((index) => {
          return (
            // /classroom/:id/classworks/:F-id

            <FolderCard
              key={index.id}
              data={index}
              link={`/classroom/${id}/classworks/${index.folder_id}`}
              onDelete={onDeleteFolder}
            />
          );
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
      <CreateFolderPerClass />
      <AssignClasswork />
    </div>
  );
}

export default ManageClasswork;
