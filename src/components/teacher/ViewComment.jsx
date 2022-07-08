import React from "react";
// import moment from 'react-moment';

export default function ViewComment({ comment }) {
  console.log('====================================');
  console.log(comment);
  console.log('====================================');
  return (
    <div>
      {comment?.map((data) => (
        <div className="z-50 p-3 bg-white border shadow-md border-mygray w-max card">
          <div className="flex mb-2">
            <img
              className="flex object-cover rounded-full h-9 w-9 jsutify-left"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <div className="ml-2">
              <div className="flex">
                <p className="font-medium">{data.name}</p>
                <p className="mt-1 ml-3 text-xs">{data.comment_date.toString().substring(0, 16)}</p>
              </div>
              <label className="block text-sm">{data.comment}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
