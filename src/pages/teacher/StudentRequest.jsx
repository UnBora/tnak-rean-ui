import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import { FaUser } from "react-icons/fa";
import { declineStu } from "../../components/swal/Delete";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { acceptStudent, fetchStudentRequest } from "../../service/student";
import NavbarT from "../../components/NavbarT";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useMemo } from "react";
export const StudentRequest = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  // GET
  const {
    data: studentData,
    isFetched,
    isLoading,
    refetch,
  } = useQuery(["fethingStudent", id], () => fetchStudentRequest(1, id));

  // POST PUT PATCH DELETE
  const { mutateAsync } = useMutation(
    ["acceptStudentRequest"],
    (studentId) => acceptStudent(studentId),
    {
      onSuccess() {
        queryClient.invalidateQueries(["fethingStudent"]);
      },
    }
  );
  const dataList = useMemo(() => studentData?.data, [studentData?.data]);
  const [accept, setAccept] = useState("Accept");
  function onAcceptSutdent(studentId) {
    mutateAsync(studentId);
  }

  return (
    <div>
      {/* <NavbarT/> */}
      <div className="flex space-x-2">
        <div className="w-8 h-8 rounded-full bg-mygreen">
          <FaUser className="flex m-auto mt-2 text-white align-middle" />
        </div>
        <p className="mb-3 text-2xl font-semibold">Student request</p>
      </div>
      {isFetched &&
        dataList.length > 0 &&
        dataList?.map((index) => {
          return (
            <div key={index.user_id}>
              <div className="my-4 shadow-lg alert">
                <div>
                  <div className="dropdown dropdown-right dropdown-hover">
                    <label tabindex="0" className="flex m-1 space-x-4">
                      <div className="avatar ">
                        <div className="w-10 rounded-full">
                          <img
                            src={
                              index.img !== null
                                ? index.img
                                : "https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png"
                            }
                            alt="pf"
                          />
                        </div>
                      </div>
                    </label>
                    <div
                      tabindex="0"
                      className="p-1 dropdown-content mt-9 rounded-box "
                    >
                      <div className="z-50 shadow-xl card w-60 bg-smoke">
                        <div className="card-body">
                          <div className="avatar ">
                            <div className="w-16 m-auto border-2 rounded-full border-mygreen ">
                              <img
                                src={
                                  index.img !== null
                                    ? index.img
                                    : "https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png"
                                }alt="pf"
                              />
                            </div>
                          </div>
                          <div className="text-center ">
                            <p className="font-semibold">{index?.name}</p>
                            <p className="text-xs">@{index?.username}</p>
                            {/* <p className="my-2 myhr"></p> */}
                          </div>
                          <div className="text-xs">
                            <p className="font-semibold">Contact</p>
                            <p>{index?.gender}</p>
                            <p>{index?.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-medium">{index.name}</p>
                  <span>request to join</span>
                  <span>{index.class_name} classroom</span>
                </div>
                <div className="flex-none">
                  <button
                    onClick={() => {
                      onAcceptSutdent(index.user_id);
                    }}
                    className="border-none btn btn-sm bg-mygreen hover:bg-myhovergreen"
                  >
                    {accept}
                  </button>
                  <button
                    className="border-none btn btn-sm bg-myorange hover:bg-myhoverorange"
                    onClick={() => {
                      declineStu();
                    }}
                  >
                    Decline
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
