import React from "react";

export default function ProfileCard() {
  return (
    <div class="card w-72 bg-smoke shadow-xl z-50">
      <div class="card-body">
        <p className="text-lg font-medium text-mygreen">Notification</p>
        <p className="myhr"></p>
       
        <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-8 h-8 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=53273" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              
            </div>
          </div><span>requested to join Phnom Penh classroom</span>
      </div>
      
    </div>
  );
}
