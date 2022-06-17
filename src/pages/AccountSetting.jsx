import React from "react";
import { BsPerson } from 'react-icons/bs';
import { Link, NavLink } from "react-router-dom";
export default function AccountSetting() {
  return (
    
    <div>
    {/* const style = { color : "white", fontSize: "1.5em"} */}
      <div class="ml-52 mt-14">
        <div class="font-semibold text-4xl">Account Setting</div>
        <div class="text-2xl font-light mt-5">
          Change your profile and account setting
        </div>
      </div>
      <div class="grid grid-cols-12 mx-24 gap-5 mt-20">
        
        <div class="col-start-2 col-span-3">
        <div class="flex"><img
            class="object-cover w-20 h-20 flex jsutify-left rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
          <div class="ml-5 mt-4 font-medium">
          <p class="text-2xl"> Dayan</p>
          <NavLink as={Link} to="#" class="text-blue-600 font-normal text-xl">Change Profile Photo</NavLink>
          </div>
          </div>
          <div class="mt-10 text-xl ml-3">
           <div class="flex"> 
           <NavLink class="mt-1" as={Link} to="/accountsetting"><BsPerson/></NavLink> 
           <NavLink class="ml-5 font-medium " as={Link} to="/index" >Account</NavLink>
           </div>
          
          </div>
        </div>
        
        <div class="col-span-7 bg-smoke">
          <div class=" mt-6 ml-6"> 
          <div class="text-3xl">General Info</div>
          <div class="grid grid-cols-2">
            <div class="col-span-1 bg-slate-400">hi</div>
            <div class="col-span-1 bg-slate-800">hgj </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
