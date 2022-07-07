import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import { FaUser } from "react-icons/fa";
import { declineStu } from "../../components/swal/Delete";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchStudentRequest } from "../../service/student";
import NavbarT from "../../components/NavbarT";
export const StudentRequest = () => {
  const [studentRequest, setStudentRequest] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchStudentRequest(1, id).then((r) => {
      setStudentRequest(r.data);
      console.log("stu request", r);
    });
  }, []);
  console.log(id);
  const [accept, setAccept] = useState("Accept");

  function acceptClick() {
    setAccept("Accepted");
  }
  return (
    <div>
    <NavbarT/>
      <div className="flex space-x-2">
        <div className="w-8 h-8 rounded-full bg-mygreen">
          <FaUser className="flex m-auto mt-2 text-white align-middle" />
        </div>
        <p className="mb-3 text-2xl font-semibold">Student request</p>
      </div>
      {studentRequest?.map((index) => {
        return (
          <div>
            <div className="my-4 shadow-lg alert">
              <div>
                <div className="dropdown dropdown-right dropdown-hover">
                  <label tabindex="0" className="flex m-1 space-x-4">
                    <div className="avatar ">
                      <div className="w-10 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=92310" />
                      </div>
                    </div>
                  </label>
                  <div
                    tabindex="0"
                    className="p-1 dropdown-content mt-9 rounded-box "
                  >
                    <ProfileCard />
                  </div>
                </div>
                <p className="font-medium">{index.name}</p>
                <span>request to join</span> <span>Phnom Penh classroom</span>
              </div>
              <div className="flex-none">
                <button
                  className="btn btn-sm btn-ghost"
                  onClick={() => {
                    declineStu();
                  }}
                >
                  Decline
                </button>
                <button className="border-none btn btn-sm bg-mygreen hover:bg-myhovergreen">
                  {accept}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default StudentRequest;
