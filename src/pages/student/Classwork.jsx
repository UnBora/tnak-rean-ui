import React from "react";
import { VscNotebook } from "react-icons/vsc";
import StudentFolder from "../../components/student/StudentFolder";
import StudentAssignedTask from "../../components/student/StudentAssignedTask";
import Folders from "../../components/teacher/Folders";

export default function Classwork() {
  return (
    <div className="mt-8 mb-40 lg:mx-32 sm:mx-5 md:mx-12">
      <p className="mt-5 font-semibold lg:text-2xl sm:text-medium md:text-base">
        Phnom Penh Classroom
      </p>
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
         <StudentFolder/>
         <StudentFolder/>
         <StudentFolder/>
         <StudentFolder/>
        </div>

        {/* Assigned task */}
        <div className="mt-12">
          <div className="text-xl font-medium">Assigned task</div>
          <p className="mb-4 border-b"></p>
          <div className="flex flex-wrap">
          {/* card  */}
          <StudentAssignedTask/>
          <StudentAssignedTask/>
          <StudentAssignedTask/>
          <StudentAssignedTask/>
          </div>
        </div>
      </div>
    </div>
  );
}
