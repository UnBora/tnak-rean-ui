import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchNotification } from "../service/notification";

export default function ProfileCard() {
  const [notification, setNotification] = useState([]);
  const users = useSelector((state) => state?.persistedReducer?.value);
  useEffect(() => {
    fetchNotification(users.id).then((r) => {
      setNotification(r.data);
      console.log("notificaiton", r);
    });
  }, []);
  return (
    <div className="z-50 w-80 card ">
      <div className="card-body">
        <p className="-mt-4 text-xl font-medium text-mygreen">Notification</p>
        <p className="myhr"></p>
        {notification?.map((index) => {
          return (
            <div>
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 hover:rounded ">
                <div className="ml-2 avatar">
                  <div className="w-10 h-10 rounded-full mask mask-squircle">
                    <img
                      src="https://api.lorem.space/image/face?hash=53273"
                      //  src={
                      //   index.sender_img !== null
                      //     ? index.sender_img
                      //     : "https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png"
                      // }
                      // alt="pf"
                      alt="profile"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-[#48ad9b]">{index.content}</span>
                  <br/>
                  <span>{index.received_date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
