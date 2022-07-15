import React, { useEffect, useState } from "react";
// import { MdOutlinePublic } from "react-icons/md";
// import { useParams } from "react-router-dom";
// import { fetchAllclasswork } from "../../service/classMaterial";
import { fetchResult } from "../../service/submittedWorkService";

const ShowResult = () => {
  // const [result, setResult] = useState([]);
  // const [classwork, setClasswork] = useState([]);
  // const { id } = useParams();
  // useEffect(() => {
  //   fetchResult(id, 1).then((r) => {
  //     setResult(r.data);
  //     console.log("all: ", r);
  //   });
  //   fetchAllclasswork(1, id).then((r) => {
  //     setClasswork(r.data);
  //   });
  // }, [id]);
  
  return (
    <div>
      <div className="mx-5 my-4">
        <p className="pt-2 mt-2 text-2xl font-semibold">Result</p>
        <p className="mt-2 border-b"></p>
        <select
          className="w-1/4 px-4 py-2 mt-5 text-lg font-medium leading-tight border rounded-md shadow-md border-mygreen focus:ring-mygreen focus:outline-none focus:bg-white focus:border-mygreen"
          // onChange={(e) => {
          //   console.log(e.target);
          //   fetchResult(id, e.target.value).then((r) => {
          //     setResult(r.data);
          //   });
          // }}
        >
          <option disabled selected>
            Classwork
          </option>
          {/* {classwork?.map((dataTask) => {
            return (
              <option value={dataTask.material_id}> {dataTask.title}</option>
            );
          })} */}
        </select>
      </div>
      
      <div className="mx-4 mt-5 overflow-x-auto shadow-md">
        <table className="table w-full ">
          {/* <!-- head --> */}
          <thead>
            <tr className="">
              <th className="text-base">Name</th>
              <th className="text-base">Gender</th>
              <th className="text-base">Point</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {/* {result?.map((item) => {
              return (
                <tr className="hover">
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.student_score}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowResult;
