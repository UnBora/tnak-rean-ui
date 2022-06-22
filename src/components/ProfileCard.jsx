import React from "react";

export default function ProfileCard() {
  return (
    <div class="card w-60 bg-smoke shadow-xl z-50">
      <div class="card-body">
        <div class="avatar ">
          <div class="w-16 rounded-full m-auto border-2 border-mygreen ">
            <img src="https://api.lorem.space/image/face?hash=92310" />
          </div>
        </div>
        <div className="text-center ">
          <p className="font-semibold" >Dayan</p>
          <p className="text-xs">@Dayan_konbarang</p>
        </div>
        <div className="text-xs">
            <p className="font-semibold">Contact</p>
            <p>Male</p>
            <p>danyan@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
