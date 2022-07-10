import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { createClasses } from "../../service/classesService";
import { createClass } from "../swal/Success";
import { create } from "../../service/classesService";
import { fecthAllClassByTeacher } from "../../service/classesService";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { faPersonWalkingDashedLineArrowRight } from "@fortawesome/free-solid-svg-icons";
import { fetchAllClassesSlice } from "../../slices/classes/classesSlice";

export default function CreateClass() {
  const [className, setClassName] = useState("");
  const [imgUrl, setImgUrl] = useState([]);
  const [imgfile, uploadimg] = useState([]);
  const dispatch = useDispatch();

  console.log(className);

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      // uploadimg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])
      // console.log(e.target.files[0]);
      setImgUrl(e.target.files[0]);
    }
  };

  const handleCreateClass = (e) => {
    console.log(e.target);
    create(className, imgUrl).then(createClass());
    fecthAllClassByTeacher().then((r) => dispatch(fetchAllClassesSlice(r)));
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal ">
        <div className="flex-shrink-0 shadow-xl card bg-smoke ">
          {/* CreateClassroom*/}
          <section className="p-6 ">
            <form
              novalidate=""
              action=""
              className="flex flex-col max-w-lg mx-auto space-y-2 ng-untouched ng-pristine ng-valid"
            >
              <h1 className="text-2xl font-semibold ">Create Classroom</h1>
              <p className="w-full pt-1 myhr"></p>
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md ">
                <div className="grid grid-cols-6 gap-4 col-span-full md:col-span-4">
                  {/* Name class */}
                  <div className="col-span-full">
                    <div className="col-span-full sm:col-span-3">
                      <label
                        for="classname"
                        className="-mt-5 text-lg font-medium"
                      >
                        Class name <span className="text-red-600 ">*</span>
                      </label>
                      <input
                        onChange={(e) => setClassName(e.target.value)}
                        id="classname"
                        type="text"
                        placeholder="Enter class name"
                        className="w-full px-4 py-2 mt-1 leading-tight bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:ring-opacity-75 focus:mygreen focus:outline-none focus:bg-white"
                      />
                    </div>
                  </div>
                  {/* School */}
                  <div className="col-span-full ">
                    {/* <label for="username" className="text-sm font-medium">
                      School <span className="text-red-600 ">*</span>
                    </label>
                    <select
                      id="school"
                      type="text"
                      className="w-full px-4 py-2 mt-1 leading-tight bg-white border rounded-md focus:ring-mygreen focus:ring-1 focus:outline-none focus:bg-white"
                    >
                      <option className="p-6 text-md">Royal University</option>
                      <option className="p-6 text-md ">KSHRD</option>
                      <option className="p-6 text-md ">NUM</option>
                    </select> */}
                    <div className="flex justify-between mt-5">
                      <div>
                        {/* <label className="flex flex-col items-center px-5 tracking-wide uppercase border rounded-lg shadow-lg cursor-pointer border-myorange">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          <span className="text-sm leading-normal">Image</span>
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) => imgFilehandler(e)}
                          />
                        </label> */}
                        <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-mygreen hover:file:bg-slate-200"/>
                      </div>
                      {/* <label
                        for="my-modal-5"
                        className="flex mt-2 space-x-1 cursor-pointer row text-md"
                      >
                        <IoMdAddCircleOutline className="mt-1" />
                        Add School
                      </label> */}
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            <div className="flex justify-center mt-2 space-x-4">
              <label
                for="my-modal-3"
                onClick={(e) => handleCreateClass(e)}
                className="px-4 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
              >
                Create
              </label>
              <label
                for="my-modal-3"
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
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="relative max-w-sm p-6 rounded-md bg-smoke">
          <label
            for="my-modal-5"
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
              for="my-modal-5"
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
}
