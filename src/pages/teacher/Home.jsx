import React from "react";
import "../../App.css";
import { useState } from "react";
import Calendar from "react-calendar";
import ClassCard from "../../components/teacher/ClassCard";
import CreateClass from "../../components/teacher/CreateClass";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllClassesSlice } from "../../slices/classes/classesSlice";
import { fetchAllClasses } from "../../service/classesService";
import { fetchScheduleTeacher } from "../../service/scheduleService";
import { fetchScheduleClassSlice } from "../../slices/schedule/scheduleTeacherSlice";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const classes = useSelector((state) => state.classes.value);
  const dispatch = useDispatch();

  fetchAllClasses().then(
    (r) => console.log("response in Home : ", r),
    (r) => console.log("Error : ", r)
  );
  const scheduleTeacher = useSelector((state) => state.scheduleTeacher.value);
  const [daySelect, setdaySelect] = useState();
  // fetchAllClasses().then(
  //   (r) => console.log("response in Home : ", r),
  //   (r) => console.log("Error : ", r)
  // );
  useEffect(() => {
    fetchAllClasses().then((r) => dispatch(fetchAllClassesSlice(r)));
    fetchScheduleTeacher(2, 1).then((r) =>
      dispatch(fetchScheduleClassSlice(r))
    );
  }, []);
  console.log("test: ", scheduleTeacher);
  return (
    <div className="mx-100px md:flex">
      <div className="mt-6 ">
        <div className="max-w-md space-y-3">
          <div className="p-2 rounded-lg bg-smoke h-52">
            <h2 className="text-2xl font-medium text-mygreen">Schedule</h2>
            <p className="mb-2 myhr"></p>
            <p>{daySelect}</p>
            <select
              onChange={(e) => {
                fetchScheduleTeacher(2, e.target.value).then((r) =>
                  dispatch(fetchScheduleClassSlice(r))
                );
              }}
              id="weekday"
              type="text"
              value={daySelect}
              className="px-4 py-1 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
            >
              <option value={1} className="p-6 text-sm ">
                Monday
              </option>
              <option value={2} className="p-6 text-sm ">
                Tuesday
              </option>
              <option value={3} className="p-6 text-sm ">
                Wednesday
              </option>
              <option value={4} className="p-6 text-sm ">
                Thursday
              </option>
              <option value={5} className="p-6 text-sm ">
                Friday
              </option>
              <option value={6} className="p-6 text-sm ">
                Satursday
              </option>
              <option value={7} className="p-6 text-sm ">
                Sunday
              </option>
            </select>
            {scheduleTeacher.data?.map((item) => (
              <div className="flex justify-between mt-2 text-sm font-medium">
                <span>{item.subject}</span>
                <span>{item.time}</span>
                <span>{item.class_name}</span>
              </div>
            ))}
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
      <div className="w-full h-full pb-6 mt-6 ml-3 bg-smoke">
        <div className="pt-5 rounded-lg">
          <div className="mx-5 my-4">
            <div className="flex justify-between">
              <label
                className="px-5 ml-1 text-white border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
                for="my-modal-3"
              >
                Create
              </label>
              <div className="relative flex items-center justify-start ">
                <input
                  className="w-full px-4 py-2 text-sm leading-none text-left text-gray-600 border border-gray-300 rounded-full outline-none"
                  type="text"
                  placeholder="Find classroom"
                />
                <svg
                  className="absolute z-10 w-6 h-6 p-1 text-white rounded-full cursor-pointer right-1 bg-mygreen"
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

          <div className="flex flex-wrap ml-4 sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-wrap">
            {classes.data?.map((index) => {
              return <ClassCard key={index.id} data={index} />;
            })}
            {/* pop up create class  */}
            <CreateClass />
          </div>
        </div>
      </div>
    </div>
  );
}
