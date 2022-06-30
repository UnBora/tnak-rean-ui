import React from "react";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { MdOutlinePublic } from "react-icons/md";
import { posted } from "../../components/swal/Success";
function ResultList() {
  return (
    <div>
      <div className="flex items-center space-x-3 ">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full mask mask-squircle bg-mygreen">
            <BsFileEarmarkBarGraph className="flex m-auto mt-3 text-white" />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold ">Result</div>
        </div>
      </div>
      <select className="mt-3 select select-accent ">
        <option disabled selected>
          Task
        </option>
        <option>Assignment1</option>
        <option>Homework4</option>
      </select>
      <div className="mt-5 overflow-x-auto shadow-md ">
        <table className="table ">
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
            <tr className="hover">
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
          <button
            onClick={() => {
              posted();
            }}
            className="m-2 border-none rounded-full shadow-sm hover:bg-myhovergreen btn btn-sm bg-mygreen"
          >
            <MdOutlinePublic />
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultList;
