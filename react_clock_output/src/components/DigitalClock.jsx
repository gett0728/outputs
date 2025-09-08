import React from "react";

import useCurrentTime from "./useCurrentTime";


const DigitalClock = () => {
  const time = useCurrentTime();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  return (
    <div className="digital-clock">
      <h1>{time.toLocaleTimeString()}</h1>
      <p>{time.toLocaleDateString(undefined, options)}</p>
    </div>
  );
};

export default DigitalClock;
