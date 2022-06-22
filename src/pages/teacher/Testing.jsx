import React from "react";
import "../../App.css";
import { FiMoreVertical } from "react-icons/fi";
import { ImUsers } from "react-icons/im";
import { useState } from "react";
import Calendar from "react-calendar";
import NavbarT from "../../components/teacher/NavbarT";
import ClassCard from "../../components/teacher/ClassCard";

export default function Testing() {
    const [date, setDate] = useState(new Date());
  return (
    <div class="grid grid-cols-4 gap-4  mx-100px">
      <div className="grid grid-rows-2 gap-y-2">
       

        <div className="bg-smoke">
        <h2 className="text-2xl font-medium text-mygreen">Schedule</h2>
        <p className="myhr"></p>
        <select
                      id="username"
                      type="text"
                      placeholder="Username"
                      className="px-4 py-1 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:mygreen focus:outline-none focus:bg-white"
                    >
                      {" "}
                      <option className="p-6 text-sm ">Phnom Penh</option>
                      <option className="p-6 text-sm ">M11</option>
                      <option className="p-6 text-sm ">SR</option>
                    </select>
                    <div className="flex justify-between mt-2 text-sm font-medium">
                      <span>Phnom Penh</span> <span>7:00-9:00</span><span>KSHRD</span>
                    </div>
        </div>
        <div className="grid p-2 rounded-lg bg-smoke">
        <div className="mx-1 calendar-container">
          <h2 className="text-2xl font-medium text-mygreen">Calendar</h2>
          <p className="myhr"></p>
          <h2 className="pt-2 font-medium">
            {" "}
            <span></span> {date.toDateString()}
          </h2>
          <Calendar
            onChange={setDate}
            value={date}
            className="text-center text-mygreen"
          />
        </div>
      </div>
      </div>
      <div className="col-span-3 bg-smoke">
        <div className="grid grid-cols-3 gap-5 mx-5">
        
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </div>
      </div>
    </div>
  );
}
