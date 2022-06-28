import React, { useState } from "react";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import AssignedTask from "../../components/teacher/AssignedTask";
import Folders from "../../components/teacher/Folders";
import { BsFolderPlus } from "react-icons/bs";
import {
  MdOutlineHomeWork,
  MdOutlineAssignment,
  MdOutlineQuiz,
} from "react-icons/md";
import CreateFolder from "../../components/CreateFolder";
import { FcGoogle } from "react-icons/fc";

function ManageClasswork() {
  return (
    <div>
      <div className="flex space-x-2">
        <div className="w-8 h-8 rounded-full bg-mygreen">
          <MdWork className="flex m-auto mt-2 text-white align-middle" />
        </div>
        <p className="mb-3 text-2xl font-semibold">Classwork</p>
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

      <div class="dropdown dropdown-right">
        <label
          tabindex="0"
          class="px-5 my-4 ml-1 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
        >
          Create
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 bg-smoke"
        >
          <li>
            <label for="my-modal-1">
              <BsFolderPlus />
              Folder
            </label>
          </li>
          <li>
            <label for="my-modal-2">
              <MdOutlineHomeWork />
              Homework
            </label>
          </li>
          <li>
            <label for="my-modal-1">
              <MdOutlineAssignment />
              Assignment
            </label>
          </li>
          <li>
            <Link to="#">
              <MdOutlineQuiz />
              Quiz
            </Link>
          </li>
        </ul>
      </div>
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

      <p className="ml-1​​ mt-4 text-lg font-bold">Assigned task</p>
      <p className="mb-4 border-b"></p>
      <div className="flex flex-wrap">
        <AssignedTask />
        <AssignedTask />
        <AssignedTask />
      </div>
      <CreateFolder />
      {/* Homework */}
      <div>
        <input type="checkbox" id="my-modal-2" class="modal-toggle" />
        <div class="modal ">
          <div class="card flex-shrink-0  shadow-xl bg-smoke  ">
            <label
              for="my-modal-2"
              class="btn btn-sm btn-circle absolute right-2 top-2 z-10"
            >
              ✕
            </label>

            {/* Register card */}
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50 ">
              <p className="text-2xl font-semibold ">Homework</p>
              <div className="pt-1 myhr"></div>
              <form class="w-full max-w-lg mt-3">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      placeholder="Tittle"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <textarea
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      placeholder="Instruction"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <select class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                      <option value="">Hello</option>
                      <option value="">hi</option>
                      <option value="">Hello</option>
                    </select>
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Point"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border bord rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="date"
                      placeholder="Due"
                    />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="file"
                      placeholder="Upload file"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                </div>
              </form>
              <button className="border-none rounded-full btn bg-mygreen">
                Assign
              </button>
            </section>
            {/* End card */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageClasswork;
