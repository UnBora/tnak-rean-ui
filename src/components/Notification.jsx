import React from "react";

export default function ProfileCard() {
  return (
    <div class="card w-72 bg-smoke shadow-xl z-50">
      <div class="card-body">
        <p className="text-lg font-medium text-mygreen">Notification</p>
        <p className="myhr"></p>
       
      <div >
      <div class="avatar m-1">
        <div class="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
          <img src="https://api.lorem.space/image/face?hash=3174" />
        </div>
      </div>
      <div>
      <span className="p-1 text-sm font-semibold">Bora</span><span className="p-2 text-sm">requested to join KPS classroom</span>
      </div>
       
      </div>
      </div>
      
    </div>
  );
}
