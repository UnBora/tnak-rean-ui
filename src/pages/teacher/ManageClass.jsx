import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaUser, FaClipboardList } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchStudentRequest } from "../../service/student";
import NavbarT from "../../components/NavbarT";
import { fetchAllClasses } from "../../service/classesService";
import { useSelector } from "react-redux";

export default function ManageClass() {
  const [studentRequest, setStudentRequest] = useState([]);
  const { id } = useParams();
  const classes = useSelector((state) => state?.classes?.value);

  console.log("class: ", classes);
  const classFilter = classes?.filter((e) => {
    console.log(e.id);
    return e.id === id;
  });
  
  // console.log("the classname is : ", classFilter[0]?.className);

  useEffect(() => {
    fetchStudentRequest(1, id).then((r) => {
      setStudentRequest(r.data);
      console.log("stu request", r.data);
    });
  }, [id]);

  console.log(studentRequest?.length);
  const [isActive, setIsActive] = useState(1);
  return (
    <div>
      <NavbarT />
      {/* side bar */}
      <div className="flex mb-56 mx-100px">
        <div className="bg-white ">
          <div className="flex sm:flex-row ">
            <div className="w-72">
              <div className="flex items-center justify-start mt-10">
                <span className="text-2xl font-bold text-black">{classFilter[0]?.className}</span>
                <span className="ml-2 text-2xl font-bold text-black">Class</span>
              </div>
              <p className="mt-2 myhr"></p>
              <nav className="mt-8 ">
                <NavLink
                 onClick={() => {
                      setIsActive(1);
                    }}
                  as={Link}
                  to={{
                    pathname: `/classroom/${id}/students`,
                  }}
                  className={({ isActive }) =>
                      [
                        "flex items-center p-2 my-1 text-black transition-colors duration-200 rounded-lg ",
                        isActive
                          ? " text-white shadow-lg w-full bg-mygreen"
                          : null,
                      ]
                  }
                >
                  <FaUserFriends className="text-lg" />
                  <span className="mx-4 text-lg font-normal ">All student</span>
                  {/* <span className="flex-grow text-right"></span> */}
                </NavLink>
                
                <NavLink
                onClick={() => {
                      setIsActive(1);
                    }}
  
                  as={Link}
                  to={{
                    pathname: `/classroom/${id}/requests`,
                    state: {},
                  }}
                  className={({ isActive }) =>
                      [
                        "flex items-center p-2 my-1 text-black transition-colors duration-200 rounded-lg ",
                        isActive
                          ? " text-white shadow-lg w-full bg-mygreen"
                          : null,
                      ]
                  }
                >
                  <FaUser />
                  <span className="mx-4 text-lg font-normal">Request</span>
                  <span className="flex-grow text-right">
                    <button
                      type="button"
                      className="w-6 h-6 text-xs text-white bg-red-500 rounded-full"
                    >
                      <span className="p-1">{studentRequest?.total_request}</span>
                    </button>
                  </span>
                </NavLink>
                
                <NavLink
                 onClick={() => {
                      setIsActive(1);
                    }}                 
                  as={Link}
                  to={{
                    pathname: `/classroom/${id}/classworks`,
                  }}
                  className={({ isActive }) =>
                      [
                        "flex items-center p-2 my-1 text-black transition-colors duration-200 rounded-lg  ",
                        isActive
                          ? " text-white shadow-lg w-full bg-mygreen"
                          : null,
                      ]
                  }
                >
                  <MdWork />
                  <span className="mx-4 text-lg font-normal">Classwork</span>
                  <span className="flex-grow text-right"></span>
                </NavLink>
                
                <NavLink
                 onClick={() => {
                      setIsActive(1);
                    }}   
                  as={Link}
                  to={{
                    pathname: `/classroom/${id}/courses`,
                  }}
                  className={({ isActive }) =>
                      [
                        "flex items-center p-2 my-1 text-black transition-colors duration-200 rounded-lg  ",
                        isActive
                          ? " text-white shadow-lg w-full bg-mygreen"
                          : null,
                      ]
                  }
                >
                  <GiBookCover />
                  <span className="mx-4 text-lg font-normal">Course</span>
                  <span className="flex-grow text-right"></span>
                </NavLink>
                <NavLink
                onClick={() => {
                      setIsActive(1);
                    }}   
                  as={Link}
                  to={{
                    pathname: `/classroom/${id}/results`,
                  }}
                  className={({ isActive }) =>
                      [
                        "flex items-center p-2 my-1 text-black transition-colors duration-200 rounded-lg  ",
                        isActive
                          ? " text-white shadow-lg w-full bg-mygreen"
                          : null,
                      ]
                  }
                >
                  <FaClipboardList />
                  <span className="mx-4 text-lg font-normal">Result</span>
                  <span className="flex-grow text-right"></span>
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 ml-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
