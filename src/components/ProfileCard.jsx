import React from "react";

export default function ProfileCard(data) {
  const dataPf=data;
  return (
    <div className="z-50 shadow-xl card w-60 bg-smoke">
      <div className="card-body">
        <div className="avatar ">
          <div className="w-16 m-auto border-2 rounded-full border-mygreen ">
          <img src={dataPf.img!==null?dataPf.img:"https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png"} />
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
