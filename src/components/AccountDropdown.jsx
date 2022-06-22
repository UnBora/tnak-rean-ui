import React from "react";
import { AiFillSetting } from "react-icons/ai"; 
import { MdFeedback } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import App from "../App";
export default function AccountDropdown() {
  return (
    <div class="card w-72 bg-smoke  z-50">
      <div class="card-body">
        {" "}
        <div class="avatar m-1 space-x-2">
          <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
            <img src="https://api.lorem.space/image/face?hash=3174" />
          </div>
          <span className="mt-1 font-medium">Dayan</span>
        </div>
        <p className="myhr"></p>
        <ul class=" menu  rounded-md  w-52 font-medium z-auto ">
          <li>
            <label ><AiFillSetting/>Accound Setting</label>
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
