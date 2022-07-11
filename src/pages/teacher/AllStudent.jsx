import React, { useState } from "react";
import { useEffect } from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchAllstudent, remove, removeStudent } from "../../service/student";

const AllStudent = () => {
  const [allStudent, setAllstudent] = useState([]);
  const { id } = useParams();
  const [user_id, setUser_id] = useState();
  const [class_id, setClassId] = useState();
  useEffect(() => {
    fetchAllstudent(id).then((r) => {
      setAllstudent(r.data);
      console.log("all: ", r);
    });
  }, []);

  

  function onRemoveStudent(user_id,class_id) {
    removeStudent(user_id,class_id);
    alert(user_id);
    alert(id)
  }




  return (
    <div>
      {/* <NavbarT/> */}
      <div className="flex space-x-2">
        <div className="w-8 h-8 rounded-full bg-mygreen">
          <FaUserFriends className="flex m-auto mt-2 text-white align-middle" />
        </div>
        <p className="mb-3 text-2xl font-semibold">All student</p>
      </div>

      <div className="flex ">
        <div className="relative flex items-center justify-start ">
          <input
            className="w-full px-4 py-2 my-2 text-sm leading-none text-left text-gray-600 border border-gray-300 rounded-full outline-none"
            type="text"
            placeholder="Find student"
          />
          <svg
            className="absolute z-10 w-6 h-6 p-1 text-white rounded-full cursor-pointer right-1"
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
      <div className="mt-2 overflow-x-auto shadow-md">
        <table className="table ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {allStudent?.map((student) => {
              return (
                <tr className="hover">
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.gender}</td>
                  <td className="text-right w-52">
                    <button
                      className="gap-2 text-xs bg-red-500 border-none btn btn-sm hover:bg-red-600"
                      onClick={() => {
                        onRemoveStudent(student.user_id,student.class_id)
                      }}
                    >
                      Remove
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudent;
