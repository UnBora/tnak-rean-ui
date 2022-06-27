import React from "react";
import { BiBookBookmark } from "react-icons/bi";
import FilesCard from "../../components/FilesCard";
import StudentFolder from "../../components/student/StudentFolder";

export default function Course() {
  return (
    <div className="mt-8 mb-40 lg:mx-32 sm:mx-5 md:mx-12">
      <p className="mt-5 font-semibold lg:text-2xl sm:text-medium md:text-base">
        Phnom Penh Classroom
      </p>
      <p className="w-16 mt-1 myhr"></p>
      <div className="mx-8 mt-9">
      <div className="flex">
          <label className="p-2 text-white rounded-full h-max bg-mygreen lg:text-AccountIcon">
            <BiBookBookmark/>
          </label>
          <span className="mt-1 ml-5 font-medium text-black lg:text-2xl sm:text-xl md:text-xl">
            Course
          </span>
        </div>
        <p className="mt-8 text-xl font-medium">Folders</p>
        <div className="flex flex-wrap col-span-12">
        {/* card */}
         <StudentFolder/>
        </div>
        <div className="mt-12">
          <div className="mb-3 text-xl font-medium">Files</div>
          <div className="flex flex-wrap">
          {/* card  */}
          <FilesCard/>
          <FilesCard/>
          <FilesCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
