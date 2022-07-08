import React, { useEffect, useState } from "react";
import { fetchNotification } from "../service/notification";

export default function ProfileCard() {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    fetchNotification(1).then((r) => {
      setNotification(r.data);
      console.log("notificaiton", r);
    });
  }, []);
  return (
    <div className="z-50 shadow-xl w-80 card bg-smoke">
      <div className="card-body">
        <p className="-mt-4 text-xl font-medium text-mygreen">Notification</p>
        <p className="myhr"></p>
        {notification?.map((index) => {
        return (
          <div>
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 hover:rounded ">
            <div className="ml-2 avatar">
              <div className="w-10 h-10 rounded-full mask mask-squircle">
              <img src="https://api.lorem.space/image/face?hash=53273" alt="profile"/>
              </div>
            </div>
            <div >
              <span className="font-bold">{index.sender_name}</span>
              <span>{index.sender_name}to join Phnom Penh classroom</span>
            </div>
          </div>
          </div>
        );
      })}
        
      </div>
      
    </div>
  );
}
