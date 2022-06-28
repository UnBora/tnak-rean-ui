import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import { decline } from "../../components/swal/warning";
import { FaUser } from "react-icons/fa";
export default function StudentRequest() {
  const [accept, setAccept] = useState("Accept");

  function acceptClick() {
    setAccept("Accepted");
  }
  return (
    <div>
      <div className="flex space-x-2">
        <div className="w-8 h-8 rounded-full bg-mygreen">
          <FaUser className="flex m-auto mt-2 text-white align-middle" />
        </div>
        <p className="mb-3 text-2xl font-semibold">Student request</p>
      </div>
      <div class="alert  shadow-lg my-4">
        <div>
          <div className="dropdown dropdown-right dropdown-hover">
            <label tabindex="0" className="flex m-1 space-x-4">
              <div class="avatar ">
                <div class="w-10 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" />
                </div>
              </div>
            </label>
            <div
              tabindex="0"
              className="p-1 dropdown-content mt-9 rounded-box "
            >
              <ProfileCard />
            </div>
          </div>
          <p className="font-medium">Bora</p>
          <span>request to join</span> <span>Phnom Penh classroom</span>
        </div>
        <div class="flex-none">
          <button
            class="btn btn-sm btn-ghost"
            onClick={() => {
              decline();
            }}
          >
            Decline
          </button>
          <button
            class="btn btn-sm bg-mygreen border-none hover:bg-myhovergreen"
            onClick={acceptClick}
          >
            {accept}
          </button>
        </div>
      </div>
    </div>
  );
}
