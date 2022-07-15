import React, { useEffect, useState } from "react";
import { VscNotebook } from "react-icons/vsc";
import StudentFolder from "../../components/student/StudentFolder";
import StudentAssignedTask from "../../components/student/StudentAssignedTask";
import StudentNavBar from "../../components/StudentNavbar";
import { fetchAllClassworkStu } from "../../service/classMaterial";
import { fetchClassworkFolderStu } from "../../service/folderService";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllClassworkStuSlice } from "../../slices/assignedwork/assignedWorkSlice";

export default function Classwork() {
  // const scheduleStudent = useSelector((state) => state.scheduleStudent.value);
  const [classwork, setClasswork] = useState([]);
  const [folder, setFolder] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const assignedWork = useSelector((state) => state.assignedWork.value);
  console.log("Classwork in classwork",classwork);
  useEffect(() => {
    fetchClassworkFolderStu(3).then((r) => {
      setFolder(r.data);
      console.log("folder of classwork",r.data);
    });
    fetchAllClassworkStu().then((r) => dispatch(fetchAllClassworkStuSlice(r.data)),
    // setClasswork(r)
    );
    console.log();
  }, []);

  return (
    <div>
      <StudentNavBar />
      <div className="mt-8 mb-40 lg:mx-32 sm:mx-5 md:mx-12">
        <p className="mt-5 font-semibold lg:text-2xl">Class</p>
        <p className="w-16 mt-1 myhr"></p>
        <div className="mx-8 mt-9">
          <div className="flex">
            <label className="p-2 text-white rounded-full h-max bg-mygreen lg:text-AccountIcon">
              <VscNotebook />
            </label>
            <span className="mt-1 ml-5 font-medium text-black lg:text-2xl sm:text-xl md:text-xl">
              Classwork
            </span>
            <p className="mb-4 border-b"></p>
          </div>
          {/* Folder */}
          <p className="mt-8 text-xl font-medium">Folders</p>
          <p className="mb-4 border-b"></p>
          <div className="flex flex-wrap col-span-12">
            {/* card */}
            {folder?.map((index) => {
          return <StudentFolder key={index.id} data={index} />;
        })}
          </div>

          {/* Assigned task */}
          <div className="mt-12">
            <div className="text-xl font-medium">Assigned task</div>
            <p className="mb-4 border-b"></p>
            <div className="flex flex-wrap">
              {/* card  */}
              {assignedWork?.map((index) => {
                return <StudentAssignedTask key={index.id} data={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
