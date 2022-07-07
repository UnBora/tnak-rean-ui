import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaUser, FaClipboardList } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchStudentRequest } from "../../service/student";
import NavbarT from "../../components/NavbarT";

export default function ManageClass() {
  const [studentRequest, setStudentRequest] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchStudentRequest(1, id).then((r) => {
      setStudentRequest(r.data);
      console.log("stu request", r.data);
    });
  }, []);

  console.log(studentRequest?.length);

  return (
    <div>
      <NavbarT />{" "}
      <div className="flex mx-100px">
        <div className="bg-white ">
          <div className="flex sm:flex-row ">
            <div className="w-72">
              <div className="flex items-center justify-start mt-10">
                <span className="text-2xl font-bold text-black">
                  PP classroom
                </span>
              </div>
              <p className="mt-2 myhr"></p>
              <nav className="mt-8 ">
                <NavLink
                  className="flex items-center p-2 my-1 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 "
                  as={Link}
                  to={{
                    pathname: `/classroom/${id}/students`,
                  }}
                >
                  <FaUserFriends className="text-lg" />
                  <span className="mx-4 text-lg font-normal">All student</span>
                  <span className="flex-grow text-right"></span>
                </NavLink>

                <NavLink
                  className="flex items-center p-2 my-1 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 "
                  as={Link}
                  to={{
                    // pathname: "/classroom/requests",
                    pathname: `/classroom/${id}/requests`,
                    state: {},
                  }}
                >
                  <FaUser />
                  <span className="mx-4 text-lg font-normal">Request</span>
                  <span className="flex-grow text-right">
                    <button
                      type="button"
                      className="w-6 h-6 text-xs text-white bg-red-500 rounded-full"
                    >
                      <span className="p-1">{studentRequest?.length}</span>
                    </button>
                  </span>
                </NavLink>
                <Link
                  className="flex items-center p-2 text-gray-800 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 "
                  as={Link}
                  to={{
                    pathname: `/classroom/${id}/classworks`,
                  }}
                >
                  <MdWork />
                  <span className="mx-4 text-lg font-normal">Classwork</span>
                  <span className="flex-grow text-right"></span>
                </Link>
                <NavLink
                  className="flex items-center p-2 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 "
                  as={Link}
                  to={{
                    pathname: `/classroom/${id}/courses`,
                  }}
                >
                  <GiBookCover />
                  <span className="mx-4 text-lg font-normal">Course</span>
                  <span className="flex-grow text-right"></span>
                </NavLink>
                <NavLink
                  className="flex items-center p-2 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 "
                  as={Link}
                  to={{
                    pathname: `/classroom/${id}/results`,
                  }}
                >
                  <FaClipboardList />
                  <span className="mx-4 text-lg font-normal">Result</span>
                  <span className="flex-grow text-right"></span>
                </NavLink>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 ml-20 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
