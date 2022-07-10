import React from "react";
import { useCallback } from "react";
import { AiFillSetting } from "react-icons/ai";
import { MdFeedback } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
export default function AccountDropdown() {
  let navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate],
    localStorage.removeItem("user"),
    localStorage.setItem("currentTab", "/")
  );

  return (
    <div className="z-50 shadow-lg card w-72 bg-smoke">
      <div className="card-body">
        <div className="m-1 space-x-2 avatar">
          <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1 ">
            <img
              src="https://api.lorem.space/image/face?hash=3174"
              alt="profile"
            />
          </div>
          <span className="mt-1 font-medium">Dayan</span>
        </div>
        <p className="myhr"></p>
        <div className="z-50 w-full font-medium rounded-md menu">
          <div className="text-lg focus:bg-mygreen">
            <Link to="/setting/account" className="flex py-2 cursor-pointer hover:bg-gray-200 hover:rounded hover:w-full">
              <AiFillSetting className="mx-4 mt-1"/>
              Accound Setting
            </Link>
          </div>
          <div className="text-lg">
            <button className="flex py-2 cursor-pointer hover:bg-gray-200 hover:rounded hover:w-full">
              <MdFeedback className="mx-4 mt-1"/> <a href="mailto: abc@example.com">Give feedback</a>
            </button>
          </div>
          <div className="text-lg">
            <button onClick={handleOnClick} className="flex py-2 cursor-pointer hover:bg-gray-200 hover:rounded hover:w-full">
              <RiLogoutBoxFill className="mx-4 mt-1" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
