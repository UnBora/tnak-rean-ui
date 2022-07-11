import React from "react";
export default function ProfileCard({ data }) {
  return (
    <div className="z-50 border card w-60 bg-smoke">
      <div className="card-body">
     <div className="flex m-auto"> 
     <div className=" avatar online">
           <div className="w-16 m-auto border-2 rounded-full border-mygreen"> 
           <img
              src={
                data.img !== null
                  ? data.img
                  : "https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png"
              }
              alt="profile"
            />
            </div>
          </div></div>
        <div className="text-center ">
          <p className="font-semibold">{data.name}</p>
          <p className="text-xs">@{data.username}</p>
        </div>
        <div className="text-xs">
          <p className="font-semibold">Contact</p>
          <p>{data.gender}</p>
          <p>{data.email}</p>
        </div>
      </div>
    </div>
  );
}
