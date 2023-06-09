import React, { useEffect, useState } from "react";
import "../../App.css";
import Calendar from "react-calendar";
import ShowResult from "../../components/student/ShowResult";
import { useDispatch, useSelector } from "react-redux";
import { fetchScheduleStudentSlice } from "../../slices/schedule/scheduleStudentSlice";
import { fetchScheduleStudent } from "../../service/scheduleService";
import { fetchUpCommingWork } from "../../service/student/studentClassWorkService";
import { getCurrentUser } from "../../service/authService";
import StudentNavBar from "../../components/StudentNavbar";
import StudentUpcomingTask from "../../components/student/StudentUpcomingTask";
import { data } from "autoprefixer";

function StuIndex() {
  const [date, setDate] = useState(new Date());
  const scheduleStudent = useSelector((state) => state.scheduleStudent.value);
  const user = useSelector((state) => state.user.value);
  const [upComingWork, setUpComingWork] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchScheduleStudent(1).then((r) => dispatch(fetchScheduleStudentSlice(r)
    ));
    
    fetchUpCommingWork(user.id, 1).then((r) => {
      console.log("work",r);
      setUpComingWork(r.data);
    });
  }, []);

  return (
    <div>
      <StudentNavBar/>
      <div className="mb-40 mx-100px md:flex">
        <div className="mt-6 ">
          <div className="max-w-md space-y-3">
            <div className="p-2 rounded-lg bg-smoke h-52">
              <h2 className="text-2xl font-medium text-mygreen">Schedule</h2>
              <p className="mb-2 myhr"></p>
              <select
                onChange={(e) => {
                  fetchScheduleStudent(e.target.value).then((r) =>
                    dispatch(fetchScheduleStudentSlice(r))
                  );
                }}
                id="username"
                type="text"
                placeholder="Username"
                className="px-4 py-1 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:mygreen focus:outline-none focus:bg-white"
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
              {scheduleStudent.data?.map((item) => (
                <div className="flex justify-between mt-2 text-sm font-medium">
                  <span>{item.subject}</span>
                  <span>{item.time}</span>
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
        <div className="w-full h-full ml-5 mt-7 ">
          <div className="pt-1 rounded-lg bg-smoke">
            <div className="mx-4 my-4 ">
            <p className="text-3xl font-semibold ">Upcoming</p>
              <p className="mt-2 border-b"></p>
            </div>

            <div className="flex flex-wrap mx-4">
              {upComingWork?.map((index) => (
                <StudentUpcomingTask assignedTask={index} />
              ))}
            </div>
            <ShowResult />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StuIndex;
