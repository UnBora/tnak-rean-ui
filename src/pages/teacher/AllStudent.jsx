import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { removeStudent } from "../../components/swal/warning";

const AllStudent = () => {
  return (
    <div>
      <div className="flex space-x-2">
        <div className="w-8 h-8 rounded-full bg-mygreen">
          <FaUserFriends className="flex m-auto mt-2 text-white align-middle" />
        </div>
        <p className="mb-3 text-2xl font-semibold">All student</p>
      </div>

      <div class="flex ">
        <div class=" flex justify-start items-center  relative">
          <input
            class="text-sm leading-none text-left text-gray-600 px-4 py-2 w-full border rounded-full border-gray-300  outline-none my-2"
            type="text"
            placeholder="Find student"
          />
          <svg
            class="absolute right-1 z-10 cursor-pointer  p-1 h-6 w-6 rounded-full text-white"
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
      <div class="overflow-x-auto shadow-md mt-2">
        <table class="table   ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr className="hover">
              <th>1</th>
              <td>Chea Phanit</td>
              <td>chanthaamengg@gmail.com</td>
              <td>Male</td>
              <td className="text-right w-52">
                <button
                  class="btn btn-sm bg-red-500 border-none gap-2 text-xs hover:bg-red-600"
                  onClick={() => {
                    removeStudent();
                  }}
                >
                  Remove
                  <MdDelete />
                </button>
              </td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td className="text-right w-52 ">
                <button class="btn btn-sm bg-red-500 border-none gap-2 text-xs hover:bg-red-600">
                  Remove
                  <MdDelete />
                </button>
              </td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td className="text-right w-52 ">
                <button class="btn btn-sm bg-red-500 border-none gap-2 text-xs hover:bg-red-600">
                  Remove
                  <MdDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudent;
