import React, { useState } from "react";
import { useEffect } from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { removeStudent } from "../../components/swal/Delete";
import { fetchAllstudent } from "../../service/student";

const AllStudent = () => {
  const [allStudent, setAllstudent] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchAllstudent(id).then((r) => {
      setAllstudent(r.data);
      console.log("all: ", r);
    });
  }, []);

  return (
    <div>
      {/* <NavbarT/> */}
      <div className="flex space-x-3">
        <div className="">
          <FaUserFriends className="flex w-10 h-10 p-2 text-base text-white align-middle rounded-full bg-mygreen " />
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
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="">
              <th className="text-base">Name</th>
              <th className="text-base">Email</th>
              <th className="text-base">Gender</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {allStudent?.map((item) => {
              return (
                <tr className="cursor-default hover">
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td className="text-right w-52">
                    <button
                      className="gap-2 text-xs bg-red-500 border-none btn btn-sm hover:bg-red-600"
                      onClick={() => {
                        removeStudent();
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
