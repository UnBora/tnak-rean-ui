import React from "react";
import { MdOutlinePublic } from "react-icons/md";

export default function ShowResult() {
  return (
    <div>
      <div className="mx-5 my-4">
        <p className="pt-2 mt-2 text-2xl font-semibold">Result</p>
        <p className="mt-2 border-b"></p>
        <select class="select select-accent mt-3 ">
          <option disabled selected>
            Task
          </option>
          <option>Assignment1</option>
          <option>Homework4</option>
        </select>
      </div>
      <div>
        <div class="overflow-x-auto shadow-md mt-5 ml-20 ">
          <table class="table  ">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Gender</th>
                <th>Point</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr className="hover">
                <th>1</th>
                <td>Chea Phanit</td>
                <td>Male</td>
                <td>100</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr class="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Female</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
