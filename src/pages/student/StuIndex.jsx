import React, { useState } from "react";

import "../../App.css";

import Calendar from "react-calendar";

import ClassCard from "../../components/teacher/ClassCard";
import CreateClass from "../../components/teacher/CreateClass";
import StudentAssignedTask from "../../components/student/StudentAssignedTask";
import ResultList from "../teacher/ResultList";
import ShowResult from "../../components/student/ShowResult";

function StuIndex() {
  const [date, setDate] = useState(new Date());
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
        <div className="pt-1 rounded-lg bg-smoke">
          <div className="mx-5 my-4 ">
            <div className="flex justify-between ">
              <p className="pt-2 mt-2 text-2xl font-semibold">Upcoming</p>
            </div>
            <p className="mt-2 border-b"></p>
          </div>

          <div className="flex flex-no-wrap flex-wrap sm:flex-wrap md:flex-wrap lg:flex-no-wrap xl:flex-wrap md:justify-center sm:justify-center">
            <StudentAssignedTask />
            <StudentAssignedTask />
            <StudentAssignedTask />
            <StudentAssignedTask />
          </div>
         <ShowResult/>
        </div>
      </div>
    </div>
  );
}

export default StuIndex;