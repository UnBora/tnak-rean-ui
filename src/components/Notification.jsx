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
    <div className="z-50 shadow-xl card w-72 bg-smoke">
      <div className="card-body">
        <p className="text-lg font-medium text-mygreen">Notification</p>
        <p className="myhr"></p>
        {notification?.map((index) => {
        return (
          <div>
            <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-8 h-8 rounded-full mask mask-squircle">
              <img src="https://api.lorem.space/image/face?hash=53273" />
              </div>
            </div>
            <div>
              <div className="font-bold">{index.sender_name}</div>
              
            </div>
          </div><span>{index.sender_name}to join Phnom Penh classroom</span>
          </div>
        );
      })}
        
      </div>
      
    </div>
  );
}
