import React from "react";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { MdOutlinePublic } from "react-icons/md";
import { MdDelete } from "react-icons/md";
function ResultList() {
  return (
    <div>
      <div class="flex items-center space-x-3 ">
        <div class="avatar">
          <div class="mask mask-squircle w-10 h-10 bg-mygreen rounded-full">
            <BsFileEarmarkBarGraph className="flex m-auto mt-3 text-white" />
          </div>
        </div>
        <div>
          <div class="font-bold text-2xl ">Result</div>
        </div>
      </div>
      <select class="select select-accent mt-3 ">
        <option disabled selected>
          Task
        </option>
        <option>Assignment1</option>
        <option>Homework4</option>
       
      </select>
      <div class="overflow-x-auto shadow-md mt-5  ">
        <table class="table  ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Gender</th>
              <th>Point</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr className="hover">
              <th>1</th>
              <td>Chea Phanit</td>
              <td>Male</td>
              <td>100</td>
              <td>
                <i>handed in</i>
              </td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Female</td>
              <td>90</td>
              <td>
                <i>handed in late</i>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end ">
          <button className="m-2 border-none rounded-full shadow-sm hover:bg-myhovergreen btn btn-sm bg-mygreen">
            <MdOutlinePublic />
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultList;
