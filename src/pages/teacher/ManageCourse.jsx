import {GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom";
import FilesCard from "../../components/FilesCard";
import AssignedTask from "../../components/teacher/AssignedTask";
import Folders from "../../components/teacher/Folders";

function ManageCourse() {
  return (
    <div>
      <div className="flex space-x-2">
        <div className="w-8 h-8 rounded-full bg-mygreen">
          <GiBookCover className="flex m-auto mt-2 text-white align-middle" />
        </div>
        <p className="mb-3 text-2xl font-semibold">Course</p>
      </div>
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-4 h-4 mr-2 stroke-current"
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
      <label
        className="px-5 my-4 ml-1 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
        for="my-modal-3"
      >
        Create
      </label>
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

      <p className="ml-1​​ mt-4 text-lg font-bold">Document</p>
      <p className="mb-4 border-b"></p>
      <div className="flex flex-wrap">
       <FilesCard/>
       <FilesCard/>
       <FilesCard/>
       <FilesCard/>
      </div>
    </div>
  );
}

export default ManageCourse;
