import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import StudentComment from "../../components/student/StudentComment";
import { submit } from "../../components/swal/Success";
import StudentNavBar from "../../components/StudentNavbar";
import { fetchAllClassworkStu } from "../../service/classMaterial";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllClassworkStuSlice } from "../../slices/assignedwork/assignedWorkSlice";

export default function SubmitAssignTask() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dataTasks = useSelector((state) => state.assignedWork.value);

  const tmp = dataTasks?.filter(
    (data) => data.class_materials_detail_id == id
  );

  console.log(tmp);
  const dataTask = tmp[0];

  useEffect(() => {
    fetchAllClassworkStu().then((r) => {
      dispatch(fetchAllClassworkStuSlice(r.data));
      console.log("classwork for submit of student", r.data);
    });
  }, [dispatch]);

  console.log(id);
  console.log(dataTasks);
  console.log(dataTask);

  return (
    <div>
      <StudentNavBar />
      <div className="mt-10 mb-40 lg:mx-32 sm:mx-5 md:mx-12">
        <div className="flex">
          <Link to="/stu-classwork" className="text-AboutIcon text-mygreen">
            <IoChevronBackCircle />
          </Link>
          {/* <NavLink className="ml-2 font-medium">Back</NavLink> */}
        </div>
        <div>
          <p className="mt-5 text-2xl font-semibold sm:text-medium md:text-base">
            Phnom Penh Classroom
          </p>
          <p className="w-20 mt-1 myhr"></p>
        </div>
        <div className="grid gap-3 lg:mx-10 lg:grid-cols-5 mt-9 sm:grid-cols-1 sm:mx-0 md:mx-0 md:grid-cols-5 ">
        <div className="col-span-3 p-5 pb-10 border-gray-200 rounded-lg shadow-md bg-smoke">
              <div className="flex">
                <label className="p-2 text-white rounded-full bg-mygreen lg:text-AccountIcon ">
                  <MdOutlineAssignment />
                </label>
                <label className="ml-3 text-2xl font-bold ">
                  {dataTask.title}
                </label>
                <label className="mt-2 ml-auto text-sm text-myred">
                  Due {dataTask?.deadline}
                </label>
              </div>
              <p className="ml-12 font-semibold text-myorange lg:text-md">
                {dataTask?.score} Point
              </p>
              <div className="grid grid-cols-3 mt-5 ml-12">
                <div className="col-span-2">
                  <p>{dataTask?.description}</p>
                  <div className="p-2 mt-8 bg-white border border-gray-400 border-solid rounded-md shadow-md">
                    <p className="ml-3">Assignment.docs</p>
                    <p className="ml-3 text-sm text-gray-400">Word</p>
                  </div>
                  {/* <StudentComment /> */}
                  <div className="mt-3 dropdown dropdown-right">
                    <label
                      tabindex="0"
                      className="underline dropdown dropdown-right"
                    >
                      <span>{dataTask?.total_comment}</span> comments
                    </label>
                    <div
                      tabindex="0"
                      className="mt-2 dropdown-content rounded-box"
                    >
                      <StudentComment />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* {
            dataTask ? (
            <div className="col-span-3 p-5 pb-10 border-gray-200 rounded-lg shadow-md bg-smoke">
              <div className="flex">
                <label className="p-2 text-white rounded-full bg-mygreen lg:text-AccountIcon ">
                  <MdOutlineAssignment />
                </label>
                <label className="ml-3 font-medium lg:text-2xl">
                  {dataTask.title}
                </label>
                <label className="mt-2 ml-auto text-sm text-myred">
                  Due {dataTask?.deadline}
                </label>
              </div>
              <p className="ml-12 font-bold text-myorange lg:text-md">
                {dataTask?.score}
              </p>
              <div className="grid grid-cols-3 mt-5 ml-12">
                <div className="col-span-2">
                  <p>{dataTask?.description}</p>
                  <div className="p-2 mt-8 bg-white border border-gray-400 border-solid rounded-md shadow-md">
                    <p className="ml-3">Assignment.docs</p>
                    <p className="ml-3 text-sm text-gray-400">Word</p>
                  </div>

                  <div className="mt-3 dropdown dropdown-right">
                    <label
                      tabindex="0"
                      className="underline dropdown dropdown-right"
                    >
                      <span>{dataTask?.total_comment}</span> comments
                    </label>
                    <div
                      tabindex="0"
                      className="mt-2 dropdown-content rounded-box"
                    >
                      <StudentComment />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="ml-2 text-lg ">No Assignments</h1>
           
          )} */}
          <div className="col-span-2 p-5 ml-2 rounded-lg shadow-md h-max bg-smoke">
            <label className="text-lg">Your work</label>
            <div className="justify-center px-2 py-3 mt-3 text-center border-2 border-dotted rounded-md border-mygreen">
              <label
                htmlFor="file-upload"
                className="relative font-medium bg-white rounded-md cursor-pointer hover:text-mygreen focus-within:outline-none "
              >
                <span>Upload file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
            <span className="ml-2 mt-3 before:content-['*'] after:ml-0.5 before:text-red-500 block text-xs font-medium text-slate-700">
              Support for file word only
            </span>
            <div className="mx-auto mt-6 text-center">
              <button
                onClick={() => {
                  submit();
                }}
                type="button"
                className="w-20 py-2 mx-auto text-sm font-medium text-white rounded-lg shadow-md bg-mygreen "
              >
                Submit
              </button>
            </div>
            <Link
              to="/formsubmit"
              className="flex justify-center mt-3 text-sm underline text-mygreen"
            >
              Do it with form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
