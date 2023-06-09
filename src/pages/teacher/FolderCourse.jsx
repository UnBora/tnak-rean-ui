import React, { useEffect, useState } from 'react'
import { BsFolderPlus } from 'react-icons/bs';
import { GiBookCover } from 'react-icons/gi';
import { MdOutlineHomeWork } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import NavbarT from '../../components/NavbarT';
import FilesCard from '../../components/teacher/FilesCard';
import UploadCourse from '../../components/teacher/UploadCourse';
import { fetchCourseInFolder } from '../../service/classMaterial';

function FolderCourse() {
  const {folderCourseId} = useParams()
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetchCourseInFolder(folderCourseId).then((r) => {
      setCourse(r.data);
    });
  }, []);
  return (
    <div>
    <NavbarT />
    <div className="mt-10 mx-100px">
      <div className="flex space-x-2">
        <div className="w-8 h-8 rounded-full bg-mygreen">
          <GiBookCover className="flex m-auto mt-2 text-white align-middle" />
        </div>
        <p className="mb-3 text-2xl font-semibold">Course</p>
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
          className="w-48 text-lg font-medium shadow-lg dropdown-content menu rounded-box bg-base-100"
        >
          <label className="py-2 pl-4 hover:bg-gray-200 hover:rounded-t-lg">
            <label for="my-modal-1" className="flex">
              <BsFolderPlus className="mt-1 mr-3 text-black " />
              Folder
            </label>
          </label>
          <label className="py-2 pl-4 border-t hover:bg-gray-200 hover:rounded-b-lg">
            <label for="my-modal-upload" className="flex">
              <MdOutlineHomeWork className="mt-1 mr-3 text-black" />
              Upload File
            </label>
          </label>
        </div>
      </div>
      <p className="ml-1 text-xl font-semibold mt-9">Document</p>
      <p className="mb-4 border-b"></p>
      <div className="flex flex-wrap">
        
      {course?.map((index) => {
        return <FilesCard key={index.id} data={index} />;
      })}
      </div>
      {/* folder pop up */}
      <UploadCourse />
    </div>
  </div>
  )
}

export default FolderCourse