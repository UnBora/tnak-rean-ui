import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useParams } from "react-router-dom";
import { classedited } from "../swal/Success";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { editClass } from "../../service/classesService";
import {dataClass} from "../../components/teacher/ClassCard"
// import { useParams } from "react-router-dom";

export default function EditClass({ data }) {
  
  
  return (
    
    <div>
      
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal ">
        <div className="flex-shrink-0 shadow-xl card bg-smoke ">
          {/* EditClassroom*/}
          <section className="p-6 ">
            <form
              novalidate=""
              action=""
              className="flex flex-col max-w-lg mx-auto space-y-2 ng-untouched ng-pristine ng-valid"
            >
              <h1 className="text-2xl font-semibold ">Edit Classroom</h1>
              <p className="w-full pt-1 myhr"></p>
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md ">
                <div className="grid grid-cols-6 gap-4 col-span-full md:col-span-4">
                  {/* Name class */}
                  <div className="col-span-full">
                    <div className="col-span-full sm:col-span-3">
                      <label for="classname" className="text-lg font-medium">
                        Edit Class name <span className="text-red-600 ">*</span>
                      </label>
                      <input
                        
                        id="classname"
                        type="text"
                        placeholder="Enter new class name"
                        className="w-full px-4 py-2 mt-1 leading-tight bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:mygreen focus:outline-none focus:bg-white"
                      />
                    </div>
                  </div>
                  {/* School */}
                  <div className="col-span-full ">
                    {/* <label for="school" className="text-sm font-medium">
                      School <span className="text-red-600 ">*</span>
                    </label> */}
                    {/* <select
                      id="school"
                      type="text"
                      className="w-full px-4 py-2 mt-1 leading-tight bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
                    >
                      <option className="p-6 text-md">Royal University</option>
                      <option className="p-6 text-md ">KSHRD</option>
                      <option className="p-6 text-md ">NUM</option>
                    </select> */}
                    <div className="flex justify-between mt-5">
                      <div>
                        <label className="flex flex-col items-center px-5 tracking-wide uppercase border rounded-lg shadow-lg cursor-pointer border-myorange">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          <span className="text-sm leading-normal ">Image</span>
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            <div className="flex justify-center mt-2 space-x-4">
              <button
                className="px-4 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
                onClick={() => classedited()}
              >
                <label for="my-modal-2">Update</label>
              </button>
              <label
                for="my-modal-2"
                className="px-4 border-none rounded-full btn btn-sm bg-myorange hover:bg-myhoverorange"
              >
                Cancel
              </label>
            </div>
          </section>
          {/* End card */}
        </div>
      </div>
      {/* Add School */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="relative max-w-sm p-6 rounded-md bg-smoke">
          <label
            for="my-modal-6"
            className="absolute btn btn-xs btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="mb-2 text-lg font-bold">Add your school</h3>

          <div className="col-span-full sm:col-span-3">
            <input
              id="school"
              type="text"
              placeholder="Enter school name"
              className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
            />
          </div>
          <div className="modal-action">
            <label
              for="my-modal-6"
              className="px-4 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
              
              >
              Add
            </label>
          </div>
        </div>
      </div>
      {/* ========== */}
    </div>
  );
};

// export default EditClass;
