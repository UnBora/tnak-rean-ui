import React from "react";
// import moment from 'react-moment';

export default function ViewComment({ comment }) {
  console.log("comment");
  return (
    <div>
        <div className="z-50 p-3 bg-white border shadow-md border-mygray w-max card scrollbar-thumb-zinc-400 scrollbar-none ">
        {comment?.map((data) => (
          <ul className="flex mb-2">
            <li className="flex">
            <img
              className="flex object-cover rounded-full h-9 w-9 jsutify-left"
              src={
                data.img !== null
                  ? data.img
                  : "https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png"
              }
              alt="stupf"
            />

            <div className="ml-2">
              <div className="flex">
                <p className="font-medium">{data.name}</p>
                <p className="mt-1 ml-3 text-xs">{data.comment_date.toString().substring(0, 16)}</p>
              </div>
              <label className="block text-sm">{data.comment}</label>
            </div></li>
          </ul>
       
      ))}
      </div>
    </div>
  );
}
