import React from "react";
import { MdOutlineAddLink, MdOutlineHomeWork } from "react-icons/md";
import ReactPlayer from "react-player";
import AddLink from "./AddLink";

function UploadCourse() {
  return (
    <div>
    <input type="checkbox" id="my-modal-upload" className="modal-toggle " />
    <div className="modal ">
      <div className="flex-shrink-0 w-screen h-screen overflow-y-scroll shadow-xl card bg-smoke ">
        <label
          for="my-modal-upload"
          className="absolute z-10 btn btn-sm btn-circle right-3 top-3"
        >
          ✕
        </label>

        {/* Assign card */}
        <section className="p-6 ">
          <p className="flex text-2xl font-semibold ">
            <MdOutlineHomeWork className="w-10 h-10 p-2 mr-2 text-white border rounded-full bg-mygreen" />
            Upload File
          </p>
          <div className="pt-1 myhr"></div>
          <form className="w-full max-w-3xl p-5 m-auto mt-3 bg-white border rounded-lg">
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <p className="font-medium">Title</p>
                <input
                  className="block w-full px-4 py-3 mt-3 mb-3 leading-tight text-gray-700 border rounded shadow-md appearance-none focus:outline-none focus:ring-1 focus:ring-mygreen"
                  id="grid-password"
                  type="text"
                  placeholder="Tittle"
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 ">
                <p className="font-medium ">School</p>
                <select
                  id="school"
                  type="text"
                  className="w-full px-4 py-3 leading-tight text-gray-700 bg-white border rounded-md shadow-lg focus:outline-mygreen focus:bg-white focus:ring-1 focus:ring-mygreen"
                >
                  <option className="p-6 text-md">All School</option>
                  <option className="p-6 text-md">KSHRD</option>
                  <option className="p-6 text-md">RUPP</option>
                  <option className="p-6 text-md">Setec</option>
                </select>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 ">
              <p className="font-medium ">Classroom</p>
              <select
                id="class"
                type="text"
                className="w-full px-4 py-3 leading-tight text-gray-700 bg-white border rounded-md shadow-md focus:ring-1 focus:ring-mygreen "
              >
                <option className="p-6 text-md">All classes</option>
                <option className="p-6 text-md">PP</option>
                <option className="p-6 text-md">M5</option>
                <option className="p-6 text-md">BTB</option>
              </select>
            </div>
              
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
      
        
              <div className="w-full px-3 mt-6">
                <label className="flex flex-col items-center py-1 mb-3 tracking-wide uppercase border rounded shadow-lg cursor-pointer ">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="text-sm font-normal rounded focus:ring-1 focus:ring-mygreen">
                    Upload File
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <div className="flex space-x-2">
                  <MdOutlineAddLink className="text-2xl" />
                  <label for="my-modal-link">
                    <p className="font-medium cursor-pointer">Add link</p>
                  </label>
                  <AddLink />
                </div>

                <div className="mt-3 player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="flex justify-end mt-2">
                  {" "}
                  <label
                    className="px-5 mt-3 ml-1 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
                  
                    for="my-modal-upload"
                  >
                    Assign
                  </label>
                </div>
              </div>
            </div>
          </form>
        </section>
        {/* End card */}
      </div>
    </div>
  </div>
  );
}

export default UploadCourse;
