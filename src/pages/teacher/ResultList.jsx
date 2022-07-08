import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { MdOutlinePublic } from "react-icons/md";
import NavbarT from "../../components/NavbarT";
import { posted } from "../../components/swal/Success";
import { fetchResult } from "../../service/submittedWorkService";
import { fetchAllclasswork } from "../../service/classMaterial";

const ResultList = () => {
  const [classwork, setClasswork] = useState([]);
  const [result, setResult] = useState([]);
  const [selectValue, setSelectValue] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchResult(id, 1).then((r) => {
      setResult(r.data);
      console.log("allre: ", r);
    });
    fetchAllclasswork(1, id).then((r) => {
      setClasswork(r.data);
    });
  }, [id]);
  
  console.log(classwork)

  return (
    <div className="">
      {/* <NavbarT/> */}
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full mask mask-squircle bg-mygreen">
            <BsFileEarmarkBarGraph className="flex m-auto mt-3 text-white" />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold ">Result</div>
        </div>
      </div>
      <select
        className="w-2/3 px-4 py-2 mt-5 text-lg font-medium leading-tight border rounded-md shadow-md border-mygreen focus:ring-mygreen focus:outline-none focus:bg-white focus:border-mygreen"
        onChange={(e) => {
          console.log(e.target);
          fetchResult(id, e.target.value).then((r) => {
            setResult(r.data);
          });
        }}
      >
        <option disabled selected>
          Classwork
        </option>
        {classwork?.map((dataTask) => {
          return <option value={dataTask.material_id}> {dataTask.title}</option>;
        })}

        {/* <option>Homework4</option> */}
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
            {result?.map((item) => {
              return (
                <tr className="hover">
                  <th>1</th>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.student_score}</td>
                  <td>
                    <i>{item.ui_status}</i>
                  </td>
                </tr>
              );
            })}

            {/* <!-- row 2 --> */}
            {/* <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Female</td>
              <td>90</td>
              <td>
                <i>handed in late</i>
              </td>
            </tr> */}
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
};

export default ResultList;
