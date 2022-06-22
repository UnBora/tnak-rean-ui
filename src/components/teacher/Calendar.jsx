import React from "react";
import "../../App.css"

import { useState } from "react";
import Calendar from "react-calendar";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div className="grid p-2 rounded-lg bg-smoke">
      <div className="mx-1 calendar-container">
        <h2 className="text-2xl font-medium text-mygreen">Calendar</h2>
        <p className="myhr"></p>
        <h2 className="pt-2 font-medium">
          {" "}
          <span></span> {date.toDateString()}
        </h2>
        <Calendar
          onChange={setDate}
          value={date}
          className="text-center text-mygreen"
        />
      </div>
    </div>
  );
};

export default Calendar;
