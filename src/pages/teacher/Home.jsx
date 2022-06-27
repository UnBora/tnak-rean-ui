import React from "react";
import "../../App.css";
import { useState } from "react";
import Calendar from "react-calendar";
import NavbarT from "../../components/NavbarT";
import ClassCard from "../../components/teacher/ClassCard";
import CreateClass from "../../components/teacher/CreateClass";
import Stepper from "../../components/Stepper";
import { useAuth } from "../../components/auth";

export default function Testing() {
  const [date, setDate] = useState(new Date());
  const auth=useAuth()
  return (
    <div className=" mx-100px md:flex">
      {" "}
      <div class="   mt-6 ">
        <div className="max-w-md space-y-3">
          <div className="p-2 rounded-lg bg-smoke h-52">
            <h2 className="text-2xl font-medium text-mygreen">Schedule</h2>
            <p className="mb-2 myhr"></p>
            <select
              id="username"
              type="text"
              placeholder="Username"
              className="px-4 py-1 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:mygreen focus:outline-none focus:bg-white"
            >
              {" "}
              <option className="p-6 text-sm ">Monday</option>
              <option className="p-6 text-sm ">Tuesday</option>
              <option className="p-6 text-sm ">Wednesday</option>
              <option className="p-6 text-sm ">Thursday</option>
              <option className="p-6 text-sm ">Friday</option>
              <option className="p-6 text-sm ">Satursday</option>
              <option className="p-6 text-sm ">Sunday</option>
            </select>
            <div className="flex justify-between mt-2 text-sm font-medium">
              <span>Phnom Penh</span> <span>7:00-9:00</span>
              <span>KSHRD</span>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-smoke">
            <div className="mx-1 calendar-container">
              <h2 className="text-2xl font-medium text-mygreen">Calendar</h2>
              <p className="myhr"></p>

              <Calendar
                onChange={setDate}
                value={date}
                className="text-center text-mygreen"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-6 ml-3">
        <div className="pt-5 rounded-lg bg-smoke">
          <div className="mx-5 my-4 ">
            <div className="flex justify-between">
              <label
                className="px-5 ml-1 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
                for="my-modal-3"
              >
                Create
              </label>
              <div class=" flex justify-start items-center  relative">
                <input
                  class="text-sm leading-none text-left text-gray-600 px-4 py-2 w-full border rounded-full border-gray-300  outline-none"
                  type="text"
                  placeholder="Find classroom"
                />
                <svg
                  class="absolute right-1 z-10 cursor-pointer bg-mygreen p-1 h-6 w-6 rounded-full text-white"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                    stroke="#4B5563"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 21L15 15"
                    stroke="#4B5563"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-no-wrap flex-wrap sm:flex-wrap md:flex-wrap lg:flex-no-wrap xl:flex-wrap md:justify-center sm:justify-center">
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <CreateClass />
          </div>
        </div>
      </div>
    </div>
  );
}
