import React from "react";

export default function ProfileCard() {
  return (
    <div className="z-50 shadow-xl card w-72 bg-smoke">
      <div className="card-body">
        <p className="text-lg font-medium text-mygreen">Notification</p>
        <p className="myhr"></p>
       
        <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-8 h-8 rounded-full mask mask-squircle">
              <img src="https://api.lorem.space/image/face?hash=53273" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              
            </div>
          </div><span>requested to join Phnom Penh classroom</span>
      </div>
      
    </div>
  );
}
