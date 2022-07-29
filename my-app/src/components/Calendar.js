import React from "react";
import Calendar from 'react-calendar';
export default function MyCalendar(){
  const [date, changeDate] = React.useState(new Date());

  // prettier-ignore
  return (
    <>
      {/* <DatePicker
        autoOk
        variant="static"
        openTo="year"
        value={date}
        onChange={changeDate}
      /> */}

      <Calendar
        // autoOk
        // orientation="landscape"
        // variant="static"
        // openTo="date"
        value={date}
        onChange={changeDate}
      />
    </>
  );
};
