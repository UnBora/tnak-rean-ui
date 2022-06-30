import React from "react";
import { MdOutlineAddLink, MdOutlineHomeWork } from "react-icons/md";
import ReactPlayer from "react-player";
import AddLink from "./AddLink";

function UploadCourse() {
  return (
    <div>
     
      <div>
        <input type="checkbox" id="my-modal-upload" class="modal-toggle " />
        <div class="modal ">
          <div class="card flex-shrink-0  shadow-xl bg-smoke w-screen h-screen   ">
            <label
              for="my-modal-upload"
              class="btn btn-sm btn-circle absolute right-3 top-3 z-10"
            >
              ✕
            </label>

            {/* Register card */}
            <section className="p-6 ">
              <p className="flex text-2xl font-semibold ">
                <MdOutlineHomeWork className="w-10 h-10 p-2 mr-2 text-white border rounded-full bg-mygreen" />
                Upload Course File
              </p>
              <div className="pt-1 myhr"></div>
              <form class="w-full max-w-3xl mt-3 bg-white p-5 rounded-lg m-auto border">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <input
                      class="appearance-none block w-full  text-gray-700 shadow-md border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500"
                      id="grid-password"
                      type="text"
                      placeholder="Tittle"
                    />
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                    <select
                      id="school"
                      type="text"
                      placeholder="Username"
                      className="w-full px-4 py-3 leading-tight text-gray-700 bg-white border rounded-md focus:outline-black focus:bg-white"
                    >
                      <option className="p-6 text-xl ">KSHRD</option>
                      <option className="p-6 text-xl ">RUPP</option>
                      <option className="p-6 text-xl ">Setec</option>
                    </select>
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <input
                      class="appearance-none block w-full  text-gray-700 shadow-lg border  rounded py-3 px-4 mb-3  focus:outline-none  focus:border-gray-500"
                      id="grid-password"
                      type="text"
                      placeholder="Tittle"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="appearance-none block w-full  text-gray-700 shadow-md border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500"
                      id="grid-password"
                      type="date"
                      placeholder="Tittle"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label class=" flex flex-col items-center  rounded shadow-lg tracking-wide uppercase border cursor-pointer   py-1  mb-3 ">
                      <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class=" text-sm font-normal">Upload File</span>
                      <input type="file" class="hidden" />
                    </label>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
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
                    <button className="mt-3 border-none rounded-full btn bg-mygreen hover:bg-myhovergreen">
                      Upload
                    </button>
                  </div>
                </div>
              </form>
            </section>
            {/* End card */}
          </div>
        </div>
      </div>
      {/* ========== */}
    </div>
  );
}

export default UploadCourse;
