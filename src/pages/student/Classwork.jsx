import React, { useEffect, useState } from "react";
import { VscNotebook } from "react-icons/vsc";
import StudentFolder from "../../components/student/StudentFolder";
import StudentAssignedTask from "../../components/student/StudentAssignedTask";
import StudentNavBar from "../../components/StudentNavbar";
import { fetchAllClassworkStu } from "../../service/classMaterial";
import { fetchClassworkFolderStu } from "../../service/folderService";
import { useParams } from "react-router-dom";

export default function Classwork() {
  const [classwork, setClasswork] = useState([]);
  const [folder, setFolder] = useState([]);
  const { id } = useParams();
  console.log(classwork);
  useEffect(() => {
    fetchClassworkFolderStu(2).then((r) => {
      setFolder(r.data);
      console.log("folder of classwork",r.data);
    });
    fetchAllClassworkStu().then((r) => {
      setClasswork(r.data);
      console.log("classwork of student", r.data);
    });
  }, []);
  
  return (
    <div>
      <StudentNavBar />
      <div className="mt-8 mb-40 lg:mx-32 sm:mx-5 md:mx-12">
        <p className="mt-5 font-semibold lg:text-2xl">Phnom Penh Classroom</p>
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
              {classwork?.map((index) => {
                return <StudentAssignedTask key={index.id} data={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
