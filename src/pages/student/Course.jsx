import React, { useState } from "react";
import { BiBookBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import StudentFiles from "../../components/student/StudentFiles";
import StudentFolder from "../../components/student/StudentFolder";
import StudentNavBar from "../../components/StudentNavbar";

export default function Course() {
  const [folder, setFolder] = useState([{ Title: "folder" }]);

  return (
    <div>
      <StudentNavBar />
      <div className="mt-8 mb-40 lg:mx-32 sm:mx-5 md:mx-12">
        <p className="mt-5 font-semibold lg:text-2xl sm:text-medium md:text-base">
          Phnom Penh Classroom
        </p>
        <p className="w-16 mt-1 myhr"></p>
        <div className="mx-8 mt-9">
          <div className="flex">
            <label className="p-2 text-white rounded-full h-max bg-mygreen lg:text-AccountIcon">
              <BiBookBookmark />
            </label>
            <span className="mt-1 ml-5 font-medium text-black lg:text-2xl sm:text-xl md:text-xl">
              Course
            </span>
            <p className="mb-4 border-b"></p>
          </div>
          <p className="mt-8 text-xl font-medium">Folders</p>
          <p className="mb-3 border-b"></p>
          <div className="flex flex-wrap col-span-12">
            {/* card */}
            <Link to="#">
              <StudentFolder />
            </Link>
          </div>
          <div className="mt-12">
            <div className="text-xl font-medium ">Files</div>
            <p className="mb-4 border-b"></p>
            <div className="flex flex-wrap">
              {/* card  */}
              <StudentFiles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
