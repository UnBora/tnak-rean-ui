import React from "react";
import { AiFillSetting } from "react-icons/ai"; 
import { MdFeedback } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import {Link} from "react-router-dom"
import App from "../App";
export default function AccountDropdown() {
  return (
    <div className="z-50 card w-72 bg-smoke">
      <div className="card-body">
        {" "}
        <div className="m-1 space-x-2 avatar">
          <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
            <img src="https://api.lorem.space/image/face?hash=3174" />
          </div>
          <span className="mt-1 font-medium">Dayan</span>
        </div>
        <p className="myhr"></p>
        <ul className="z-auto font-medium rounded-md menu w-52">
          <li>
            <Link to="/setting/account" ><AiFillSetting/>Accound Setting</Link>
          </li>
          <li >
            <button><MdFeedback/> <a href = "mailto: abc@example.com">Give feedback</a></button>
          </li>
          <li >
            <button onClick={App}><RiLogoutBoxFill/>Logout</button>
          
          </li>
        </ul>
      </div>
    </div>
  );
}
