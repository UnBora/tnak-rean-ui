import React from "react";
import "../../App.css";
import { FiMoreVertical } from "react-icons/fi";
import { ImUsers } from "react-icons/im";
import CreateClass from "./EditClass";
import EditClass from "./EditClass";
import swal from "sweetalert";
import form from "sweetalert";
export default function ClassCard() {
  // delete class alert
  const deleteAlert = () => {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ["Cancel ", "Yes, I am sure!"],
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        swal({
          title: "Classroom was deleted successfully",

          icon: "success",
        }).then(function () {
          form.submit(); // <--- submit form programmatically
        });
      } else {
        swal("Cancelled", "Classroom is still available", "error");
      }
    });
  };
  // ==================

  return (
    <div>
      <div class="card w-48 h-32 shadow-2xl md:w-72 md:h-48 m-2  ">
        {" "}
        <div class="dropdown dropdown-right  flex  w-6 h-6 m-3   border rounded-full cursor-pointer text-myygreen z-20 absolute  ">
          <label tabindex="0" class=" cursor-pointer m-1">
            <FiMoreVertical className="text-white " />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-52 font-medium z-auto 0"
          >
            <li>
              <label for="my-modal-2">Edit</label>
            </li>
            <li className="text-red-500">
              <button onClick={() => deleteAlert()}>Delete</button>
            </li>
          </ul>
        </div>
        <img
          src="https://i.pinimg.com/564x/99/e3/e5/99e3e56b1b95911f9f9d4a8e0a469312.jpg"
          className="absolute z-0 object-cover w-full h-full"
        />
        <div className="z-20 h-16 mt-auto bg-black bg-opacity-30">
          <div class=" flex justify-between px-3 mt-5">
            <h1 className="text-lg font-semibold text-white ">PP cassroom</h1>
            <div className="flex text-white">
              <span className="pr-2">20</span>
              <ImUsers className="mt-1" />
            </div>
          </div>
        </div>
      </div>
      <EditClass />
    </div>
  );
}
