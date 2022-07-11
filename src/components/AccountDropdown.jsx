import React from "react";
import { useCallback } from "react";
import { AiFillSetting } from "react-icons/ai";
import { MdFeedback } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
export default function AccountDropdown({data}) {
  let navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate],
    localStorage.removeItem("user"),
    localStorage.setItem("currentTab", "/")
  );

  return (
    <div className="z-50 card w-72">
      <div className="card-body">
        <div className="flex space-x-2">
          <div className="avatar online ">
           <div className="w-12 border-2 rounded-full border-mygreen"> 
           <img
              src={
                data.img !== null
                  ? data.img
                  : "https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png"
              }
              alt="profile"
            />
            </div>
          </div>
          <span className="mt-2 text-xl font-semibold">{data.name}</span>
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
