import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="mt-10 space-y-6 mx-100px">
        <p className="font-medium text-mygreen">WHO WE ARE</p>
        <p className="text-5xl font">Meet Our Team</p>
        <p>
          Our team members are specialists in their field with a combination of
          e-learning plateform.
        </p>
        
      </div>

     
    </div>
  );
}
