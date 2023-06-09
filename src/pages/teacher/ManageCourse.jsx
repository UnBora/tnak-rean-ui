import { useEffect, useState } from "react";
import { BsFolderPlus } from "react-icons/bs";
import { GiBookCover } from "react-icons/gi";
import { MdOutlineHomeWork } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import NavbarT from "../../components/NavbarT";
import CreateFolder from "../../components/teacher/CreateFolder";
import FilesCard from "../../components/teacher/FilesCard";
import FolderCard from "../../components/teacher/FolderCard";
import UploadCourse from "../../components/teacher/UploadCourse";
import { fetchAllcourse } from "../../service/classMaterial";
import { fetchCourseFolder, removeFolder } from "../../service/folderService";
import CreateFolderPerClass from "../../components/teacher/CreateFolderPerClass";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllfolderCourseClassSlice } from "../../slices/folders/folderCoursePerClassSlice";
function ManageCourse() {
  const [folder, setFolder] = useState([]);
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const allFolder = useSelector((state) => state.folderCourseInClass.value);
  // const allFolder = useSelector((state) => state.folderCourseInClass);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCourseFolder(id, 1).then((r) => {
      console.log("course", r.data);
      dispatch(fetchAllfolderCourseClassSlice(r.data));
    });
    fetchAllcourse(1, id).then((r) => {
      setCourse(r.data);
    });
  }, []);
  function onDeleteFolder(id) {
    removeFolder(id).then((r) => {
      fetchCourseFolder(id, 1).then((r) => {
        dispatch(fetchAllfolderCourseClassSlice(r.data));
        console.log(r.data);
      });
    });
  }

  return (
    <div>
      {/* <NavbarT/> */}
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
              for="my-modal-upload"
              className="flex py-2 cursor-pointer hover:bg-gray-300 hover:rounded"
            >
              <MdOutlineHomeWork className="mx-4 mt-1" />
              Upload File
            </label>
          </div>
        </div>
      </div>
      <p className="mt-3 ml-1 text-xl font-semibold">Folder</p>
      <p className="mb-2 border-b"></p>
      <div className="flex flex-wrap">
        {allFolder?.map((index) => {
          return (
            <FolderCard
              key={index.id}
              data={index}
              link={`/classroom/${id}/courses/${index.folder_id}`}
              onDelete={onDeleteFolder}
            />
          );
        })}
      </div>

      <p className="ml-1 text-xl font-semibold mt-9">Document</p>
      <p className="mb-4 border-b"></p>
      <div className="flex flex-wrap">
        {course?.map((index) => {
          return <FilesCard key={index.id} data={index} />;
        })}
      </div>
      {/* folder pop up */}
      <CreateFolderPerClass />
      <UploadCourse />
    </div>
  );
}

export default ManageCourse;
