import React, { useEffect, useState } from 'react';
import { BsFolderPlus } from 'react-icons/bs';
import { MdOutlineAssignment, MdOutlineHomeWork, MdOutlineQuiz, MdWork } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import NavbarT from '../../components/NavbarT';
import AssignClasswork from '../../components/teacher/AssignClasswork';
import AssignedTaskCard from '../../components/teacher/AssignedTaskCard';
import { fetchClassworkInFolder } from '../../service/classMaterial';

const FolderItem = () => {
  const {folderId} = useParams()
  const [classwork, setClasswork] = useState([]);
  useEffect(() => {
    fetchClassworkInFolder(folderId).then((r) => {
      setClasswork(r.data);
    });
  }, []);

  console.log(classwork)
  return (
    <div>
    <NavbarT />
    <div className="mt-10 mx-100px">
    
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
    <p className="ml-1​​ mt-12 text-xl font-semibold">Assigned task</p>
    <p className="mb-4 border-b"></p>
    <div className="flex flex-wrap">
      {classwork?.map((index) => {
        return <AssignedTaskCard key={index.id} data={index} />;
      })}
    </div>
    {/* pop up */}
    <AssignClasswork />
  </div>
  </div>
  );
}

export default FolderItem;
